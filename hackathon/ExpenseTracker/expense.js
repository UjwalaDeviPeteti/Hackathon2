let expenses=[];
function expenseadd(am,ca,date){
    const exp={am,ca,date,id:Date.now()};
    expenses.push(exp);
    renderexp();
}
function renderexp() {
    const tbody = document.getElementById('expensebody');
    tbody.innerHTML = '';
    expenses.forEach(exp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${exp.am}</td>
            <td>${exp.ca}</td>
            <td>${exp.date}</td>
            <td class="actions">
                <button style="background-color:blue;color:white;font-size:20px;" onclick="editExpense(${exp.id})">✎</button>
                <button  style="background-color:red;color:white;font-size:20px;" onclick="deleteExpense(${exp.id})">🗑</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
document.getElementById('expense').addEventListener('submit', function(event) {
    event.preventDefault();
    const am = document.getElementById('am').value;
    const ca = document.getElementById('ca').value;
    const date = document.getElementById('date').value;
expenseadd(am, ca, date);
    event.target.reset();
});


function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    renderexp();
}


function editExpense(id) {
    const expense = expenses.find(exp => exp.id === id);
    if (expense) {
        document.getElementById('am').value = expense.am;
        document.getElementById('ca').value = expense.ca;
        document.getElementById('date').value = expense.date;
        deleteExpense(id);
    }
}

