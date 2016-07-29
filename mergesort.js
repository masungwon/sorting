function split(wholeArray){
	if(wholeArray.length === 1) {
		return 'array has only one element';
		//throw new Error('array has only one element');
	}
	var breakpointInd;
	if (wholeArray.length%2 === 0) {
		breakpointInd = wholeArray.length/2;
	} else {
		breakpointInd = (wholeArray.length-1)/2 + 1;
	}
	var firstHalf = wholeArray.slice(0, breakpointInd); 
	var secondHalf = wholeArray.slice(breakpointInd);
	return [firstHalf, secondHalf];
}

function mergeSort(arr){
	if(arr.length === 1) {
		return arr;
	}

	// if(arr.length === 2){
	// 	var halves = split(arr);
	// 	var fist = halves[0];
	// 	var last = halves[1];
	// 	var output;
		
	// 	//first[0] > last[0] ? output = last.concat(first) : output = first.concat(last);
	// 	return output;

	 else {
		var halves = split(arr);
		var first = halves[0];
		var last = halves[1];
		first = mergeSort(first) 
		last = mergeSort(last);
		var output = [];
		var limit = 0;
		first.length > last.length ? limit = first.length : limit = last.length;
		for(var i = 0; i < limit; i++){
			if(first[i] && last[i])	{
				if (first[i] > last[i]) {
					output.push(last[i]);
					output.push(first[i]);
				} else {
					output.push(first[i]);
					output.push(last[i]);
				}
			} else if (first[i] === undefined){
				output.push(last[i]);
			} else if (last[i] === undefined){
				output.push(first[i]);
			}
		}

	}
	return output;
}