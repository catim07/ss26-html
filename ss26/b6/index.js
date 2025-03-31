function formatDates(arr) {
    if(!Array.isArray(arr)){
        alert("Mảng ko có dữ liệu")
        return
    }else if(arr.length==0){
        alert("Dữ liệu không hợp lệ")
        return
    }else{
    return arr.map(date => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`; 
    });
}
}
let Dates1 = ["2025-03-10", "2024-12-25", "2023-07-01"];
let Dates2 = [];
let Dates3 = "abc";
alert(formatDates(Dates1));
formatDates(Dates2)
formatDates(Dates3)
