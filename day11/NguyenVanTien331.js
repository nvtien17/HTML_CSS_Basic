const register = document.querySelector(".register")
const nameInput = document.querySelector('.name_input')
const pass = document.querySelector('.pass_input')
const passConfirm = document.querySelector('.passcf_input')
const date = document.querySelector('.birthday_input')
const phone = document.querySelector('.phone_input')

const checkEmpty = function(arrInput){
    let check = true
    arrInput.forEach(function(item){
        if(item.value === ''){

            check = false
        }
    })
    return check
}
const showError = (input, message) => {
    let parent = input.parentElement
    let span = parent.querySelector('span')
    span.innerText = message
}
const showSuccess = (input) => {
    let parent = input.parentElement
    let span = parent.querySelector('span')
    span.innerText = ''
}


const checkName = function(name){
    let check = true
    if(/[0-9]/.test(name.value)){
        check = false
    }
    return check
}
const checkPass = function(pass){
    let check = true
    let regPass =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    if(!regPass.test(pass.value)){
        check = false
    }
    return check
}
const checkConfirm = function(pass1 , pass2){
    if(pass1.value === pass2.value){
        return true
    }
    return false
}

const checkPhone = function(phoneNumber){
    let check = true
    let regPhone = /^[0-9()-]+$/
    if(!regPhone.test(phoneNumber.value)){
        check = false
    }
    return check
}

register.onclick = function(){

    let check = checkEmpty([nameInput, pass, passConfirm, date, phone])
    console.log(nameInput, pass, passConfirm, date, phone);
    console.log(check)
    if(!check){
        alert('Vui lòng nhập đầy đủ thông tin!')
        return
    }
    console.log('thành công');

    let checkNameInput = checkName(nameInput)
    if(!checkNameInput){
        showError(nameInput, 'Tên không được chứa số')

        return
    } else{
        showSuccess(nameInput)
    }
    let checkPassInput = checkPass(pass)
    console.log(checkPassInput);
    if(!checkPassInput){
        showError(pass, 'Mật khẩu yếu')

        return
    } else{
        showSuccess(pass)
    }
    let checkPassConfirm = checkConfirm(pass, passConfirm)
    if(!checkPassConfirm){
        document.querySelector('.errorConfirm').innerHTML = 'Khẳng định mật khẩu không khớp'
        return` A`
    }else{
        document.querySelector('.errorConfirm').innerHTML = ''
    }
    let checkPhoneNumber = checkPhone(phone)
    if(!checkPhoneNumber){
        document.querySelector('.errorPhone').innerHTML = 'SĐT không hợp lệ!'
        return
    }
    else{
        document.querySelector('.errorPhone').innerHTML = ''
    }
    alert('Đăng kí thành công!')
}