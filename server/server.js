const express = require('express')
const cors = require('cors')
const app = express()

// SERVE JSON ENCODED BODIES
app.use( express.json() )

// CORS
app.use( cors({origin: true, credentials: true}) )

// ROUTES
app.use('/auth', require('./routes/auth.route'))
// PORT
const PORT = process.env.PORT || 4000

//LISTEN FOR SERVER CONNECTION
app.listen(PORT, () => console.log(`listening for request on localhost:${PORT}`))