import {getZero} from '../services/getZero.js';
import {createGrid} from '../services/createGrid.js';
import axios from 'axios'
const curDate = new Date();

document.addEventListener('DOMContentLoaded', () => {
	class Post {
		constructor(title, dev, script, fileUpl) {
			this.title = title;
			this.dev = dev;
			this.script = script;
			this.fileUpl = fileUpl;
		}
		addToContent() {
			if (this.title.length > 30) {
				this.title = this.title.slice(0, 30) + '...';
			}
			document.querySelector('.main__content').innerHTML += `
			<div class="main__content-card">
				<div class="image">
					<img src="../img/posts/${this.fileUpl}" alt="">
				</div>
				<div class="title">${this.title}</div>
				<div class="dev">@${this.dev}</div>
				<div class="date">${getZero(+curDate.getMonth() + 1) + '-' + getZero(+curDate.getDate()) + '-' + curDate.getFullYear()}</div>
			</div>
			`
		}


	}

	axios.get('http://localhost:3001/posts').then(res => 
		res.data.reverse().forEach(item => 
			new Post(item.title, item.dev, item.script, item.fileUpl).addToContent()
		))
	.catch(err => console.log(err))
	.finally(() => createGrid())

})