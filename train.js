 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD29vzkW0tXjosz4TnGGOr_4vVsrOPgm7M",
    authDomain: "train-schedule-1cad4.firebaseapp.com",
    databaseURL: "https://train-schedule-1cad4.firebaseio.com",
    projectId: "train-schedule-1cad4",
    storageBucket: "train-schedule-1cad4.appspot.com",
    messagingSenderId: "1044845693739"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var getTime = "";
  var destination = "";
  var frequency = 0;
  var nextArrival = 0;
  var minutesFire = 0;


$("#submit").on("click", function() {
    event.preventDefault();

  
     getTime = $("#trainStuff").val().trim();
     destination = $("#destinationInput").val().trim();
     frequency = moment($("#firstTrainInput").val().trim(), "hh:mm").format("hh:mm");
     nextArrival = moment($("#frequencyInput").val().trim(), "m").format("m");

     database.ref().push({
        getTime: getTime,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival

     });

	$("#trainName").append(getTime);
    $("#destination").append(destination);
    $("#frequency").append(frequency);
    $("#nextArrival").append(nextArrival);
    // $("#minutesAway").append(destination);
    // $("#append").append(getTime);
    console.log(getTime);
});