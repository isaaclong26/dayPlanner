$(function(){
    setInterval(clock(),10000000)
     //checks if local storage has events and prints them 
    highlight();

  for(let i = 1; i<9;i++){
        $("#f"+i).val(localStorage.getItem("f"+i));
        //$('#f'+i).text(localStorage.getItem("f"+i));
      
    }
  
});

function clock(){
    NowMoment = moment();
    $("#currentDay").text(NowMoment.format("LLLL"));
}

function highlight(){
    let nowMoment = moment();
    let hour = nowMoment.format("HH");
    let formNum= hour-8;


    for(let i = 1; i<10 ; i++){
    if(i<formNum){
        $("#t"+i).addClass("table-primary");
    }
    else if(i===formNum){
        $("#t"+i).addClass("table-success");
    }
    else{
        $("#t"+i).addClass("table-warning");
    }
     console.log(i)
    }
}
   

//when any save button is clicked it records it in the local window storage
function buttonPressed(clicked_id){
    
    let time = (clicked_id.charAt(clicked_id.length-1));

    let formId = ("f"+time);
    formVal= $("#"+formId).val();
    localStorage.setItem(formId,formVal);
    console.log(localStorage.getItem(formId));
    
}