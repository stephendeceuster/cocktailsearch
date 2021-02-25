import store from "./redux/store";
import { setCount, increment, decrement } from "./redux/cocktailcounter";
import { getCocktails } from "./redux/cocktailsearch";

/**
 * COCKTAIL COUNTER
 */

// READ STOREDATA & RENDER 
const renderCocktailCount = () => {
  const { count } = store.getState().cocktailCounterState;
  document.querySelector("#cocktailcount").innerText = count;
  document.querySelector("#cocktailcount-input").value = count;
}

renderCocktailCount();

store.subscribe(renderCocktailCount);

// SEND ACTIONS AFTER EVENTS
document.querySelector("#inc").addEventListener('click', () => {
  console.log('inc');
  store.dispatch(increment());
});
document.querySelector("#dec").addEventListener('click', () => {
  console.log('dec');
  store.dispatch(decrement());
});
document.querySelector("#cocktailcount-input").addEventListener('input', (e) => {
  store.dispatch(setCount(parseInt(e.target.value)));
});



/**
 * COCKTAIL SEARCH
 */

// READ STOREDATA & RENDER 
const renderCocktailSearch = () => {
  const {cocktails, loading} = store.getState().cocktailSearchState;
  if ( loading ) {
    document.querySelector('#loading').style.display = "block";
  } else {
    document.querySelector('#loading').style.display = "none";
  }
  if ( cocktails ) {
    document.querySelector('#cocktailgrid').innerHTML = cocktails.map(cocktail => 
      `<li>${cocktail.strDrink}</li>
       <img class="drink-thumb" src="${cocktail.strDrinkThumb}">
      `).join();
  } else {

  }
};

 renderCocktailSearch();

 store.subscribe(renderCocktailSearch);

 // SEND ACTIONS AFTER EVENTS
 document.querySelector('#cocktailform').addEventListener('submit', (e) => {
   e.preventDefault();
   const inputValue = document.querySelector('#cocktailform-input');
   store.dispatch(getCocktails(inputValue.value));
   inputValue.value = "";
 });


