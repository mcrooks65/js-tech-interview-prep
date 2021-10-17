var students = [{name: "Ted", grade: 11},{name: "Suzy", grade: 9}]
var ninth_grade = students.filter(student => (student.grade === 9))
ninth_grade
// console: [ { name: 'Suzy', grade: 9 } ]
let show_students2 = students.map(student => {return console.log(student.name + "!")})


// 1st js interview (mock interview from skilled)  Notes below: 

// bind apply and call require some reveiw!
// Review inheritance 

// function outer() {
// 	const a = '1';

// 	function inner() {
// 		console.log(a);
// 	}

// 	return inner;
// }

// const temp = outer(); //, java++

// temp();

// most common char in a string
// mostCommonChar('aaabbbaaaaad123') // a  extra: [a,b]

function mostCommonChar(str) {
	let strCounts = {};
	let maxKey = '';
	for(let i = 0; i < str.length; i++)
  	{
		let key = str[i];
		if(!strCounts[key]) {
			strCounts[key] = 1;
		} else {
			strCounts[key]++;
		}

	}	

	let maxChar = '';
	let maxCount = 0;

	for (let char in strCounts) {
		if (strCounts[char] > maxCount) {
			maxChar = char;
			maxCount = strCounts[char];
		}
	}

	let solutions = [];

	for (let char in strCounts) {
		if (strCounts[char] === maxCount) {
			solutions.push(char);
		}
	}


  	// strCounts[key]++;
 	// if(maxKey == '' || strCounts[key] > strCounts[maxKey]);
	// 	maxKey = key;
	return solutions;
}
console.log(mostCommonChar("aabbc"));

// www.hoanghuynguyen.com
