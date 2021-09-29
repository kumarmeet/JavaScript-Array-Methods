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
