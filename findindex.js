
const users = [
  {
    name: 'Ramesh',
    age: 18
    isPassed=false,
  },
  {
    name: 'Esha',
    age: 20
       isPassed=true,
  },
  {
    name: 'Nagma',
    age: 25
    isPassed=true,
  },
  {
    name: 'Raja',
    age: 22
     isPassed=false,
  },
  {
    name: 'Sharank',
    age: 32
     isPassed=true,
  }
];
//find position of first person who is older than 20 who is not passed

function Person(users) {
  const index = users.findIndex(user => user.age > 20 && !user.isPassed);
  return index;
}

const position =Person(users);
console.log(position);

const users = [
  {
    name: 'Ramesh',
    age: 18
    isPassed=false,
  },
  {
    name: 'Esha',
    age: 20
       isPassed=true,
  },
  {
    name: 'Nagma',
    age: 25
    isPassed=true,
  },
  {
    name: 'Raja',
    age: 22
     isPassed=false,
  },
  {
    name: 'Sharank',
    age: 32
     isPassed=true,
  }
];


function Person(users) {
  const index = users.findIndex(user => user.age > 20 && !user.isPassed);
  return index;
}

const position =Person(users);
console.log(position);

