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
    if(typeof arr==='string'){
        alert("dữ liệu ko hợp lệ")
    }else{
        alert(arr.filter(num=>isngto(num)&&num%2!=0));
    }
}

let arr=[];
let count
do{
count=+prompt("mời bạn nhập số lượng phần tử (10-20): ")
}while(!(count>=10&&count<=20))
    for(let i=0;i<count;i++){
        arr[i]=prompt(` mời bạn nhập giá trị thứ ${i+1}: `)
    }
ktra(arr);