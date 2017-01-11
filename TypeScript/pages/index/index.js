Page({
    data: {
        menuList: [{
                name: 'TypeScript基础',
                List: [{
                        zhName: '数据类型',
                        enName: 'Type',
                        url: '../syntax/type/index'
                    }, {
                        zhName: '变量',
                        enName: 'Variable',
                        url: '../syntax/variable/index'
                    }, {
                        zhName: '函数',
                        enName: 'Function',
                        url: '../syntax/function/index'
                    }, {
                        zhName: '类',
                        enName: 'Class',
                        url: '../syntax/class/index'
                    }, {
                        zhName: '接口',
                        enName: 'Interface',
                        url: '../syntax/interface/index'
                    }, {
                        zhName: '泛型',
                        enName: 'Generic',
                        url: '../syntax/generic/index'
                    }, {
                        zhName: '迭代器',
                        enName: 'Iterator',
                        url: '../syntax/iterator/index'
                    }, {
                        zhName: '模块',
                        enName: 'Module',
                        url: '../syntax/module/index'
                    }, {
                        zhName: '命名空间',
                        enName: 'Namespace',
                        url: '../syntax/namespace/index'
                    }, {
                        zhName: '装饰器',
                        enName: 'Decorator',
                        url: '../syntax/decorator/index'
                    }],
                opened: false
            }, {
                name: 'TypeScript进阶',
                List: [],
                opened: false
            }, {
                name: '开放接口',
                List: [{
                        zhName: '微信登录',
                        enName: 'login',
                        url: '../practice/login/login'
                    }, {
                        zhName: '获取用户信息',
                        enName: 'getUserInfo',
                        url: '../practice/get-user-info/get-user-info'
                    }, {
                        zhName: '发起支付',
                        enName: 'requestPayment',
                        url: '../practice/request-payment/request-payment'
                    }],
                opened: false
            }, {
                name: '界面',
                opened: false,
                List: [{
                        zhName: '设置界面标题',
                        enName: 'setNavigationBarTitle',
                        url: '../practice/set-navigation-bar-title/set-navigation-bar-title'
                    }, {
                        zhName: '标题栏加载动画',
                        enName: 'navigationBarLoading',
                        url: '../practice/navigation-bar-loading/navigation-bar-loading'
                    }, {
                        zhName: '页面跳转',
                        enName: 'navigateTo, navigateBack, redirectTo',
                        url: '../practice/navigator/navigator'
                    }, {
                        zhName: '下拉刷新',
                        enName: 'pullDownRefresh',
                        url: '../practice/pull-down-refresh/pull-down-refresh'
                    }, {
                        zhName: '创建动画',
                        enName: 'createAnimation',
                        url: '../practice/animation/animation'
                    }, {
                        zhName: '创建绘画',
                        enName: 'createContext',
                        url: '../practice/canvas/canvas'
                    }]
            }, {
                name: '设备',
                opened: false,
                List: [{
                        zhName: '获取手机网络状态',
                        enName: 'getNetworkType',
                        url: '../practice/get-network-type/get-network-type'
                    }, {
                        zhName: '获取手机系统信息',
                        enName: 'getSystemInfo',
                        url: '../practice/get-system-info/get-system-info'
                    }, {
                        zhName: '监听重力感应数据',
                        enName: 'onAccelerometerChange',
                        url: '../practice/on-accelerometer-change/on-accelerometer-change'
                    }, {
                        zhName: '监听罗盘数据',
                        enName: 'onCompassChange',
                        url: '../practice/on-compass-change/on-compass-change'
                    }]
            }, {
                name: '网络',
                opened: false,
                List: [{
                        zhName: '发起一个请求',
                        enName: 'request',
                        url: '../practice/request/request'
                    }, {
                        zhName: 'WebSocket',
                        enName: 'WebSocket',
                        url: '../practice/web-socket/web-socket'
                    }, {
                        zhName: '上传文件',
                        enName: 'Upload File',
                        url: '../practice/upload-file/upload-file'
                    }, {
                        zhName: '下载文件',
                        enName: 'Download File',
                        url: '../practice/download-file/download-file'
                    }]
            }, {
                name: '媒体',
                opened: false,
                List: [{
                        zhName: '图片',
                        enName: 'chooseImage/previewImage',
                        url: '../practice/image/image'
                    }, {
                        zhName: '录音',
                        enName: 'start/stopRecord, play/pause/stopVoice',
                        url: '../practice/voice/voice'
                    }, {
                        zhName: '背景音频',
                        enName: 'play/pause/stopAudio',
                        url: '../practice/background-audio/background-audio'
                    }, {
                        zhName: '文件',
                        enName: 'saveFile',
                        url: '../practice/file/file'
                    }, {
                        zhName: '视频',
                        enName: 'video',
                        url: '../practice/video/video'
                    }]
            }, {
                name: '位置',
                opened: false,
                List: [{
                        zhName: '获取当前位置',
                        enName: 'getLocation',
                        url: '../practice/get-location/get-location'
                    }, {
                        zhName: '使用原生地图查看位置',
                        enName: 'openLocation',
                        url: '../practice/open-location/open-location'
                    }]
            }, {
                name: '数据',
                opened: false,
                url: '../practice/storage/storage'
            }]
    },
    tapMenuItem: function (e) {
        var menuItem = this.data.menuList[parseInt(e.currentTarget.id)];
        if (menuItem.url) {
            wx.navigateTo({ url: menuItem.url });
        }
        else {
            var changeData = {};
            var opened = menuItem.opened;
            var index = parseInt(e.currentTarget.id);
            if (opened === false) {
                var openedIndex = -1;
                this.data.menuList.forEach(function (menu, i) {
                    if (menu.opened === true) {
                        openedIndex = i;
                    }
                });
                if (openedIndex > -1) {
                    changeData['menuList[' + openedIndex + '].opened'] = false;
                }
            }
            changeData['menuList[' + index + '].opened'] = !opened;
            this.setData(changeData);
        }
    }
});
