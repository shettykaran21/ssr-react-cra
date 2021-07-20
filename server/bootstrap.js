require('ignore-styles');

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
    [
      'transform-assets',
      {
        extensions: ['css', 'svg'],
        name: 'static/media/[name].[hash:8].[ext]',
      },
    ],
  ],
});

require('./index');
