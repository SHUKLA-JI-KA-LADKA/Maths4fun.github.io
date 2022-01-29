const Option1 = document.getElementById("option1");
const Option2 = document.getElementById("option2");
const Option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;
function genrate_equation() 
{
    var num1=Math.floor(Math.random() * 13);
    var num2=Math.floor(Math.random() * 13);
    var dummyAnswer1=Math.floor(Math.random() * 13);
    var dummyAnswer2=Math.floor(Math.random() * 13);
    var allAnswer = [];
    var switchAnswer = [];

    answer = num1 - num2;
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;


    allAnswer = [answer,dummyAnswer1,dummyAnswer2];

    for(i=allAnswer.length; i--;)
    {

        switchAnswer.push(allAnswer.splice(Math.floor(Math.random()*(i+1)),1)[0]);
        

    }




    Option1.innerHTML=switchAnswer[0];
    Option2.innerHTML=switchAnswer[1];
    Option3.innerHTML=switchAnswer[2];


}

Option1.addEventListener("click",function(){

if(Option1.innerHTML ==answer){
    genrate_equation();
}
else
{
    audio.play();
}


});


Option2.addEventListener("click",function(){

    if(Option2.innerHTML ==answer){
        genrate_equation();
    }
    else
    {
        audio.play();
    }
    
    
    });



    Option3.addEventListener("click",function(){

        if(Option3.innerHTML ==answer){
            genrate_equation();
        }
        else
        {
            audio.play();
        }
        
        
        });


genrate_equation();