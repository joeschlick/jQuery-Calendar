$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));

var currentHour = moment().hour();
console.log(currentHour)

$( ".row > input" ).each(function() {
    var rowHour = $( this ).attr( "id" );
    console.log(rowHour);
    if (rowHour > currentHour) {
        $(this).addClass("future")
    }
    else if (rowHour == currentHour) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("past")
    }
  });





var setInput
var setID

// var getInput = window.localStorage.getItem(setInput, setId);
// $("input").val(getInput)

$(".saveBtn").on("click", function() {
    var setInput = $(this).siblings("input").val();
    var setId = $(this).parent().attr("id");
    console.log(setInput, setId);
    window.localStorage.setItem(setInput, setId);
})


