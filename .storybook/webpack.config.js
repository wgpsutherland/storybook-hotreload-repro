// module.exports = ({ config }) => {
//     config.module.rules.push({
//         test: /\.(ts|tsx)$/,
//         use: [
//             {
//                 loader: require.resolve('awesome-typescript-loader'),
//             },
//             // Optional
//             {
//                 loader: require.resolve('react-docgen-typescript-loader'),
//             },
//         ],
//     });
//     config.resolve.extensions.push('.ts', '.tsx');
//     // config.entry = config.entry.filter(singleEntry => !singleEntry.includes('/webpack-hot-middleware/'));  // hot reloading causing a hooks bug
//     return config;
// };

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]],
        },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};