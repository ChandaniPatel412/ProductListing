"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var product_service_1 = require("../../services/product.service");
var router_1 = require("@angular/router");
var store_1 = require("../../store");
var store_2 = require("@ngrx/store");
var fromActions = require("../../store/product.actions");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, router, store) {
        this.productService = productService;
        this.router = router;
        this.store = store;
        this.count = 0;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(fromActions.loadProducts());
        this.loadProducts();
    };
    ProductListComponent.prototype.loadProducts = function () {
        this.products$ = this.store.pipe((0, store_2.select)(store_1.selectProducts));
    };
    ProductListComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ["./product-list.component.scss"]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router,
            store_2.Store])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map