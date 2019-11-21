const { concat } = require('prettier').doc.builders;

const printers = {
    'liquid-ast': {
        print(path, options, print) {
            const node = path.getValue();

            if (Array.isArray(node)) {
                return concat(path.map(print));
            }

            return node.raw;
        }
    }
};

module.exports = printers;
