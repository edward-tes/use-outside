const presets = [ '@babel/preset-typescript', "@babel/preset-react" ];

// presets.push([
//     '@babel/preset-env',
//     {
//       modules: false,
//       loose: true,
//       useBuiltIns: 'usage',
//       exclude: ['transform-regenerator', 'transform-async-to-generator'],
//     },
// ])
module.exports = { presets };