// console.log("Starting...");
// console.log("Hello World!");
// function binding(){
//     console.log("Binding...");
//     console.log("Your Binding is done!");
// }


// -----------------------------Output work wali css----------

// function btn(){
//     console.log("Binding1...");
//     console.log("You click me!");
//     var input=document.getElementById("input1");
//     console.log(input.value);
//     var output=document.getElementById("span1");
//     output.innerHTML=input.value;
//     var start=document.getElementById("button2");
//     start.onclick=binding;

// }

// window.onload=binding;
// console.log("finish...");
//-----------------------------Binding of one button with another-----------------------------------------------
// console.log("start...");
// function binding()
// {
//     console.log("Binding...");
//     console.log("Your Binding is done!!");
// }

// function btn(){
//     var input=document.getElementById("button2");
//     input.onclick=binding;
// }
// // btn();
// window.onload=btn;
// console.log("finish...");

//------------------------------Binding----------------------------------------------


// function binding()
// {
//     console.log("Your Binding is done!!");
// }

// function btn(){
//     var button=document.getElementById("addBtn");
//     button.onclick=binding;
// }

// window.onload=btn;

//---------------------------Bindig with window onload function-------------------------------------------------
// window.onload=function(){
//     var button=document.getElementById("addBtn");
//     button.onclick=function(){
//         console.log("Your Binding is done!!");
//     };
// };

// -------------------------------------TODO CSS---------------------------
window.onload=function(){
    var btn=document.getElementById("btn");
    btn.onclick=HandleTodo;
}

function HandleTodo(){
    var todo=document.getElementById("todo").value;
    var todos=document.getElementById("todos");
    var todos1=document.createTextNode(todo);
    var newLi=document.createElement("li");
   
    newLi.appendChild(todos1);
    var n= todos.appendChild(newLi);
    var btn1=document.getElementById("btn1");
    var btn2=document.createElement(btn1);
    console.log(btn2);
    n.append(btn1);

}
function HandleDelete(e){
    var tag=e.target;
    var li=tag.parentNode;
    li.parentNode.removeChild(li);
}
