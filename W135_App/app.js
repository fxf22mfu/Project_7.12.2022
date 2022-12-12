const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.listen(port, () => {
    console.log('My first app listening on port ' + port + '!')
});

app.get('/', (req, res) => {
    res.sendFile('index.html', (err) => {
        if (err) {
            console.log(err);
        }
    })
});



app.post('/contact', jsonParser, (req, res) => {
    const body = req.body;
    const firstname = body.firstname;
    const lastname = body.lastname;
    const email = body.email;
    const phone = body.phone;
    const message = body.message;
    
    const registered = JSON.stringify(body);
    
    
    fs.appendFile('registry.txt', registered+'\n', err => {
        if(err){
            console.err;
            return;
        }
        console.log("your details have been registered");
    })
    res.send("That's it! You're message has been sent");
    // res.send('POST by contact.js' + '\n' + register);
});
