const id = document.querySelector(".input_id");
const pw = document.querySelector(".input_pw");
const Login_btn = document.querySelector(".Login_Btn");

function handleClick() {
  alert("아이디:" + id.value + "비밀번호:" + pw.value);
}

Login_btn.addEventListener("click", handleClick);
