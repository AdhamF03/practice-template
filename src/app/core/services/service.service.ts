import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  products = [
    {
      id: 1,
      name: 'Ceramic Bottles',
      currentPrice: '249.00',
      description:
        'Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.',
      category: 'Ceramic',
      mainImage: 'img/products details/1/product-09.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/1/product-09-100x100.jpg',
        },
        {
          url: 'img/products details/1/product-10-100x100.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Ceramic Cup',
      oldPrice: '$237.00',
      currentPrice: '189.00',
      description:
        'Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.',
      category: 'Ceramic',
      mainImage: 'img/products details/2/ceramic-cup-01.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/2/ceramic-cup-01-100x100.jpg',
        },
        {
          url: 'img/products details/2/ceramic-cup-03-100x100.jpg',
        },
        {
          url: 'img/products details/2/ceramic-cup-04-100x100.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Ceramic Drink Coasters',
      oldPrice: '$157.00',
      currentPrice: '99.00',
      category: 'Ceramic Kitchenware',
      mainImage: 'img/products details/3/product-03.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/3/product-03-100x100.jpg',
        },
        {
          url: 'img/products details/3/product-11-100x100.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Ceramic Garden Pots',
      oldPrice: '$179.00',
      currentPrice: '159.00',
      category: 'Ceramic',
      mainImage: 'img/products details/4/product-08.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/4/product-08-100x100.jpg',
        },
        {
          url: 'img/products details/4/product-14-100x100.jpg',
        },
      ],
    },
    {
      id: 5,
      name: 'Ceramic Pastel Plates',
      oldPrice: '$239.00',
      currentPrice: '209.00',
      category: 'Ceramic',
      mainImage: 'img/products details/5/product-06.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/5/product-06-100x100.jpg',
        },
        {
          url: 'img/products details/5/product-16-100x100.jpg',
        },
      ],
    },
    {
      id: 6,
      name: 'Ceramic Plant Pots',
      currentPrice: '139.00',
      category: 'Pottery',
      mainImage: 'img/products details/6/product-05.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/6/product-05-100x100.jpg',
        },
        {
          url: 'img/products details/6/product-15-100x100.jpg',
        },
      ],
    },
    {
      id: 7,
      name: 'Ceramic Planter',
      oldPrice: '$349.00',
      currentPrice: '299.00',
      category: 'Pottery',
      mainImage: 'img/products details/7/ceramic-planter-01.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/7/ceramic-planter-01-100x100.jpg',
        },
        {
          url: 'img/products details/7/ceramic-planter-02-100x100.jpg',
        },
        {
          url: 'img/products details/7/ceramic-planter-03-100x100.jpg',
        },
      ],
    },
    {
      id: 8,
      name: 'Ceramic Plates',
      oldPrice: '$179.00',
      currentPrice: '119.00',
      category: 'Ceramic',
      mainImage: 'img/products details/8/product-01.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/8/product-01-100x100.jpg',
        },
        {
          url: 'img/products details/8/product-13-100x100.jpg',
        },
      ],
    },
    {
      id: 9,
      name: 'Ceramic Plates and Bowls',
      oldPrice: '$249.00',
      currentPrice: '209.00',
      category: 'Ceramic',
      mainImage: 'img/products details/9/product-02.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/9/product-02-100x100.jpg',
        },
        {
          url: 'img/products details/9/product-12-100x100.jpg',
        },
      ],
    },
    {
      id: 10,
      name: 'Ceramic Plates and Spoons',
      oldPrice: '$349.00',
      currentPrice: '299.00',
      category: 'Ceramic',
      mainImage: 'img/products details/10/product-07.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/10/product-07-100x100.jpg',
        },
        {
          url: 'img/products details/10/product-17-100x100.jpg',
        },
      ],
    },
    {
      id: 11,
      name: 'Ceramic Vases and Planters',
      oldPrice: '$247.00',
      currentPrice: '217.00',
      category: 'Pottery',
      mainImage: 'img/products details/11/contact-01.jpg',
      thumbnailImages: [
        {
          url: 'img/products details/11/contact-01-100x100.jpg',
        },
        {
          url: 'img/products details/11/product-18-100x100.jpg',
        },
      ],
    },
  ];

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
  constructor() {}
}
