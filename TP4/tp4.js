var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer((req,res) =>{
    var myObj= url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'text/html'});

    var subpath = myObj.pathname.split("/");
    if(subpath.includes("arqelem")){  
        
        fs.readFile("website/html/"+subpath[2]+".html", (erro, dados)=>{
        if(!erro){
            res.write(dados);
        }else{
            res.write("<p>Not working asdasd</p>"+subpath[2])
        }
        res.end();
    })
    }else{ 
        fs.readFile('website/index.html', (erro, dados)=>{
        if(!erro){
            res.write(dados);
        }else{
            res.write("<p>Not working</p>")
        }
        res.end();
    })
    }
}).listen(4004, () =>{
    console.log("Servidor a escuta na porta 4004")
})
