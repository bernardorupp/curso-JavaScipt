const js = require('@eslint/js')

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                document: 'readonly',
                window: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'error'
        }
    }
]