$(function () {
  $.ajax({
    type: "GET",
    url: "https://usman-cui-recipies.herokuapp.com/api/recipes/",
    data: "data",
    success: function (response){
      response.map((value)=>{
        $("#present").append(`<div class="card col-11 col-md-5 col-lg-3 m-3" data-id="${value._id}">
                  <div class="card-body">
                    <h5 class="card-title">${value.title}</h5>
                    <p class="card-text">${value.body}</p>
                  </div>
                 <button class="btn btn-success m-1">Update</button>
                 <button class="btn btn-danger m-1 mb-3">Delete</button>
                </div>`);
      });
    },
  });

  $('#present').on("click",".btn-danger",function(){
    let id = $(this).closest('.card').attr('data-id')
    $.ajax({
      type: "DELETE",
      url: "https://usman-cui-recipies.herokuapp.com/api/recipes/"+id,
      success: function (response) {
        location.reload(true);
      }
    });
  })
  $('#present').on("click",".btn-warning",function(){
    let id = $(this).closest('.card').attr('data-id')
    $.ajax({
      type: "GET",
      url: "https://usman-cui-recipies.herokuapp.com/api/recipes/"+id,
      success: function (response) {
         $('.update').removeClass('d-none').attr('data-id',id)
         $("#title-update").val(response.title);
         $("#body-update").val(response.body);
      }
    })

  })

  $('#add').click(function (e) { 
    e.preventDefault();
    let title = $("#title").val();
    let body = $("#body").val();
    $.ajax({
      type: "POST",
      url: "https://usman-cui-recipies.herokuapp.com/api/recipes/",
      data: {title , body},
      success: function (response) {
        location.reload(true)
      }
    });
  });

  $('#update').click(function (e) { 
    e.preventDefault();
    console.log("done")
    let id = $(this).closest('.update').attr('data-id')
    let title = $('#title-update').val();
    let body = $('#body-update').val();
    $.ajax({
      type: "PUT",
      url: "https://usman-cui-recipies.herokuapp.com/api/recipes/"+id,
      data: {title , body},
      success: function (response) {
        location.reload(true)
        $('.update').addClass('d-none')
      }
    });
  });
});

