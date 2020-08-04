// 아이디, 비밀번호(6자이상) 입력시 버튼 활성화
const idText = document.getElementsByClassName("loginidText")[0];
const pwText = document.getElementsByClassName("loginpwText")[0];
const loginBtn = document.getElementsByClassName("loginButton")[0];
const WrapLoginText = document.getElementsByClassName("wrapLogin")[0];

loginBtn.disabled = true;

WrapLoginText.addEventListener("keyup", () => {
  loginBtnColor();
});

function loginBtnColor() {
  if (idText.value.length > 0 && pwText.value.length > 5) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

//추가 : class에 disabled 속성을 만들어서 js에서 뺌
