import {example} from "./example";

Page({
    onLoad: function () {
        this.context = wx.createContext()

        var methods = Object.keys(example.prototype)

        this.setData({
            methods: methods
        })

        var that = this
        methods.forEach(function (method) {
            that[method] = function () {                
                var _prototype = example.prototype as { [key:string]: any; }                
                _prototype[method](that.context)
                var actions = that.context.getActions()

                wx.drawCanvas({
                    canvasId: 'canvas',
                    actions: actions
                })
            }
        })
    },
    toTempFilePath: function () {
        wx.toTempFilePath({
            canvasId: 'canvas',
            success: function (res: any) {
                console.log(res)
            },
            fail: function (res: any) {
                console.log(res)
            }
        })
    }
})
