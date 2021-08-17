function make_article(name, content){
    return `   <p>Name: ${name}</p>
                <p>Content: ${content}</p>
                <p>---------------</p>
            `
}

function show_article() {
    $.ajax({
        type: "GET",
        url: "/data/articles",
        data: {},
        success: function (res) {
          response = JSON.parse(res.articles);
          for (let i = 0; i < response.length; i++) {
            let article = response[i];

            let name = article['name'];
            let content = article['content'];
            append_one = make_article(name, content);
            
            $('#mongodb').append(append_one);
          }
        }
    });
}


const weatherRes = fetch('data/seattleWeather')
    .then(response => response.json())
    .then(function(v) {
        console.log(JSON.parse(v))
        return JSON.parse(v)
    })
    .catch(err => console.log(err))
