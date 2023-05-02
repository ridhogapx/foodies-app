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

/* 
Todo:
1. Making section for data menu
2. Logic input and search data API
 
*/

const foodItem = document.getElementById('foodItem');

const someMenus = async() => {
	const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
	const meals = await response.data.meals;
	meals.forEach(result => {
		const foodContent = document.createElement('food-content');
		foodContent.content = result;

		foodItem.append(foodContent);
	})
}

someMenus();