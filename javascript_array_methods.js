/*###########################################################################*/
//Different ways to declaring an array
const arr = [1, 2, 3];
console.log(arr);

const newArray = new Array(5); //fixed array size of 5
console.log(newArray);

const withourNewArray = Array(5); //fixed array size of 5
console.log(withourNewArray);

const ofArray = Array.of(1, 2);
console.log(ofArray);

const li = document.querySelectorAll("li"); //it will give array like object
console.log(li);

const fromArray = Array.from(li); //convert an array to array like object
console.log(fromArray);
//Different ways to declaring an array end
/*###########################################################################*/

/*###########################################################################*/
//Data can store in an array
const personalData = [
	30,
	"Meet",
	{ moreDetail: ["M.P.", "Bhopal", "462002"] },
	true,
];
console.log(personalData[2].moreDetail[1]);

for (const i of personalData) {
	console.log(i);
}

const matrix = [
	[1, 5],
	[14, 3],
	[7, 9],
];

for (const i of matrix) {
	for (const j of i) {
		console.log(j);
	}
}
//Different ways to declaring an array end
/*###########################################################################*/

/*###########################################################################*/
//push, pop, shift and unshift
const books = ["C in Depth", "C++"];
console.log(books);
books.push("Cracking the Coding Interview"); //add element at last and returns lenght
console.log(books);
books.unshift("Data Structures & Algorithms"); //add element at start and returns lenght
console.log(books);
books.unshift("Think Like a Monk");
books.push("Marvels");
console.log(books);

//removes first element
const firstRemovedElement = books.shift();
console.log(`Removed first element -> ${firstRemovedElement}`);
console.log(books);

//removes last element
const lastRemovedElement = books.pop();
console.log(`Removed last element -> ${lastRemovedElement}`);
console.log(books);
//push, pop, shift and unshift end

//splice method and it will return removed element(s)
//first arg is index of array, 2nd arg is delete and 3rd arg add element on index
books.splice(3, 0, "JavaScript", "Python", "Summer Vaccation");
console.log(books);

//first arg is index and second arg is for delete that index
books.splice(5, 1);
console.log(books);

books.splice(
	0,
	0,
	"Think Like a Monk",
	"How to Influence People",
	"Life Saver"
);
console.log(books);

books.splice(0, 3); //It will delete from 0 to 2
console.log(books);

books.splice(3); //It will delete all elements from index 3
console.log(books);

books.splice(-2, 1); //It will start from end of the array and remove it
console.log(books);

books.splice(0); //It will delete all elements from an array
console.log(books);
//splice end
/*###########################################################################*/

/*###########################################################################*/
//slice
const testResult = [1, 4, 5, 3.3, -6, 47, "Calculus", -8, 13.44, "Algebra"];
console.log(testResult);

const storedResult = testResult.slice(); //copy an array not reference
testResult.push(44);
console.log(storedResult, testResult);

//returns a brand new array, copy from begining
const result = testResult.slice(0, 3);
console.log(result);

//returns a brand new array, copy from end
const lastResult = testResult.slice(-4);
console.log(lastResult);
//slice end
/*###########################################################################*/

/*###########################################################################*/
//concate
//it will also return brand new copy and brand new address
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];
const concateArr = arr1.concat(arr2);
console.log(concateArr);

const concateAnotherArr = arr1.concat([
	[11, 14, 15, 19, 20],
	[31, 41, 22, 65],
]);

console.log(concateAnotherArr);

const oneMoreConcateArr = arr2.concat([13, 14, 15, 16, 17]);
console.log(oneMoreConcateArr);
//concate end
/*###########################################################################*/

/*###########################################################################*/
//indexOf and lastIndexOf
const mobileModels = [
	"Redmi Note 7",
	"One Plus+",
	"Samsung M3",
	"One Plus+",
	"Nokia 5530",
];
console.log(mobileModels);
//indexOf returns first occurence index of found element, even that element exist more than one times
//indexOf searching starts from left
let found = mobileModels.indexOf("One Plus+", 0);

if (found >= 0) {
	console.log(`Found Item on index ${found}`);
}

