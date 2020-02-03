module.exports = {
    port: 3000,
    domain: "http://localhost:3000",
    staticURL: "//localhost:3000",
    globalJs: {
        reactRoute: "",
        api: "http://localhost:3000"
    },
    webpackFilterDll: ["fm-mobile"], // 组件按需加载
}