const mongoose = require('mongoose');

const url = 'mongodb+srv://karthik:Karthik%400756@cluster0.zxheq.mongodb.net/Movie_Hub';

mongoose.connect(url)
  .then(() => console.log('DB Connected!'));