var friends = {};

friends.bill = {
  firstName: 'Bill',
  lastName: 'Sweep',
  number: '(206) 999-1999',
  address:['25 MLK Way', 'Tacoma', 'WA', '98115']
};

friends.steve = {
  firstName: 'Steve',
  lastName: 'Butts',
  number: '(509) 523-7051',
  address: ['20 Buena Loop Rd', 'Buena', 'WA', '98027']
};

var list = function(info) {
    for (var prop in info){
     console.log(prop);
    }
};

//list(friends);

var search = function(name) {
  for (var prop in friends){
   if (friends[prop].firstName === name) {
    console.log(friends[prop]);
    console.log("Name: " + friends[prop].firstName + " " + friends[prop].lastName);
    console.log("Number: " + friends[prop].number);
    console.log("Address: " + friends[prop].address[0]);
    console.log(friends[prop].address[1] + ", " + friends[prop].address[2] + " " + friends[prop].address[3]);
    return friends[prop];
   }
  }
};

search("Steve");
