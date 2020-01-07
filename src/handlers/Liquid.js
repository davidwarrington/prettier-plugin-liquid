const {
    concat,
    group,
    indent,
    join,
    line
} = require('prettier').doc.builders;
const tokenize = require('../util/tokenize');

class LiquidTagHandler {
    constructor(path) {
        this.path = path;
        this.node = path.getValue();
    }

    /** @returns {('output' | 'tag')} */
    get type() {
        return this.node.type;
    }

    get braces() {
        let [open, close] = this.type === 'output'
            ? ['{{', '}}']
            : ['{%', '%}'];

        if (this.node.trimLeft) {
            open = `${open}-`;
        }

        if (this.node.trimRight) {
            close = `-${close}`;
        }

        return [open, close];
    }

    get tokenGroups() {
        return tokenize(this.node.value).reduce((accumulator, string) => {
            if (string === '|') {
                accumulator.push([string]);
                return accumulator;
            }

            const lastGroup = accumulator[accumulator.length - 1];
            if ([':', ','].includes(string)) {
                const lastString = [...lastGroup].splice(-1);
                lastGroup[lastGroup.length - 1] = `${lastString}${string}`;
            } else {
                lastGroup.push(string);
            }

            return accumulator;
        }, [[]]).map(tokenGroup => join(' ', tokenGroup));
    }

    render() {
        const [openBrace, closeBrace] = this.braces;
        if (this.tokenGroups.length <= 2) {
            return join(' ', [openBrace, join(' ', this.tokenGroups), closeBrace]);
        }

        const output = group(
            concat([
                openBrace,
                indent(
                    concat([
                        line,
                        join(
                            line,
                            this.tokenGroups
                        ),
                    ])
                ),
                line,
                closeBrace
            ])
        );

        return output;
    }
}

module.exports = LiquidTagHandler;
