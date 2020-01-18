
function initTimePlot() {
    var data = init_objs;
    // Make a list for unique hours
    var hours = [];

    // Grab hours from each object
    data.forEach((x) => {
        // Grab the hour, and create a new key value pair
        var timesplit = x.time.split(":");
        var hour = timesplit[0];
        x["hour"] = hour
        // Append the hour to the hours list if it is not already in it
        if (hours.indexOf(hour) === -1) {
            hours.push(hour);
        }
    });

    // Sort the hours numerically
    hours.sort();

    // Create a list of all the hours in the data
    var hourMap = data.map(obj => obj.hour)
    var hourCount = [];

    // Loop through unique hours and all hours to count instances of each hour
    for (var i=0; i < hours.length; ++i) {
        count = 0;
        for (var j=0; j < hourMap.length; ++j) {
            if (hours[i] === hourMap[j]) {
                count++;
            }
        }
        hourCount.push(count);
    }

    // Build Plot
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
};

function buildTimePlot(new_objs) {
    var data = new_objs;
    // Make a list for unique hours
    var hours = [];

    // Grab hours from each object
    data.forEach((x) => {
        // Grab the hour, and create a new key value pair
        var timesplit = x.time.split(":");
        var hour = timesplit[0];
        x["hour"] = hour
        // Append the hour to the hours list if it is not already in it
        if (hours.indexOf(hour) === -1) {
            hours.push(hour);
        }
    });

    // Sort the hours numerically
    hours.sort();

    // Create a list of all the hours in the data
    var hourMap = data.map(obj => obj.hour)
    var hourCount = [];

    // Loop through unique hours and all hours to count instances of each hour
    for (var i=0; i < hours.length; ++i) {
        count = 0;
        for (var j=0; j < hourMap.length; ++j) {
            if (hours[i] === hourMap[j]) {
                count++;
            }
        }
        hourCount.push(count);
    }

    // Build Plot
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
};

$("select").change(function() {
    // Grab selected crime
    var car = $('#crimeSelect option:selected').text();
    // Grab selected year
    var year = $('#yearSelect option:selected').text();
    // Grab selected Day or Night
    var dn = $('#timeSelect option:selected').text();
    $.getJSON($SCRIPT_ROOT + '/_data_search', {
        car: $('#crimeSelect option:selected').text(),
        year: $('#yearSelect option:selected').text(),
        dn: $('#timeSelect option:selected').text()
    }, function(data) {
        buildTimePlot(data.new_objs)
    })
});

initTimePlot();