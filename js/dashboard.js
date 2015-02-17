
$(function () {
  $('#gauge_chart').highcharts({
        chart: {
            type: 'gauge',
            spacingTop: -120,
            marginLeft: 0,
            align: 'center',
            verticalAlign: 'top',
            // spacingBottom: 30,
            width: 200,
            backgroundColor:  '#E5E5E5',
            // plotBackgroundColor: null,
            // plotBackgroundImage: null,
            // plotBorderWidth: 0,
            // plotShadow: false
        },
        plotOptions: {
          center: ['50%','50%'],
        },
        title: {
            text: ''
        },
        exporting: { enabled: false },
        pane: {
            //[right, top]
            center: ['50%', '50%'],
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 10,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 25,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'avg min/week'
            },
            plotBands: [{
                from: 0,
                to: 4,
                color: 'red' // green
            }, {
                from: 4,
                to: 7,
                color: '#DDDF0D' // yellow
            }, {
                from: 7,
                to: 10,
                color: 'green' // red
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' Average Minutes'
            }
        }]

    },
        // Add some life
        function (chart) {
            if (!chart.renderer.forExport) {
                setInterval(function () {
                    var point = chart.series[0].points[0],
                        newVal,
                        inc = Math.round((Math.random() * 10) + 1);

                    newVal = point.y + inc;
                    if (newVal < 0 || newVal > 10) {
                        newVal = inc;
                    }

                    point.update(newVal);
                    console.log(newVal);
                    // $("#eval #adjective").empty();
                    add_adjective(newVal);
                }, 3000);

            }
        });
});

function add_adjective(num){
    $("#eval #adjective").empty();
    console.log("adjective");
    var adjective;
     if (num<=4){
        adjective = "poorly";
    }
    else if (num<=7 ){
        adjective = "pretty ok";
    }
    else if (num<=11 ){
        adjective = "great";
    }
     // $("#eval span").text(adjective);

    return $("#eval #adjective").append(adjective);
}

// $('#gauge_chart').center({
//   against : '#gauge_chart_container',
//   top: 10
// });


//TODO: create array of milliseconds to convert
//chart4
  $(function () {
    $(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
      $('#line_graph').highcharts({
          chart: {
              type: 'column',
              height: 240,
              backgroundColor:  '#E5E5E5'
          },

          title: {
              text: ''
          },
          xAxis: {
              type: 'datetime',
              tickPixelInterval: 150
          },
          yAxis: {
              title: {
                  text: 'Value'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },

          legend: {
              enabled: false
          },
          series: [{
              name: '1/1',
               data: [1]
            },
            {
              name:'1/2',
              data:[2]

          },
            {
              name:'1/3',
              data:[2]

          },
            {
              name:'1/4',
              data:[2]

          },
            {
              name:'1/5',
              data:[2]

          },
            {
              name:'1/6',
              data:[2]

          },
            {
              name:'1/7',
              data:[2]

          },
            {
              name:'1/8',
              data:[2]

          },
            {
              name:'1/9',
              data:[2]

          }
          ]
      });
    });
  });

