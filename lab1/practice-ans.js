// let dataJSON;
let over25 = []; 
let totIncome, avgIncome = 0;
let totIncome25,avgIncome25 = 0;

function main(dataJSON){

    function logAnswer(n, content) {
        if (n < 0 || n > 7) return;
        console.log(`Practice ${n}. ${content}`)
    }
    // 1. Add an income based on these rules:
    // - 10 USD for each letter of the name. So if the name is "Bob" the income is 30

    const income = dataJSON.map(function (x, i,arr){
        // ** answer **
        x.income = x.first_name.length*10;
        // ************
        return x
    })
    
    logAnswer(1, JSON.stringify(income));

    // 2. Get the list of people with age > 25. How many are there?
    
    // ** answer **
    over25 = dataJSON.filter(({age}) => age > 25);
    // ************
    
    logAnswer(2, over25.length);

    // 3. Get the total and average income for the entire population.
    totIncome = dataJSON.reduce((sum, {income}) => sum + income,0);
    
    // ** answer **
    avgIncome = totIncome/dataJSON.length;
    // ************
    
    logAnswer(3, `Total income: ${totIncome}, Average income: ${avgIncome}`);

    // 4. Get total and average income of people older than 25 (included).
    
    // ** answer **
    totIncome25 = over25.reduce((sum, {income}) => sum + income,0);
    avgIncome25 = totIncome25/over25.length;
    // ************
    
    logAnswer(4, `Total income: ${totIncome25}, Average income: ${avgIncome25}`);

    // 5. Find in which city "Sabra Uyetake” lives.

    // ** answer **
    const city = dataJSON
        .find(({first_name,last_name}) => first_name === "Sabra" && last_name === "Uyetake")
        .city;
    // ************
    
    logAnswer(5, city);

    // 6. Find if there is anyone who lives in the same city of others.
    const cityList = dataJSON.map(({city})=> city);
    const cityListCounter = cityList.map(function (city, i , arr) {
        const counter = cityList.filter(function (c,i,arr){
            return city == c;
        })
        return {
            cityName : city,
            // ** answer **
            counter : counter.length,
            // ************
        };
    });
    
    // ** answer **
    const ifCitiesShared = cityListCounter.some(({counter})=>counter>1);
    // ************
    
    logAnswer(6, ifCitiesShared);

    // 7. Get the city/cities where most people live.
    
    // ** answer **
    const popularCitiesSorted = cityListCounter.sort((a,b)=>b.counter-a.counter);
    // ************
    const mostPopularCity = (popularCitiesSorted[0].cityName);

    logAnswer(7, mostPopularCity);
}

fetch("./data.json")
    .then((res)=>res.json())
    .then((res)=> main(res));

