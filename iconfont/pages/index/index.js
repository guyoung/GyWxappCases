const app = getApp()

Page({
    data: {
        banners: [],
        duration: 2000,
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
    },

    onLoad: function () {
        var banners= [{
            id: 1,
            title: "春残",
            image: "../../images/01.webp"
        },{
            id: 2,
            title: "春日野行",
            image: "../../images/02.webp"
        },{
            id: 3,
            title: "春日游曲江",
            image: "../../images/03.webp"
        },{
            id: 4,
            title: "春思",
            image: "../../images/04.webp"
        },{
            id: 5,
            title: "春夜喜雨",
            image: "../../images/05.webp"
        }];

        this.setData({
            banners: banners
        });
    }

})
