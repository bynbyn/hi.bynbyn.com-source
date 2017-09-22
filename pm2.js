const spawn = require('child_process').spawn;

const server = spawn('hexo', ['server']);
//其实就是等于执行hexo server

server.stdout.on('data', function (data)
{

    console.log('standard output:\n' + data);

});

server.stderr.on('data', function (data)
{

    console.log('standard error output:\n' + data);

});

server.on('exit', function (code, signal)
{

    console.log('child process eixt ,exit:' + code);
    process.exit(-1);

});

process.on('exit', function()
{
    server.exit();
});