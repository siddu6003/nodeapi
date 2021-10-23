const { countReset } = require('console');
const express=require('express')
const app=express()

app.use(express.json())
const course=[
    {id:1,name:'science'},
    {id:2,name:'maths'},
    {id:3,name:'english'}
]
app.get('/',function(req,res){
    res.send("Hello")
});
app.get('/api/course',function(req,res){
    res.send(course);
})
app.get('/api/course/:id',function(req,res){
   const r=course.find(c=>c.id==parseInt(req.params.id))
   if(!r) res.status(404).send("not found")
   res.send(r)
})

//

app.post('/api/course',function(req,res){
    const x={
        id:course.length+1,
        name:req.body.name
    }
    course.push(x)
    res.send(x)
})
const port=process.env.PORT || 3000
app.listen(port,function(req,res){
    console.log("listening")
})