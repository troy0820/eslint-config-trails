module.exports = {
  rules: {
    // enforce one true brace style
    'brace-style': [2, 'stroustrup', {'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, {'properties': 'never'}],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // require a capital letter for constructors
    'new-cap': [2, {'newIsCap': true}],
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [2, { 'allowAfterThis': true, 'allow': [ '__' ] }],
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, {'vars': 'local', 'args': 'none'}],
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],
    // require spaces around operators
    'space-infix-ops': 2,
    // require spaces following keywords
    'space-after-keywords': 2,
    // warn when line length is greater than 80 characters
    'max-len': [1, 80, 2, { 'ignoreComments': true, 'ignoreUrls': true }]
  }
}
