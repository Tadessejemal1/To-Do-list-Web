const refresh = document.getElementById('clear');

// clearAll todo lists when refresh the page
refresh.addEventListener('click', () => {
  window.location.reload();
});
export default {refresh};