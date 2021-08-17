const dataRes = fetch('data/covid-19-example.csv')
    .then(response => response.text())
    .then(function(v) {
        console.log(v);
        return csvJSON(v);
    })
    .catch(err => console.log(err))

var selectedCity = "Seoul"

var spec9 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    // url: "data/covid-19-example.csv"
    name: "myData9"
  },
  width: "container",
  height: 300,
  mark: {
    type: "bar", 
  },
  encoding: {
    x: {
      field: "AgeGroup", 
      type: "ordinal",
    },
    y: {
      field: "Population",
      aggregate: "sum",
      scale: {
        domain: [0,300]
      },
    },
    color: {
      field: "Status"
    }
  },
  autosize: {
    type: 'fit',
    resize: 'true'
  },
}


vegaEmbed('#vis-9', spec9)
  .then(function (res) {
    function drawVl9(v, selectedCity) {
        var dataVal = JSON.parse(v).filter((el) => el.City === selectedCity);
        console.log(dataVal)
        var changeSet = vega.changeset()
            .remove(() => true)
            .insert(dataVal);
        res.view.change('myData9', changeSet).run();
        console.log(selectedCity);
    }


    const radio1 = document.getElementById('opt-Seoul');
    const radio2 = document.getElementById('opt-Daegu');
    const radio3 = document.getElementById('opt-Daejeon');
    const radio4 = document.getElementById('opt-Busan');
    const radio5 = document.getElementById('opt-Gwangju');

    

    dataRes.then(function(v) {
        console.log(selectedCity);
        drawVl9(v, selectedCity);

        radio1.addEventListener('click', function(){
          selectedCity = "Seoul"
          drawVl9(v, selectedCity);
        })
        radio2.addEventListener('click', function(){
          selectedCity = "Daegu"
          drawVl9(v, selectedCity);
        })
        radio3.addEventListener('click', function(){
          selectedCity = "Daejeon"
          drawVl9(v, selectedCity);
        })
        radio4.addEventListener('click', function(){
          selectedCity = "Busan"
          drawVl9(v, selectedCity);
        })
        radio5.addEventListener('click', function(){
          selectedCity = "Gwangju"
          drawVl9(v, selectedCity);
      })

    })
});