//write your code here

// p1
const reverseString = (s) => {
	let r = "";
	for (let i = s.length - 1; i >= 0; i--) r += s[i];
	return r;
}
console.log(reverseString("hello"));

// p2
const reverseZigZagString = (s) => {
	let r = reverseString(s);
	let a = r.split(" ");
	let z = "";
	let za = "";

	if (a.length > 1) {
		for (let i = 0; i < a.length; i++) {
			if (a[i].length === 2) za += reverseString(a[i][1].toUpperCase() + a[i][0].toLowerCase()) + " ";
			else za += reverseString(reverseZigZagString(a[i])) + " ";
		}
		return za;
	}

	for (let i = 0; i < r.length; i++) {
		if (i % 2 === 0) z += r[i].toLowerCase();
		else z += r[i].toUpperCase();
	}

	return z;
}
console.log(reverseZigZagString("helloo")) //"oOlLeH"
console.log(reverseZigZagString("Fellows"))    //"sWoLlEf"
console.log(reverseZigZagString("Code Challenge"))  //"eGnElLaHc EdOc"
console.log(reverseZigZagString("i am")); // "mA i"
console.log(reverseZigZagString("so much to do")); // "mA i"

