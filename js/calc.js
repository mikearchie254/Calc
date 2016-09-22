//Time Functions
var d=new Date();
document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes();
//Calculator Functions
var calculator = 
{
  screen: document.getElementById('screen'),
  digits: document.getElementsByClassName('digit'),
  clear: document.getElementById('clear'),
  dot: document.getElementById('dot'),
  plus: document.getElementById('plus'),
  equal: document.getElementById('equal'),
  minus: document.getElementById('minus'),
  negate: document.getElementById('negate'),
  divide: document.getElementById('divide'),
  percentage: document.getElementById('percentage'),
  multi: document.getElementById('multi'),

  dotClicked: false,
  shouldClearScreen: false,

  //MATHS OPERATIONS
  //addition
  addition: function(argument1, argument2)
  {
    return argument1+argument2;
  },
  //subtraction
  subtraction: function(argument1, argument2)
  {
    return argument1-argument2;
  },
  //multiplication
  multiply: function(argument1, argument2)
  {
    return argument1*argument2;
  },
  //division
  divided: function(argument1, argument2)
  {
    return argument1/argument2;
  },
  //percentage
  percent: function(argument1)
  {
      return argument1* 0.01;
  },
  //negate
  negation: function (argument1)
  {
      return argument1* -1;
  },

// BUTTON FUNCTIONS
  start: function() 
  {
    console.log(calculator.multiply);
    for(var i = 0; i < calculator.digits.length; i++) 
    {
       calculator.digits[i].onclick = function(event) 
       {
         var chislo = event.target.innerHTML;
         if (calculator.shouldClearScreen) 
         {
           calculator.screen.innerHTML = chislo;
           calculator.shouldClearScreen = false;
         } else 
         {
           calculator.screen.innerHTML = calculator.screen.innerHTML+chislo;
         }
       }
     }
     //Clear button
     calculator.clear.onclick = function() 
     {
       calculator.screen.innerHTML = '';
       calculator.dotClicked = false;
     }
     //decimal button
     calculator.dot.onclick = function(event)
     {
       if (!calculator.dotClicked)
       {
         var dot = event.target.innerHTML;
         if (calculator.shouldClearScreen)
         {
          calculator.screen.innerHTML = "0" + dot;
          calculator.shouldClearScreen = false;
        }
        else
        {
          calculator.screen.innerHTML = calculator.screen.innerHTML+dot;
        }
         calculator.dotClicked = true;
       }
     }
     //addition
     calculator.plus.onclick = function()
     {
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "addition";
       calculator.dotClicked = false;
     }
     //equal button
     calculator.equal.onclick = function()
     {
       calculator.argument2 = parseFloat(calculator.screen.innerHTML);
       var result = calculator[calculator.operation](calculator.argument1, calculator.argument2);
       calculator.screen.innerHTML = result;
       calculator.dotClicked = false;
     }
     //minus button
     calculator.minus.onclick = function(){
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "subtraction";
       calculator.dotClicked = false;
     }
     //multiply button
     calculator.multi.onclick = function()
     {
       console.log("Olya");
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "multiply";
       calculator.dotClicked = false;
     }
     //divide button
     calculator.divide.onclick = function()
     {
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "divided";
       calculator.ditClicked = false;
     }
     //percent button
     calculator.percentage.onclick = function()
     {
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "percent";
       calculator.ditClicked = false;
     }
     //negate
     calculator.negate.onclick = function()
     {
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "negation";
       calculator.ditClicked = false;
     }
   }
};
calculator.start();