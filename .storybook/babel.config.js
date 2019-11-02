module.exports = function() {
  let presets = ["@babel/preset-env"]

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ]

  return {
    presets,
    plugins,
  }
}