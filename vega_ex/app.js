var http = require('http'); 
var fs = require('fs');

function send404Message(response){ 
    response.writeHead(404,{"Content-Type":"text/plain"}); // 단순한 글자 출력 
    response.write("404 ERROR... "); 
    response.end(); 
}

function onRequest(request, response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else { // file이 존재 하지않을때, 
        send404Message(response); 
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server Created...");