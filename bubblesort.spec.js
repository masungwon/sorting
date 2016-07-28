describe('Bubble Sort', function() {
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});
	it('handles an array with one item', function(){
		expect( bubbleSort([1]) ).toEqual( [1] );
	});
	it('handles an array with five items', function(){
		expect( bubbleSort( [5,2,3,1,4]) ).toEqual( [1,2,3,4,5] );
	});
});