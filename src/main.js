// Static
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Axios as HTTP Request
import axios from 'axios';

// Components
import './components/AppBar.js';
import './components/SearchBar.js';
import './components/SectionTitle.js';
import './components/FoodContainer.js';
import './components/FoodContent.js';
import './components/SpinnerComponent.js';

/* 
Todo:
1. Making section for data menu
2. Logic input and search data API
 
*/

const foodItem = document.getElementById('foodItem');
const spinner = document.createElement('spinner-component');


const someMenus = async() => {
	foodItem.append(spinner);
	const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
	const meals = await response.data.meals;
	meals.forEach(result => {
		spinner.remove();
		const foodContent = document.createElement('food-content');
		foodContent.content = result;

		foodContent.classList.add('col-md-4')
		foodContent.classList.add('my-3')
		foodContent.setAttribute('food-data', result.idMeal);

		foodItem.append(foodContent);
	})
}



someMenus();

