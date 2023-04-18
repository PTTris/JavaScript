var myObject = {
    name: 'Phan Thanh Tri',
    age: 20,
    address: 'Tra Dinh'
}

var myArr = ['JS', 'HTML', 'CSS'];

console.log (myObject);
console.log (myArr);

//Arguments

function writeLog() {
    var myString = ''; //Để nhận biết này là chuỗi
    for (var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('Tri', 'TuKhanh', 'VoChong');