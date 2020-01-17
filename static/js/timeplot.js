var data = init_objs;

var hours = [];

// buildBarPlot
data.forEach((x) => {
    var timesplit = x.time.split(":");
    var hour = timesplit[0];
    x["hour"] = hour
    if (hours.indexOf(hour) === -1) {
        hours.push(hour);
    }
    // console.log(x);
});

hours.sort();

var hourMap = data.map(obj => obj.hour)
var hourCount = [];

for (var i=0; i < hours.length; ++i) {
    count = 0;
    for (var j=0; j < hourMap.length; ++j) {
        if (hours[i] === hourMap[j]) {
            count++;
        }
    }
    hourCount.push(count);
}

var trace = {
    x: hours,
    y: hourCount,
    type: "bar",
};

var data = [trace];

var layout = {
    title: "Hour Frequency",
    autosize: true,
    xaxis: {
        autotick: false,
        title: "Hour (Military)"
    },
    yaxis: {
        title: "Occurrences"
    }
};

Plotly.newPlot("plot-time", data, layout), {responsive: true};

// // function init() {

// // }