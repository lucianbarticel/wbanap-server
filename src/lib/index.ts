import { Exception } from './exceptions';
import { HttpStatus } from './HttpStatus';

type StatusMap = { [key in Exception]: HttpStatus };

export const statusMap: StatusMap = {
  [Exception.NO_SUCH_ELEMENT]: HttpStatus.NOT_FOUND,
  [Exception.UNAUTHORIZED]: HttpStatus.UNAUTHORIZED,
  [Exception.INVALID]: HttpStatus.BAD_REQUEST,
  [Exception.UNIQUE_CONSTRAINT_VIOLATION]: HttpStatus.CONFLICT,
};

export * from './exceptions';
export * from './HttpStatus';
