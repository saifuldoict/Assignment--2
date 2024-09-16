// NO: 1

function calculateDifference(num1,num2){
    return num2-num1;
    
}
const result = calculateDifference(5,10)
console.log(result);



// NO: 2

function isOdd(num3){
  
    if(num3 % 2 !=0){
       retune = console.log(true)
   
     }
     else{
         retune = console.log(false)
     }   
}
  isOdd(29);
  


// NO. 3


 function findMin(arr) { 
    let smallest = arr.sort((a, b) => a - b); 
    return  smallest[0]; 
 }

 result = findMin([200,10,20,30,40,50,100])

 console.log (result)
 


 // NO: 4

  function filterEvenNumbers(){

    const even = [];
    
    for (const num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    console.log(even);

 }

 filterEvenNumbers(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,12,18,24]);
 
// NO: 5

 function sortArrayDescending(){

   points.sort(function(a, b){return a-b});

}
 sortArrayDescending(points = [30,40, 100, 1, 5, 25, 10,400])

 console.log(points);
 


 
 