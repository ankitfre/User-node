const UserModel = require('../models/User')
var {validate} = require('./../middlewares/validation/CheckValidationError')

const index = (req,res) => {
    UserModel.find(async(err,users) => {
        if(err) throw err
        else{
            res.render("user/list",{users:users})
        }
    });
}

const create = (req,res,next) => {
    let errors = validate(req,res,next)
    if (errors && errors.length > 0) {
        res.render('user/create',{errors});
    }
    else{
        let body = {
            ...req.body
        }
        UserModel.create(body, async(err,user) => {
            if(err) throw err
            else {
                res.redirect('/')
                // res.render('user/notfound',{message:"user created success"})
            }
        })
    }
}

const edit = (req,res) => {
    UserModel.findById(req.params.id,async(err,user) => {
        if(err) throw err
        if(user){
            res.render('user/update',{user})
        }
        else{
            res.render("user/notfound",{message:"user not found"})
        }
    })
}

const update = (req,res,next) => {
    UserModel.findById(req.params.id,async(err,user) => {
        if(err) throw err
        let errors = validate(req,res,next)
        if (errors && errors.length > 0) {
            res.render(`user/update`,{errors,user});
        }
        else{
            if(user){    
                user.username = req.body.username
                user.email = req.body.email
                user.phone = req.body.phone
                user.city = req.body.city
                await user.save()
                res.redirect('/')
            }
            else{
                res.render("user/notfound",{message:"user not found"})
            }
        }
    })
}

module.exports = {
    index,
    create,
    edit,
    update
}