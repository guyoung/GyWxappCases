var indexPageFactory = require('./pageFactory');

const app = getApp()

var config = {
    title: 'Index'
}

var indexPage = indexPageFactory.create(config);

Page(indexPage);