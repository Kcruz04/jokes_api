const express = require("express")

const cors = require("cors")

require("dotenv").config()

const app = express()

const port = 8000


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

require("./configs/mongoose.config")

const Routes = require("./routes/jokes.routes")
Routes(app);


//option 2
// require("./routes/jokes.routes")(app)

app.listen(port, () => console.log(`This is the jokes api on port: ${port}`))