/* 
#1 contain x = 9
#2 express x
*/

const input = document.querySelector('textarea');
const run = document.querySelector('button');
const output = document.querySelector('div');
let varName, varVal;
const variables = {};

run.onclick = () => {
	const loc = input.value.split(/\r?\n/);
	for (const line of loc) {
		const [expression, varName, assignment, varVal] = line.split(' ');

		if (expression === 'contain') {
			variables[varName] = varVal;
		}
		if (expression === 'express') {
			alert(variables[varName]);
		}
	}

}
