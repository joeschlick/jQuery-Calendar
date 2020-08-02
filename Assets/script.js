$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));

var currentHour = moment().hour();
var setInput
var setID

var getInput = window.localStorage.getItem(setInput, setId);
$("input").val()

$(".saveBtn").on("click", function() {
    var setInput = $(this).siblings("input").val();
    var setId = $(this).parent().attr("id");
    console.log(setInput, setId);
    window.localStorage.setItem(setInput, setId);
})


