// ------- DOM References -------

const container = document.querySelector('.container');

// ------- States -------

const rows = 16;
const cols = 16;

// ------- Logic Functions -------
function generateGrid(rows, cols) {
    const array = [];
    for(let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        array[i] = row;
        for(let j = 0; j < cols; j++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            array[i][j] = grid;
            row.appendChild(array[i][j]);
        }
        container.appendChild(row)
    }
}

generateGrid(rows, cols);

// ------- Event Listeners -------
container.addEventListener('mouseover', (e) => {
	const target = e.target;

	if (target.classList.contains('grid')) {
		target.classList.add('fill');
	}
});
// ------- UI Updates -------
