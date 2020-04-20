module.exports = {
    port: 3000,
    URL: "http://localhost:3000",
    config: {
        staticURL: "//localhost:3000",
        reactRoute: "",
        api: "http://localhost:3000"
    },
    webpackFilterDll: ["@fm/mobile"], // 组件按需加载
}