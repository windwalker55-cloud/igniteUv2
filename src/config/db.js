require('dotenv').config()
const pg =require("pg")


const pool=new pg.Pool({
    connectionString:process.env.DATABASE_URL
})

// bracket before you create col in database to avoid crashing
module.exports=pool
