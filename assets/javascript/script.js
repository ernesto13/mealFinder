// server  //  terminal command:  python3  -m http.server 3000

const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    result_heading = document.getElementById('result-heading'),
    mealsElement = document.getElementById('meals'),
    singleMeal = document.getElementById('single-meal');

    // make a function here to search api

    function searchMeal(e){

        e.preventDefault();

        // clear single meal 
        singleMeal.innerHTML = '';
        // get search term
        const term = search.value;
        console.log(term)

        // check for empty input with an if statement
        if (term.trim()) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                result_heading.innerHTML = `<h3>Searched for '${term}' </h3>`;

                if(data.meals  === null){
                    result_heading.innerHTML = `<h3> nothing found! for '${term}'`
                } else {
                    mealsElement.innerHTML = data.meals.map(meal => 
                       ` <div class='meal'>
                        <img src= "${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <div class="meal-info" data-mealID ="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                        
                        </div>
                        
                        </div>`).join('');
                }

            });
            // clear search input

            search.value = '';
        } else {
            alert('Search Input needed!')
            
        }

        // 

    }

    submit.addEventListener('submit', searchMeal);