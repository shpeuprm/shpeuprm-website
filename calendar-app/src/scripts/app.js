const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar(month, year) {
    monthYear.textContent = `${today.toLocaleString('default', { month: 'long' })} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = '';
    let date = 1;

    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                html += '<td></td>';
            } else if (date > daysInMonth) {
                html += '<td></td>';
            } else {
                let isToday = date === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                html += `<td class="${isToday ? 'today' : ''}">${date}</td>`;
                date++;
            }
        }
        html += '</tr>';
        if (date > daysInMonth) break;
    }
    calendarBody.innerHTML = html;
    monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
}

prevMonthBtn.onclick = function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
};

nextMonthBtn.onclick = function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
};

renderCalendar(currentMonth, currentYear);