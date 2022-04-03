// get today's date for header
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);



// kick off work day scheduler
$(document).ready(function (){
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

    // change color of timeblocks based on time of day
    function timeBlockColor() {
    
        // collect time right now
        var now = moment().hour();
    
        
        $(".time-block").each(function() {
        // establish timeblock to compare against current hour
        var timeBlockHour = parseInt($(this).attr("id"));
            console.log(timeBlockHour, now)

            // color of timeblock if on current hour
            if (timeBlockHour === now) {
                $(this).addClass("present");
            } 
            // color of timeblock if future hour
            else if (timeBlockHour > now) {
                $(this).addClass("future");
            }
            // color of timeblock if past hour
            else {
                $(this).addClass("past");
            }
        })
    }

    

    timeBlockColor();
});



