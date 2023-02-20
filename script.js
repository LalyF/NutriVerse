let queryForm = document.querySelector('#query-form');
let queryInput = document.querySelector('#query-input');
let resultDiv = document.querySelector('#result');

  queryForm.addEventListener('submit', async event => {
  event.preventDefault();
  let query = queryInput.value;
    let apiKey = 'qdKVWeHzUHtl2U+cUlcnpA==xw0K7zzUbq4tOJ7y';

    
  let response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
    headers: { 'X-Api-Key': apiKey }
  });
  
  let result = await response.json();
 console.log(result)

 //console.log(response)
 
  resultDiv.innerHTML = `
  <style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  </style>
  <h4>Calorie values for ${result.items[0].name} per ${result.items[0].serving_size_g}  grams</h4>
  <table>
  <tr>
    <th>Nutrition</th>
    <th>Values</th>
  </tr>
  <tr>
    <td>Calories</td>
    <td>${result.items[0].calories} g</td>
  </tr>
  <tr>
    <td>Protein</td>
    <td> ${result.items[0].protein_g}g</td>
  </tr>
  <tr>
    <td>Carbohydrates</td>
    <td>${result.items[0].carbohydrates_total_g}g</td>
  </tr>
  <tr>
  <td>Fat</td>
    <td>${result.items[0].fat_total_g}g</td>
        </tr>
        <td>Saturated Fat</td>
        <td>${result.items[0].fat_saturated_g}g</td>
        </tr>
    <td>Sugar</td>
    <td>${result.items[0].sugar_g}g</td>
        </tr>
        <td>Cholestrol</td>
    <td>${result.items[0].cholesterol_mg}g</td>
        </tr>
        
    
        <td>Fibre</td>
    <td>${result.items[0].fiber_g}g</td>
        </tr>
        <td>Pottassium</td>
        <td>${result.items[0].potassium_mg}g</td>
            </tr>
            <td>Sodium</td>
        <td>${result.items[0].sodium_mg}g</td>
            </tr>

            


    
      </table>
  `;
});

 API_KEY = '6c83d1ee96cd41b3ad45e6f4bfd8c697'; // Spoonacular API key
		const searchForm = document.querySelector('#search-form');
		const recipesContainer = document.querySelector('#recipes');

		searchForm.addEventListener('submit', event => {
			event.preventDefault();
			const query = document.querySelector('#query').value;
			searchRecipes(query);
		});

		async function searchRecipes(query) {
			const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`);
			const data = await response.json();
			displayRecipes(data.results);
		}

		function displayRecipes(recipes) {
            console.log(recipes)
			recipesContainer.innerHTML = '';
			recipes.forEach(recipe => {
				const recipeElement = document.createElement('div');
				recipeElement.classList.add('recipe');
				recipeElement.innerHTML = `
					<img src="${recipe.image}" alt="${recipe.title}">
					<h2>${recipe.title}</h2>
					<a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
				`;
				recipesContainer.appendChild(recipeElement);
			});
		}