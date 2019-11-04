

// Capture form inputs from survey

$("#submit").on("click",function (event) {

    event.preventDefault();


    // Create an object for the iser's data

    var userData ={
     name: $("#name").val(),
     photo: $("#photo").val(),
     scores: [

      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val(),

     ]


    };


// Ajax call that pulls data from api begins
$.post("/api/survey",userData,function(data){

$("match-name").text(data.name);
$("match-img").attr("src", data.photo);

// Show resluts
$("#resluts-modal").modal("toggle");




})






})

