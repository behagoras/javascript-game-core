export const TEMPLATE = `let leonidas = {
  name: "Leondias",
  skill:  "JavaScript"
}
let nicole = {
  name: "Nicole",
  skill: "Python"
}
let richard = {
  name: "Richard",
  skill: "Python"
}
let angela = {
  name: "Angela",
  skill: "JavaScript"
}

const employees = [];

const  knowPython = () => {

}

const sabePython = employees.method(function);

console.log(sabePython);`;


export const TEST = [
  {
    description: 'Test Filter',
    type: 'deepEqual',
    value: 'sabePython',
    params: [
      [
        { name: 'Nicole', skill: 'Python' },
        { name: 'Richard', skill: 'Python' },
      ],
    ],
  },
];
