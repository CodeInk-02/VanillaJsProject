# Expense Tracker App

A modern, responsive expense tracking application built with HTML, CSS, and JavaScript. Track your income and expenses with a beautiful, user-friendly interface.

## Features

- **Add Transactions**: Add new income or expense entries with descriptions
- **Real-time Balance**: See your total balance, income, and expenses updated instantly
- **Transaction History**: View all your transactions with dates and amounts
- **Delete Transactions**: Remove unwanted transactions with a single click
- **Local Storage**: Your data persists between browser sessions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## How to Use

1. **Open the App**: Open `index.html` in your web browser
2. **Add Income**: Enter description and amount, then click "Add Income" button
3. **Add Expense**: Enter description and amount, then click "Add Expense" button
4. **View Balance**: See your total balance, total income, and total expenses
5. **Delete Transactions**: Click the trash icon to remove any transaction
6. **Filter Transactions**: Use tabs to view All, Income, or Expense transactions separately

## File Structure

```
Expense_Tracker/
├── index.html      # Main HTML file
├── style.css       # CSS styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Features Explained

### Adding Transactions
- Fill in the description field with what the transaction is for
- Enter the amount (always positive)
- Click "Add Income" for income transactions
- Click "Add Expense" for expense transactions

### Balance Calculation
- **Total Balance**: Sum of all transactions (income - expenses)
- **Income**: Sum of all positive transactions
- **Expense**: Sum of all negative transactions (displayed as positive)

### Data Persistence
- All transactions are saved in your browser's local storage
- Data persists even after closing and reopening the browser
- Sample data is included when you first open the app

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

You can easily customize the app by modifying:

- **Colors**: Update the CSS variables in `style.css`
- **Styling**: Modify the CSS classes for different looks
- **Functionality**: Add new features in `script.js`

## Sample Data

The app comes with sample transactions to demonstrate functionality:
- Salary: ₹5000 (income)
- Grocery Shopping: -₹150 (expense)
- Freelance Work: ₹800 (income)

## License

This project is open source and available under the MIT License. 