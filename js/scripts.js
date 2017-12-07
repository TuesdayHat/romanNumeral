var numerals = [1, "i" , 5, "v", 10, "x", 50, 'l', 100, 'c', 500, "d", 1000, "m"]

for (i=numerals.length-1;i>=0;i-=2)

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    var result = pigSentence(input);
    $("#result").text(result);
  });
});
