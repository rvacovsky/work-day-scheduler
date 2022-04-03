# work-day-scheduler

<h2>User Story</h2>

AS AN employee with a busy schedule

I WANT to add important events to a daily planner

SO THAT I can manage my time effectively


<h2>Acceptance Criteria</h2>

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner

THEN the current day is displayed at the top of the calendar

WHEN I scroll down

THEN I am presented with time blocks for standard business hours

WHEN I view the time blocks for that day

THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block

THEN I can enter an event

WHEN I click the save button for that time block

THEN the text for that event is saved in local storage

WHEN I refresh the page

THEN the saved events persist

<h2>How It Works<h2>
  
<h5>I used moment.js to pull today's date, which populates the header. JQuery's .ready() function starts the scheduler, with the Save Button's click capturing any text typed in each hour's timeblock (which is kept using localStorage).<h5>

<h5>I have another function I called "timeBlockColor" that declares the time at the moment of use (called "now") and compares it to the timeblock the user is in. Per the acceptance criteria/mock-up/starter code, it will show red for the hour the user is in, gray for past hour blocks, and green for future hour blocks. This was done using if, else statements.<h5>

  
![Work Day Scheduler Screenshot](https://user-images.githubusercontent.com/98611195/161454007-50660ddb-3219-4b0c-8040-5873b4a0df7a.PNG)
