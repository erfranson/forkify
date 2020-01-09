import { elements } from './base';

export const getInput = () =>  elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = ' ';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}

/*
"Pasta with tomato and spinich"
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta','With']
acc: 9 / acc + cur.length = 15 / newTitle = [''Pasta','With', Tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta','With', Tomato'] word not pushed into the array since it is bigger than 17
acc: 15 / acc + cur.length = 24 / newTitle = ['Pasta','With', Tomato'] word not pushed into the array since it is bigger than 17
*/
const limitRecipeTitle = (title, limit = 17) =>{
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0)
        return `${newTitle.join(' ')} ...`
    }
    return title;
}

const renderRecipe = recipe => {
    const markUp = `
    <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`;
    elements.searchResList.insertAdjacentHTML('beforeend', markUp);

    
}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
    
}