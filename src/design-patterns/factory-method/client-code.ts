import Creator from 'design-patterns/factory-method/creator';

function clientCode(creator: Creator) {
  // ...
  console.log("Client: I'm not aware of the creator's class, but I still works.");
  console.log(creator.someOperation());
  // ...
}

export default clientCode;
