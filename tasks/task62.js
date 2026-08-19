



const users = [
  {
    name: 'Вася',
  },
];

const cloneUsers = [...users];
const [firstUser] = users;
const [firstCloneUser] = cloneUsers;

firstCloneUser.name = 'Петя';

console.log(users === cloneUsers); // ?
console.log(firstUser === firstCloneUser); // ?