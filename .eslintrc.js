module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    "no-unused-vars": 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "state", // for vuex state
          "item",
        ]
      }
    ],
    'max-len': ["error", {
      code: 300
    }],
    "import/no-unresolved": "off", // 确保导入指向一个可以解析的文件/模块
    "import/extensions": "off", // 确保在导入路径中统一使用文件扩展名
    "vue/multi-word-component-names": "off",
    'node/no-extraneous-import': "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "vue/no-multiple-template-root": "off"
  }
};