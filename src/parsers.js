const { Liquid } = require('liquidjs');

const engine = new Liquid();

const parsers = {
    'liquid-parse': {
        parse: text => engine.tokenizer.tokenize(text),
        astFormat: 'liquid-ast'
    }
}

module.exports = parsers;
