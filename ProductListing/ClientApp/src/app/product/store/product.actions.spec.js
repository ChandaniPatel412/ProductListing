"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromProduct = require("./product.actions");
describe('loadProducts', function () {
    it('should return an action', function () {
        expect(fromProduct.loadProducts().type).toBe('[Product] Load Products');
    });
});
//# sourceMappingURL=product.actions.spec.js.map