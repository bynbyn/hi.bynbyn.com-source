const spawn = require('child_process').spawn;

const server = spawn('hexo', ['server']);
//其实就是等于执行hexo server

server.stdout.on('data', function (data)
{

    console.log(data.toString());

});

server.stderr.on('data', function (data)
{

    console.error(data.toString());

});

server.on('exit', function (code, signal)
{

    console.log('child process eixt ,exit:' + code);

});

process.on('exit', function()
{
});