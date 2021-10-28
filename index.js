console.log("hello! Iam MAdhu")
var read=require("readline_sync")
var username=read.question("what is your name? ")
console.log("welcome!!"+username)
console.log("please use lower case while answering and no numbers")
console.log("----------------")
var score=0
var qlist=[
     {q:"what is my surname? ",
     a:"ponnam"  },
     {
         q:"which district am I belong to? ",
         a:"khammam"
     },
     {
         q:"what is my favourite Dish ?  ",
         a:"biryani"
     },
     {
         q:"what is my favourite colour? ",
         a:"blue"
     },
     {
         q:"what is my major stram in B.tech? ",
         a:"mechanical"
     }
]
var l=qlist.length
function play(q,a){
    var answer=read.question(q)
    if(answer===a){
        console.log("you are right")
        score+=1
    }
    else{
        console.log("you are wrong")
    }
    console.log("your final score is"+score)
}
for(var i=0;i<l;i++){
    var cquestion=qlist[i]
    play(qlist.q,qlist.a)
}
if(score===l){
    console.log("you entered evrything right.you know me very well")
}
else{
    console.log("you should know me better")
}