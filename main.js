let inp_1 = document.getElementsByClassName('inp-1')[0];
let inp_2 = document.getElementsByClassName('inp-2')[0];
let cal_1 = document.getElementsByClassName('cal-+')[0];
let cal_2 = document.getElementsByClassName('cal--')[0];
let cal_3 = document.getElementsByClassName('cal-*')[0];
let cal_4 = document.getElementsByClassName('cal-/')[0];
let p = document.getElementById('ketqua')
cal_1.addEventListener('click', function(){
    let result = document.getElementsByClassName('result')[0]
    result.value = Number(inp_1.value) + Number(inp_2.value)
    console.log( result.value ) 
    p.innerHTML = ` ket qua = ${result.value} `;
})
cal_2.addEventListener('click', function(){
    let result = document.getElementsByClassName('result')[0]
    result.value = Number(inp_1.value) - Number(inp_2.value)
    console.log( result.value )
    p.innerHTML = ` ket qua = ${result.value} `;
})
cal_3.addEventListener('click', function(){
    let result = document.getElementsByClassName('result')[0]
    result.value = Number(inp_1.value) * Number(inp_2.value)
    console.log( result.value )
    p.innerHTML = ` ket qua = ${result.value} `;
})
cal_4.addEventListener('click', function(){
    let result = document.getElementsByClassName('result')[0]
    result.value = Number(inp_1.value) / Number(inp_2.value)
    console.log( result.value )
    p.innerHTML = ` ket qua = ${result.value} `;
})
// inp_1[0].addEventListener('input', function(){
//     console.log( result[0] )
// })
// alert("nhan ngu")