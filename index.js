const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8000;

//middlewar
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from express world')
})

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 25,
        isActive: true,
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        address: {
            city: "New York",
            country: "USA"
        }
    },
    {
        id: 2,
        name: "Sarah Smith",
        email: "sarah.smith@example.com",
        age: 28,
        isActive: false,
        role: "Backend Developer",
        skills: ["Node.js", "Express", "MongoDB"],
        address: {
            city: "London",
            country: "UK"
        }
    },
    {
        id: 3,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        age: 22,
        isActive: true,
        role: "UI/UX Designer",
        skills: ["Figma", "Adobe XD", "Photoshop"],
        address: {
            city: "Bangalore",
            country: "India"
        }
    }
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res)=>{
    console.log('Data in the request', req.body);

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send({ success: true, data: newUser, message:'Post request is working'})
})

app.get('/products', (req, res) => {
    res.send('Products are jumping up')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})