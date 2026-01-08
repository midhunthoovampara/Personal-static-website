// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
});
