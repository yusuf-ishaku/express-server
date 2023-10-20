function getMessages(req, res){
   res.send('<ul><li>Hello Alber</li></ul>')
};

function postMessages(req, res){
        console.log("updating messages...");
};

module.exports = {
    getMessages,
    postMessages
}