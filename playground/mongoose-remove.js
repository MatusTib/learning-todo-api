const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c17689df4a3dd9847ef30bd'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c17689df4a3dd9847ef30bd').then((todo) => {
    console.log(todo);
});