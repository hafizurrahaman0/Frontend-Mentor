let userInputs = document.querySelectorAll(".userInput");
let allErrorMessage = document.querySelectorAll(".error-message");
let image = document.querySelectorAll("img");
let button = document.getElementById("btn");

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) === false) {
        allErrorMessage[2].style.display = 'block';
        userInputs[2].style.border = "1px solid var(--Red)";
        image[2].style.display = 'block';
    } else {
        allErrorMessage[2].style.display = 'none';
        userInputs[2].style.border = "1px solid var(--Green)";
        image[2].style.display = 'none';
    }
};


function main() {
    let firstName = userInputs[0].value;
    let lastName = userInputs[1].value;
    let emailAddress = userInputs[2].value;
    let userPassword = userInputs[3].value;

    if (firstName === "") {
        allErrorMessage[0].style.display = 'block';
        userInputs[0].style.border = "1px solid var(--Red)";
        image[0].style.display = 'block';
    } else {
        allErrorMessage[0].style.display = 'none';
        userInputs[0].style.border = "1px solid var(--Green)";
        image[0].style.display = 'none';
    }

    if (lastName === "") {
        allErrorMessage[1].style.display = 'block';
        userInputs[1].style.border = "1px solid var(--Red)";
        image[1].style.display = 'block';
    } else {
        allErrorMessage[1].style.display = 'none';
        userInputs[1].style.border = "1px solid var(--Green)";
        image[1].style.display = 'none';
    }

    if (userPassword === "") {
        allErrorMessage[3].style.display = 'block';
        userInputs[3].style.border = "1px solid var(--Red)";
        image[3].style.display = 'block';
    } else {
        allErrorMessage[3].style.display = 'none';
        userInputs[3].style.border = "1px solid var(--Green)";
        image[3].style.display = 'none';
    }
    isValidEmail(emailAddress);

}
button.addEventListener("click", () => {
    main();
});