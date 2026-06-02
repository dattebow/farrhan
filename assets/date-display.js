const d = new Date();
const pad = n => String(n).padStart(2, '0');
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const dateElement = document.getElementById('folio-date');
if (dateElement) {
  dateElement.textContent = `${pad(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
