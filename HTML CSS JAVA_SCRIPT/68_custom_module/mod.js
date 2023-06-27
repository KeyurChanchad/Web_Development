   console.log('This is Module.');

   //This is normal function
   function average(arr) {
       let sum = 0;
       arr.forEach(element => {
           sum += element;
       });
      return  sum / arr.length;
   }

//    export or return function
// module.exports = average;

// This is Object and export object
module.exports =  {
    avg : average,
    name :"keyur",
    repo :"GitHub"
}

// export is also module so you can write this way also. 
// module.exports.name = "Chanchad";