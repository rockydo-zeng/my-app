const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const GIF_FOLDER = 'C:\\Users\\rockdu\\my-app\\src\\GIF';

app.get('/api/gifs', (req, res) => {
  fs.readdir(GIF_FOLDER, (err, files) => {
    if (err) {
      return res.status(500).json({ error: '无法读取GIF文件夹' });
    }
    const gifFiles = files.filter(file => path.extname(file).toLowerCase() === '.gif');
    res.json(gifFiles);
  });
});

app.use('/gifs', express.static(GIF_FOLDER));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});