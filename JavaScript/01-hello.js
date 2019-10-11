function hello(name) {
  return `hello ${name}`;
}

const prenoms = ['Jean', 'Pierre'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
