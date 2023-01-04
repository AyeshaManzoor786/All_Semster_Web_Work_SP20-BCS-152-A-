console.log("Code Start");
$(function(){
    console.log("Binding  ");
    $("#load").click(sendAjax);
});

function sendAjax(){
console.log("Request is sending....")
//do binding...
//get has 2 parameter 1.path of url 2. function ---who handle response
$.get("student.txt",handleResponse);
console.log("Request Send");
}
function handleResponse(response){
console.log("Response Received");
$("#result").empty();
$("#result").append(response);
}
console.log("Code End");