const express = require('express');// importing express
const cors = require("cors");// used to allow cross-origin requests
// importing mongoose to connect with MongoDB
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

const URL = 'mongodb://localhost:27017/examprep';//here we are connecting to the MongoDB database named 'examprep'
mongoose.connect(URL).then(() => {
   console.log("successfully connected");
})
   .catch((err) => {
      console.log('Error is$(err)')
   })
// importing routes
app.use('/api/examinee', require('./routes/examineeRoute'));//it will use the examineeRoute file for the '/api/examinee' endpoint

app.use('/api/admin', require('./routes/adminRoute'));
//session route
app.use('/api/session/', require('./routes/sessionRoute'))
//subject route
app.use('/api/subject', require('./routes/subjectRoute'))
//question  route
app.use('/api/question/',require('./routes/questionRoute'))
//examination route
app.use('/api/exams/',require('./routes/examinationRoute'))
app.listen(5000, () => {
   console.log("server is connected on http://localhost:5000");
})