# Roman Numberals

#### A program that allows users to input a word and determine its raw Scrabble score, assuming no special tiles. 6/1/17

#### By **Marilyn Carlin and David Wilson**

## Description

A website created with C# and HTML where a user can submit a word and determine its raw Scrabble score.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Program Gathers User Input** | User input: "49" | Output: "49" |
| **Program differentiates between numbers and letters**| User Input: "pants pants" | Output: "not a number" |
| **Program translates 1 into I**| Input: "1" | Output: "I" |
| **Program translates 5 into V**| Input: "5" | Output: "V" |
| **Program translates 10 into X**| Input: "10" | Output: "X" |
| **Program translates number into numeral**| Input: "1000" "500" "100" "50"| Output: "M" "D" "C" "L"|
| **Program convert large numbers into roman numerals**| Input: "4" "454" | Output: "IIII" "CCCCLIIII"|
| **Program fixes invalid numerals**| Input: "4" | Output: "IV" "CDLIV"|

## Setup/Installation Requirements

1. To run this program, you must have a C# compiler. I use [Mono](http://www.mono-project.com).
2. Install the [Nancy](http://nancyfx.org/) framework to use the view engine. Follow the link for installation instructions.
3. Clone this repository.
4. Open the command line--I use PowerShell--and navigate into the repository. Use the command "dnx kestrel" to start the server.
5. On your browser, navigate to "localhost:5004" and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* C#
  * Nancy framework
  * Razor View Engine
  * ASP.NET Kestrel HTTP server
  * xUnit

* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Marilyn Carlin, David Wilson}_**
