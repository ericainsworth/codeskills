var main = function() {
  var cities = [
    "Seattle",
    "San Francisco",
    "Sydney",
    "Bangkok",
    "Brisbane",
    "Queenstown",
    "New York City",
    "London",
    "Amsterdam",
    "Tokyo",
    "Hanoi"
  ];
  $("#tags").autocomplete({
    source: cities
  });
};

$(document).ready(main);
