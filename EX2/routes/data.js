const express = require('express')
const router = express.Router()
const datas = require('../module/datas')
const email = require('email-validator')

//Geting all data



router.get('/', async (req, res) =>{
    try{
        const user = await datas.find()
        res.json(user)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

//Getting one user by id
router.get('/:id', (req, res) =>{
    
})


//create user by id
router.post('/', async (req, res) =>{
    const newdata = await datas.isEmailExist(req.body.email)
    if(!newdata) return res.json({
        message: "Email Exist"
    })
    const user = new datas({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName
    })
    try{
        const isCorrect = email.validate(req.body.email);
        if(!isCorrect) {
            return res.json({
                message: "This email is wrong formate please try again another one."
            })
        }
        else{
        const User = await user.save()
        res.status(201).json(User)}
    }catch(err){
        res.status(400).json({ message: err.message })
    }
    
})
module.exports = router