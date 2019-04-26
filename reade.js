//路由
// app.METHOD(PATH, HANDLER)
// app是一个实例express。
// METHOD是一个HTTP请求方法，小写。
// PATH 是服务器上的路径。
// HANDLER 是路由匹配时执行的功能。
//
// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }


// Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径，获得当前文件所在目录的完整目录名
// 相反  ./ 会返回你执行 node 命令的路径，例如你的工作路径。
// 有一个特殊情况是在 require() 中使用 ./ 时，这时的路径就会是含有 require() 的脚本文件的相对路径

// __filename变量获取当前模块文件的带有完整绝对路径的文件名



