const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // Create the app

app.use(cors()); // Allow communication from another client
app.use(bodyParser.json()) // Allow reading JSON data from requests

// Check connection
app.get('/', (req, res) => {
    res.send("Flight Monitor API is running");
});

// Gets data from the client
app.post('/api/data', (req, res) => {
    const {altitude, his, adi} = req.body;
    // Input check
    if (
        altitude < 0 || altitude > 3000 ||
        his < 0 || his > 360 || 
        adi < -100 || adi > 100
    ){
        return res.status(400).send({ message: "Invalid input values"}) 
    }
    // Print data
    console.log("Received data:", {altitude, his, adi});
    // Send comment
    res.status(200).send({message: "Data received successfully"});
});
// Starting the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
})
