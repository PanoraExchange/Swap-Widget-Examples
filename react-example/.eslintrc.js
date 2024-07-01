module.exports = {
    "extends": ["react-app"],
    "env": {
      "node": true
    },
    "rules": {},
    "overrides": [
      {
        "files": ["**/*.js", "**/*.ts", "**/*.tsx"],
        "rules": {
          // Set all rules to "off" using wildcard
          "*": "off",
          "react-hooks/rules-of-hooks": "off",
          "react/no-unescaped-entities": "off",
          "react/display-name": "off",
          "react/prop-types": "off",
        }
      }
    ]
  }
  