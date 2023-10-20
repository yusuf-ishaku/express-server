const friendModel = require("../models/friends.model").friends;


function postFriends(req, res){
        if(!req.body.name){
            return res.status(400).json({error: "Issue: missing friend name "});
        }
        const newFriend = {
            ...req.body, 
            id: friendModel.length
        };
        friendModel.push(newFriend);
        res.json(newFriend);
}

function getFriends(req, res){
    res.status(200).json(friendModel);
}

function getFriend(req, res){
    const friendId = req.params.friendId;
    console.log(friendId)
    const friend = friendModel[friendId];

    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({error: "Friend not found"})
    }
};


module.exports = {
    getFriend,
    getFriends,
    postFriends
}