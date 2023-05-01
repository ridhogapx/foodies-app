// Static
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



import './components/AppBar.js';
import './components/SearchBar.js';

import axios from 'axios';


axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
	.then(result => {
		console.log(result);
	})
