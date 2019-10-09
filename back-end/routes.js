const express = require('express');
const uuid = require('uuid/v4');

const toyRouter = express.Router();

//Object of objects
function favoriteToy() {
    
}

// const favoriteToy1 = {
//     _id: uuid(),
//     name: 'toy 1',
//     favoriteToy: 'ball',
// }

// const favoriteToy2 = {
//     _id: uuid(),
//     name: 'toy 2',
//     favoriteToy: 'busy-bee',
// }

// const favoriteToy3 = {
//     _id: uuid(),
//     name: 'toy 3',
//     favoriteToy: 'bone',
// }

// let toys = [
//     favoriteToy3,
//     favoriteToy1,
//     favoriteToy2,
// ]

//Routes
// toyRouter.get('./toys', (req,res) => {
//     const toys =  
// });


toyRouter.post('.toys', (req,res) => {
    const newToy = { _id: uuid(), name: req.body.name, toy: req.body.toy};
    toys.push(newToy);
    res.send(newToy);
});

// toyRouter.delete();


module.exports = toyRouter;