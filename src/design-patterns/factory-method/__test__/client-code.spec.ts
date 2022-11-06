import clientCode from '../client-code';
import ConcreteCreator1 from '../concrete-creator1';
import ConcreteCreator2 from '../concrete-creator2';

describe('clientCode', () => {
  let mockLog: jest.SpyInstance<void, [message?: string, ...optionalParams: string[]]>;

  beforeEach(() => {
    mockLog = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log correct values using ConcreteCreator1 instance as creator', () => {
    clientCode(new ConcreteCreator1());

    expect(mockLog).toBeCalledTimes(2);
    expect(mockLog).toBeCalledWith(
      "Client: I'm not aware of the creator's class, but I still works.",
    );
    expect(mockLog).toBeCalledWith(
      "Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}",
    );
  });

  it('should log correct values using ConcreteCreator2 instance as creator', () => {
    clientCode(new ConcreteCreator2());

    expect(mockLog).toBeCalledTimes(2);
    expect(mockLog).toBeCalledWith(
      "Client: I'm not aware of the creator's class, but I still works.",
    );
    expect(mockLog).toBeCalledWith(
      "Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}",
    );
  });
});
