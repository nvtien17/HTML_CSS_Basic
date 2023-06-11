const send = document.querySelector(".send")
const cancel = document.querySelector(".cancel")
const title = document.querySelector(".titleinput")
const people = document.querySelector(".people")
const file = document.querySelector(".file")
const content = document.querySelector(".text")
function checkEmpty(arrInput){
    let check = true
    arrInput.forEach(element => {
        if(element.value == "")
            check = false
    });
    return check
}
function checkFile(fileinput){
    let check = true
    let regfile = /^[A-Za-z:\/-]+$/
    if(!regfile.test(fileinput.value)){
        check = false
    }
    return check
}
function checkTitle(titleInput){
    let check = true
    let regTitle = /^(?=.*[@])(?=.*[\.])[A-Z]{1}.{5,31}$/
    if(!regTitle.test(titleInput.value)){
        check = false
    }
    return check

}
send.onclick = function(){
    let checkEmptyInput = checkEmpty([title,people,file,content])
    if(!checkEmptyInput){
        alert('Vui lòng không được để trống!')
        return
    }
    let checkTitleInput = checkTitle(title)
    if(!checkTitleInput){
        document.querySelector(".titleError").innerHTML = 'Tiêu đề không hợp lệ!'
        return
    }
    else{
        document.querySelector(".titleError").innerHTML = ''
    }
    let checkFileInput=checkFile(file)
    if(!checkFileInput){
        document.querySelector(".fileError").innerHTML = 'File không đúng định dạng!'
        return
    }
    else{
        document.querySelector(".fileError").innerHTML = ''
    }

    alert('Gửi thành công')

}
cancel.onclick = function(){
    location.reload()
}