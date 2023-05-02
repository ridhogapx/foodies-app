class FoodContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="container">
				<div class="row justify-content-center" id="foodItem">
				</div>
			</div>
		`;
	}
}

customElements.define('food-container', FoodContainer);