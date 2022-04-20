const buttons = document.querySelectorAll('.btn');
const inputBox = document.getElementById('inputBox');
const allClearBtn = document.querySelector('.allClearBtn');
const equalsBtn = document.querySelector('.equalsBtn');
const expressionBox = document.querySelector('.expressionBox')
const clearBtn = document.querySelector('.clearBtn');
const themeBtn = document.querySelector('.themeBtn');
const mainContainer = document.querySelector('.main-container');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        expressionBox.append(e.target.innerText);
    });
});

const allClear = () => {
    allClearBtn.addEventListener('click', () => {
        inputBox.textContent = "";
        expressionBox.textContent = "";
    });
};

const equals = () => {
    equalsBtn.addEventListener('click', () => {        
        inputBox.textContent = eval(expressionBox.textContent);
    });
};

const Clear = () => {
    clearBtn.addEventListener("click", () => {
        expressionBox.textContent = expressionBox.textContent.slice(0, -1);
    });
};

themeBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("active");
    inputBox.classList.toggle("active");
    expressionBox.classList.toggle("active");
    equalsBtn.classList.toggle("active");
    allClearBtn.classList.toggle("active");
    clearBtn.classList.toggle("active");
    buttons.forEach((button) => {
        button.classList.toggle("active");
    });
});

allClear();
Clear();
equals();