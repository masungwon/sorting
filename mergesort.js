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