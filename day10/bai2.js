
const register = document.querySelector('.register')

const checkPass = (pass) => {
    let check = true;
    const rgPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    if(!rgPass.test(pass)){
        check = false
    }
    return check
}

function checkPassConfirm(value1, value2){
    if(value1 === value2){
        return true
    }
    return false
}

const checkEmpty = (arrInput) => {
    let check = true
    arrInput.forEach(function(item){
        if(item === ''){
            check = false
        }
    })
    return check
}
const checkName = (name) => {
    let check = true
    if (/[0-9]/.test(name)) {
        check = false
    }
    return check
}
const checkPhone = function(phoneNumber){
    let check = true
    let regNum = /^[0-9()-]+$/
    if(!regNum.test(phoneNumber)){
        check = false
    }
    return check
}


register.onclick = function(){
    const nameInput = document.querySelector('.name_input').value
    const pass = document.querySelector('.pass_input').value
    const passConfirm = document.querySelector('.passcf_input').value
    const phoneNumber = document.querySelector('.phone_input').value
    const date = document.querySelector('.birthday_input').value



    let check = checkEmpty([nameInput, pass, passConfirm, phoneNumber, date])
    if(!check){
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }
    let checkNameInput = checkName(nameInput)
    if(!checkNameInput){
        document.querySelector('.errorName').innerHTML = 'Tên không được chứa số'
        return
    }else {
        document.querySelector('.errorName').innerHTML = ''
    }
    let checkPassInput = checkPass(pass)
    if(!checkPassInput){
        document.querySelector('.errorPass').innerHTML = 'Mật khẩu yếu!'
        return
    } else{
        document.querySelector('.errorPass').innerHTML = ''
    }
    let checkConfirm = checkPassConfirm(pass, passConfirm)
    if(!checkConfirm){
        document.querySelector('.errorPassConfirm').innerHTML = 'Mật khẩu không khớp'
        return
    }else{
        document.querySelector('.errorPassConfirm').innerHTML = ''
    }
    let checkPhoneNumber = checkPhone(phoneNumber)
    if(!checkPhoneNumber){
        document.querySelector('.errorPhone').innerHTML = 'SĐT không hợp lệ!'
        return
    } else {
        document.querySelector('.errorPhone').innerHTML = ''
    }
    alert('Dang ky thanh cong !')
}
const cancel = document.querySelector('.cancel')
cancel.onclick = function(){
    location.reload()
}

