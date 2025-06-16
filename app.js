const express = require('express');
const app = express();
const homeRouter = require('./Routes/HomeRoute');
const contactUsRouter = require('./Routes/contactUsRoute');


app.use(express.urlencoded());
app.use(homeRouter);
app.use('/contactUs', contactUsRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});