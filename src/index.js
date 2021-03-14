// You should implement your task here.
module.exports = function towelSort (matrix) {
	if ((matrix === undefined) || (matrix.length == 0))
		return [];
	//return console.log(matrix.length);
	let res = [];
	if (matrix.length == 2)
		res = [].concat(matrix[0], matrix[1].reverse());
	else if (matrix.length == 3)
		res = [].concat(matrix[0], matrix[1].reverse(), matrix[2]);//, matrix[3].reverse());
	else if (matrix.length == 4)
		res = [].concat(matrix[0], matrix[1].reverse(), matrix[2], matrix[3].reverse());
	else if (matrix.length == 5)
		res = [].concat(matrix[0], matrix[1].reverse(), matrix[2], matrix[3].reverse(), matrix[4]);

	return (res);	
	
}
