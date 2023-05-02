class SpinnerComponent extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="d-flex justify-content-center">
			  <div class="spinner-border" role="status">
			    <span class="visually-hidden">Loading...</span>
			  </div>
			</div>
		`;
	}
}

customElements.define('spinner-component', SpinnerComponent);