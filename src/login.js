document.getElementById('copyright').innerText +=
"@ Иванов Иван, гр.38, Колледж Метростроя, 2026";

const role_about = document.getElementById('label_role_about');
const role_guest = document.getElementById('label_role_guest');
const role_admin = document.getElementById('label_role_admin'); // управляющий фондом
const role_user  = document.getElementById('label_role_user');  // инвестор

const login_btn = document.getElementById('button_login');
const login_email = document.getElementById('label_email');
const login_password = document.getElementById('label_password');

role_about.value = 'Выберите роль для входа в сервис венчурного фонда.';

role_guest.addEventListener('change', function () {
  if (role_guest.checked) {
    role_about.value = 'Выбрана роль "Гость". Доступен просмотр общей информации без операций.';
    role_admin.disabled = true;
    role_user.disabled  = true;

    login_btn.textContent = "Выполнить вход без авторизации";
    login_email.disabled = true;
    login_password.disabled = true;
  } else {
    role_about.value = 'Можно выбрать роль "Инвестор" или "Управляющий фондом".';
    role_admin.disabled = false;
    role_user.disabled  = false;

    login_btn.textContent = "Войти по логин-паролю";
    login_email.disabled = false;
    login_password.disabled = false;
  }
});

// Переход при нажатии "Войти"
login_btn.addEventListener('click', function () {
  // Гость → просто отправим на страницу инвестора (без операций) или на логин оставим.
  // В прототипе удобнее отправить на страницу инвестора.
  if (role_guest.checked) {
    window.location.href = "invest_create.html";
    return;
  }

  // Управляющий фондом (админ) → admin.html
  if (role_admin.checked) {
    window.location.href = "admin.html";
    return;
  }

  // Инвестор → invest_create.html
  window.location.href = "invest_create.html";
});

