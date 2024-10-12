//write your code here

// p1
const reverseString = (s) => {
	let r = "";
	for (let i = s.length - 1; i >= 0; i--) r += s[i];
	return r;
}
// console.log(reverseString("hello"));

// p2
const reverseZigZagString = (s) => {
	const setCase = (c, l) => {
		return l ? c.toUpperCase() : c.toLowerCase();
	}

	let r = reverseString(s).trim(); // reversed s
	let a = r.split(" "); // splits s into components where spaces are identified
	let z = ""; // zigzag string

	if (a.length > 1) {
		for (let i = 0; i < a.length; i++) {
			let o = false; // default assumption: previous word ends with an uppercase char
			
			// change if previous word ends with a lowercase character
			if (i > 0 && a[i - 1][a[i - 1].length - 1] === a[i - 1][a[i - 1].length - 1].toLowerCase()) o = true;
			if (i > 0 && a[i - 1].length === a[i].length) o = false;

			if (i === 0 || o) z += reverseZigZagString(reverseString(a[i])); // either first word or word starting with lowercase
			else {
				for (let index = 0; index < a[i].length; index++) {
					z += setCase(a[i][index], index % 2 === 0); // even indices uppercase, odd indices lowercase
				}
			}

			if (i < a.length - 1) z += " "; // add space if not last word
		}
		return z;
	}

	for (let i = 0; i < r.length; i++) {
		z += setCase(r[i], i % 2 !== 0); // set case of char at i depending on whether i is even
	}

	return z;
}

// console.log(reverseZigZagString("helloo")) //"oOlLeH"
// console.log(reverseZigZagString("Fellows"))    //"sWoLlEf"
// console.log(reverseZigZagString("Code Challenge"))  //"eGnElLaHc EdOc"
// console.log(reverseZigZagString("i am")); // "mA i"
// console.log(reverseZigZagString("yes yes")); // "sEy SeY"
// console.log(reverseZigZagString("so much to do")); // "oD oT hCuM oS"

