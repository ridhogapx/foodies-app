class FoodContainer extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="container">
				<div class="row">
					<div class="col">
						<div id="foodItem"></div>
					</div>
				</div>
			</div>
		`
	}
}

customElements.define('food-container', FoodContainer);