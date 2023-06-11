const input = document.querySelector('.ip1')
const output =  document.querySelector('.op1')
const solve = document.querySelector('.exec')
const reput = document.querySelector('.reput')
solve.onclick = function(){
    let value = Number(input.value)
    if(value <= 0){
        output.value = 'Vui lòng nhập n > 0'
        return
    }
    else{
        let sum = 0
        for(let i = 1; i <= value ; i++){
            if(i%2== 0 && i%3==0)
            sum += i
        }
        output.value = sum
    }
}
reput.onclick = function(){
    location.reload()
}

// console.log(input, output, solve, reput);

// solve.onclick = function(){
//     let value = Number(input.value)
//     if(value <= 0){
//         output.value = 'Vui lòng nhập n > 0'
//         return
//     }
//     else{
//     let sum = 0
//     for(let i = 1 ; i <= value; i++){
//         sum += i * i
//         }
//     output.value = sum
//     }
// }
// reput.onclick = function(){
//     location.reload()
// }




