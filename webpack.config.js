const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Или 'production'
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищает папку dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JS-файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Добавляем babel
          options: {
            presets: ['@babel/preset-env'],
            sourceType: 'module'
          },
        },
      },
      {
        test: /\.css$/, // Обработка CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Загрузка изображений
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
  devServer: {
    static: './dist',
    port: 3456,
    open: true,
    hot: true,
    liveReload: true,   // автообновление страницы браузера
    watchFiles: ['src/**/*']  // отслеживает обновление не только js но и css & sass
  },
  devtool: 'source-map', // Для отладки
};