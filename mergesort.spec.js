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
})
