const pool=require('../config/db')
const bcrypt=require("bcryptjs")





const postLogin=async (req, res)=>{
        try {
            const{ userid, email, username, password}=req.body       
            const emailAndPasswordExist= await pool.query(`
                SELECT userid, email, username, password FROM users
                WHERE email=$1
                `,[email])
               if(emailAndPasswordExist.rows.length===0)
               {

                // saving error message
                req.session.errorlogin='Email not found. Please register '
                return res.redirect('/login')
               }
                const user=emailAndPasswordExist.rows[0] 
                const comparing= await bcrypt.compare(password, user.password)
                if (comparing){

                    req.session.user={
                        userid:user.userid,
                        email:user.email,
                        username:user.username
                    }
                    console.log(req.session.user)
                    //  message
                    req.session.success="login success"
                    res.redirect("/homepage")




                }else{

                    // saving error message
                req.session.password='Incorrect password'
                return res.redirect('login')
                }

        } catch (error) {
            console.log(error.message)

            // saving error message
            req.session.saver="saver error"
        }
}

const getLogin=(req, res)=>{
    const error=req.session.errorlogin
    const success=req.session.success
    const password=req.session.password
    const saver=req.session.saver
    
    req.session.errorlogin= null
    req.session.success= null
    req.session.password= null
    req.session.saver= null

    res.render('pages/auth/login', {layout:'layouts/authlayout', error, success, password, saver})
}

const postSignup= async(req, res)=>{
        // console.log(req.body)
    try {
        const{email, username,password}=req.body
            const emailExist= await pool.query(`
                SELECT email FROM users
                WHERE email=$1
                `,[email])
                
                let exists=false
                for(const user of emailExist.rows){
                    if(user.email===email){
                        exists=true
                        break
                    }

                }
                if(exists){
                     console.log(exists, "inside if block")
                    req.session.error='email found please login'
                     return res.redirect("/signup")      
                }else{
                     // hash password
                const salt = await bcrypt.genSalt(10);
                const hashpassword= await bcrypt.hash(password, salt);

                const dbqurey= await pool.query(`
                    INSERT INTO users(email, username,password)
                    VALUES($1, $2, $3 )
                    RETURNING *
                    `,[email, username,hashpassword])
                    res.redirect("/homepage")


                }
                      
        
    } catch (error) {
        console.log(error)
       res.redirect('/login')
        
    }
}

const logout=(req, res)=>{
    req.session.destroy()
    res.redirect('/login')
    console.log("logged out successfully")
}

const getSignup=(req, res)=>{
      const error=req.session.error
        console.log(error, "page")
        req.session.error=null


    res.render('pages/auth/signup',{layout:'layouts/authlayout', error})
}


const updateUsername= async(req, res)=>{
    try {

        const {username}=req.body
        const userid=req.session.user.userid
        console.log(username, userid)

        
        await pool.query(`
            UPDATE users
            SET username=$1
            WHERE userid=$2
            `,[username, userid])
            req.session.user.username=username
            res.redirect('/homepage')
        
    } catch (error) {
        console.log(error.message)
        
    }
}

const deleteUser= async(req, res)=>{
    try {
         const deleteEmail=req.session.user.email
        console.log(deleteEmail)
        await pool.query(`
            DELETE FROM users
            WHERE email=$1
            `,[deleteEmail])
            req.session.destroy(); // automaticallly log you out
            res.redirect('login') // redirect to homepage
        
    } catch (error) {
        console.log(error.message)
    }
}


const getIndex= (req, res)=>{
    res.render('layouts/firstlayout', {layout:'layouts/firstlayout'})
}

const getCbt=(req, res)=>{
    res.render('layouts/cbtlayout', {layout:"layouts/cbtlayout"})
}
module.exports={getSignup, getLogin, logout, postLogin, postSignup, updateUsername, getCbt, getIndex, deleteUser}