//indexOf returns last occurence index of found element, even that element exist more than one times
//lastIndexOf searching starts from right
found = mobileModels.lastIndexOf("One Plus+", -1);

if (found >= 0) {
	console.log(`Found Item on index ${found}`);
}

const person = [{ language: "English" }, { language: "Hindi" }];
//the below line won't work coz object has address and we check different address in indexOf
found = person.indexOf({ language: "English" }); //it will give -1

if (found < 0) {
	console.log(`Not found Item`);
}
//indexOf and lastIndexOf end
/*###########################################################################*/

/*###########################################################################*/
//find and findIndex
const districtName = [
	{ city: "Bhopal" },
	{ city: "Indore" },
	{ city: "Banglore" },
];

//find doesn't create a copy
//find return matching item
let city = districtName.find((district, idx, cities) => {
	return district.city === "Bhopal";
});

console.log(city);

//findIndex return index of the item
city = districtName.findIndex((district, idx, cities) => {
	return district.city === "Banglore";
});

console.log(city);
//find and findIndex end
/*###########################################################################*/

/*###########################################################################*/
//includes
const percentage = [44, 85, 99, 34, 65, 71];

//includes return true if element has in an array other wise false
if (percentage.includes(99, 0)) {
	console.log("Found");
}

if (!percentage.includes(15)) {
	console.log("Not Found");
}
//includes end
/*###########################################################################*/

/*###########################################################################*/
//foreach
const monthlySalary = [16632, 16032, 15723, 16032, 14800, 16900];
const epfDeductionOnSalary = 0.12;
const monthlyEpf = [];

//benefit of foreach loop is we can use index but in forof loop can't
monthlySalary.forEach((salary, idx, monSal) => {
  const obj = {
    index: idx,
    sal: salary,
    epfDeduction: salary * epfDeductionOnSalary,
  };
  monthlyEpf.push(obj);
});

console.log(monthlyEpf);
//foreach end
/*###########################################################################*/

/*###########################################################################*/
//map
const mobliePrices = [20000, 12999.99, 34000, 15999.99, 12999.99, 10500.5];
const gst = 0.18;

//change elements on array and return brand new array or address
const _finalPrice = mobliePrices.map((price, idx, mobPri) => {
  const finalMobilePrice = {
    index: idx,
    finalPrice: price * gst + mobliePrices[idx],
    mobPr: mobPri,
  };

  return finalMobilePrice;
});

console.log(mobliePrices, _finalPrice);
//map end
/*###########################################################################*/

/*###########################################################################*/
//sort and reversing
const names = ["meet", "sumeet", "hareet", "reet", "bhanu", "kavita"];
const numbers = [10, 20, 44, 55, 66, 3.22, 7, -9];

const sortedNames = names.sort();
console.log(sortedNames);

//sort() by default converts everything to a string and then sorts
let sortedNumbers = numbers.sort((a, b) => {
  return a - b; //ascending order [1 2 3 4 5]
});
console.log(sortedNumbers);

sortedNumbers = numbers.sort((a, b) => {
  return b - a; //descending order [5 4 3 2 1]
});
console.log(sortedNumbers);

//reverse()
const reverseSortedNumbers = sortedNumbers.reverse();
console.log(reverseSortedNumbers);

const reverseNames = names.reverse();
console.log(reverseNames);
//sort and reversing end
/*###########################################################################*/

/*###########################################################################*/
//filter
const percentages = [
  70, 80, 75, 45, 65, 73, 90, 95, 55, 54, 36, 62, 61, 59, 87,
];

//filter return condition based array
// const filteredPercentages = percentages.filter((percent) => percent > 60); //arrow fun advantage
const filteredPercentages = percentages.filter((percent, idx, arr) => {
  return percent > 60;
});

console.log(filteredPercentages);
//filter end
/*###########################################################################*/

/*###########################################################################*/
//reduce
const __monthlySalary = [
  80000, 70000, 65235, 74521, 63254, 98666, 74235, 86666, 63214, 99412, 74215,
  105249,
];

