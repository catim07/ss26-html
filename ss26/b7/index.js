function ktra(arr){
    if(arr.length==0){
        alert("Mảng ko có dữ liệu")
        return
    }else if(Array.isArray(arr)){
        alert("Dữ liệu không hợp lệ")
        return
    }
    return binhphuong= arr.map(num=>num**2).filter(num=>num%2==0)
 }
let arr=[];
for(let i=0;i<10;i++){
    arr[i]=prompt("mời bạn nhập phần tử thứ"+i);
}
alert(ktra(arr))