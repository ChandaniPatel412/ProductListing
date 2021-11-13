"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var yes_no_pipe_1 = require("../yes-no.pipe");
var products_routing_module_1 = require("./products-routing.module");
var product_service_1 = require("./services/product.service");
var product_list_component_1 = require("./components/product-list/product-list.component");
var store_1 = require("@ngrx/store");
var fromProductState = require("./store");
var effects_1 = require("@ngrx/effects");
var product_effects_1 = require("./store/product.effects");
var product_component_1 = require("./components/product/product.component");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                product_list_component_1.ProductListComponent,
                product_component_1.ProductComponent,
                yes_no_pipe_1.YesNoPipe
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                products_routing_module_1.ProductsRoutingModule,
                store_1.StoreModule.forFeature(fromProductState.productStateFeatureKey, fromProductState.reducers, { metaReducers: fromProductState.metaReducers }),
                effects_1.EffectsModule.forFeature([product_effects_1.ProductEffects])
            ],
            providers: [product_service_1.ProductService],
            exports: [
                product_list_component_1.ProductListComponent,
                product_component_1.ProductComponent
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map