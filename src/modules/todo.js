const refresh = document.getElementById('clear');

// clearAll todo lists when refresh the page
refresh.addEventListener('click', () => {
  location.reload();
});
export default refresh;