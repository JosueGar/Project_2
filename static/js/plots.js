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
            title: "Hour (Military)",
            tickvals: hours
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
        buildDayPlot(data.new_objs);
        buildMonthPlot(data.new_objs);
        buildTimePlot(data.new_objs);
    })
});

initDayPlot();
initMonthPlot();
initTimePlot();