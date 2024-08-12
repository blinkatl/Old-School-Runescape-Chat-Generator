const getchatHead = (req, res) => {
    const { chatHeadName } = req.params;
    res.json(chatHeadName);
};

module.exports = {
    getchatHead
}

//Arvel