function eliminateBlock(grid, block) {
	grid.forEach((row) =>
		row.forEach((col, index) => {
			if (Number(col) === block) row[index] = ".";
		}),
	);

	return grid;
}

function moveBlocks(grid, numBlocks) {
	let splitGrid = (() => {
		const gridRows = grid.map((row) => row.split(""));
		let returnArray = [];

		gridRows.forEach((row) => {
			returnArray.push(row.filter((column) => column.toLowerCase() !== "x"));
		});

		return returnArray.filter((arr) => arr.length);
	})(); // [ [1, 2, 3], [1, 2, 3]... ]
	let numBlocksEliminated = 0;

	while (numBlocksEliminated < numBlocks) {
		splitGrid.forEach((row, index) => {
			for (let i = row.length - 1; i >= 0; i--) {
				const column = Number(row[i]);
				const columnIsNumber = !Number.isNaN(column);

				if (!columnIsNumber) continue;

				const numberIsPresentInOtherRows = splitGrid.some((row, index2) => {
					if (index2 === index) return false;
					return row.includes(column);
				});

				if (numberIsPresentInOtherRows) continue;

				row[i] = ".";

				if (i < row.length - 1) row[i + 1] = column;
				else {
					console.log(`block ${column} eliminated`);
					splitGrid = eliminateBlock(splitGrid, column);
					console.log(structuredClone(splitGrid));
					numBlocksEliminated++;
				}

				break;
			}
		});
	}

	console.log("all blocks eliminated");
}

// const grid1 = ["XXXX", "X111", "X222", "X333", "XXXX"];

// moveBlocks(grid1, 3);

// const grid2 = ["XXXX", "X123", "X456", "X789"];

// moveBlocks(grid2, 9);

// const grid3 = ["XXXXXXXX", "X.......", "X1.....2", "X.3...4.", "X..567..", "XXXXXXXX"];

// moveBlocks(grid3, 7);
