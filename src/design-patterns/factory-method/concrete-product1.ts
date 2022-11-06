import Product from './types/product';
/**
 * Concrete Products provide various implementations of the Product interface.
 */
export default class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}
