class SectionTitle extends HTMLElement {
	connectedCallback() {
		this.text = this.getAttribute('text');
		this.render();
	}

	render() {
		this.innerHTML = `
			<h2 class="text-center mt-3">${this.text}</h2>
		`;
	}
}

customElements.define('section-title', SectionTitle);