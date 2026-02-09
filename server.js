const express = require('express');
const cors = require('cors'); // Aa line ઉમેરો
const app = express();

app.use(cors()); // Aa line ઉમેરો

app.get('/api', (req, res) => {
    res.send('Hi from Render!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));