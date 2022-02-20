const express = require('express');
const {resolve} = require('path');
const {readFileSync} = require('fs');
const app = express();

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET');
    next();
})
app.get('/images/:filename', (req, res) => {
    console.log(`请求${req.params.filename}`);
    res.sendFile(resolve(__dirname, './images/' + req.params.filename));
})
app.get('/getDataList', (req, res) => {
    const data = readFileSync(resolve(__dirname, './data/images.json'), 'utf-8'); // 一段buffer二进制
    res.send(JSON.parse(data));
})
app.listen(3000,() => {
    console.log('监听服务器3000端口');
})
