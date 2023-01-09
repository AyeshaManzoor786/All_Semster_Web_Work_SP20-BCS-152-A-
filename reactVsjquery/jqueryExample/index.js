let persons = ["Ayesha", "Diya", "Sheeza", "Aleena"];
function testSort() {
  persons.sort();
  populatePerson();
}

function populatePerson() {
  $("#persons").html(""); //we found the tags and then modify it
  for (let i = 0; i < persons.length; i++) {
    $("#persons").append("<li>" + persons[i] + "</li>");
  }
}

$(function () {
  populatePerson();
});
