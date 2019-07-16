module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "react-native/react-native": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser" : "babel-eslint",
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react-native/no-unused-styles": [
            "error"
        ],
        "react-native/split-platform-components": [
            "error"
        ],
        "react-native/no-raw-text": [
            "error"
        ],
        "react/jsx-uses-vars": [
            "error"
        ],
        "no-tabs": [
            "off"
        ],
        "no-use-before-define": [
            "off"
        ],
        "react/prefer-stateless-function": [
            "off"
        ],
        "react/jsx-filename-extension": [
            "off"
        ],
        "no-underscore-dangle": [
            "off"
        ]
    }
}