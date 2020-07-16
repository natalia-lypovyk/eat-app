import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class ErrorHandlerService {
  public async handleError<V>(callback: () => Promise<V>): Promise<V> {
    try {
      return callback();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  public async handleUndefinedValue<V>(
    callback: () => Promise<V | undefined>,
    exceptionMessage: string,
  ): Promise<V> {
    const value = await this.handleError(callback);

    if (value === undefined) {
      throw new NotFoundException(exceptionMessage);
    }

    return value;
  }
}
