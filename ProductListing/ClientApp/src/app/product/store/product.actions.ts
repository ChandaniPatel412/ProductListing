import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const loadProducts = createAction(
  '[Product Effect] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Effect] Load Products Failure',
  props<{ error: any }>()
);
