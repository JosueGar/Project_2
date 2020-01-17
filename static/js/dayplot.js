var data = init_objs;

var days = [];

// buildBarPlot
data.forEach((x) => {
    var datetime = new Date(x.date);
    var day = datetime.getDay()
    // var datesplit = x.date.split("-");
    // var day = datesplit[2];
    x["day"] = day
    if (days.indexOf(day) === -1) {
        days.push(day);
    }
    // console.log(x);
});

days.sort();

var dayMap = data.map(obj => obj.day)
var dayCount = [];

for (var i=0; i < days.length; ++i) {
    count = 0;
    for (var j=0; j < dayMap.length; ++j) {
        if (days[i] === dayMap[j]) {
            count++;
        }
    }
    dayCount.push(count);
}

days[0] = "Sun";
days[1] = "Mon";
days[2] = "Tue";
days[3] = "Wed";
days[4] = "Thu";
days[5] = "Fri";
days[6] = "Sat";

var trace = {
    x: days,
    y: dayCount,
    type: "bar",
};

var data = [trace];

var layout = {
    title: "Day Frequency",
    autosize: true,
    xaxis: {
        autotick: false,
        title: "Day"
    },
    yaxis: {
        title: "Occurrences"
    }
};

Plotly.newPlot("plot-days", data, layout), {responsive: true};

// // function init() {

// // }