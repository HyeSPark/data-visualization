// ***********************
// Practice 1. Fixed Width
// ***********************

var yourVlSpec1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    // ** answer **
    width: 100, // the number can be hard-coded
    // ************
    description: 'A simple bar chart with embedded data.',
    data: {
        values: [
            {'a':1, 'b':4, 'name':'SF'},
            {'a':1, 'b':2, 'name':'Montriol'},
            {'a':2, 'b':1, 'name':'SF'},
            {'a':2, 'b':4, 'name':'Montriol'},
            {'a':3, 'b':2, 'name':'SF'},
            {'a':3, 'b':5, 'name':'Montriol'},
        ]
    },
    mark: 'bar',
    encoding: {
        column: {
            field: "a", 
            type: "ordinal", 
            spacing: 10, 
            title: "",
          },
        x: {
            field: 'name', 
            type: 'nominal',
            axis: {
                title: "", 
                labels: false
            },
        },
        y: {
            field: 'b',
            type: 'quantitative',
            axis: {
                title: "", 
            }
        },
        color: {
            "field": "name"
        }
    },
};
  
vegaEmbed('#vis-1', yourVlSpec1); // embeding the graph in html

// ********************************************
// Practice 2. Fixed Width with the window size
// ********************************************

var visWidth = document.getElementById('vis-2').clientWidth/4; // element.clientWidth can get the window width size


var yourVlSpec2 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    // ** answer **
    width: visWidth, // Using variable in specification
    description: 'A simple bar chart with embedded data.',
    data: {
        values: [
            {'a':1, 'b':4, 'name':'SF'},
            {'a':1, 'b':2, 'name':'Montriol'},
            {'a':2, 'b':1, 'name':'SF'},
            {'a':2, 'b':4, 'name':'Montriol'},
            {'a':3, 'b':2, 'name':'SF'},
            {'a':3, 'b':5, 'name':'Montriol'},
        ]
    },
    mark: 'bar',
    encoding: {
        column: {
            field: "a", 
            type: "ordinal", 
            spacing: 10, 
            title: "",
          },
        x: {
            field: 'name', 
            type: 'nominal',
            axis: {
                title: "", 
                labels: false
            },
        },
        y: {
            field: 'b',
            type: 'quantitative',
            axis: {
                title: "", 
            }
        },
        color: {
            "field": "name"
        }
    },
  };

  vegaEmbed('#vis-2', yourVlSpec2);
  
// ******************************************************************
// Practice 3. Responsive Width, Layout and Component Using Bootstrap
// ******************************************************************

  var yourVlSpec3 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {"url": "data/seattle-weather.csv"},
    mark: "bar",
    // ** answer **
    width: "container", // the graph's width fits in the divider that contains this graph
    encoding: {
      x: {
        timeUnit: "month",
        field: "date",
        type: "ordinal",
        title: "Month of the year"
      },
      y: {
        aggregate: "count",
        type: "quantitative"
      },
      color: {
        field: "weather",
        type: "nominal",
        scale: {
          domain: ["sun", "fog", "drizzle", "rain", "snow"],
          range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
        },
        title: "Weather type"
      }
    },
  }

vegaEmbed('#vis-3', yourVlSpec3); // practice 3-1. Responsive Width
vegaEmbed('#vis-4', yourVlSpec3); // practice 3-2. Layout with Bootstrap - first graph
vegaEmbed('#vis-5', yourVlSpec3); // practice 3-2. Layout with Bootstrap - second graph
vegaEmbed('#vis-6', yourVlSpec3); // practice 3-3. Styling with Bootstrap component

// ******************************
// Practice 4. Callbacks using JS
// ******************************

const input1 = document.getElementById('number-1'); // node of html element that has 'number-1' as ID
const input2 = document.getElementById('number-2');

// make the event listener in each html element and bind below functions
// - when input1, 2 has change, functions below is called respectively
// ** answer **
input1.addEventListener('change', updateValue1);
input2.addEventListener('change', updateValue2);
// ************

function updateValue1(e) {
    for (i=1; i<6; i++){
        if (e.target.value !== "") var str = `${e.target.value} x ${i} = ${e.target.value*i}`
        else var str = " "
        let strId = `multiple-${i}-1` // id of the table cell - 1st col and ith row
        // ** answer **
        document.getElementById(strId).textContent = str;
    }
}

function updateValue2(e) {
    for (i=1; i<6; i++){
        if (e.target.value !== "") var str = `${e.target.value} x ${i} = ${e.target.value*i}`
        else var str = " "
        let strId = `multiple-${i}-2` // id of the table cell - 2nd col and ith row
        // ** answer **
        document.getElementById(strId).textContent = str;
    }
}

// ************************************
// Practice 5. Interaction by Vega-Lite
// ************************************

