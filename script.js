// Global variable to demonstrate scope
let globalCounter = 0;

//Function with parameters and return value
function calculateSum(a, b) {
    let result = a + b;
    let message = `Sum of ${a} and ${b} is ${result}`;
    return { result: result, message: message };
}

/**
 * Function demonstrating scope differences
 * Shows: Global vs local variable access
 */
function demonstrateScope() {
    let localVariable = "I'm local";
    globalCounter++;
    
    return {
        local: localVariable,
        global: globalCounter,
        scopeInfo: "Local variables only exist within functions"
    };
}

//Shows: Parameter handling, conditional logic

function formatUserInfo(name, age, city) {
    if (!name || !age || !city) {
        return "Missing required information";
    }
    return `${name} is ${age} years old and lives in ${city}`;
}

/**
 * Reusable utility function
 * Shows: Function reusability, array manipulation
 */
function getRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Main demonstration function
function demonstrateFunctions() {
    const resultsDiv = document.getElementById('functionResults');
    
    // Test calculateSum function
    const sumResult = calculateSum(15, 25);
    
    const scopeResult = demonstrateScope();
    
    const userInfo = formatUserInfo("Alice", 28, "New York");
    
    const randomColor = getRandomColor();
    
    // Display results using DOM manipulation
    resultsDiv.innerHTML = `
        <strong>Function Results:</strong><br>
        1. ${sumResult.message}<br>
        2. Scope Demo - Local: "${scopeResult.local}", Global Counter: ${scopeResult.global}<br>
        3. User Info: ${userInfo}<br>
        4. Random Color: ${randomColor}<br>
        5. ${scopeResult.scopeInfo}
    `;
    
    // Use utility function to change styling
    resultsDiv.style.backgroundColor = randomColor;
    resultsDiv.style.color = 'white';
}


//shows: DOM interaction, CSS class toggling 
function toggleFadeBox() {
    const fadeBox = document.getElementById('fadeBox');
    fadeBox.classList.toggle('hidden'); // Add/remove CSS class to trigger animation
}

//Card flip functionality Shows: CSS 3D transforms triggered by JavaScript
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped'); 
}

//Loading animation toggle. animations controlled by JavaScript
function toggleLoading() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.classList.toggle('active'); 
}

//Shows complex CSS animations triggered by JavaScript
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show'); 
}


function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); 
}


function animateElement(elementId, animationClass, duration = 1000) {
    const element = document.getElementById(elementId);
    
    if (!element) {
        return "Element not found"; 
    }
    
    element.classList.add(animationClass); 
    
    // Remove class after animation completes 
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, duration);
    
    return `Animation applied to ${elementId} for ${duration}ms`; 
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - CSS and JavaScript ready!');
    
    // functions can be called on page load
    const initMessage = calculateSum(5, 3);
    console.log(initMessage.message);
    
    // Example of calling reusable function
    console.log(demonstrateScope());
});