module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "valid-typeof": 2,//强制 typeof 表达式与有效的字符串进行比较
    "no-empty": 2,// 禁止空语句块
    "no-duplicate-case": 2,// 禁止重复的 case 标签
    "no-debugger": 2,// 禁用 debugger
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-extra-semi': 2, //禁止多余的冒号
    'no-func-assign': 2, //禁止重复的函数声明
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'no-multi-spaces': 1, //不能用多余的空格
    'no-param-reassign': 2, //禁止给参数重新赋值
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 1, //一行结束后面不要有空格
    'no-undef': 1, //不能有未定义的变量
    'no-var': 0, //禁用var，用let和const代替
    'no-extra-parens': 0,// 禁止不必要的括号 //(a * b) + c;//报错
    'array-bracket-spacing': [
      2,
      'never'
    ], //是否允许非空数组里面有多余的空格
    'camelcase': 0, //强制驼峰法命名
    'comma-dangle': [
      2,
      'never'
    ], //对象字面量项尾不能有逗号
    'quotes': [
      1,
      'single'
    ], //引号类型 `` "" ''
    'semi': [
      2,
      'never'
    ], //语句分号结尾
    'semi-spacing': [
      0,
      {
        'before': false,
        'after': true
      }
    ], //分号前后空格
    'space-after-keywords': [
      0,
      'always'
    ], //关键字后面是否要空一格
    'space-before-blocks': [
      0,
      'always'
    ], //不以新行开始的块{前面要不要有空格
    'space-before-function-paren': [
      0,
      'always'
    ], //函数定义时括号前面要不要有空格
    'space-in-parens': [
      0,
      'never'
    ], //小括号里面要不要有空格
    'arrow-spacing': 0, //=>的前/后括号
    'linebreak-style': 0,
    'allowForLoopAfterthoughts': 0,
    'key-spacing': 0,
    //代码风格
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'operator-linebreak': 'off', //强制操作符使用一致的换行符
    'import/order': 'off',
    'linebreak-style': 'off', //强制使用一致的换行风格
    'no-console': 'off', // 禁用 console
    'class-methods-use-this': 'off', //强制类方法使用 this
    'max-classes-per-file': 'off', // 强制每个文件中包含的的类的最大数量
    'consistent-return': 'off', // 要求 return 语句要么总是指定返回的值，要么不指定
    'default-case': 'off', // 要求 switch 语句中有 default 分支
    'global-require': 'off', // 要求 require() 出现在顶层模块作用域中
    'import/no-dynamic-require': 'off',
    'generator-star-spacing': 'off', // 强制 generator 函数中 * 号周围使用一致的空格
    'max-len': ['error', { 'code': 130 }], //强制一行的最大长度
    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    // typescript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    //react
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'arrow-parens': 'off', // 要求箭头函数的参数使用圆括号
    'react/sort-comp': 'off',
    'react/no-deprecated': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off', //要求箭头函数体使用大括号
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react/static-property-placement': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
    'no-nested-ternary': 'off', // 禁用嵌套的三元表达式
    'react/no-danger': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    JSX: true
  }
}