const params = new URLSearchParams(window.location.search);

const studentEmail = params.get("studentEmail");
const emailElement = document.getElementById("studentEmail");
const startButton = document.getElementById("startButton");

if (studentEmail && studentEmail !== "0") {

    if (emailElement) {
        emailElement.textContent = studentEmail;
    }

    if (startButton) {
        startButton.classList.remove("d-none");
    }

}