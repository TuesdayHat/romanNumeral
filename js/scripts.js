
function findRoman (input) {
  var numerals = [1000, "M" , 500, "D", 100, "C", 50, 'L', 10, 'X', 5, "V", 1, "I"]
  for (i=0;i<numerals.length;i += 2){
    var num = numerals[i];
    if (input === num){
      return numerals[i+1]
    }

    
  }

}

function fixRoman (num){

}

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#words").val());
    var result = findRoman(input);
    $("#result").text(result);
  });
});
