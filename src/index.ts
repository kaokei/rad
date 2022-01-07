import { SafeAny } from './types/index';

const logger: SafeAny = 'my-logger';

export class Math {
  static uid = 'MyMath';

  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }

  static multiply(a: number, b: number) {
    return a * b;
  }

  static divide(a: number, b: number) {
    return a / b;
  }

  static log(msg: any) {
    console.log(logger, msg);
  }
}
