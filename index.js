const http = require("http");
const app = require('./src/app.js')
PORT = process.env.PORT || 5000  
const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`)
})
