var express = require("express");
require('dotenv/config');
var app = express();
const fs = require('fs');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.get('/users/:number', (req , res) => {   
    var id = req.params.number;
    console.log(id);
 res.send(id)
 

});

app.put('/users/:number', (req , res) => {    /// users e ruta :number e dopolnitelen parametar na put http://localhost:3003/users/123?
   var some = req.params.number
 res.send(some + "PUT" );
 

});

app.patch('/users/:number', (req , res) => {   
    var some = req.params.number
    res.send(some + " PATCH");
    
   
   });
   

   app.post('/users', (req , res) => {   
     
    res.send("POSt");
    
   
   });
//    app.get('/read/', (req , res) => {   

//     let rawdata = fs.readFileSync('student.json/');
//     let student = JSON.parse(rawdata);
//      var some = student.name + " " + student.age
//      console.log(some)
//     res.send(some);
    
   
//    });

   app.get('/write/' , (req , res) => {
  
  let student = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
     
    let data = JSON.stringify(student);
    fs.writeFileSync('student-2.json', data);

    res.send(data)
   })

   app.delete('/users/:number', (req , res) => {   
    var some = req.params.number
    res.send(some + " DELETE");
    
   
   });


   app.delete('/read/:name', (req , res) => {   
    var some = req.params.name;
    res.send(some + " DELETE");
    
   
   });

var port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("app server is lisening on port " + port);
});



app.get('/read' , (req , res ) => {  /// get metoda
    let rawdata = fs.readFileSync('student.json'); // citanje od fileot student.json;
    let student = JSON.parse(rawdata); // go pravam json objekt ; 
    console.log(student); 
    res.status(200).send(student) /// prakja 
});





app.get('/write' , (req , res ) => {  // kreirame ruta ;
    let student = {    // objekt koj kje se stavi vo nov folder
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };

    let data = JSON.stringify(student);  
   fs.writeFileSync('student-2.json', data);  // da se zapise i kreira nov file so data od objektot
   res.send(student);
});


app.get('/read/all/' , (req , res) => {
    var rawdata = fs.readFileSync("users.json");
    var student = JSON.parse(rawdata);

    res.send(student)
})

app.get('/read/all/:id' , (req , res) => {
    var rawdata = fs.readFileSync("users.json");
    var student = JSON.parse(rawdata);
     var currentuser = student.filter((x) => {
         return x.id == req.params.id;
     })
    res.send(currentuser)
});


app.post("/users/read/all", (req, res) => {
   let rawdata = fs.readFileSync("users.json");
   let student = JSON.parse(rawdata);
   student.push(req.body) /// body zima od postman kreiraniot user ;
   fs.writeFileSync("users.json", JSON.stringify(student, null, 2))
   res.send(student);
});





app.delete("/users/read/delete/:number", (req, res) => {
    let rawdata = fs.readFileSync("users.json");
    let student = JSON.parse(rawdata);
    var userid = student.filter((x) => {
      return x.id == req.params.number
    })
  
    student.splice(userid, 1);
    fs.writeFileSync("users.json", JSON.stringify(student, null, 2))
    res.send(student)
 })

 
      
/

    app.put("/users/read/all/:number", (req, res) => { 
           let rawdata = fs.readFileSync("users.json");
           let student = JSON.parse(rawdata);
           var id = req.params.number
           var update = req.body;
           student[id] = update;
        console.log(student[id]);
           fs.writeFileSync("users.json", JSON.stringify(student, null, 2))
           res.send(update)
        })

    app.get('/read/all/users/active' , (req , res) => {
        var rawdata = fs.readFileSync("users.json");
        var student = JSON.parse(rawdata);
        var active = student.filter((x) => {
            return x.isActive == true ;
        })
        res.send(active);
    })
    app.patch('/read/all/users/update/:number' , (req , res) =>{
       let rawdata = fs.readFileSync("users.json");
   let student = JSON.parse(rawdata);
   var id = req.params.number  
   var body = req.body
     student[id].name = body.name; 
     student[id].isActive = body.isActive;
     fs.writeFileSync("users.json", JSON.stringify(student, null, 2))
   res.send(student);
    })


    app.get('/read/all/number/users' , (req , res) => {
        var rawdata = fs.readFileSync("users.json");
        var student = JSON.parse(rawdata);
        var counter = 0 ;
       var totalUsers = student.reduce((total , num ) => {
            return total += num.number;
        } , 0);
        var names =  student.map((obj)=>{
        
                    return obj.name
                 });
        console.log(totalUsers + "console")
        res.send("You Have " + totalUsers + " Users" + " name of All Users : " + names );
    })



    