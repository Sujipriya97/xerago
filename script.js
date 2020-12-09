function validateForm() {
    var x = document.forms["myForm"]["name","email"].value;
    if (x == "") {
      alert("Name and Email must be filled out");
      return false;
    }
  }