// App 注册程序
interface IAppDescr {
    onLaunch?(): void;
    onShow?(): void;
    onHide?(): void;
    onError?(): void;
    [propName: string]: any;

    globalData?: any;

    getUserInfo?(obj: any): void;
    getCurrentPage?(): IPageDescr;
}
declare interface IApp {
    (obj: IAppDescr): void;

}
declare let App: IApp;
declare function getApp(): IAppDescr;

// Page 注册页面
interface IPageDescr {
    data?: Object;
    onLoad?(): void;
    onReady?(): void;
    onShow?(): void;
    onHide?(): void;
    onUnload?(): void;
    onPullDownRefresh?(): void;
    onReachBottom?(): void;
    onShareAppMessage?(): void;
    [propName: string]: any;

    setData?(obj: Object): void;
    forceUpdate?(): void;
    update?(): void;
}

declare interface IPage {
    (obj: IPageDescr): void;
}
declare let Page: IPage;


// API
interface IWxApi {

    // 网络 API
    request?(obj: any): void;
    uploadFile?(obj: any): void;
    downloadFile?(obj: any): void;
    connectSocket?(obj: any): void;
    onSocketOpen?(obj: any): void;
    onSocketError?(obj: any): void;
    sendSocketMessage?(obj: any): void;
    onSocketMessage?(obj: any): void;
    closeSocket?(obj: any): void;
    onSocketClose?(obj: any): void;


    // 媒体 API
    chooseImage?(obj: any): void;
    previewImage?(obj: any): void;
    getImageInfo?(obj: any): void;
    startRecord?(obj?: any): void;
    stopRecord?(obj?: any): void;
    playVoice?(obj?: any): void;
    pauseVoice?(obj?: any): void;
    stopVoice?(obj?: any): void;
    getBackgroundAudioPlayerState?(obj: any): void;
    playBackgroundAudio?(obj: any): void;
    pauseBackgroundAudio?(obj: any): void;
    seekBackgroundAudio?(obj: any): void;
    stopBackgroundAudio?(obj: any): void;
    onBackgroundAudioPlay?(obj: any): void;
    onBackgroundAudioPause?(obj: any): void;
    onBackgroundAudioStop?(obj: any): void;
    createAudioContext?(audioId: string): any;
    chooseVideo?(obj: any): void;
    createVideoContext?(videoId: string): any;

    // 文件 API
    saveFile?(obj: any): void;
    getSavedFileList?(obj: any): void;
    getSavedFileInfo?(obj: any): void;
    removeSavedFile?(obj: any): void;
    openDocument?(obj: any): void;


    // 数据 API
    setStorage?(obj: any): void;
    setStorageSync?(key: string, data: Object|String): void;
    getStorage?(obj: any): void;
    getStorageSync?(key: string) : any;
    getStorageInfo?(obj: any): void;
    getStorageInfoSync?(obj?: any): void;
    removeStorage?(obj: any): void;
    removeStorageSync?(key: string) : void;
    clearStorage?(obj?: any): void;
    clearStorageSync?(obj?: any): void;

    // 位置 API
    getLocation?(obj?: any): void;
    chooseLocation?(obj: any): void;
    openLocation?(obj: any): void;
    createMapContext(mapId: string): any;

    // 设备 API
    getSystemInfo?(obj?: any): void;
    getSystemInfoSync?(obj?: any): any;
    getNetworkType?(obj: any): void;    
    onAccelerometerChange?(obj: any): void;
    onCompassChange?(obj: any): void;
    makePhoneCall?(obj: any): void;
    scanCode?(obj: any): void;

    // 界面 API
    showToast?(obj: any): void;
    hideToast?(obj?: any): void;
    showModal?(obj: any): void;
    showActionSheet?(obj: any): void;
    setNavigationBarTitle?(obj: any): void;
    showNavigationBarLoading?(obj?: any): void;
    hideNavigationBarLoading?(obj?: any): void;    
    navigateTo?(obj: any): void;
    redirectTo?(obj: any): void;
    switchTab?(obj: any): void;
    navigateBack?(obj?: any): void;     
    stopPullDownRefresh?(obj?: any): void;
    hideKeyboard?(obj?: any): void;

    // 动画 API
    createAnimation?(obj?: any): void;

    // 绘图 API
    createContext?(obj?: any): any;
    createCanvasContext?(canvasId: string): any;
    drawCanvas?(obj: any): void;
    toTempFilePath?(obj: any): void;


    // 开放接口 API
    login?(obj: any): void;
    checkSession?(obj: any): void;
    getUserInfo?(obj: any): void;
    requestPayment?(obj: any): void;

}

interface CanvasContext {

}

declare let wx: IWxApi;
