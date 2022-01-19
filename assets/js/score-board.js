$(document).ready(function () {

  console.log('hey there');
  $(".saveBtn").click(function (event) {
    event.preventDefault();

    localStorage.setItem($(event.target).parent().attr("id"), $(event.target).siblings(".description").val());
  });

  $("#myScore-01").children('textarea').val(localStorage.getItem("01"));
  $("#myScore-02").children('textarea').val(localStorage.getItem("02"));
  $("#myScore-03").children('textarea').val(localStorage.getItem("03"));
  $("#myScore-04").children('textarea').val(localStorage.getItem("04"));
  $("#myScore-05").children('textarea').val(localStorage.getItem("05"));
  $("#myScore-06").children('textarea').val(localStorage.getItem("06"));
  $("#myScore-07").children('textarea').val(localStorage.getItem("07"));
  $("#myScore-08").children('textarea').val(localStorage.getItem("08"));
  $("#myScore-09").children('textarea').val(localStorage.getItem("09"));
});