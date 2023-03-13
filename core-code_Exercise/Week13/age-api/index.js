import express from "express";

const app = express()
const port = 3000;
const agePre = {
    name: '',
    age: '',
    days: '',
  };

  const message = { 
    error: "Missing parameter 'name' was expected.",
  };
  
  app.get('/api/age/', (req, res)=>{
        res.send(message);
    });
    app.get('/api/age/:name', (req, res)=>{
        const { name } = req.params;
        const ramdonAge = Math.floor(Math.random() * 99);
            agePre.name= name;
            agePre.age= ramdonAge;
            agePre.days= ramdonAge*365; 
        return res.send(agePre);
    });

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });