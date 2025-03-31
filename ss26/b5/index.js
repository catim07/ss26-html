 function ktra(arr){
    if(arr.length==0){
        alert("Mảng ko có dữ liệu")
        return
    }else if(typeof arr==='string'){
        alert("Dữ liệu không hợp lệ")
        return
    }
    let max=arr.reduce((a,b)=>(a>b?a:b))
    let index=arr.indexOf(max);
    alert(`max: ${max}   position: ${index}`)
 }
let arr=[];
for(let i=0;i<10;i++){
    arr[i]=prompt("mời bạn nhập phần tử thứ"+i);
}
ktra(arr)