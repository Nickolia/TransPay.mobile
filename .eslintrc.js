const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended",
        "prettier"
    ],
    "plugins": [
        "prettier",
        "react",
        "react-native",
        "jsx-a11y",
        "import",
        "jest",
        "markdown",
        "flowtype"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "serviceworker": true,
        "es6": true
    },
    "globals": {
        "UGAPP": true,
        "fetch": true,
        "__DEV__": true,
        "KeyboardEvent": true,
        "require": true
    },
    "rules": {
        "prettier/prettier": "error",
        "max-len": ["error", { "code": 100, "ignoreUrls": true }],
        "use-tabs": "off",
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "semi": ["error", "never"],
        "indent": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "arrow-parens": ["error", "as-needed"],
        "no-floating-decimal": "off",
        "no-console": "warn",
        "no-mixed-operators": "off",
        "no-plusplus": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-dynamic-require": "off",
        "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
        "react/destructuring-assignment": ["error",
            "always",
            {
                "ignoreClassFields": true
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".js"]
            }
        ],
        "object-curly-newline": "off",
        "import/prefer-default-export": "off",
        "react/default-props-match-prop-types": "off",
        'no-restricted-globals': ['error'].concat(restrictedGlobals),
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.7.0"
        }
    }
}
