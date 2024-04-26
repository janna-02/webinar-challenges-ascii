function generatePassword() {
  const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const len = 16;
  let password = "";
  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * value.length);
    password += value[random];
  }
  return password;
}

let pass = document.getElementById('password');
let btnGen = document.getElementById('generate');

btnGen.addEventListener('click', () => {
  pass.value = generatePassword();
});
