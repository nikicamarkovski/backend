var funcForGenearateString = require("randomstring");
var axios = require('axios');
var print = require("./second");

print.main();

var name = funcForGenearateString.generate({
  length: 12,
  charset: 'numeric'
});

//console.log(name);

function wrapper (a,b) {
  var c = a + b;
  return new Promise((resolve, reject) => {
    if(c>10) {
      resolve(c);
    }
    reject("Error zbirot vi e = " + c + ", a treba da e nad 10");
  });  
}

function wrapper2 (a) {
  return new Promise((resolve, reject) => {
    if(a%2==0) {
      resolve("Zbirot e paren");
    }
    reject("Zbirot NE e paren");
  });  
}

async function sum(){
  try {
    var sum = await wrapper(11,5);
    var result = await wrapper2(sum);
    console.log(result);
  
  } catch (error) {
    console.log(error);
  }
}

sum();
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

//  Getreduce = async () => {
//     var get = await getQuestions() ;
//     console.log(get);
//   var dificutly = response.forEach((x) =>{
//     console.log(x.dificutly);
//   }); 

// }
async function getQuestions() {

  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=10");
    // console.log(response.data);

    var questionsList = response.data.results.map((obj) => {
      return { 
        question: obj.question,
         category: obj.category , 
         dificutly : getRandomNumber(1 , 5)
         
        };
   
    });
  var some =  questionsList.map((obj)=>{
      return obj.dificutly

    });
    // var total = 0 ;
    var reduce = some.reduce((total , num) => {
      return total +=num;

    },0)
    console.log(reduce / some.length); 
    // console.log(some);
    
  } catch (error) {
    console.error(error);
  }
}
// Getreduce();
getQuestions();

// async function postMail() {
//   try {
//     const response = await axios.post("http://urlexample.com",{
//       ime: "nikola",
//       prezime: "Stojkovski",
//       oglasId: 1231234
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function Execute() {
//   while(true) {
//     await postMail();

//   }
// }

// Execute();
