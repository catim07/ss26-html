function ktra(arr){
    if(typeof arr==='string'){
        return "dữ liệu không hợp lệ"
    }else if(arr.length==0){
        return "mảng ko có phần tử nào"
    }
    return arr.filter(str=>str.length>5)
}
let arr1=["apple", "banana", "cat", "elephant", "dog"]
let arr2=[]
let arr3="abc"
alert(ktra(arr1));
alert(ktra(arr2));
alert(ktra(arr3));