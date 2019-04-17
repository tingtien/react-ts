const mockjs = require('mockjs');
module.exports = {
    // 支持值为 Object 和 Array
    'GET /api/list': [
        {
          title: "收益率怎么来的?",
          content: "收益宝从存入当天就开始计算收益，存几天都可以随时能支取。支取的时候按照当天公"
        },
        {
          title: "收益率怎么来的?",
          content: "收益宝从存入当天就开始计算收益，存几天都可以随时能支取。支取的时候按照当天公"
        },
        {
          title: "收益率怎么来的?",
          content: "收益宝从存入当天就开始计算收益，存几天都可以随时能支取。支取的时候按照当天公"
        },
        {
          title: "收益率怎么来的?",
          content: "收益宝从存入当天就开始计算收益，存几天都可以随时能支取。支取的时候按照当天公"
        },
        {
          title: "收益率怎么来的?",
          content: "收益宝从存入当天就开始计算收益，存几天都可以随时能支取。支取的时候按照当天公"
        }
    ],

    // GET 可省略
    '/api/account': {
        "number": 5,
        "total": 9999
    },

    // mock高级用法
    'GET /api/tags': mockjs.mock({
        'list|100': [{
            name: '@city',
            'value|1-100': 50,
            'type|0-2': 1
        }],
    })
};