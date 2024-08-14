const fs = require('fs');
const path = require('path');
const imageDirectory = path.join(__dirname, '../chatheads');

const getChathead = (req, res) => {
    const { chatheadName } = req.params;
    console.log(req.params);
    res.json(chatheadName);
};

const search = (req,res) => {
    const searchTerm = (req.query.q || '').toLowerCase();
    const results = [];

    const files = fs.readdirSync(imageDirectory);
    for (let i = 0; i < files.length; i++) {
    const file = files[i];
        if (file.toLowerCase().includes(searchTerm)) {
            results.push({
                name: file,
                path: `/chatheads/${file}`,
            });
            if (results.length >= 10) break; // This stops the loop when 10 results are found
        }
    }


    res.json(results);
};

module.exports = {
    getChathead,
    search
}