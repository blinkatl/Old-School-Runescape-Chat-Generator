const getchatHead = (req, res) => {
    const { chatHeadName } = req.params;
    console.log(req.params);
    res.json(chatHeadName);
};

module.exports = {
    getchatHead
}

//Arvel