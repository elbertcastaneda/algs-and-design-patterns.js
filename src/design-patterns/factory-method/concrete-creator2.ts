import ConcreteProduct2 from './concrete-product2';
import Creator from './creator';
import Product from './types/product';

export default class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
