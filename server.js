var app = require('express')();
var fs = require('fs');
var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()});

app.post('/get-size', upload.single('file'), function (req, res, next) {
  if (req.file){
    res.send({size: req.file.size})
  }
});

app.get('/', function (req, res) {
  fs.createReadStream('index.html').pipe(res);
});

app.listen(8000);
