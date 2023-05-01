import img from '../img/icon.png';

class AppBar extends HTMLElement {
	connectedCallback() {
		this.caption = this.getAttribute('caption');
		this.render();
	}

	render() {
		this.innerHTML = `
			<nav class="navbar navbar-expand-lg  navbar-dark" style="background: #23180d;">
			  <div class="container">
			    <a class="navbar-brand " href="#" style="color: #F97B22;">
			    <img src="${img}" class="me-2">${this.caption}</a>
			  </div>
			</nav>
		`
	}
}

customElements.define('app-bar', AppBar);