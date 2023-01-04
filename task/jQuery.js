function click(){
    alert("Your form is submitted!!");
}
function color(){
      var str=$(".green").val();
      console.log(str);
      if(str==0)
      {
        $(".green").addClass("red");
      }
}
