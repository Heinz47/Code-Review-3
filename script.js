		var button=  document.getElementById('button');
		// button.addEventListener('click', function(){
		// 	console.log("test");
		// })
		button.addEventListener("click",myFunction)
    	
    	
    	function myFunction(){
    	
    		var name = document.getElementById('Yourname').value;
    		var number = parseInt(document.getElementById('Age').value);
   			var select = document.getElementById('select').value;
   			var number1 = parseInt(document.getElementById('Horsepower').value);
   			console.log(typeof(name), typeof(number),typeof(select),typeof(number1));
   			console.log(name,number,select,number1);
  			
//   			(20) Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

			if(select=="Austria"){
				insurance = number1 * 100 / number   + 50;
			}else if(select=="Greece"){
				insurance= number1 * 150 / (number+3)  + 50;
			}else{
				 insurance = number1 * 120 / number  + 100;
			}


   		 document.getElementById("result").innerHTML = (" " + name + ", your insurance costs " + insurance + "€ .");
   		}

   		