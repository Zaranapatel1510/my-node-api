const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // આ React ને ડેટા લેવાની મંજૂરી આપશે
app.use(express.json()); // JSON ફોર્મેટ રીડ કરવા માટે

app.get('/api', (req, res) => {
    // response 'Hi' મોકલીએ છીએ
    res.json({ message: "Hi" });
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});