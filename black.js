import { useEffect, useState } from "react";

export default function Black() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Esse código só roda no cliente
    setTitle(document.title); 
  }, []);

  return (
    <div>
      <h1>Página Black</h1>
      <p>O título da página é: {title}</p>
    </div>
  );
}








let currentStep = 1;
const totalSteps = 6;

function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // Show requested step
    const targetStep = document.getElementById(`step-${stepNumber}`);
    if (targetStep) {
        targetStep.classList.add('active');
        currentStep = stepNumber;
        updateProgress();
    }
}

function nextStep(targetStepNumber) {
    // If moving to the "Analyzing" step (Step 5), handle the delay
    if (targetStepNumber === 5) {
        showStep(5);
        setTimeout(() => {
            nextStep(6);
        }, 3000); // 3 seconds delay
    } else {
        showStep(targetStepNumber);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});
