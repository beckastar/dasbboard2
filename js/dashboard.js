//chart1
$(function () {
    $('#chart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false,

        },
        title: {
            text: 'Minutes of Vibration per Day'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Paid moneys',   45.0],
                ['Came back lots',       26.8],
                ['Something',    8.5],
                ['Monkey',     6.2],
                ['Popsicles',   0.7]
            ]
        }]
    });
});

$(function () {
  $('#gauge_chart').highcharts({
        chart: {
            type: 'gauge',
            spacingTop: -100,
            marginLeft: 50,
            // align: 'center',
            verticalAlign: 'top',
            // spacingBottom: 30,
            width: 250
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
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
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
                        inc = Math.round((Math.random() - 0.5) * 20);

                    newVal = point.y + inc;
                    if (newVal < 0 || newVal > 200) {
                        newVal = point.y - inc;
                    }

                    point.update(newVal);

                }, 3000);
            }
        });
});


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