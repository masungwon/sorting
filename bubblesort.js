function bubbleSort(arr) {
	var limit = arr.length-1;
	var done = false;
	while(!done){
		var swap = 0;
		for (var i=0; i<limit; i++) {
			//each pass
			if (arr[i] > arr[i+1]) {
				//each swap
				var val = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = val; 
				swap++;
			}
		}
		if(swap === 0){
			done = true;
		}
		limit--;
	}	
	return arr;
}