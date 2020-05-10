var content= document.getElementById("main1");
var button= document.getElementById("show-more");
button.onclick= ()=>{
  if(content.className=="open"){
    content.className="";
    button.innerHTML="Show More";
  }
  else{
      content.className="open";
      button.innerHTML="Show Less";
  }
};