// Category Dropdown
var crimeOptions = $('#crimeSelect');
$.each(cats, function(val, text) {
    crimeOptions.append(
        $('<option></option>').val(val).html(text)
    );
});

// Year Dropdown
var yearOptions = $('#yearSelect');
$.each(year_list, function(val,text) {
    yearOptions.append(
        $('<option></option>').val(val).html(text)
    );
});