// var numerals = [1, "i" , 5, "v", 10, "x", 50, 'l', 100, 'c', 500, "d", 1000, "m"]
// for (i=numerals.length-1;i>=0;i-=2)

function findRoman (num) {
  if (num === 1) {
    return("I");
  } if (num === 5) {
    return("V");
  } if (num === 10){
    return("X");
  }if (num === 50){
    return("L");
  }if (num === 100){
    return("C");
  }if (num === 500){
    return("D");
  }if (num === 1000){
    return("M");
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