var yourVlSpec4 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Seattle Weather, 2012-2015",
    data: {
      url: "data/seattle-weather.csv"
    },
    vconcat: [
      {
        encoding: {
          color: {
            condition: {
              param: "brush",
              title: "Weather",
              field: "weather",
              type: "nominal",
              scale: {
                domain: ["sun", "fog", "drizzle", "rain", "snow"],
                range: ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
              }
            },
            value: "lightgray"
          },
          size: {
            title: "Precipitation",
            field: "precipitation",
            scale: {"domain": [-1, 50]},
            type: "quantitative"
          },
          x: {
            field: "date",
            timeUnit: "monthdate",
            title: "Date",
            axis: {"format": "%b"}
          },
          y: {
            title: "Maximum Daily Temperature (C)",
            field: "temp_max",
            scale: {"domain": [-5, 40]},
            type: "quantitative"
          }
        },
        width: "container",
        height: 300,
        mark: "point",
        params: [{
          name: "brush",
          select: {"type": "interval", "encodings": ["x"]}
        }],
        transform: [{"filter": {"param": "click"}}]
      },
      {
        encoding: {
          color: {
            condition: {
              param: "click",
              field: "weather",
              scale: {
                domain: ["sun", "fog", "drizzle", "rain", "snow"],
                range: ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
              }
            },
            value: "lightgray"
          },
          x: {"aggregate": "count"},
          y: {"title": "Weather", "field": "weather"}
        },
        width: "container",
        mark: "bar",
        params: [{
          name: "click",
          select: {"type": "point", "encodings": ["color"]}
        }],
        transform: [{"filter": {"param": "brush"}}]
      }
    ]
  }

vegaEmbed('#vis-7', yourVlSpec4);

// *******************************
// Practice 6. Interaction with JS
// *******************************

var yourVlSpec5 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "",
    data: {
        name: "myData" // initialize the data with the name that can be used in view change
    },
    vconcat: [
      {
        encoding: {
          color: {
            condition: {
              param: "brush",
              title: "Weather",
              field: "weather",
              type: "nominal",
              scale: {
                domain: ["sun", "fog", "drizzle", "rain", "snow"],
                range: ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
              }
            },
            value: "lightgray"
          },
          size: {
            title: "Precipitation",
            field: "precipitation",
            scale: {"domain": [-1, 50]},
            type: "quantitative"
          },
          x: {
            field: "date",
            timeUnit: "monthdate",
            title: "Date",
            axis: {"format": "%b"}
          },
          y: {
            title: "Maximum Daily Temperature (C)",
            field: "temp_max",
            scale: {"domain": [-5, 40]},
            type: "quantitative"
          }
        },
        width: "container",
        height: 300,
        mark: "point",
        params: [{
          name: "brush",
          select: {"type": "interval", "encodings": ["x"]}
        }],
        transform: [{"filter": {"param": "click"}}]
      },
      {
        encoding: {
          color: {
            condition: {
              param: "click",
              field: "weather",
              scale: {
                domain: ["sun", "fog", "drizzle", "rain", "snow"],
                range: ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
              }
            },
            value: "lightgray"
          },
          x: {  
              aggregate: "count",
              scale: {
                domain: [0,200]
              },

            },
          y: {
                field: "weather",
            },
        },
        width: "container",
        height: 100,
        mark: "bar",
        params: [{
          name: "click",
          select: {"type": "point", "encodings": ["color"]}
        }],
        transform: [{"filter": {"param": "brush"}}]
      }
    ],
    autosize: { 
      type: 'fit',
      resize: 'true' // if resize is not 'true', the size is fixed with first loaded size despite the changing view
    },
}


const response = fetch('data/seattle-weather.csv') // reference the csv data file
    .then(response => response.text()) // response into text
    .then(function(v) { // after the converting, make the string into JSON using custom function "csvJSON(v)"
        console.log(v);
        return csvJSON(v);
    })
    .catch(err => console.log(err)) // if there exist error, catch it


vegaEmbed('#vis-8', yourVlSpec5)
    .then(function (res) {
        function drawVl8(v, selectedYear) { // function that should be called every clicking of radio button
            var dataVal = JSON.parse(v).filter((el) => el.date.slice(0,4) === selectedYear); // filtering the data of selected year
            var changeSet = vega.changeset() // the change set should be the form of vega.changeset().remove(..).insert(..)
                .remove(() => true) // remove all
                .insert(dataVal); // insert filtered data value above
            // ** answer **
            res.view.change('myData', changeSet).run(); // change of dataset : res.view.change(data name in specification, change set).run()
            // ************
        }


        const radio1 = document.getElementById('btnradio1');
        const radio2 = document.getElementById('btnradio2');
        const radio3 = document.getElementById('btnradio3');
        const radio4 = document.getElementById('btnradio4');

        response.then(function(v) { // after the loading of const "response", this block will be executed
          // ** answer **
          drawVl8(v, "2012");

          radio1.addEventListener('click', function(){
            drawVl8(v, "2012");
          })
          radio2.addEventListener('click', function(){
            drawVl8(v, "2013");
          })
          radio3.addEventListener('click', function(){
            drawVl8(v, "2014");
          })
          radio4.addEventListener('click', function(){
            drawVl8(v, "2015");
          })
          // ***********
    
        })
});