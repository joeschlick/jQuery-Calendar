$(document).ready(function () {
  $("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));

  var currentHour = moment().hour();
  console.log(currentHour);

  $(".row > textarea").each(function () {
    var rowHour = $(this).attr("id");
    console.log(rowHour);

    if (rowHour > currentHour) {
      $(this).addClass("future");
    } else if (rowHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

  $(".saveBtn").on("click", function () {
    var setInput = $(this).siblings(".input").val();
    var setId = $(this).parent().attr("id");
    console.log(setInput, setId);
    window.localStorage.setItem(setId, setInput);
  });

  $("#hour9 .input").val(localStorage.getItem("hour9"));
  $("#hour10 .input").val(localStorage.getItem("hour10"));
  $("#hour11 .input").val(localStorage.getItem("hour11"));
  $("#hour12 .input").val(localStorage.getItem("hour12"));
  $("#hour13 .input").val(localStorage.getItem("hour13"));
  $("#hour14 .input").val(localStorage.getItem("hour14"));
  $("#hour15 .input").val(localStorage.getItem("hour15"));
  $("#hour16 .input").val(localStorage.getItem("hour16"));
  $("#hour17 .input").val(localStorage.getItem("hour17"));
});

/*$(".saveBtn").on("click", function() {
    var setInput = $(this).siblings("input").val();
    var setId = $(this).parent().attr("class");
    console.log(setInput, setId);
    window.localStorage.setItem(setInput, setId);
})*/
