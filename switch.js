/*
//Switch get the day from number of day
var day =5
var dayname
switch(day){
    case 1: dayname='Monday'
    break;
    case 2: dayname='tuesday'
    break;
    case 3: dayname='wednesday'
    break;
    case 4: dayname='thursday'
    break;
    case 5: dayname='Friday'
    break;
    case 6: dayname='saturday'
    break;
    case 7: dayname='sunday'
    break;
    default:
        dayname='invalid day'
   }
   console.log(dayname)

   //switch get the food menu by the day

   var todaysMenu
   var day = 6
   switch(day)
   {
       case 1:
       todaysMenu='Dal Khichadi'                      
       break;
       case 2:
       todaysMenu='Paneer'                      
       break;    
       case 3:
       todaysMenu='chicken'                      
       break;
       case 4:
       todaysMenu='sweet rice'
       break;
       case 5:
       todaysMenu='mutton'
       break;
       case 6:
       todaysMenu='fast day'
       break;
       case 7:
       todaysMenu='outing and buffet'
       break;
       default: 
       todaysMenu='wrong entry'
       break;
   }
   console.log(todaysMenu)
  */

   //switch month days countdown
   var month = 2
   var year = 2016 
   var daycount
   switch(month)
   {case 1:
    daycount=31
    break;

    case 2: 
    
 if (((year % 4 == 0) && !(year % 100 == 0))
|| (year % 400 == 0))
daycount = 29;
else
daycount = 28;
break;
case 3:
    daycount = 30
    break;
default: 'wrong entry'
break;}
console.log(daycount)