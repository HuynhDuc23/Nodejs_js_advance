// callbacks
// kiểm tra số đó dương và kiểm tra chẵn hay lẻ 

const isOldEven = (numbers)=> numbers % 2 ===0 ? true :false ;

const kiemTraSoLonHonOVaSoDuong = (numbers , callback) =>{
    if(numbers >= 0){
        if(callback(numbers)){
            console.log('Số Chẵn')
        }else{
            console.log('Số Lẻ')
        }
    }else{
        console.log('Vui Lòng Kiểm Tra Lại')
    }
}
kiemTraSoLonHonOVaSoDuong(-1,isOldEven)
// callback : khi một function trở thành một đối số truyền vào function khác gọi là callbacks
// callback hell : hàm lồng hàm 

// JSON : stringify và parse 
// Dữ liệu lưu dạng chuỗi , không lưu được date , function , undefiend

// Promise in JS

// callbackhell : có nhiều hàm lồng nhau gây ra khó chịu , Promise có
// cách viết đơn giản hơn so với callback , dễ nhìn

// Khi bạn tạo một Promise, bạn cung cấp một hàm executor với hai tham số. Các tham số đó không có sẵn, mà chúng là các hàm được tạo ra và được chuyển đến hàm executor khi Promise được khởi tạo.

// Hàm executor trong JavaScript là một hàm được truyền vào constructor của Promise khi bạn tạo một Promise mới
