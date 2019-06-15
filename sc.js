      var a;
      var b;
      var operacion;

      function init(){
      var result = document.getElementById("result");
      var eici = document.getElementById("eici");
      var plusminus = document.getElementById("plusminus");
      var percent = document.getElementById("percent");
 
      var division = document.getElementById("division");
      var multiplication = document.getElementById("multiplication");
      var minus = document.getElementById("minus");
      var plus = document.getElementById("plus");
      var equals = document.getElementById("equals");

      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var zero = document.getElementById("zero");
      }
      //Eventos
        one.onclick = function(e){
            result.textContent = result.textContent + "1";
        }
        two.onclick = function(e){
            result.textContent = result.textContent + "2";
        }
        three.onclick = function(e){
            result.textContent = result.textContent + "3";
        }
        four.onclick = function(e){
            result.textContent = result.textContent + "4";
        }
        five.onclick = function(e){
            result.textContent = result.textContent + "5";
        }
        six.onclick = function(e){
            result.textContent = result.textContent + "6";
        }
        seven.onclick = function(e){
            result.textContent = result.textContent + "7";
        }
        eight.onclick = function(e){
            result.textContent = result.textContent + "8";
        }
        nine.onclick = function(e){
            result.textContent = result.textContent + "9";
        }
        zero.onclick = function(e){
            result.textContent = result.textContent + "0";
        }
        dot.onclick = function(){
            result.textContent = result.textContent + ".";
        }
        
        //Borrar
        eici.onclick = function(e){
            reset();
        }
        
        //Operaciones
        plus.onclick = function(e){
            a = result.textContent;
            operacion = "+";
            clear();

        }
        minus.onclick = function(e){
            a = result.textContent;
            operacion = "-";
            clear();

        }
        multiplication.onclick = function(e){
            a = result.textContent;
            operacion = "*";
            clear();
        }
        division.onclick = function(e){
            a = result.textContent;
            operacion = "/";
            clear();
        }
        equals.onclick = function(e){
            b = result.textContent;
            resolver();
            
        }
        percent.onclick = function(){
            a = result.textContent;
            operacion = "%";
            clear();
        }


        function clear(){
            result.textContent = "";
          }
        function reset(){
            result.textContent = "";
            a = 0;
            b = 0;
            operacion = "";
          }
        
          function resolver(){
            var res = 0;
            switch(operacion){
              case "+":
                res = parseFloat(a) + parseFloat(b);
                break;
              case "-":
                  res = parseFloat(a) - parseFloat(b);
                  break;
              case "*":
                res = parseFloat(a) * parseFloat(b);
                break;
              case "/":
                res = parseFloat(a) / parseFloat(b);
                break;

            }
            reset();
            result.textContent = res;
          }
