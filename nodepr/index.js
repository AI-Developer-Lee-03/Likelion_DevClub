const express = require('express');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://LeeJinwoo:abcd1234@mongopr.gxxzfq4.mongodb.net/?retryWrites=true&w=majority",
 {
    // useNewUrlPaser: true,
    // useUnifiedTofology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}
).then(() => console.log('mongodb connected'))
.catch(() => console.log('Error!'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/welcome', (req, res)=>{
	res.send("Welcome to backend study Team1");
});

app.listen(PORT, ()=>{
	console.log(`Server is running on port ${PORT}`);
});