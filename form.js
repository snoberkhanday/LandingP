let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let dateOfBirth = document.getElementById("dateOfBirth");
let userImg = document.getElementById("output");

let studentDetails = [
  {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    userImg: "",
  },
];

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

function submitForm(event) {
  event.preventDefault();
  studentDetails.firstName = firstName.value;
  studentDetails.lastName = lastName.value;
  studentDetails.email = email.value;
  studentDetails.phone = phone.value;
  studentDetails.address = address.value;
  studentDetails.dateOfBirth = dateOfBirth.value;
  studentDetails.userImg = userImg;

  if (studentDetails.firstName == "") {
    alert("Please Enter Your First Name!");
  } else if (studentDetails.lastName == "") {
    alert("Please Enter Your Last Name!");
  } else if (studentDetails.email == "") {
    alert("Please Enter Your Email!");
  } else if (
    !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(studentDetails.email)
  ) {
    alert("You have entered an invalid email address!");
  } else if (studentDetails.phoneNumber == "") {
    alert("Please Enter Your Phone Number!");
  } else if (!studentDetails.phoneNumber.match(/^\d{10}$/)) {
    alert("Plese Enter Youe Correct Phone Number");
  } else if (studentDetails.address == "") {
    alert("Please Enter Your Address!");
  } else if (studentDetails.dateOfBirth == "") {
    alert("Please Enter Your Date OF Birth!");
  } else if (studentDetails.userImg == "") {
    alert("Please Upload Your Profile Picture!");
  } else {
    console.log(studentDetails);
  }

//   if (studentDetails.firstName == "") {
//     document.getElementById("firstName").innerHTML =
//       "Please Enter Your First Name!";
//   } else if (studentDetails.lastName == "") {
//     document.getElementById("lastName").innerHTML =
//       "Please Enter Your Last Name !";
//   } else if (studentDetails.email == "") {
//     document.getElementById("emailId").innerHTML = "Please Enter Your Email!";
//   } else if (
//     !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(studentDetails.email)
//   ) {
//     document.getElementById("emailID").innerHTML =
//       "You have entered an invalid email address!";
//   } else if (studentDetails.phoneNumber == "") {
//     document.getElementById("emailID").innerHTML =
//       "Please Enter Your Phone Number!";
//   } else if (!studentDetails.phoneNumber.match(/^\d{10}$/)) {
//     alert("Plese Enter Youe Correct Phone Number");
//   } else if (studentDetails.address == "") {
//     alert("Please Enter Your Address!");
//   } else if (studentDetails.dateOfBirth == "") {
//     alert("Please Enter Your Date OF Birth!");
//   } else if (studentDetails.userImg == "") {
//     alert("Please Upload Your Profile Picture!");
//   } else {
//     console.log(studentDetails);
//   }
// }

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitForm);
