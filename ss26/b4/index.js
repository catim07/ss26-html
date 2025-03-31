function isngto(num){
    if(num<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
function ktra(arr){
    if(arr.length==0){
        alert("mảng ko có phần tử nào")
        return
    }else if(typeof arr==='string'){
        alert("dữ liệu ko hợp lệ")
    }else{
        alert(arr.filter(num=>isngto(num)));
    }
}
let arr1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2=[]
let arr3="abc"
ktra(arr1);
ktra(arr2);
ktra(arr3);