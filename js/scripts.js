
function findRoman (input) {
  var numerals = [1000, "M", 900, "CM", 500, "D", 100, "C", 90, "XC", 50, 'L', 40, "XL", 10, 'X', 9, "IX", 5, "V", 4, "IV", 1, "I"];
  var chop = input;
  var roman = '';

  for (var i=0;i<numerals.length;i += 2){
    var num = numerals[i];// 1000
    var letter = numerals[i+1];
    if (input === num){
      return letter;
    } else if(input > 3999) {
      return false;
    } else if ((chop / num) >= 1) {//2001 / 1000 = 2.stuff
      roman = multNum(Math.floor(chop/num), letter, roman)
      chop = chop % num;
    } else {
      console.log("i is: " + i);
    }
  }

  //return roman
  return roman;
}
function multNum (times, letter, roman) {//(goes in twice, letter to add, result string)
  var result = roman.split('');
  for (var j=0; j<times; j++) {
    result.push(letter);
  }
  return result.join('');
}

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#words").val());
    var result = findRoman(input);

    if (!result) {
      $("#result").text("Too Big For Rome.");
    } else {
      $("#result").text(result);
    }
  });
});
