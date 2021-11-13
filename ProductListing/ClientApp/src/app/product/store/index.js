"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaReducers = exports.selectError = exports.selectProducts = exports.selectProductsFeature = exports.reducers = exports.initialState = exports.adapter = exports.productStateFeatureKey = void 0;
var store_1 = require("@ngrx/store");
var environment_1 = require("../../../environments/environment");
var product_actions_1 = require("./product.actions");
var entity_1 = require("@ngrx/entity");
exports.productStateFeatureKey = "productState";
exports.adapter = (0, entity_1.createEntityAdapter)();
exports.initialState = exports.adapter.getInitialState({
    error: undefined
});
exports.reducers = (0, store_1.createReducer)(exports.initialState, (0, store_1.on)(product_actions_1.loadProductsSuccess, function (state, action) {
    return exports.adapter.setAll(action.products, state);
}), (0, store_1.on)(product_actions_1.loadProductsFailure, function (state, action) {
    return {
        error: action.error
    };
}));
exports.selectProductsFeature = (0, store_1.createFeatureSelector)(exports.productStateFeatureKey);
exports.selectProducts = (0, store_1.createSelector)(exports.selectProductsFeature, exports.adapter.getSelectors().selectAll);
exports.selectError = (0, store_1.createSelector)(exports.selectProductsFeature, function (state) { return state.error; });
exports.metaReducers = !environment_1.environment.production
    ? []
    : [];
//# sourceMappingURL=index.js.map