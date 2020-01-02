import { environment } from 'src/environments/environment';

export const CURRENCY_CODE = '&#8358;';

const BASE_API_UI_URL = `${environment.baseUiApi}`;
export const APP_URL = {
  CATEGORIES: `${BASE_API_UI_URL}/category`,
  BUDGET: `${BASE_API_UI_URL}/budget`,
  EXPENSES: `${BASE_API_UI_URL}/expense`
};

export const ALL = 'ALL';
