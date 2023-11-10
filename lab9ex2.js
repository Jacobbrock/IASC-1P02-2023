function getBirthYear() {
    var age = Number(prompt("Please enter your age"));
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;
    document.getElementById("birthYear").innerHTML = "Your birth year is " + birthYear;
}
