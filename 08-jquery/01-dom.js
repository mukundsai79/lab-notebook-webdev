// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Option #1
// Fetch JavaScript objects representing specific elements in the DOM
$(document).ready(() => {
  $("#copy").on("click", (event) => {
    $("#output1").text($("#userInput1").val());
  });

  // Option #2
  // document.getElementById('copy').onclick = () => {
  //   let userInput = document.getElementById('userInput1');
  //   let output = document.getElementById('output');

  //   output.textContent = userInput.value;
  // };

  // Option #3
  // document.getElementById('copy').onclick = () => {
  //   document.getElementById('output').textContent = document.getElementById(
  //     'userInput1'
  //   ).value;
  // };

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area

  $("#userInput2").on("input", (event) => {
    $("#output2").text($("#userInput2").val());
  });
});
