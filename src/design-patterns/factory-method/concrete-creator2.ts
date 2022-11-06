import ConcreteProduct2 from 'design-patterns/factory-method/concrete-product2';
import Creator from 'design-patterns/factory-method/creator';
import Product from 'design-patterns/factory-method/types/product';

export default class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
