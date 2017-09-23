var indexPageFactory = require('./pageFactory');

const app = getApp()

var config = {
    title: 'Index'
}

var basePage = indexPageFactory.create(config);

var indexPage = Object.assign(basePage, {
    show: function () {
        console.log('Hello World!')
    }
});

Page(indexPage);