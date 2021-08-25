// let dataJSON;
let over25 = []; 
let totIncome = 0, avgIncome = 0, totIncome25 = 0, avgIncome25 = 0;

function main(dataJSON){

    console.log(dataJSON); // check the data in the console !!
    function logAnswer(n, content) {
        if (n < 0 || n > 7) return;
        console.log(`Practice ${n}. ${content}`)
    }

    // ************************************************************
    // 1. Get the list of people with age > 25. How many are there?
    // ************************************************************
    
    // ********************
    // ** implement here **
    // over25 = ...
    // ********************

    logAnswer(1, over25.length);

    // **************************************************************
    // 2. Get the total and average income for the entire population.
    // **************************************************************
    
    totIncome = dataJSON.reduce((sum, {income}) => sum + income,0);
    // ********************
    // ** implement here ** 
    // avgIncome = ...
    // ********************

    logAnswer(2, `Total income: ${totIncome}, Average income: ${avgIncome}`);

    // *******************************************************************
    // 3. Get total and average income of people older than 25. (age > 25)
    // *******************************************************************
    
    // ********************
    // ** implement here **
    // totIncome25 = ...
    // avgIncome25 = ...
    // ********************
    
    logAnswer(3, `Total income: ${totIncome25}, Average income: ${avgIncome25}`);

    // ********************************************
    // 4. Find in which city "Sabra Uyetake” lives.
    // ********************************************

    const city = dataJSON
        .find(({first_name,last_name}) => first_name === "James") // ** change here ** 
        .city;
    
    logAnswer(4, city);

    // ****************************************************************
    // 5. Find if there is anyone who lives in the same city of others.
    // ****************************************************************

    const cityList = dataJSON.map(({city})=> city);
    const cityListCounter = cityList.map(function (city, i , arr) {
        const counter = cityList.filter(function (c,i,arr){
            return city == c;
        })
        return {
            cityName : city,
            counter : null, // ** change here **
        };
    });
    
    // ********************
    // ** implement here ** 
    // ********************
    // !! hint : 
    const ifCitiesShared = cityListCounter.some(({counter})=>true); // ** change inside some(..) **
    
    logAnswer(5, ifCitiesShared);

    // ********************************************************
    // 6. Get the city/cities where most amount of people live.
    // ********************************************************
    
    // ********************
    // ** implement here ** 
    // ********************
    // !! hint : 
    const popularCitiesSorted = cityListCounter.sort((a,b) => a - b); // ** change inside sort(..) **
    
    const mostPopularCity = (popularCitiesSorted[0].cityName);

    logAnswer(6, mostPopularCity);
}

fetch("./data.json")
    .then((res)=>res.json())
    .then(function(res) {
        const income = res.map((x,i,arr) => {x.income = x.first_name.length*10})
        main(res)
    });

