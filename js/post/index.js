import {createGrid} from '../services/createGrid.js';
import {createHeader} from '../modules/header.js';
import axios from 'axios'
createGrid();
createHeader();

// axios.post('http://localhost:3001/posts', { name: 'Test' })
//   .then(res => console.log('Succes!', res.data))
//   .catch(err => console.error(err));


const formAddScript = document.querySelector('.main__addScript__form'),
			formFile = document.querySelector('#file');
formAddScript.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(formAddScript);
	let jsonObj = {};
	for (const [key, value] of formData.entries()) {
		jsonObj[key] = value;
	}
	jsonObj['fileUpl'] = jsonObj.file.name;jsonObj['file'] = undefined;
	axios.post('http://localhost:3001/posts/', jsonObj).then(res => {
		console.log(res.status);
		window.location.href = '../html/posts.html';
	}).catch(err => {
		console.log(err);
	})
	// console.log(formData);
	// const somestr = formFile.value.slice(0, 12);
	// formFile.value.replace(somestr, '');
	// console.log(formFile.value);
})
