var visWidth = document.getElementById('vis-2').clientWidth/4;

var yourVlSpec1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 100,
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
    autosize: {
        // type: 'fit',
        resize: 'true'
    },
  };
  

var yourVlSpec2 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: visWidth,
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
    autosize: {
        // type: 'fit',
        resize: 'true'
    },
  };
  
  var yourVlSpec3 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {"url": "data/seattle-weather.csv"},
    mark: "bar",
    width: "container",
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
    autosize: {
        // type: 'fit',
        resize: 'true'
    },
  }
  

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
  

  
vegaEmbed('#vis-1', yourVlSpec1);
vegaEmbed('#vis-2', yourVlSpec2);
vegaEmbed('#vis-3', yourVlSpec3);
vegaEmbed('#vis-4', yourVlSpec3);
vegaEmbed('#vis-5', yourVlSpec3);
vegaEmbed('#vis-6', yourVlSpec3);
vegaEmbed('#vis-7', yourVlSpec4);


function csvJSON(csv){

    var lines=csv.split("\n");
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
  
    return JSON.stringify(result); //JSON
  }

var yourVlSpec5 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "",
    data: {
    //   values: dataVal,
        // url: "data/seattle-weather.csv",
        name: "myData"
    },
    // transform: [
    //     {filter: 'datum.date === "2012-01-01"'},
    //   ], 
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
            },
          y: {
                title: "Weather", 
                field: "weather",
                axis: {
                    minExtent: 30,
                }
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
    ]
}


const response = fetch('data/seattle-weather.csv')
    .then(response => response.text())
    .then(function(v) {
        return csvJSON(v);
    })
    .catch(err => console.log(err))

var selectedYear = "2012";
// var view;


vegaEmbed('#vis-8', yourVlSpec5)
    .then(function (res) {
        function drawVl8(v, selectedYear) {
            var dataVal = JSON.parse(v).filter((el) => el.date.slice(0,4) === selectedYear);
            console.log(dataVal)
            var changeSet = vega.changeset()
                .remove(() => true)
                .insert(dataVal);
            res.view.change('myData', changeSet).run();
            console.log(selectedYear);
        }


        const radio1 = document.getElementById('btnradio1');
        const radio2 = document.getElementById('btnradio2');
        const radio3 = document.getElementById('btnradio3');
        const radio4 = document.getElementById('btnradio4');

        

        response.then(function(v) {
            console.log(selectedYear);
            drawVl8(v, selectedYear);

            radio1.addEventListener('click', function(){
                selectedYear = "2012"
                drawVl8(v, selectedYear);
            })
            radio2.addEventListener('click', function(){
                selectedYear = "2013"
                drawVl8(v, selectedYear);
            })
            radio3.addEventListener('click', function(){
                selectedYear = "2014"
                drawVl8(v, selectedYear);
            })
            radio4.addEventListener('click', function(){
                selectedYear = "2015"
                drawVl8(v, selectedYear);
            })
    
        })
});

// function render(spec) {
//     view = new vega.View(vega.parse(spec), {
//             renderer:  'canvas',  // renderer (canvas or svg)
//             container: '#vis-8',   // parent DOM container
//             hover:     true       // enable hover processing
//         });
//     return view.runAsync();
// }

// render(yourVlSpec5)

// function drawVl8(v, selectedYear) {
//     var dataVal = JSON.stringify(JSON.parse(v).filter((el) => el.date.slice(0,4) === selectedYear));
//     var changeSet = vega.changeset()
//         .remove(() => true)
//         .insert(dataVal);
//     view.change('myData', changeSet).run();
// }

// response.then(function(v) {
//     console.log(selectedYear);
//     drawVl8(v, selectedYear);
// })

