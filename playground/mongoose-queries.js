const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

var id = '5c1250636f71e21fd55f98a0';
var userID = '5c06863c486a060a9ecb1f84';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('UserID not found');
    }
    console.log(JSON.stringify(user, undefined,2));
}).catch((e) => console.log(e));