const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.log(players, team);

const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

const person = {
  name: 'Wes Bos',
  age: 80
};

const cap2 = Object.assign({}, person, {
  number: 99,
  age: 12
});
console.log(cap2);

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
