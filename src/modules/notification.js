const notificationEl = document.querySelector('.notification');

const showNotification = (msg) => {
  // change the message
  notificationEl.innerHTML = msg;
  // notification enter
  notificationEl.classList.add('notif-enter');
  // notification leave
  setTimeout(() => {
    notificationEl.classList.remove('notif-enter');
  }, 2000);
};
export default showNotification;