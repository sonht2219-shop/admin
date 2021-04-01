module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_BASE_PUBLIC_PATH
        : '/',
    devServer: {
        disableHostCheck: true
    }
};
