import Mock from "mockjs"

//请求接口 ： http://api.zhihu.com/hot
// 返回一个包含十条数据的数组

Mock.mock("http://api.zhihu.com/hot" , "get" , {
    "data|10":[
        {
            "id|+1":1, // id自增 从1开始
            title: "@ctitle(5,10)",   //随机中文标题
            excerpt: "@paragraph(2,3)" , //随机生成简介
            url: '@url',  // 随机生成连接
            image: '@image("200x100","#","#green", "img")',
            hotIndex: "@integer(1000,5000)", //随机生成热度
        },
    ],
});

// 添加数据
Mock.mock("http://api.zhihu.com/hot","post",{
    message: "添加成功",
    data: {
        id:"@integer(11,100)",
        title: "新的标题",   
        excerpt: "新的内容" , 
        url: '@url',  // 随机生成连接
        image: 'https://static-cdn-oss.mosoteach.cn/mssvc/default-avatar@2x.png?x-oss-process=style/s300x300',
        hotIndex: "8888",
    }
});

// 更新数据
Mock.mock(/http:\/\/api.zhihu.com\/hot\/\d+/,"put",{
    message: "更新成功",

});

Mock.mock(/http:\/\/api.zhihu.com\/hot\/\d+/,"delete",{
    message: "删除成功",
});