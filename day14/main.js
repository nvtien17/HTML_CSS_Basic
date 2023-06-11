const button = document.querySelector('.check')
const username = document.querySelector('.username')
const password = document.querySelector('.password')
function checkEmpty(arrInput){
    let check = true
    arrInput.forEach(element => {
        if(element.value ==''){
            check = false
        }
    });
    return check
}
function checkPassword(pass){
    let check = true
    let regPass = /^(?=.*[A-Z])(?=.*\d)[A-Za-z]{1}.{7,}$/
    // let regPass = /^(?=.*[0-9])(?=.*[A-Z])([a-z]{1}|[A-Z]{1}|[:-]{1}){1}[0-9a-zA-Z:-]{7,}$/



    if(!regPass.test(pass.value)){
        check = false
    }
    return check
}
button.onclick = function(){
    let check = checkEmpty([username,password])
    if(!check){
        alert('Không được để trống!')
    }
    let checkPass = checkPassword(password)
    if(!checkPass){
        alert("Bạn nhập sai!")
    }
    else alert("Bạn nhập đúng!")
}