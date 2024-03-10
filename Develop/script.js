//code runs when browser loads HTML
$(function () {

// Display current date in header
var currentDate = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDate);

// Add event listeners to save buttons
// Save user input to local storage
$(".saveBtn").on("click", function () {
  var timeBlockId = $(this).parent().attr("id");
  var userInput = $(this).siblings(".description").val();
  localStorage.setItem(timeBlockId, userInput);
});

//retrieve user input from local storage
$(".time-block").each(function () {
  var timeBlockId = $(this).attr("id");
  var savedUserInput = localStorage.getItem(timeBlockId);

  if (savedUserInput) {
    $(this).find(".description").val(savedUserInput);
  }
});

// day js gets the current hour
var currentHour = parseInt(dayjs().format('H'));

// Compare current hour with block hour to determine past, present, or future
$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id"));

  console.log("currentHour:", currentHour);
  console.log("blockHour:", blockHour);
  // Change background color by current hour
  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
});