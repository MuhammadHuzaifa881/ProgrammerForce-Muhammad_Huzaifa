var registration = document.getElementById("registration");
// display Error Message
const fullNameError = document.getElementById("fullNameError");
const UserNameError = document.getElementById("UserNameError");
const phoneNumberError = document.getElementById("phoneNumberError");
const passwordError = document.getElementById("passwordError");
const EmailError = document.getElementById("EmailError");

registration.addEventListener("submit", function (e) {
  e.preventDefault();

  var fullNameInput = document.getElementById("fullName");
  var usernameInput = document.getElementById("userName");
  var phoneNumberInput = document.getElementById("phoneNumber");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var degreeCourseSelect = document.getElementById("degreeCourse");
  var yearsSelect = document.getElementById("yearsSelect");
  var courseNameSelect = document.getElementById("courseName");

  if (
    validateForm(
      fullNameInput,
      usernameInput,
      phoneNumberInput,
      emailInput,
      passwordInput
    )
  ) {
    submitForm(
      fullNameInput,
      usernameInput,
      phoneNumberInput,
      emailInput,
      passwordInput,
      degreeCourseSelect,
      yearsSelect,
      courseNameSelect
      //for clr errr
    );
  }
});
//   form submit after validation
registration.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    registration.submit();
  }
  showtoconsole();

});
function showtoconsole(){
  var fullNameInput = document.getElementById("fullName").value;
  var usernameInput = document.getElementById("userName").value;
  var phoneNumberInput = document.getElementById("phoneNumber").value;
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;
  var degreeCourseSelect = document.getElementById("degreeCourse").value;
  var yearsSelect = document.getElementById("yearsSelect").value;
  var courseNameSelect = document.getElementById("courseName").value;
  const showJSON={
    FullName:fullNameInput,
    userName:usernameInput,
    phoneNumber:phoneNumberInput,
    email:emailInput,
    password:passwordInput,
    degree:degreeCourseSelect,
    year:yearsSelect,
    course:courseNameSelect
  }
  console.log(showJSON)
}
function validateForm() {
  var fullNameInput = document.getElementById("fullName").value;
  var usernameInput = document.getElementById("userName").value;
  var phoneNumberInput = document.getElementById("phoneNumber").value;
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;

  // Full name validation
  var RegexNameInput = /^[a-zA-Z]{10}$/;
  if (!fullNameInput.match(RegexNameInput) && fullNameInput.length < 10) {
    fullNameError.textContent = "Invalid full name or length less than 10 characters";
    return false;
  }
  // if (!fullNameInput.match(Regex_FullNameInput)) {
  //   fullNameError.textContent = "Full name must be exactly 10 characters";
  //   return false;
  // } else if (fullNameInput.length < 10) {
  //   fullNameError.textContent = "Full name must be at least 10 characters long";
  //   return false;
  // } else {
  //   fullNameError.textContent = ""; // Clear the error message
  // }

  // UserName validation
  if (usernameInput.length < 9) {
    UserNameError.textContent = "Please Enter UserName correctly";
    return false;
  } else if (usernameInput.includes(" ")) {
    UserNameError.textContent =
      "UserName must be unique and cannot contain white space";
    return false;
  } else {
    UserNameError.textContent = "";
  }

  // phoneNumber validation
  var Regex_phoneNumberInput = /^[0-9]{11}$/;
  if (!phoneNumberInput.match(Regex_phoneNumberInput)) {
    phoneNumberError.textContent = "Phone Number must be 11 digits";
    return false;
  } else {
    phoneNumberError.textContent = "";
  }
  //Password validation
  if (passwordInput.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
    return false;
  } else {
    passwordError.textContent = "";
  }

  // Email validation
  var Regex_emailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.match(Regex_emailInput)) {
    EmailError.textContent = "Email id is incorrect";
    return false;
  } else {
    EmailError.textContent = "";
  }
  return true;
}
function passwordvisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("showPassword");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
// All 3 dropdown and their functions
function TimePeriod() {
  var degreelist = document.getElementById("degreeCourse").value;
  var year = document.getElementById("yearsSelect");
  var subject = document.getElementById("courseName");

  degreelist.innerHTML = "";
  subject.innerHTML = "";

  if (degreelist != "") {
    year.hidden = false;
    // subject.hidden = false;
    if (degreelist === "ba") {
      var option = document.createElement("option");
      option.value = "2 years";
      option.text = "2 Years";
      year.appendChild(option);
      // var option1 = new Option("Physics", "physics");
      // var option2 = new Option("Chemistry", "chemistry");
      // var option3 = new Option("Mathematics", "mathematics");
      // subject.add(option1);
      // subject.add(option2);
      // subject.add(option3);
    } else if (degreelist == "bsc") {
      var option = document.createElement("option");
      option.value = "3 years";
      option.text = "3 Years";
      year.appendChild(option);
      // var option1 = new Option("English", "english");
      // var option2 = new Option("History", "history");
      // var option3 = new Option("Economics", "economics");
      // subject.add(option1);
      // subject.add(option2);
      // subject.add(option3);
    } else if (degreelist == "btech") {
      var option = document.createElement("option");
      option.value = "4 years";
      option.text = "4 Years";
      year.appendChild(option);
      // var option1 = new Option("Computer Science", "cs");
      // var option2 = new Option("Electrical Engineering", "ee");
      // var option3 = new Option("Mechanical Engineering", "me");
      // subject.add(option1);
      // subject.add(option2);
      // subject.add(option3);
      // TotalYears()
    } else {
      year.hidden = true;
    }
  }
  mycourse();
}
function mycourse() {
  var year = document.getElementById("yearsSelect").value;
  var subject = document.getElementById("courseName");

  subject.innerHTML = " ";
  if (year != "") {
    subject.hidden = false;
    if (year === "2 years") {
      var BaSubjects = ["Physics", "Chemistry", "Mathematics"];
      BaSubjects.forEach(function (mysubject) {
        var option = document.createElement("option");
        option.value = mysubject;
        option.text = mysubject;
        subject.appendChild(option);
        console.log(option);
      });
    } else if (year === "3 years") {
      var Bscsubjects = ["English", "History", "Economics"];
      Bscsubjects.forEach(function (mysubject) {
        var option = document.createElement("option");
        option.value = mysubject;
        option.text = mysubject;
        subject.appendChild(option);
      });
    } else if (year === "4 Years") {
      var btech = [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
      ];
      btech.forEach(function (mysubject) {
        var option = document.createElement("option");
        option.value = mysubject;
        option.text = mysubject;
        subject.appendChild(option);
        console.log(option);
      });
    }
  } else {
    subject.hidden = true;
  }
}

