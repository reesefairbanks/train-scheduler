
//add firebase
//update train arrival time
//show train information
  //name
  //destination
  //first train time, in military time
  //update train frequency



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_TPqXDP4IY6Hfw3qhox9YQ5ekDjVwydo",
    authDomain: "train-scheduler-44f10.firebaseapp.com",
    databaseURL: "https://train-scheduler-44f10.firebaseio.com",
    projectId: "train-scheduler-44f10",
    storageBucket: "train-scheduler-44f10.appspot.com",
    messagingSenderId: "329934366314"
  };

  firebase.initializeApp(config);

  var trainData = firebase.database();
  $( document ).ready(function() {
    $("#add-train-btn").on("click", function() {
        //prevents the page from refresh
        event.preventDefault();
        //console.log(event);
        // Grabs user input
        var trainName = $("#train-name-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var firstTrain = $("#first-train-input").val().trim();
        var frequency = $("#frequency-input").val().trim();
        //adding new train with input data
        var newTrain = {
            name: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency,
        }
        console.log(newTrain);
        trainData.ref().push(newTrain);
        alert("train added");
        //empty the input fields
        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#first-train-input").val("");
        $("#frequency-input").val("");
      });
      //grab train data from database to populate train schedule fields
});