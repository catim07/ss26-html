function ktra(arr){
    return arr.every(num=>Number.isInteger(num))
}
let arr=[];
for(let i=0;i<10;i++){
    arr[i]=+prompt("mời bạn nhập số nguyên thứ"+i);
}
if(ktra(arr)){
    let max10=arr.filter(num=> num>=10);
    if(max10.length==0){
        alert("không có số nào lớn hơn 10")
    }else{
        alert(` các số lớ hơn hoặc bằng 10 là ${max10}`)
    }
}else{
    alert("dữ liệu không hợp lệ")
}