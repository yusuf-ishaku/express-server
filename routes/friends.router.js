const express = require('express');
// const app = express();
const friendsController = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) =>{
    console.log(`${req.ip} is the ip address`);
    next();
});

friendsRouter.post('/', friendsController.postFriends);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;

