const register = document.querySelector(".register")
const cancel = document.querySelector(".cancel")
const username = document.querySelector(".name")
const password = document.querySelector(".password")
const phone = document.querySelector(".phone")
const intro = document.querySelector(".intro")
const gioiTinh = document.getElementsByName("gt")
function checkEmpty(arrInput){
    let check = true
    arrInput.forEach(element => {
        if(element.value == ''){
            check = false
        }
    });
    return check
}

function checkPhone(number){
    let check = true
    let regPhone = /^[0-9-\.]+$/
    if(!regPhone.test(number.value)){
        check = false
    }
    return check
}
const checkRadio = () => {
    let male = gioiTinh[0].checked
    let female = gioiTinh[1].checked
    if(male || female){
        return true
    }
    return false
}

register.onclick = function(){
    let checkEmptyInput = checkEmpty([username,password,phone,intro])
    if(!checkEmptyInput){
        alert("Yêu cầu nhập đầy đủ thông tin!")
        return
    }
    let checkGender = checkRadio()
    if(!checkGender){
        alert("Yêu cầu giới tính!")
        return
    }
    let checkPhoneNumber = checkPhone(phone)
    if(!checkPhoneNumber){
        document.querySelector(".phoneError").innerHTML = 'Số điện thoai không hợp lệ!'
        return
    }

    else{
        document.querySelector(".phoneError").innerHTML = ''
    }
    alert("Đăng ký thành công")
}
cancel.onclick = function(){
    location.reload()
}