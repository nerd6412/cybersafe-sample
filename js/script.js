window.onload = loadNextStep; // Call loadNextStep on page load

// array containing questions and answers
const steps = [
    {
        step: "STEP 1",
        description: ["Change all compromised passwords."],
    },
    {
        step: "STEP 2",
        description: ["Notify your bank and credit card companies."],
    },
    {
        step: "STEP 3",
        description: ["Contact relevant authorities to report the breach."],
    },
    {
        step: "STEP 4",
        description: ["Monitor your accounts for suspicious activity."],
    }
];

let currentStep = 0;

const stepElement = document.getElementById("step");
const descriptionElement = document.getElementById("description");
const nextButton = document.getElementById("next-btn");

function loadNextStep() {
    const currentStepData = steps[currentStep];
    stepElement.innerText = currentStepData.step;
    descriptionElement.innerHTML = "";
    currentStepData.description.forEach((description, index) => {
        const li = document.createElement("li");
        li.innerText = description;
        li.addEventListener("click", () => checkAnswer(index));
        descriptionElement.appendChild(li);
    });
}

// function to show next question after clicking next
function nextStep() {
    currentStep++;
    if (currentStep < steps.length) {
        loadNextStep();
    } else {
        endSteps();
    }
}

nextButton.addEventListener("click", nextStep);

// terminates quiz when there are no more questions
function endSteps() {
    stepElement.innerText = "Success! Your data is now secured.";
    descriptionElement.innerHTML = "";
    nextButton.style.display = "none";
}