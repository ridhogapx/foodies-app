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



axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
	.then(result => {
		let response = result.data.meals;
		for(let i = 0; i < response.length; i++ ) {
			console.log(response[i].strMeal);
		}
	}).catch(err => {
		console.log(err);
	})
