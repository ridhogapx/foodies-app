class MessageComponent extends HTMLElement {
	connectedCallback() {
		this.message = this.getAttribute('message');
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="card border-danger mt-3 mx-auto visually-hidden" style="width: 70%; " id="cardMsg">
			  <div class="card-body text-center text-danger">
			    ${this.message}
			  </div>
			</div>
		`
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
		this.render();
	}

	static get observedAttributes() {
		return ['message'];
	}
}

customElements.define('message-component', MessageComponent);