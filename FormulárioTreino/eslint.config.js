const js = require('@eslint/js')

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                document: 'readonly',
                window: 'readonly',
                 localStorage: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'error'
        }
    }
]