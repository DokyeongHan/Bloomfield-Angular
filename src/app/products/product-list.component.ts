import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component(
    {
        selector: 'pm-products',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css']
    }
)
export class ProductListComponent implements OnInit {
    pageTitle: string = "This is Title";
    imageWidth: number = 50;
    imageMargin: number = 2;
    _listFilter: string;
    showImage : boolean = true;
    errorMessage: string;
    products: Iproduct[];
    filteredProducts: Iproduct[];

    constructor(private productService: ProductService){
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
                this.listFilter = 'cart';
            },
            error => this.errorMessage = <any>error
        );
    }


    onNotify(message: string): void {
        alert(message);
    }

    onon(message: string): void {
        alert('onon');
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products ;
    }

    performFilter(filterBy: string): Iproduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}