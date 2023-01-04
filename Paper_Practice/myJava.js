console.log("Code Start");
$(function(){
    //jq is execute this function after the page is load
    //you can write the code after it-----do binding here!
    $("#btn").click(hanldeBtnClick);
})
function hanldeBtnClick(){
    alert("Button is clicked!");
}
