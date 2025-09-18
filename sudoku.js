function evaluateSudoku(grid) {
	let validCells = 0;

	grid.forEach((row, rowIndex) =>
		row.forEach((col, colIndex) => {
			const cellIsValidInRow = !row.some((cell, cellIndex) => {
				if (cellIndex === colIndex) return false;
				if (cell === col) return true;
				return false;
			});
			const cellIsValidInColumn = !grid.some((line, index) => {
				if (index === rowIndex) return false;
				if (line[colIndex] === col) return true;
				return false;
			});

			if (cellIsValidInRow && cellIsValidInColumn) validCells++;
		}),
	);

	return validCells;
}

// const sudoku1 = [
// 	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// 	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
// 	[2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
// 	[3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
// 	[4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
// 	[5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
// 	[6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
// 	[7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
// 	[8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
// 	[9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
// ];

// console.log("valid cells", evaluateSudoku(sudoku1));

// const sudoku2 = Array.from(new Array(10)).map(() => {
// 	let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 	return Array.from(new Array(10)).map(() => {
// 		const randIndex = Math.floor(Math.random() * numbers.length);
// 		const randNum = numbers[randIndex];

// 		numbers.splice(randIndex, 1);
// 		return randNum;
// 	});
// });

// console.log(sudoku2);
// console.log("valid cells", evaluateSudoku(sudoku2));
