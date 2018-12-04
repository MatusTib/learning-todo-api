// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');  
    
     db.collection('Users').deleteMany({name: 'Matus'}).then((result) => {
        console.log(result);
    });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID  ("5c04edf3dd89b9ac1b2dab03")}).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    });

    // client.close();
});