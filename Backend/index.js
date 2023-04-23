const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors')
const app = express();
app.use(cors());
app.get('/api/download-pdf', (req, res) => {
  const filePath = path.join(__dirname, 'resume.pdf');
  const stat = fs.statSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
  res.setHeader('Content-Length', stat.size);
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
