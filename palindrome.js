str="abbba"
let rev= str.toString().split("").reverse().join("");
   let mystr=str.toString();
   if(mystr==rev){
       console.log("Yes")
   }
   else{
       console.log("No")
   }