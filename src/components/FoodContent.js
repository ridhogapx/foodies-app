class FoodContent extends HTMLElement {
	set content(val) {
		this._content = val;
		this.render();
	}

	render() {
		this.innerHTML = `
					<div class="card shadow" style="width: 18rem;">
					  <img src="${this._content.strMealThumb}" class="card-img-top" alt="${this._content.strMeal}">
					  <div class="card-body">
					    <h5 class="card-title">${this._content.strMeal}</h5>
					    <h6 class="card-subtitle mb-2 text-body-secondary">${this._content.strCategory}</h6>
					  </div>
				</div>
			`;
	}
}

customElements.define('food-content', FoodContent);