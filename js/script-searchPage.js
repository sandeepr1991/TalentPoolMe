var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;

    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};

var companies = ['4A\'s', 'ABB Group', 'Accenture', 'Burlington Stores', 
'Calumet Specialty Products Partners, L.P.', 'Cardinal Health', 'Emerson', 
'EOG Resources, Inc. (formerly Enron Oil and Gas)' ,'Exelon Corporation', 'FCA Group - Fiat Chrysler Auto Group', 
'Marriott International ', 'Mars Incorporated', 'Moss Adams LLP', 'Oracle', 'SABIC Innovative Plastics', 
'Siemens', 'Sprint', 'TCS (Tata Consultancy Services)', 'TRW Automotive Holdings Corp.'];
 
$('.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'companies',
  displayKey: 'value',
  source: substringMatcher(companies)
});