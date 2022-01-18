$(document).ready(function () {

  console.log('hello world');
  $(".saveBtn").click(function (event) {
    event.preventDefault();

    localStorage.setItem($(event.target).parent().attr("id"), $(event.target).siblings(".description").val());
  });

  $("#initial-01").children('textarea').val(localStorage.getItem("01"));
  $("#initial-02").children('textarea').val(localStorage.getItem("02"));
  $("#initial-03").children('textarea').val(localStorage.getItem("03"));
  $("#initial-04").children('textarea').val(localStorage.getItem("04"));
  $("#initial-05").children('textarea').val(localStorage.getItem("05"));
  $("#initial-06").children('textarea').val(localStorage.getItem("06"));
  $("#initial-07").children('textarea').val(localStorage.getItem("07"));
  $("#initial-08").children('textarea').val(localStorage.getItem("08"));
  $("#initial-09").children('textarea').val(localStorage.getItem("09"));

});