import { Budget } from '.';
import { BaseModel } from './base';

export class Expense extends BaseModel {
  budget: Budget;
  amount: number;
  gist: string;
  blame: string;
}
