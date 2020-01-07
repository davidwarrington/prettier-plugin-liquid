const { concat } = require('prettier').doc.builders;
const LiquidTagHandler = require('./handlers/Liquid');

const printers = {
    'liquid-ast': {
        print(path, options, print) {
            const node = path.getValue();

            if (Array.isArray(node)) {
                return concat(path.map(print));
            }

            if (node.type === 'html') {
                return node.raw;
            }

            return new LiquidTagHandler(path).render();
        }
    }
};

module.exports = printers;
