//require('./db/mongoose')
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const sessions = require('express-session');
// const {user} = require('./db/models')
// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken")

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
     });
}

app.use(sessions({
    secret:' SECRETKEY',
    resave:false,
    saveUninitialized:false,
  }))


app.listen(PORT, function(){
    console.log('Server is runing on PORT:', PORT);
});

// app.get('/', function(req,res) {
//    res.status(200).send('Hello World');
// });


// // AUTHENTICATION
// app.post('/api/user/create', async (req,res) => {
//       try {
//          await bcrypt.hash(req.body.password, 10, async (err, hash) => {
//             let newUser = new user({
//                username: req.body.username,
//                email: req.body.email,
//                password:hash
//            });
//             const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY || "Secret");
//             newUser.tokens = newUser.tokens.concat({token});
//             await newUser.save()
//             const ID = newUser._id
//             res.status(200).send({token, ID});      
//          })
//       } catch(err) {
//          console.log(err.message)
//          res.status(404).send(err.message);
//       }
//    })

// app.post('/api/user/login', async (req,res) => {
//    const username = req.body.username;
//    const password = req.body.password;

//    try {
//       const User = await user.findOne({username});
//       if (!User){
//          return res.status(404).send({'error':'User is not found'})
//       }
//       const isMatch = await bcrypt.compare(password, User.password);
//       // passords dont match up
//       if(!isMatch){
//          return res.status(400).send({'error':'Password is invaid'})
//       }
//       const token =  jwt.sign({ userId: User._id }, process.env.SECRET_KEY || "Secret");
//       User.tokens = User.tokens.concat({token})
//       await User.save()
//       const ID = User._id
//       return res.status(200).send({token,ID});

//    } catch(e) {
//       res.status(500).send()
//    }
// });

// app.post('/logout', async (req, res) => {
//     try {
//           req.user.tokens = [];
//           await req.user.save()
//           res.status(200).send("Logged Out");
//     } catch (e) {
//           console.log(e.message)
//           console.log("Error while logging out")
//           res.status(500).send("Error while logging out")
//     }
//  });

