import axios from 'axios';
import Search from './models/Search';

/** Global State of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */ 

const state = {};

const searchController = async () => {
    //1) Get query from view
    const query = document.querySelector('.search__field').value; //TODO

    if(query) {
        //2) New search object and add to state
        state.search = new Search(query);
        
        //3) Prepare UI for results

        //4) Search for recipes

        await state.search.getResults();

        //5) render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener( 'submit', e => {
    e.preventDefault();
    searchController();

})
