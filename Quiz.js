function checkQuiz() {
    let score = 0;
    // Fill in the blank validation
    if (document.getElementById('q1').value.toLowerCase() === 'html') score++;
    // Multi-select validation
    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    const q2Values = Array.from(q2).map(cb => cb.value);
    if (q2Values.includes('HTML') && q2Values.includes('CSS') && q2Values.length === 2) {
        score++;}
    // Multiple choice validation
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'Cascading Style Sheet') score++;

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'Hyper Text Markup Language') score++;

    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'Sir Tim Berners-Lee') score++;

    const resultContainer = document.getElementById('results-container');
    const passFail = document.getElementById('pass-fail-text');
    const scoreText = document.getElementById('total-score-text');

    resultContainer.style.display = 'block';
    scoreText.innerText = `Final Score: ${score} /5`;
            
    if (score >= 4) {
        passFail.innerText = "RESULT: PASSED";
        passFail.className = "pass";
    } 
    else {
    passFail.innerText = "RESULT: FAILED";
    passFail.className = "fail";
    }}
function resetQuiz() {
    // Clear inputs
    document.getElementById('quizForm').reset();
    // Reset buttons
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('reset-btn').style.display = 'none';
            
    window.scrollTo(0, 0);
}
