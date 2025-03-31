function ktra(arr){
    if(arr.length==0){
        alert("mảng ko có phần tử nào")
        return
    }else if(typeof arr==='string'){
        alert("dữ liệu ko hợp lệ")
        return
    }else{
        return arr.filter(email=>email.includes('@')&&!email.includes(' '));
    }
}
let arr1=["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];
let arr2=[]
let arr3="abc"
alert(ktra(arr1))
ktra(arr2)
ktra(arr3)