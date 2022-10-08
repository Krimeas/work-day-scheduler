
// Sets time in header.
var currentDay = moment().format('MMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);


// ATTEMPTS TO GET LOCAL STORAGE TO WOREK AND REPOPULATE - Only coudl get it to save strings to local storage, couldn't get to pull and replace into Row.

// let V1 = JSON.stringify($('#value1'));

// function getValue() {
// 	JSON.parse(localStorage.getItem(V1)); 
// }
// getValue();
// console.log(getValue()); 

// save button on Modal writes to blank sapce & saves to local storage.
$('#saveButton8').on('click', function() {
  $('#value8').text( $('#inputV8').val() );
  $("#myModal8").modal('hide');
  // function setValue() {

  //   localStorage.setItem(V1, JSON.stringify($('#inputV1').val())); 
  // }

  // setValue()

});


$('#saveButton9').on('click', function() {
  $('#value9').text( $('#inputV9').val() );
  $("#myModal9").modal('hide');
 
});

$('#saveButton10').on('click', function() {
  $('#value10').text( $('#inputV10').val() );
  $("#myModal10").modal('hide');
 
});

$('#saveButton11').on('click', function() {
  $('#value11').text( $('#inputV11').val() );
  $("#myModal11").modal('hide');
 
});

$('#saveButton12').on('click', function() {
  $('#value12').text( $('#inputV12').val() );
  $("#myModal12").modal('hide');
 
});

$('#saveButton1').on('click', function() {
  $('#value1').text( $('#inputV1').val() );
  $("#myModal1").modal('hide');
 
});

$('#saveButton2').on('click', function() {
  $('#value2').text( $('#inputV2').val() );
  $("#myModal2").modal('hide');
 
});

$('#saveButton3').on('click', function() {
  $('#value3').text( $('#inputV3').val() );
  $("#myModal3").modal('hide');
 
});

$('#saveButton4').on('click', function() {
  $('#value4').text( $('#inputV4').val() );
  $("#myModal4").modal('hide');
 
});

$('#saveButton5').on('click', function() {
  $('#value5').text( $('#inputV5').val() );
  $("#myModal5").modal('hide');
 
});




//Supposed to Change Text Area background color based on time - does not itterate correctly.

let hour8 = document.getElementById("#8")
let hour9 = document.getElementById("#9")
let hour10 = document.getElementById("#10")
let hour11 = document.getElementById("#11")
let hour12 = document.getElementById("#12")
let hour1 = document.getElementById("#1")
let hour2 = document.getElementById("#2")
let hour3 = document.getElementById("#3")
let hour4 = document.getElementById("#4")
let hour5 = document.getElementById("#5")

let currentTime = moment().format('h')

if (hour8 < currentTime) {
  $("#appendedData8").addClass("past");
} else if (hour8 > currentTime)  {
  $("#appendedData8").addClass("future");
} else {
  $("#appendedData8").addClass("present");
}

if (hour9 < currentTime) {
  $("#appendedData9").addClass("past");
} else if (hour9 > currentTime)  {
  $("#appendedData9").addClass("future");
} else {
  $("#appendedData9").addClass("present");
}

if (hour10 < currentTime) {
  $("#appendedData10").addClass("past");
} else if (hour10 > currentTime)  {
  $("#appendedData10").addClass("future");
} else {
  $("#appendedData10").addClass("present");
}

if (hour11 < currentTime) {
  $("#appendedData11").addClass("past");
} else if (hour11 > currentTime)  {
  $("#appendedData11").addClass("future");
} else {
  $("#appendedData11").addClass("present");
}

if (hour12 < currentTime) {
  $("#appendedData12").addClass("past");
} else if (hour12 > currentTime)  {
  $("#appendedData12").addClass("future");
} else {
  $("#appendedData12").addClass("present");
}

if (hour1 < currentTime) {
  $("#appendedData1").addClass("past");
} else if (hour1 > currentTime)  {
  $("#appendedData1").addClass("future");
} else {
  $("#appendedData1").addClass("present");
}

if (hour2 < currentTime) {
  $("#appendedData2").addClass("past");
} else if (hour2 > currentTime)  {
  $("#appendedData2").addClass("future");
} else {
  $("#appendedData2").addClass("present");
}

if (hour3 < currentTime) {
  $("#appendedData3").addClass("past");
} else if (hour3 > currentTime)  {
  $("#appendedData3").addClass("future");
} else {
  $("#appendedData3").addClass("present");
}

if (hour4 < currentTime) {
  $("#appendedData4").addClass("past");
} else if (hour4 > currentTime)  {
  $("#appendedData4").addClass("future");
} else {
  $("#appendedData4").addClass("present");
}

if (hour5 < currentTime) {
  $("#appendedData5").addClass("past");
} else if (hour5 > currentTime)  {
  $("#appendedData5").addClass("future");
} else {
  $("#appendedData5").addClass("present");
}

