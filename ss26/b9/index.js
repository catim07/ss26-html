
function ktra(arr){
    if(arr.length==0){
        alert("Mảng ko có dữ liệu")
        return
    }else if(Array.isArray(arr)){
        alert("Dữ liệu không hợp lệ")
        return
    }else{
        let chan=arr.filter(num=>num%2==0)
        alert(` tổng số chẵn là: ${chan.reduce((acc,curr) => acc+curr,0)}`)
        let le=arr.filter(num=>num%2!=0)
        alert(` tổng số lẽ là: ${le.reduce((acc,curr) => acc+curr,0)}`)
    }
}

let arr=[];
let count
do{
count=+prompt("mời bạn nhập số lượng phần tử (10-20): ")
}while(!(count>=10&&count<=20))
    for(let i=0;i<count;i++){
        arr[i]=+prompt(` mời bạn nhập giá trị thứ ${i+1}: `)
    }
ktra(arr);