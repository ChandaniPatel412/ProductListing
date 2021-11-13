"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProductsFailure = exports.loadProductsSuccess = exports.loadProducts = void 0;
var store_1 = require("@ngrx/store");
exports.loadProducts = (0, store_1.createAction)('[Product List Component] Load Products');
exports.loadProductsSuccess = (0, store_1.createAction)('[Product Effect] Load Products Success', (0, store_1.props)());
exports.loadProductsFailure = (0, store_1.createAction)('[Product Effect] Load Products Failure', (0, store_1.props)());
//# sourceMappingURL=product.actions.js.map