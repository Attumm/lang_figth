
function bub_sort(l) {
	var steps = 0;
	length = l.length;
	for (var i = 0; i<length; i++) {
		for (var j = 0; j<length-(i+1); j++) {
			steps += 1;
			if (l[j] > l[j+1]) {
				var temp = l[j];
				l[j] = l[j+1];
				l[j+1] = temp;
			}
		}
	}
	console.log('steps: %d', steps);
}

var l = [];
var length = 50000;
for (var i = 0; i<length; i++) {
	l[i] = ~~(Math.random(1, 10) * 10).toString()[0];
}
console.log(l.lenght);
bub_sort(l);
console.log(length);

var test = false;
if (test) {
	for (var i = 0; i<l.length - 1; i++) {
		if (l[i] > l[i+1]) {
			console.log('did not sort correctly');
		}	
	}
	if (l[0] == l[-1]) {
		console.log('non random numbers');

	}
}
