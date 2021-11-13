import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { YesNoPipe } from '../yes-no.pipe';
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductService } from "./services/product.service";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { StoreModule } from "@ngrx/store";
import * as fromProductState from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { ProductComponent } from "./components/product/product.component"

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    YesNoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature(
      fromProductState.productStateFeatureKey,
      fromProductState.reducers, { metaReducers: fromProductState.metaReducers }
    ),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [ProductService],
  exports: [
    ProductListComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
