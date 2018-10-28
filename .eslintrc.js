module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "react-native/react-native": true
    },
    "extends": "eslint:recommended",
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
        "indent": [
            "error",
            "tab"
        ],
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
        "react-native/no-inline-styles": [
            "error"
        ],
        "react-native/no-raw-text": [
            "error"
        ],
        "react/jsx-uses-vars": [
            "error"
        ]
    }
};