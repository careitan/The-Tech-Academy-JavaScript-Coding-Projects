// Get the total sum of elements selected and calculate a value to display
// at end of calculations add the total sum to the InnerHTML value of the element that it is going to display on.
// Create a running listing of the elements in the menu that were selected to build up the listing of items.
function getReceipt() {
	var outText1 = "";
	var outText2 = "";
	var runningTotal = 0;

	// Call first summation function and then each in turn will call the subsequent menu functions.
	// after the last calling function code should call render output function.
	sumSize(runningTotal, outText1, outText2);	
}

// This code clears out the form and hides it from display, and resets the menu form.
function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("Receipt").style.opacity = 0;
}


function renderAll(runningTotal, outText1, outText2) {
	document.getElementById("showText1").innerHTML = outText1;
	document.getElementById("showText2").innerHTML = outText2;
	document.getElementById("totalPrice2").innerHTML = "<h3>$" + runningTotal + ".00</h3>";
	document.getElementById("Receipt").style.opacity = 1;
}

function sumSize(runningTotal, outText1, outText2) {
	var sizeTotal = 0;
	var sizeArray = document.getElementsByName("size");

	// Create the text1 output displsy of the name of the value element.
	for (var i = 0; i <= sizeArray.length - 1; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			outText1 = outText1 + selectedSize + "<br>";
		}
	}
	// Check for numeric value to add to the text2 output and the running total.
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		outText2 = outText2+"$"+sizeTotal+".00<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		outText2 = outText2+"$"+sizeTotal+".00<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		outText2 = outText2+"$"+sizeTotal+".00<br>";
	} else if (selectedSize === "Extra-Large Pizza") {
		sizeTotal = 16;
		outText2 = outText2+"$"+sizeTotal+".00<br>";
	}
	runningTotal += sizeTotal;

	// Pass vsrisbles along to the next calulation function.
	sumMeats(runningTotal, outText1, outText2);
}

function sumMeats(runningTotal, outText1, outText2) {
	var tempTotal = 0;

	// StackOverflow article: https://stackoverflow.com/questions/4735865/processing-checkbox-group-into-string
	var vals = [], meats =  document.forms['frmMenu']['meats[]'];
	for(var i=0,elm;elm = meats[i];i++) {
	    if(elm.checked) {
	        vals.push(elm.value + "<br>");
	        tempTotal++;
	    }
	}
	outText1 += vals.join('');

	// process column two data
	if (tempTotal == 1) {
		// one topping only free.
		outText2 = outText2+"$0.00<br>";
	} else if (tempTotal > 1) {
		var vals = [];
		vals.push("$0.00<br>");
		for (var i = 1; i < tempTotal; i++) {
			vals.push("$1.00<br>");
		}
		outText2 += vals.join('');
		runningTotal += tempTotal - 1;
	}

	sumVeggies(runningTotal, outText1, outText2);
}

function sumVeggies(runningTotal, outText1, outText2) {
	var tempTotal = 0;

	// StackOverflow article: https://stackoverflow.com/questions/4735865/processing-checkbox-group-into-string
	var vals = [], veggies =  document.forms['frmMenu']['veggies[]'];
	for(var i=0,elm;elm = veggies[i];i++) {
	    if(elm.checked) {
	        vals.push(elm.value + "<br>");
	        tempTotal++;
	    }
	}
	outText1 += vals.join('');

	// process column two data
	if (tempTotal == 1) {
		// one topping only free.
		outText2 = outText2+"$0.00<br>";
	} else if (tempTotal > 1) {
		var vals = [];
		vals.push("$0.00<br>");
		for (var i = 1; i < tempTotal; i++) {
			vals.push("$1.00<br>");
		}
		outText2 += vals.join('');
		runningTotal += tempTotal - 1;
	}

	sumCheese(runningTotal, outText1, outText2);
}

function sumCheese(runningTotal, outText1, outText2) {
	var tempTotal = 0;
	var tempArray = document.getElementsByName("cheese");

	// Create the text1 output displsy of the name of the value element.
	for (var i = 0; i <= tempArray.length - 1; i++) {
		if (tempArray[i].checked) {
			var tempValue = tempArray[i].value;
			outText1 = outText1 + tempValue + "<br>";
		}
	}

	// Check for numeric value to add to the text2 output and the running total.
	if (tempValue === "Regular Cheese") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "No Cheese") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "Extra Cheese") {
		tempTotal = 3;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	}
	runningTotal += tempTotal;	

	// Pass variabke set slong to the next calling fumction.
	sumSauce(runningTotal, outText1, outText2);
}

function sumSauce(runningTotal, outText1, outText2) {
	var tempTotal = 0;
	var tempArray = document.getElementsByName("sauce");

	// Create the text1 output displsy of the name of the value element.
	for (var i = 0; i <= tempArray.length - 1; i++) {
		if (tempArray[i].checked) {
			var tempValue = tempArray[i].value;
			outText1 = outText1 + tempValue + "<br>";
		}
	}

	// Check for numeric value to add to the text2 output and the running total.
	if (tempValue === "Marinara Sauce") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "White Sauce") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "Barbeque Sauce") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "No Sauce") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	}
	runningTotal += tempTotal;	

	sumCrust(runningTotal, outText1, outText2);
}

function sumCrust(runningTotal, outText1, outText2) {
	var tempTotal = 0;
	var tempArray = document.getElementsByName("crust");

	// Create the text1 output displsy of the name of the value element.
	for (var i = 0; i <= tempArray.length - 1; i++) {
		if (tempArray[i].checked) {
			var tempValue = tempArray[i].value;
			outText1 = outText1 + tempValue + "<br>";
		}
	}

	// Check for numeric value to add to the text2 output and the running total.
	if (tempValue === "Plain Crust") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "Garlic Butter Crust") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "Cheese Stuffed Crust") {
		tempTotal = 3;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "Spicy Crust") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	} else if (tempValue === "House Special Crust") {
		tempTotal = 0;
		outText2 = outText2+"$"+tempTotal+".00<br>";
	}
	runningTotal += tempTotal;	

	renderAll(runningTotal, outText1, outText2);
}