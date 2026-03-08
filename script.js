// Getting elements from HTML
var form = document.getElementById("userForm");
var greeting = document.getElementById("greeting");
var ageinmonths = document.getElementById("ageinmonths");
var adultmessage = document.getElementById("adultmessage");
var quotes = document.getElementById("quotes");

// Function for calculate months
function calculateMonths(age) {
  var months = age * 12;
  return months;
}

// Form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  // Storing data in localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  displayData();
});

// Function for display data on page
function displayData() {
  var name = localStorage.getItem("name");
  var age = localStorage.getItem("age");

  // Displaying Greeting Message
  greeting.innerHTML = `Hello ${name}! Welcome to the Site`;

  // Displaying Age in months
  var months = calculateMonths(age);
  ageinmonths.innerHTML = "You are " + months + " months old.";
  if (age<0){
     ageinmonths.innerHTML = "";
  }

  // Condition for adult content display
  if (age >= 18) {
    adultmessage.innerHTML = "You are able to access adult content.";
  } else if (age<0){
    adultmessage.innerHTML = "Invalid age";
  }
  else{
    adultmessage.innerHTML = "You are " + age + " years old. "+ "You are ineligible for this type of content";
  }

  // Loop for displaying quote five times
  var message = "";

  for (var i = 1; i <= 5; i++) {
    message = message + "<p>Never give up. Life is just a continuous step in a million mile journey.</p>";
  }

  quotes.innerHTML = message;
}

// Show previously saved data when page loads
window.onload = function () {
  if (localStorage.getItem("name")) {
    displayData();
  }
};
