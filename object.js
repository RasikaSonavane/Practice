var studentDetails=
{
Name: "Rasika", lastName: "Sonavane", age:27, married:false, 
address:{city: "pen", Pincode: 402107}, 
Mobile: 7045023783
}

console.log(studentDetails.Name);
console.log(studentDetails.Age);
console.log(studentDetails.address.Pincode);
console.log(studentDetails['lastName'])

const data={a:1, b:2};
for(const details in data){
    console.log('${details}: ${data[details]}');
}

for (var key in student){console.log(key)}