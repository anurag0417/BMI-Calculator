const express=require("express");
const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  //console.log(__dirname);
  res.sendfile(__dirname+"/index.html")
});

app.post("/",function(req,res){
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);
  var sum=num1+num2;
  res.send("Summation is "+sum);
});

app.get("/bmiCalculator",function(req,res){
  //console.log(__dirname);
  res.sendfile(__dirname+"/bmiCalculator.html")
});

app.post("/bmiCalculator",function(req,res){
  var height=Number(req.body.h);
  var weight=Number(req.body.w);
  var bmi=weight/(height*height);
  bmi=Math.floor(bmi);
  res.send("Your BMI is "+bmi);
});

app.listen(3000,function(){
  console.log("Server started at port 3000");
});
