
$(function(){
    $("#load").click(function(){
        $.get("student.txt",function(){
            $("#result").empty();
            $("#result").append(response);   
        });
    });
});
