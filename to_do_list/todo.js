const addlist= document.getElementById("input");
const listcontainer= document.getElementById("list_container");
function addtask(){
     if(addlist.value===''){
         alert("please write something !");
     }
     else {
        let li =document.createElement("li");
        let delle=document.createElement("span");
        li.innerHTML=addlist.value;
        listcontainer.appendChild(li);
        delle.innerHTML="\u00d7"
        li.appendChild(delle);
     }
     addlist.value='';
  
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle ("check");

    }
   else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();

    }
},false);
