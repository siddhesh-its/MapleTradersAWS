//Calculating the future value
function calculateInvestment() {
    var investmentAmount = document.getElementById("amount").value;
    var noOfYear = document.getElementById("year").value;
    var rateOfInterest = document.getElementById("rate").value;
  
    //validate input
    if (investmentAmount === "" || noOfYear == 0 || rateOfInterest === "") {
      alert("Please enter values");
      return;
    }
  
    //check to see if this input is empty or less than or equal to 1
    if (rateOfInterest === "" || rateOfInterest <= 1) {
        rateOfInterest = 1;
      document.getElementById("futureAmount").style.display = "block";
    } else {
      document.getElementById("futureAmount").style.display = "block";
    }
  
    //calculate tip
    var total = [investmentAmount * (rateOfInterest / 100) * noOfYear];
  
    var grandTotal = parseFloat(total) + parseFloat(investmentAmount);
  
    //round to two decimal places
    grandTotal = Math.round(grandTotal * 100) / 100;
  
    //next line allows us to always have two digits after decimal point
    grandTotal = grandTotal.toFixed(2);
  
    //display the tip
    document.getElementById("interest").style.display = "block";
    document.getElementById("future").innerHTML = grandTotal;
  }
  
  //hide the tip amount on load
  document.getElementById("interest").style.display = "none";
  document.getElementById("futureAmount").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateInvestment();
  };
  