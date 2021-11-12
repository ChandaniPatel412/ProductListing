import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html'
})
export class ProductListingComponent {
  public products: Product[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'product').subscribe(result => {
      console.log(result);
      this.products = result;
    }, error => console.error(error));
  }
}

interface Product {
  productId: number;
  name: string;
  price: number;
  description: string;
  isPublished: boolean;
}
