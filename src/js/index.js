// Global app controller
import axios from 'axios';
import Search from './models/Search';

const search = new Search('pizza');
console.log(search);
search.getResults();