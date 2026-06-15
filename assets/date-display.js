const d = new Date();
const pad = n => String(n).padStart(2, '0');
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dateElement = document.getElementById('folio-date');
if (dateElement) {
  dateElement.textContent = `${pad(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
