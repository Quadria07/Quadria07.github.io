let pass = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strength');


pass.addEventListener('input', () => {
    if(pass.value.length > 0) {
      msg.style.display = "block";
    }
    else{
      msg.style.display = "none"
    }
    if (pass.value.length <= 8){
      str.innerHTML = "WEAK"
      pass.style.borderColor = "#ff5925"
      str.style.color = "red"
    } else if (pass.value.length <= 16){
      str.innerHTML = "MEDIUM"
      pass.style.borderColor = "#ffd000"
      str.style.color = "#ffd000"
    } else if (pass.value.length >= 17){
      str.innerHTML = "STRONG"
      pass.style.borderColor = "#26d730"
      str.style.color = "#26d730"
    }
  
  })