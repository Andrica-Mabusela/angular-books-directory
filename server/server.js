const express = require('express')
const cors = require('cors')
const app = express()
const authorizationMiddleware = require("./middleware/authorization.middleware")

// SERVE JSON ENCODED BODIES
app.use( express.json() )

// CORS
app.use( cors({origin: true, credentials: true}) )

// ROUTES

app.get('/', authorizationMiddleware.isAuthorized, (req, res) => {
    console.log('hwt')
    
    res.json(["angular", "React", "Vue"])
})

app.use('/auth', require('./routes/auth.route'))




// PORT
const PORT = process.env.PORT || 4000

//LISTEN FOR SERVER CONNECTION
app.listen(PORT, () => console.log(`listening for request on localhost:${PORT}`))

