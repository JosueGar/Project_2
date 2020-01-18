
function initMonthPlot() {
    var data = init_objs;
    // Make a list for unique months
    var months = [];

    // Grab month from each object
    data.forEach((x) => {
        // Grab the month, and create a new key value pair
        var datesplit = x.date.split("-");
        var month = datesplit[1];
        x["month"] = month
        // Append the month to the months list if it is not already in it
        if (months.indexOf(month) === -1) {
            months.push(month);
        }
    });

    // Sort the months numerically
    months.sort();

    // Create a list of all the months in the data
    var monthMap = data.map(obj => obj.month)
    var monthCount = [];

    // Loop through unique months and all months to count instances of each month
    for (var i=0; i < months.length; ++i) {
        count = 0;
        for (var j=0; j < monthMap.length; ++j) {
            if (months[i] === monthMap[j]) {
                count++;
            }
        }
        // Dynamically reassign values for months
        if (months[i] === '01') {
            months[i] = "Jan"
        }
        else if (months[i] === '02') {
            months[i] = "Feb"
        }
        else if (months[i] === '03') {
            months[i] = "Mar"
        }
        else if (months[i] === '04') {
            months[i] = "Apr"
        }
        else if (months[i] === '05') {
            months[i] = "May"
        }
        else if (months[i] === '06') {
            months[i] = "Jun"
        }
        else if (months[i] === '07') {
            months[i] = "Jul"
        }
        else if (months[i] === '08') {
            months[i] = "Aug"
        }
        else if (months[i] === '09') {
            months[i] = "Sep"
        }
        else if (months[i] === '10') {
            months[i] = "Oct"
        }
        else if (months[i] === '11') {
            months[i] = "Nov"
        }
        else {
            months[i] = "Dec"
        };
        monthCount.push(count);
    };

    // Build Plot
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
            title: "Month"
        },
        yaxis: {
            title: "Occurrences"
        }
    };

    Plotly.newPlot("plot-month", data, layout), {responsive: true};
};

function buildMonthPlot(new_objs) {
    var data = new_objs;
    // Make a list for unique months
    var months = [];

    // Grab month from each object
    data.forEach((x) => {
        // Grab the month, and create a new key value pair
        var datesplit = x.date.split("-");
        var month = datesplit[1];
        x["month"] = month
        // Append the month to the months list if it is not already in it
        if (months.indexOf(month) === -1) {
            months.push(month);
        }
    });

    // Sort the months numerically
    months.sort();

    // Create a list of all the months in the data
    var monthMap = data.map(obj => obj.month)
    var monthCount = [];

    // Loop through unique months and all months to count instances of each month
    for (var i=0; i < months.length; ++i) {
        count = 0;
        for (var j=0; j < monthMap.length; ++j) {
            if (months[i] === monthMap[j]) {
                count++;
            }
        }
        // Dynamically reassign values for months
        if (months[i] === '01') {
            months[i] = "Jan"
        }
        else if (months[i] === '02') {
            months[i] = "Feb"
        }
        else if (months[i] === '03') {
            months[i] = "Mar"
        }
        else if (months[i] === '04') {
            months[i] = "Apr"
        }
        else if (months[i] === '05') {
            months[i] = "May"
        }
        else if (months[i] === '06') {
            months[i] = "Jun"
        }
        else if (months[i] === '07') {
            months[i] = "Jul"
        }
        else if (months[i] === '08') {
            months[i] = "Aug"
        }
        else if (months[i] === '09') {
            months[i] = "Sep"
        }
        else if (months[i] === '10') {
            months[i] = "Oct"
        }
        else if (months[i] === '11') {
            months[i] = "Nov"
        }
        else {
            months[i] = "Dec"
        };
        monthCount.push(count);
    };

    // Build Plot
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
            title: "Month"
        },
        yaxis: {
            title: "Occurrences"
        }
    };

    Plotly.newPlot("plot-month", data, layout), {responsive: true};
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
        buildMonthPlot(data.new_objs)
    })
});

initMonthPlot();