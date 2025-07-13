const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const port = 4000;

app.get('/',  (req, res) => {
    res.json({msg: 'hello, I am changed something'})
})

app.listen(port, () => console.log(`server is running on port 4000`))