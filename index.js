const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;

// Middleware
app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9hokh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function server() {
    try {
        await client.connect();
        const database = client.db('TourismWindow');
        const servicesCollection = database.collection('packeges');
        const servicesCollection2 = database.collection('addCart');
        const orderCollection = database.collection('order');

        // GET Single Services
        app.get('/packege/:id', async (req, res) => {
            const id = req.params.id;
            console.log('hit service')
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query)
            res.json(service);
        })

        //  cart api
        app.get('/addCart', async (req, res) => {
            const cursor = servicesCollection2.find({});
            
            
            const result = await cursor.toArray();
            res.json(result);
        })

        // GET  API ALL Services 
        app.get('/packeges', async (req, res) => {
            const cursor = servicesCollection.find({});
            
            const result = await cursor.toArray();
            res.send(result)
        })

        // POST API
        app.post('/addpackeges', async (req, res) => {
            const service = req.body;
            
            const result = await servicesCollection.insertOne(service);
            console.log(result)
            res.json(result)
        })
        //  Add cart 
        app.post('/addCart', async (req, res) => {
            const service = req.body;
            
            const result = await servicesCollection2.insertOne(service);
            console.log(result)
            res.json(result)
        })
        //  Order APi
        app.post('/order', async (req, res) => {
            const id = req.body;
            const result = await orderCollection.insertOne(id);
            console.log(result)
            res.json(result);
        })
        // GET  API order api 
        app.get('/order', async (req, res) => {
            const cursor = orderCollection.find({});

            const result = await cursor.toArray();
            res.send(result)
        })
        // Delete Api
        app.delete('/packege/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: ObjectId(id) }
            const result = await servicesCollection2.deleteOne(query)
        res.json(result);
        })
    }
    finally {
        // client.close();
}
}
server().catch(console.dir);

app.get('/', (req, res) => {
    res.send('TourismWindow server is running...')
})
app.listen(port, () => {
    console.log('Listening port is ', port)
});