/* <script>
        function degreeSelection(){
            var degree=document.getElementById("degree");
           
            if(degree.value!=""){
                document.getElementById("degreetype").hidden=false;
            }else{
                document.getElementById("degreetype").hidden=true;
            }
        }
        function degreeNametype(){
            var degreetype=document.getElementById("degreetype").value;
            var Totalyear=document.getElementById("Totalyear");
            if(degreetype!=""){
                Totalyear.hidden=false;
                // Totalyear.disabled=true;
                if(degreetype==="Bachelor"){
                    Totalyear.value="4 Year"
                } else if (degreetype==="Master"){
                    Totalyear.value="2 Year"
                } else if(degreetype==="PhD"){
                    Totalyear.value="3 Year"
                }
            }
        }
    </script>  */

// var selectedDegree = degreelist.value;
// if (selectedDegree != "") {
//   degreelist.hidden = false;
//   if (selectedDegree === "bsc") {
//     var option1 = new Option("Physics", "physics");
//     var option2 = new Option("Chemistry", "chemistry");
//     var option3 = new Option("Mathematics", "mathematics");
//     subject.add(option1);
//     subject.add(option2);
//     subject.add(option3);
//   } else if (selectedDegree === "ba") {
//     var option1 = new Option("English", "english");
//     var option2 = new Option("History", "history");
//     var option3 = new Option("Economics", "economics");
//     subject.add(option1);
//     subject.add(option2);
//     subject.add(option3);
//   } else if (selectedDegree === "btech") {
//     var option1 = new Option("Computer Science", "cs");
//     var option2 = new Option("Electrical Engineering", "ee");
//     var option3 = new Option("Mechanical Engineering", "me");
//     subject.add(option1);
//     subject.add(option2);
//     subject.add(option3);
//   }
// }
//   function displayTotalYears() {
//     var courseSelect = document.getElementById("courseSelect");
//     var yearsSelect = document.getElementById("yearsSelect");

//     yearsSelect.innerHTML = ""; // Clear previous options

//     var selectedOption = courseSelect.options[courseSelect.selectedIndex];
//     var totalYears = selectedOption.textContent.split(" ")[1];

//     if (totalYears) {
//       for (var i = 1; i <= parseInt(totalYears); i++) {
//         var option = new Option(i + " year(s)", i);
//         yearsSelect.add(option);
//       }
//     }
//   }
