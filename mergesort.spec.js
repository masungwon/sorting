describe('Split Array function', function() {
	it('is able to split an array into two halves', function(){
		expect( split([1,2,3,4]) ).toEqual( [[1,2], [3,4]] );
	});
	it('is able to split an array with odd number of items into two halves', function(){
		expect( split([1,2,3]) ).toEqual( [[1,2],[3]] );
	});
	it('throws an error for an empty array', function(){
		expect( split( [1] )).toEqual('array has only one element');
 	});
});

describe('mergest by sorting', function() {
	it('is able to sort an array with two items', function(){
		expect( mergeSort( [2,1] )).toEqual( [1,2] );
	});
	it('is able to sort an array with three items', function(){
		expect( mergeSort( [3,1,2] )).toEqual( [1,2,3] );
	});
	it('is able to sort an array with MANY items', function(){
		expect( mergeSort( [4,6,9,3,1,2,8] )).toEqual( [1,2,3,4,6,8,9] );
 	});
});

