let b_submit = document.getElementById('btn_submit');
let b_reset = document.getElementById('btn_reset');

let e_fio = document.getElementById('err_fio');
let e_startup = document.getElementById('err_startup');
let e_amount = document.getElementById('err_amount');

let lbl_startup = document.getElementById('label_startup');

b_submit.addEventListener('click', function (event) {
  const fio = document.getElementById('text_fio').value.trim();
  const amountStr = document.getElementById('text_amount').value.trim();
  const amount = Number(amountStr);

  if(fio.length < 3) e_fio.textContent = ' * Введите не менее 3х символов!';
  else e_fio.textContent = ' *';

  if(lbl_startup.value === null) e_startup.textContent = ' * Выберите стартап!';
  else e_startup.textContent = ' *';

  if(!Number.isFinite(amount) || amount <= 0) e_amount.textContent = ' * Введите сумму больше 0!';
  else e_amount.textContent = ' *';

  event.preventDefault(); // прототип, форму не отправляем
});

b_reset.addEventListener('click', function (event) {
  document.getElementById('text_fio').value = "";
  document.getElementById('label_startup').value = "0";
  document.getElementById('label_type').value = "milestones";
  document.getElementById('text_amount').value = "";

  e_fio.textContent = " *";
  e_startup.textContent = " *";
  e_amount.textContent = " *";

  event.preventDefault();
});
