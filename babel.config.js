module.exports = {
  plugins: ['@babel/plugin-transform-unicode-property-regex'],
  include: [/node_modules\/@project-serum/] // 指定需要转译的第三方库
};