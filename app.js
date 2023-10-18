// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//app.use(express.json());
app.use(express.static('public'));

/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });*/
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
