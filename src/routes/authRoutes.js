const router=require("express").Router()
const{ getLogin, postLogin, logout, getSignup, updateUsername, postSignup } =require('../controllers/controller')
const{ protectRoute, userData, professor1 }=require('../../middleware/middleware')







router.get('/login',professor1, getLogin)

router.post('/login', postLogin,)
router.post('/signup', postSignup)

router.get('/logout', logout)

router.get('/signup', professor1, getSignup)


router.use(userData)

module.exports=router