const user = require('../models/users')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    let email = req.body?.email;
    let password = req.body?.password;
    if(! email || !password ){
        return res.send({
            message: 'Please provide email/ passwred'
        })
    }
    let userData = await user.findOne({
        email: req.body.email
    })
    if(userData === null){
        return res.send({
            message: 'Email is not exist'
        })
    }
    const match = await bcrypt.compare(password, userData.password );
    if(match){
        var token = jwt.sign({
            id: userData._id,
            username: userData.username,
            email: userData.email
        }, process.env.TOKEN_KEY)

        res.json({
            token: token,
            user: {
                id: userData._id,
                username: userData.username,
                email: userData.email
            },
            status: true
        })  
    } else {
        res.send({
            message: 'Incorrect Password'
        })
    }
}

exports.signUp = async (req, res) => {
    try {
        let findUser = await user.find({
            email: req.body.email
        })
        if(findUser.length){
            return res.send({Message: "User already exist"})
        }
        let body = req.body;
        const pass = await hashPassword(req.body.password);
        let insertObj = {
            username: req.body.username,
            email: req.body.email,
            password: pass,
        }
        
        var userDetails = new user(insertObj)
        let userData  = await userDetails.save()//user.insertMany([insertObj]);
        
        if(userData){
            var token = jwt.sign({
                id: userData._id,
                name: userData.username,
                email: userData.email
            }, process.env.TOKEN_KEY)
    
            res.json({
                token: token,
                status: true
            })
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function hashPassword(myPlaintextPassword) {
    const saltRounds = 10;
    const someOtherPlaintextPassword = 'not_bacon';
    // const salt = bcrypt.genSaltSync(saltRounds);
    // console.log('salt =>', salt)
    return new Promise((resolve, rej) => {
        bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log('Salt: ', salt)
    return bcrypt.hash(myPlaintextPassword, salt)
  })
  .then(hash => {
    console.log('Hash: ', hash)
    resolve( hash)
  })
  .catch(err => console.error(err.message))
        // bcrypt.hash(myPlaintextPassword, saltRounds).then((res) => resolve( res))
    })
    // const hash = await 
    // return hash
}