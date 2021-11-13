import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { ProductState, selectProducts } from "../../store";
import { Store, select } from "@ngrx/store";
import * as fromActions from "../../store/product.actions";
import { Observable } from "rxjs";
import { async } from "@angular/core/testing";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  count: number = 0;
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    public router: Router,
    private store: Store<ProductState>
  ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
  }
}
