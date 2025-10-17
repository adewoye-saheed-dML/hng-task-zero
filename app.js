require('dotenv').config();
const { EMAIL, NAME } = process.env;
const express = require('express');
const axios = require('axios');
const app = express();


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/me',async(req, res)=>{
  try {
    const response = await axios.get('https://catfact.ninja/fact', {timeout:5000});
    var fact = response.data.fact;

    res.setHeader('Content-Type', 'application/json');
  
    res.json({
        "status": "success",
        "user": {
          "email": EMAIL,
          "name": NAME,
          "stack": "Nodejs/Express"
        },
        "timestamp": new Date().toISOString(),
        "fact":  fact
      });
  } 
  catch (error) {
    console.error('error fetching cat fact:', error.message);
    res.status(500).json({ status: "error", message: "Failed to fetch cat fact" });
  }
});


 