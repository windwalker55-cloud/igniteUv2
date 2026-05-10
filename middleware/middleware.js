const pool=require('../src/config/db')
const bcrypt=require('bcryptjs')



const protectRoute= async(req, res, next)=>{
    try {  
        console.log(req.session.user)  
        if(!req.session.user) {
        return res.redirect('/login')
        } 
        next()
        } catch (error) {
            console.log(error)
            return res.redirect('/login')
        }
}  


const professor1= async(req, res, next)=>{
    try {  
        if(req.session.user) {
           return res.redirect('/homepage')
        }
            next()
        } catch (error) {
            return res.redirect('/login')
        }
}  


// user data stored from session
const userData=(req, res, next)=>{
        res.locals.user=req.session.user
        console.log(res.locals)
        next();
}

module.exports={protectRoute, professor1, userData}
