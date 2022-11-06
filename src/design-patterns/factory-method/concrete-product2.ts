import Product from 'design-patterns/factory-method/types/product';

export default class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}
