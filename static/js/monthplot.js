var data = init_objs;

var months = [];

// buildBarPlot
data.forEach((x) => {
    var datesplit = x.date.split("-");
    var month = datesplit[1];
    x["month"] = month
    if (months.indexOf(month) === -1) {
        months.push(month);
    }
    // console.log(x);
});

months.sort();

var monthMap = data.map(obj => obj.month)
var monthCount = [];

for (var i=0; i < months.length; ++i) {
    count = 0;
    for (var j=0; j < monthMap.length; ++j) {
        if (months[i] === monthMap[j]) {
            count++;
        }
    }
    monthCount.push(count);
}

var trace = {
    x: months,
    y: monthCount,
    type: "bar",
};

var data = [trace];

var layout = {
    title: "Month Frequency",
    autosize: true,
    xaxis: {
        autotick: false,
        title: "Month (1-12)"
    },
    yaxis: {
        title: "Occurrences"
    }
};

Plotly.newPlot("plot-month", data, layout), {responsive: true};

// // function init() {

// // }