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

	const iterative = (str) => {
		let i = 0;
		let ri = reverseString(str);
		let zi = "";
        let ll = false;
		
		while (i < ri.length) {
			if ((/[a-zA-Z]/).test(ri[i])) {
                zi += setCase(ri[i], ll);
                ll = !ll;
            }
			else zi += ri[i];
			i++;
	    }
        
		return zi;
	}

    const recursive = (a, i, start, str, ll, z) => {
        let za = "";
        // console.log(ll);
        
        let o = ll? ll.toLowerCase() === ll : false;

        if (i === 0 || o) {
            za += reverseZigZagString(reverseString(a[i])); // either first word or word starting with lowercase
        }
        else {
            for (let index = start; index < str.length; index++) {    
			    za += setCase(a[i][index], o); // even indices uppercase, odd indices lowercase
				o = !o;
            }
        }

        return za;
    }

	if (/[^a-zA-Z]{2,}/.test(s) || /[^a-zA-Z\s]/.test(s) || /[\s]/.test(s) && s.split(" ").length >= 1000) return iterative(s);

	let r = reverseString(s).trim(); // reversed s
	let a = r.split(" "); // splits s into components where spaces are identified
	let z = ""; // zigzag string

	if (a.length > 1) {
		for (let i = 0; i < a.length; i++) {
            const first = a[i].search(/[a-zA-Z]/); // the first letter in a[i]
            if (first === -1) return z;

            for (let index = 0; index < first; index++) {
                z += a[i][index];
            }

			matches = z.match(/[a-zA-Z]+/g);

			if (i === 0) z += recursive(a, i, first, a[i], a[i][first], z);
            else z += recursive(a, i, first, a[i], matches[matches.length -1][matches[matches.length -1].length - 1], z);

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
console.log(reverseZigZagString("Code Challenge"))  //"eGnElLaHc EdOc"
console.log(reverseZigZagString("i am")); // "mA i"
console.log(reverseZigZagString("yes yes")); // "sEy SeY"
console.log(reverseZigZagString("so much to do")); // "oD oT hCuM oS"
// console.log(reverseZigZagString("you up?"))
// console.log(reverseZigZagString("hello   there"));
// console.log(reverseZigZagString("I'm here"));
