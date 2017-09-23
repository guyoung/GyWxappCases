module.exports = {

    create(config) {

        var page = {
            data: {

            },

            onReady: function () {
                console.log('onReady');

                wx.setNavigationBarTitle({
                    title: config.title
                })
            },

            onLoad: function (options) {
                console.log('onLoad');
            }
        }

        return page;
    }
}