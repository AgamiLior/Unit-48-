// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
	const obj = {};

	for (i = 0; i<keys.length; i++) {
		obj[keys[i] = i < values.length ? values[i] : null]
	}
	return obj;
}
