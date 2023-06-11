const input = document.querySelector('.input1')
const output = document.querySelector('.output1')
const btn = document.querySelector('.btn')

// let a = '21'
// let b = '2'
// console.log(a - b);

btn.onclick = function(){
    //    duong     tien    hihih
    //Xoa khoang trang dau cuoi
    let value = input.value.trim()
    //duong     tien    hihih


    //tách chuỗi thành mảng nếu gặp kí tự khoảng trắng
    let arr = value.split(' ')
    console.log(arr);
    // ['duong', '', '', 'tien', '', '', 'hihih']


    //Xóa những phần tử không phải là từ
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ''){
            arr.splice(i, 1);
            i--;
        }
    }
    //['duong', 'tien','hihih']

    //Khai báo mảng rỗng
    let arr1 = []

    for(let i = 0; i < arr.length; i++){
        // arr[0] = 'duong'
        //Tách chữ duong thành text = ['d', 'u', 'o', 'n', 'g']
        let text = arr[i].split('')

        //Viết hoa phần tử đầu tiên của mảng text
        text[0] = text[0].toUpperCase()
        //text = ['D', 'u', 'o', 'n', 'g']

        //text.join('') hàm nối chuỗi từ phần tử của mảng text bằng '/' => thu được D/u/o/n/g

        //arr1 = [...arr1, value]

        //ví dụ arr1 = [1, 2, 3]
        //arr1 = [...arr1, 5] => arr1 = [1, 2, 3, 5]

        arr1 = [...arr1,text.join('')]

    }
    //arr1 = ['Duong', 'Tien', 'Hihi']
    //chuyển mảng thành chuỗi bằng dấu cách => 'Duong Tien Hihi'
    output.value = arr1.join(' ')



}


 console.log(input, output, btn);

// const checkSHH = function(number){
//     let sum = 0;
//     for(let i = 1; i < number; i++){
//         if(number % i === 0){
//             sum += i;
//         }
//     }
//     if(sum === number){
//         return true
//     }
//     return false
// }

// btn.onclick = function(){
//     if(!input.value){
//         alert('Nhap di thang lol')
//         return
//     }
//     let value = Number(input.value)
//     let sum = 0;
//     for(let i = 1; i < value; i++){
//         if(checkSHH(i) === true){
//             sum += i;
//         }
//     }

//     output.value = sum

// }