const app = getApp()

Page({
    data: {
        articles: [],
    },

    onLoad: function () {
        var articles = [{
            id: 1,
            tag: 'new',
            title: 'AAAAAAAAAAAAA'
        }, {
            id: 2,
            tag: 'new',
            title: 'BBBBBBBBBBBBB'
        }, {
            id: 3,
            tag: 'new',
            title: 'ccccccccccccc'
        }];

        this.setData({
            articles: articles
        });
    },

    handleTap1: function (e) {
        console.log('handleTap1');       
        console.log('target: '+ e.target.id);
        console.log('currentTarget: '+ e.currentTarget.id);
     },

     handleTap2: function (e) {
        console.log('handleTap2');
        console.log('target: '+ e.target.id);
        console.log('currentTarget: '+ e.currentTarget.id);
     },

     handleTap3: function (e) {
        console.log('handleTap3');
        console.log('target: '+ e.target.id);
        console.log('currentTarget: '+ e.currentTarget.id);
     },

     getArticle: function (e) {
        console.log('getArticle');       
        console.log('target: '+ e.target.dataset.id);
        console.log('currentTarget: '+ e.currentTarget.dataset.id);
     },
})
