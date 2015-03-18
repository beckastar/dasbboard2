
var nums = [1, 2, 3, 4, 5, 6, 6, 7, 4, 7, 8, 9, 10, 3, 7, 6,];

function get_rand(arr){
    var maximum = arr.length;
    var  minimum = 0;
    var rand  = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log(rand);
    return rand;
}


function choose_adjective(num){
    var num = get_rand(nums);
    var happy_face = '<img src="img/happy.jpg">';
    var sad_face = '<img src="img/sad.jpg">';
    var neutral_face = '<img src="img/neutral.png">';
    // $("#eval #adjective").empty();
    var adjective, face;
     if (num<=4){
        adjective = "sad";
        face = sad_face;
    }
    else if (num<=7 ){
        adjective = "pretty ok";
        face = neutral_face;
    }
    else if (num>7){
        adjective = "great";
        face = happy_face;
    }
     // $("#eval span").text(adjective);
    addjquery(face, adjective);
    console.log(adjective, face);
    return;
}
function addjquery(emo, adj){
    $("td#emoticon").append(emo);
    $("td#adjective").append(adj);
    console.log("called");
}

choose_adjective();

        // Add some life
// var rand_status = function () {
//     var happy = ":)";
//     var sad = ":(";
//     var ok = ":|";
//     setInterval(function () {
//         var rand_num = get_rand(nums);
//         if (rand_num<4){
//             // $("#status_panel").append(sad);
//         }
//         else if (rand_num>4 && rand_num<8){
//             // $("#status_panel").append(ok);
//         }
//         else if(rand_num>8){
//             // $("#status_panel").append(happy);
//         }
//         console.log(rand_num);
//         // $("#eval #adjective").empty();
//         add_adjective(rand_num);
//         $("#status_panel").append();

//     }, 3000);
// };

// rand_status();



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
              backgroundColor:  "#ffffff",
              width: 300
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

