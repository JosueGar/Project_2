

function initDayPlot() {
    var data = init_objs;
    // Make a list for unique days
    var days = [];

    // Grab days from each object
    data.forEach((x) => {
        // Grab the day, and create a new key value pair
        var datetime = new Date(x.date);
        var day = datetime.getDay()
        x["day"] = day
        // Append the day to the days list if it is not already in it
        if (days.indexOf(day) === -1) {
            days.push(day);
        }
    });

    // Sort the days numerically
    days.sort();

    // Create a list of all the days in the data
    var dayMap = data.map(obj => obj.day)
    var dayCount = [];

    // Loop through unique days and all days to count instances of each day
    for (var i=0; i < days.length; ++i) {
        count = 0;
        for (var j=0; j < dayMap.length; ++j) {
            if (days[i] === dayMap[j]) {
                count++;
            }
        }
        // Dynamically reassign values for days
        if (days[i] === 0) {
            days[i] = "Sun"
        }
        else if (days[i] === 1) {
            days[i] = "Mon"
        }
        else if (days[i] === 2) {
            days[i] = "Tue"
        }
        else if (days[i] === 3) {
            days[i] = "Wed"
        }
        else if (days[i] === 4) {
            days[i] = "Thu"
        }
        else if (days[i] === 5) {
            days[i] = "Fri"
        }
        else {
            days[i] = "Sat"
        };
        dayCount.push(count);
    };

    // Build Plot
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
};

function buildDayPlot(new_objs) {
    var data = new_objs;
    // Make a list for unique days
    var days = [];

    // Grab days from each object
    data.forEach((x) => {
        // Grab the day, and create a new key value pair
        var datetime = new Date(x.date);
        var day = datetime.getDay()
        x["day"] = day
        // Append the day to the days list if it is not already in it
        if (days.indexOf(day) === -1) {
            days.push(day);
        }
    });

    // Sort the days numerically
    days.sort();

    // Create a list of all the days in the object
    var dayMap = data.map(obj => obj.day)
    var dayCount = [];

    // Loop through unique days and all days to count instances of each day
    for (var i=0; i < days.length; ++i) {
        count = 0;
        for (var j=0; j < dayMap.length; ++j) {
            if (days[i] === dayMap[j]) {
                count++;
            }
        }
        // Dynamically reassign values for days
        if (days[i] === 0) {
            days[i] = "Sun"
        }
        else if (days[i] === 1) {
            days[i] = "Mon"
        }
        else if (days[i] === 2) {
            days[i] = "Tue"
        }
        else if (days[i] === 3) {
            days[i] = "Wed"
        }
        else if (days[i] === 4) {
            days[i] = "Thu"
        }
        else if (days[i] === 5) {
            days[i] = "Fri"
        }
        else {
            days[i] = "Sat"
        };
        dayCount.push(count);
    };

    // Build Plot
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
};

$("select").change(function() {
    // Grab selected crime
    var car = $('#crimeSelect option:selected').text();
    console.log(car);
    // Grab selected year
    var year = $('#yearSelect option:selected').text();
    console.log(year);
    // Grab selected Day or Night
    var dn = $('#timeSelect option:selected').text();
    console.log(dn);
    // $.getJSON(@SCRIPT_ROOT + '/_data_search', {
    //     car: $('#crimeSelect option:selected').text(),
    //     year: $('#yearSelect option:selected').text(),
    //     dn: $('#timeSelect option:selected').text();
    // })
});

initDayPlot();