//reduce() can reduce and array of values to a simpler value
const sum = __monthlySalary.reduce((preVal, curVal, idx, arr) => {
  return preVal + curVal;
}, 0);

console.log(sum);
//reduce end
/*###########################################################################*/

//split and join for strings
/*###########################################################################*/
const data = "Meet;8770851929;Bhopal";

//split() check the delimeter and return the array
const transformedData = data.split(";");
console.log(transformedData);

//join works opposite of split, with the help of separator and join the array into one single string
//it will always generates a string
const fullName = ["Meet", "Kumar", "Vishwakarma"];
const joinName = fullName.join("-");
console.log(joinName);
//split and join for strings end
/*###########################################################################*/

/*###########################################################################*/
//speard operator ...
const computerComponents = ["RAM", "Processor", "Hard Drive", "CPU"];

//speard operator ... pull out elements in an array and
//copied all elements and gives brand new address or reference
const copiedComputerComponents = [...computerComponents];
computerComponents.push("Graphic Card");
console.log(computerComponents, copiedComputerComponents);

console.log(Math.min(...__monthlySalary)); //find min pass array as an arg using speard operator

//when copying the array of objects then copied reference which is hold the objects in an array
const booksNames = [
  { name: "Maths" },
  { name: "Science" },
  { name: "Physics" },
];

//copying the elements but object refereces are still same in the memory
const copiedBookNames = [...booksNames];
console.log(booksNames, copiedBookNames);

//as we know references are still same in an array then changes one object it reflects same to other array
booksNames[0].name = "Mathametics"; //same reference for both arrays
console.log(booksNames, copiedBookNames);

//if want to make a new copy of object
const newCopiedBookNames = [
  ...booksNames.map((value) => ({ name: value.name })),
];
booksNames[0].name = "Hindi";
console.log(booksNames, newCopiedBookNames); //now newCopiedBookNames is not affected
//speard operator ... end
/*###########################################################################*/

/*###########################################################################*/
//Array Destructuring
//spliting an array elements into variables, it works left to right
//... rest operator
const [yes, no, ...restValues] = [true, false, 1, 5, 4, 6, 7, 9];

console.log(yes, no, restValues);

//Array Destructuring end
/*###########################################################################*/

/*###########################################################################*/
//Sets
//Sets useful for managing unique values
//Set duplicates are not allowed and order is not gauranteed
//Set data has arranged in sorted order
const num = [1, 2, 3, 6, 1, 4, 8, 5, 9, 14, 2, 1, 3, 6, 5, 14, 18, 9];

const ids = new Set(num);
ids.add(16);
ids.add(1);

console.log(ids);
console.log(ids.entries());
console.log(ids.keys());
console.log(ids.values());

for (const itr of ids.values()) {
	console.log(itr);
}

if (ids.has(6)) {
	console.log("Found");
}

for (const i of ids.entries()) {
	console.log(i);
}

if (ids.has(1)) {
	ids.delete(1);
}

console.log(ids);

//Sets end
/*###########################################################################*/

/*###########################################################################*/
//Map
//Map stores data in key value pair any kind of length, key values are allowed
//order is gauranteed, key based access, duplicate keys are not allowed but values can be duplicate
const person1 = { name: "Meet" };
const person2 = { name: "Surendra" };

//use case, you could a map is that you want to attach some extra info to each person
//you don't really merge extra info this obj coz you use these obj in multiple places
const newPersonData = new Map([[person1, [{ date: "Thursday", price: 14 }]]]);
console.log(newPersonData.get(person1));

newPersonData.set(person2, [{ date: "Friday", price: 16 }]);
console.log(newPersonData);

newPersonData.set("Key", "Value");
console.log(newPersonData);

for (const i of newPersonData.entries()) {
	console.log(i);
}

for (const i of newPersonData.values()) {
	console.log(i);
}

//array destructuring
for (const [key, value] of newPersonData.entries()) {
	console.log(key, value);
}

//working only with keys
for (const key of newPersonData.keys()) {
	console.log(key);
}

//working only with values
for (const val of newPersonData.values()) {
	console.log(val);
}
//Map end
/*###########################################################################*/
