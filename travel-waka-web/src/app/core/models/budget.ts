import { Category } from '.';
import { BaseModel } from './base';

export class Budget extends BaseModel {
  category: Category;
  amount: number;
  spent: number;
  period: number;
}
