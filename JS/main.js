
// NO: 1

function calculateDifference(num1,num2){
    return num2-num1;
    
}
const result = calculateDifference(5,10)
console.log(result);





//  NO: 2

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

 console.log (findMin([200,10,20,30,40,50,100,1]));


 


//   NO: 4

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
 

 
//  NO: 5

 function sortArrayDescending(){

   points.sort(function(a, b){return a-b});

}
 sortArrayDescending(points = [30,40, 100, 1, 5, 25, 10,400])

 console.log(points);
 


// NO: 6
function lowercaseFirstLetter(s) {

    if (!s) {
        return s;
    }
    return s.charAt(0).toLowerCase() + s.slice(1);
}

console.log(lowercaseFirstLetter("HELLO"));



// No: 7

function countVowels(s) {
    const vowels = 'aeiouAEIOU';
    const vowelCounts = {};
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (vowelCounts[s[i]] === undefined) {
                vowelCounts[s[i]] = 1;
            } else {
                vowelCounts[s[i]]++;
            }
        }
    }
    return   vowelCounts;
}

console.log(countVowels("aeiouAEIOU"));



// NO: 08
function findAverage(){
    let count =0;
    let total = 0;

  for(let i=0; i<grades.length; i++){
        if (grades[i] !=undefined){
            count++;
            total+= grades[i];
        }
    
        let avg = total/count
        console.log(avg);
     }

}

findAverage(grades = [ 10,20,30,40]);
