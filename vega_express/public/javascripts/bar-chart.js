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
vegaEmbed('#vis-8', yourVlSpec4);

// const input = document.querySelector('input');
const input1 = document.getElementById('number-1');
const input2 = document.getElementById('number-2');

input1.addEventListener('change', updateValue1);
input2.addEventListener('change', updateValue2);

function updateValue1(e) {

    for (i=1; i<6; i++){
        if (e.target.value !== "") var str = `${e.target.value} x ${i} = ${e.target.value*i}`
        else var str = " "
        document.getElementById(`multiple-${i}-1`).textContent = str;
    }
    
    
}

function updateValue2(e) {
    for (i=1; i<6; i++){
        if (e.target.value !== "") var str = `${e.target.value} x ${i} = ${e.target.value*i}`
        else var str = " "
        document.getElementById(`multiple-${i}-2`).textContent = str;
    }
}