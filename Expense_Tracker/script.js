// Get DOM elements
const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const form = document.getElementById('form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transaction-list');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');
const tabBtns = document.querySelectorAll('.tab-btn');
const transactionSections = document.querySelectorAll('.transaction-section');

// Get transactions from localStorage
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Initialize the app
function init() {
    transactionList.innerHTML = '';
    incomeList.innerHTML = '';
    expenseList.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

// Add transaction to DOM
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add('transaction-item');
    
    item.innerHTML = `
        <div class="transaction-info">
            <div class="transaction-description">${transaction.description}</div>
            <div class="transaction-date">${transaction.date}</div>
        </div>
        <div class="transaction-amount ${transaction.amount < 0 ? 'negative' : 'positive'}">
            ${sign}₹${Math.abs(transaction.amount).toFixed(2)}
        </div>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">
            <i class="fas fa-trash"></i>
        </button>
    `;
    
    // Add to all transactions list
    transactionList.appendChild(item.cloneNode(true));
    
    // Add to specific list based on type
    if (transaction.amount > 0) {
        // Income transaction
        const incomeItem = item.cloneNode(true);
        incomeList.appendChild(incomeItem);
    } else {
        // Expense transaction
        const expenseItem = item.cloneNode(true);
        expenseList.appendChild(expenseItem);
    }
}

// Update balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0) * -1)
        .toFixed(2);
    
    balanceEl.innerText = `₹${total}`;
    incomeEl.innerText = `₹${income}`;
    expenseEl.innerText = `₹${expense}`;
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 1000000000);
}

// Add new income transaction
function addIncome() {
    if (descriptionInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please add a description and amount');
        return;
    }
    
    const amount = parseFloat(amountInput.value);
    if (amount <= 0) {
        alert('Please enter a positive amount for income');
        return;
    }
    
    const transaction = {
        id: generateID(),
        description: descriptionInput.value.trim(),
        amount: amount,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();
    
    descriptionInput.value = '';
    amountInput.value = '';
}

// Add new expense transaction
function addExpense() {
    if (descriptionInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please add a description and amount');
        return;
    }
    
    const amount = parseFloat(amountInput.value);
    if (amount <= 0) {
        alert('Please enter a positive amount for expense');
        return;
    }
    
    const transaction = {
        id: generateID(),
        description: descriptionInput.value.trim(),
        amount: -amount, // Make it negative for expense
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();
    
    descriptionInput.value = '';
    amountInput.value = '';
}

// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

// Update localStorage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and sections
    tabBtns.forEach(btn => btn.classList.remove('active'));
    transactionSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding section
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-transactions`).classList.add('active');
}

// Event listeners
// Add tab click listeners
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
    });
});

// Initialize app
init();

// Add some sample data if no transactions exist
if (transactions.length === 0) {
    const sampleTransactions = [
        {
            id: generateID(),
            description: 'Salary',
            amount: 5000,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        },
        {
            id: generateID(),
            description: 'Grocery Shopping',
            amount: -150,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        },
        {
            id: generateID(),
            description: 'Freelance Work',
            amount: 800,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }
    ];
    
    transactions = sampleTransactions;
    updateLocalStorage();
    init();
} 