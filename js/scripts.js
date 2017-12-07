
function findRoman (input) {
  var numerals = [1000, "M" , 500, "D", 100, "C", 50, 'L', 10, 'X', 5, "V", 1, "I"]
  var chop = input
  var roman = ''

  for (var i=0;i<numerals.length;i += 2){
    var num = numerals[i];
    var letter = numerals[i+1]
    if (input === num){
      return letter
    } else if(input > 9000) {
      return "Too Big For Namek"
    } else if(input > 3999) {
      return "Too Big For Rome"
    } else if ((chop / num) >= 1) {
      roman = multNum(Math.floor(chop/num), letter, roman)
      chop = chop % num
    } else {
      console.log("i is" + i);
    }
  }

  return roman
  //return fixRoman(roman)
}
function multNum (times, letter, roman) {//(goes in twice, letter to add, result string)
  var result = roman.split('');
  for (var j=0; j<times; j++) {
    result.push(letter);
  }
  return result.join('');
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
