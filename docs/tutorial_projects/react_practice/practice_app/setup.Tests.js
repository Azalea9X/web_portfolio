"jest": {
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setupTests.js"
  ]
}