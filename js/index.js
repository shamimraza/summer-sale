function checkAndEnable() {
    // Simulating the condition SELL200
    var conditionMet = true;  // Set to true for demonstration purposes
  
    if (conditionMet) {
      var button = document.getElementById("sellButton");
      button.disabled = true;  // Disable the button
  
      setTimeout(function() {
        button.disabled = false;  // Enable the button again after a delay
        alert("Button is enabled again!");
      }, 3000);  // Delay in milliseconds (3 seconds in this case)
    }
  }