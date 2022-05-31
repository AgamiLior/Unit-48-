// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	function countFreq(num) {
		const counter = new Map();
		const str = String(num)

		for (let val of str) {
			counter.set(val, counter.has(val) ? counter.get(val) + 1 : 1);
		}
		return counter;
	}

	const counter1 = countFreq(num1);
	const counter2 = countFreq(num2);

	if (counter1.size !== counter2.size) {
		return false;
	}

	for (let val of counter1.keys()) {
		if (!counter2.has(val) ||
		counter1.get(val) !== counter2.get(val)) {
			return false;
		}
	}
	return true;

}
