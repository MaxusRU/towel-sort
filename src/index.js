//for matrix.length from 2 to 5
module.exports = function towelSort (matrix) {
	if ((matrix === undefined) || (matrix.length == 0))
		return [];
	// var result = [].concat(...matrix); // [].concat(matrix[0],matrix[1]... matrix[n] );
	let res = [];
	for (let i=0; i<matrix.length; i++){
		(i % 2 == 0) ? res = [].concat(res, matrix[i]) : res = [].concat(res, matrix[i].reverse());
	  }
/*	if (matrix.length == 2)
		res = [].concat(matrix[0], matrix[1].reverse());
	else if (matrix.length == 3)
		res = [].concat(matrix[0], matrix[1].reverse(), matrix[2]);
	else if (matrix.length == 4)
		res = [].concat(matrix[0], matrix[1].reverse(), matrix[2], matrix[3].reverse());
	else if (matrix.length == 5)
		res = [].concat(matrix[0], matrix[1].reverse(), matrix[2], matrix[3].reverse(), matrix[4]);
*/
	return (res);	
}
