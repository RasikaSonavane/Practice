    /*
    var firstName="Siya";
    var lastName="Dravid";
    console.log(firstName + " "+ lastName)
    //same can be done using string literals
    console.log('My full name is ${firstName} ${lastName}')
    // \n using for the new line

    //length of the string 
    var checkLength= firstName.length
    console.log(checkLength)

    var lastNameLength= lastName.length
    console.log(lastNameLength)

    //to print the specific character of the string
    //by indexing its possible index always start with 0 count

    console.log(firstName[2])
    console.log(lastName[3])

    //to find the last character of the string
    //lengthof the string-1= last character index

    console.log(firstName[checkLength-1])
    console.log(lastName[lastNameLength-1])

    var i=0;
    for(i=0; i<firstName.length; i++)
    {
    console.log(firstName[i]);
    }

//to convert the number into string we use "tostring" function,
//it will help to convert any dataType into string
var number=80
var convertIntoString= number.toString()
console.log(convertIntoString)

//vice a versa to convert string into number we use parsInt
number=parseInt(convertIntoString)


if('a'<'b'){console.log("a is less than b")}
if('a'<'B'){console.log("a is less than B")}
else{console.log("a is greater than b")}


//to convert string to upparCase
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())
*/
 /*   //object creating below studentdetails and all the address, firstnames etc are the properties of the object
var studentDetails={
    Address:{houseNum:104, society:"shree ganesh", city:"Panvel", country:"India", pinCode: 499855},
   firstName: "Siya",
   lastName: "Dravid",
   age:23,
   isGraduate:true,
   isMarried:false,
   mobileNumber: 7045023783,
   printDetails:function()
   {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.age)
    },
    getemployee : function()
    {
        console.log(this.mobileNumber);
        console.log(this.age);
    }
}
studentDetails.printDetails()
studentDetails.getemployee()
*/

   //"this" is the keyword which is used inside the method of the object
   //getsomedetails is the method inside the object which is function.

//to delete some properties we can use delete keyword
//delete studentDetails.isMarried
//for(var allPoperties in studentDetails)
//{console.log(allPoperties)}

//ways to access the properties in the console
/*console.log(studentDetails.isGraduate)
console.log(studentDetails["isMarried"])

console.log(studentDetails.mobileNumber)
console.log(studentDetails["age"])

//to check specific address property is in particular object or not

if(allPoperties=="mobileNumber")
{console.log("this is available")}
else{console.log("this is not available")}

//to add the new property
studentDetails.nationality="Indian"
console.log(studentDetails.nationality)

//to get all the properties from the object we can use below syntax
for(var allPoperties in studentDetails)
{console.log(allPoperties)}
*/



