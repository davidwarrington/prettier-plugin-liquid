/**
 * Taken almost verbatim from liquidjs repo and de-typescripted.
 * @see https://github.com/harttle/liquidjs/blob/master/src/template/value.ts
 */

/**
 * @param {string} str
 * @returns {string[]}
 */
const tokenize = str => {
    const tokens = []
    let i = 0
    while (i < str.length) {
        const ch = str[i]
        if (ch === '"' || ch === "'") {
            const j = i
            for (i += 2; i < str.length && str[i - 1] !== ch; ++i);
            tokens.push(str.slice(j, i))
        } else if (/\s/.test(ch)) {
            i++
         /** @note Regex adjusted to include = */
        } else if (/[|,:=]/.test(ch)) {
            tokens.push(str[i++])
        } else {
            const j = i++
            let ch
            /** @note Regex adjusted to include = */
            for (; i < str.length && !/[|,:=\s]/.test(ch = str[i]); ++i) {
                if (ch === '"' || ch === "'") {
                    for (i += 2; i < str.length && str[i - 1] !== ch; ++i);
                }
            }
            tokens.push(str.slice(j, i))
        }
    }
    return tokens
}

module.exports = tokenize;
