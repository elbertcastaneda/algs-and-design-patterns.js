import clientCode from './client-code';
import ConcreteCreator1 from './concrete-creator1';
import ConcreteCreator2 from './concrete-creator2';

function main() {
  /**
   * The Application picks a creator's type depending on the configuration or
   * environment.
   */
  console.log('App: Launched with the ConcreteCreator1.');
  clientCode(new ConcreteCreator1());
  console.log('---');

  console.log('');

  console.log('App: Launched with the ConcreteCreator2.');
  clientCode(new ConcreteCreator2());
  console.log('---');
}

export default main;
