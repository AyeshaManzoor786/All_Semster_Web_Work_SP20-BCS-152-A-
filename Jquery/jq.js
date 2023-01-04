$(function(){
    //jq is execute this function after the page is load
    //you can write the code after it-----do binding here!
    $("#addBtn").click(hanldeBtnClick);
    // $("#todos li").click(remove);
    $("#todos").on("click","li",remove);
})
function hanldeBtnClick(){
    // alert("Button is clicked!");
var newTodo=$("#todo").val();

if(!newTodo){
    $("#todo").addClass("error"); 
   return; 
}
$("#todo").removeClass("error");
$("#todo").val("");
$("#todos").append("<li>"+newTodo+"</li>");
// $("#todos li").click(remove);
}

function remove()
{
    $(this).fadeOut();
}