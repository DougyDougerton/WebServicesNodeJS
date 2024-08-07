const express = require('express');

const app = express();
const PORT = 3000;

//Middleware
app.use((req, res,next)=>{
    req.timestamp = new Date();
    next();
});



//Router controller
app.get('/', (req, res) =>{

    const time = req.timestamp;
    res.send(`The current time is: ${time}`);

});

app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);
});