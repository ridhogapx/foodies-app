import img from '../img/icon.png';

class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<nav class="navbar navbar-expand-lg  navbar-dark" style="background: #23180d;">
			  <div class="container">
			    <a class="navbar-brand " href="#" style="color: #F97B22;">
			    <img src="${img}"> Foodies App</a>
			  </div>
			</nav>
		`
	}
}

customElements.define('app-bar', AppBar);