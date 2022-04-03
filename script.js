// get today's date for header
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDate);




// change color of timeblocks based on time of day
function timeBlockColor() {
  
    // collect time right now
    var now = moment().hour();
  
    
    $(".time-block").each(function() {
    // establish timeblock to compare against current hour
    var timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlockHour, now)

        // color of timeblock if on current hour
        if (timeBlockHour === now) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        } 
        // color of timeblock if future hour
        else if (timeBlockHour > now) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        // color of timeblock if past hour
        else {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
    })
    
};

timeBlockColor();




