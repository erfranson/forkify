import axios from 'axios';
import Search from './models/Search';

const pizza = new Search('pizza');
console.log(pizza)
pizza.getResults();