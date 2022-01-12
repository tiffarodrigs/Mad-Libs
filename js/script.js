$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    event.preventDefault();
  });
  
  
  $("#formTwo").submit(function(event) {
    // Get the value of the name text the user entered
    const formLetter = $("input#text-field").val();
    // Set the user given value in span-h4 tag to display
    $(".person3").text(formLetter.toUpperCase());
    $("#letter").show();
    // Prevent the default of clearing out the result, so that we can read it.
    event.preventDefault();
  });
});

