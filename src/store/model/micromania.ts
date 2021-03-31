import {Store} from './store';

export const Micromania: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'body > div.page.hidden-overflow-x.page-container > div.product-detail.product-wrapper > div.bg-color-white.product-top-wrapper > div > div:nth-child(2) > div.col-12.col-lg-6.product-top-content.d-flex.flex-column > div.row.order-4.order-lg-5 > div.col-12.prices-add-to-cart-actions > div.row.cart-and-ipay.add-to-cart-section > div > div.add-to-cart-container > div.row.mx-0.align-items-center > div.col-md-6.pl-0.pr-0.pr-md-2 > button',
      // container : '.add-to-cart-container.d-none > .add-to-cart',
      text: ['panier']
    },
    maxPrice: {
      container: 'div.price > span > span > span.value',
      euroFormat: true,
    },
    outOfStock: {
      container: '.back-in-stock-container.d-none > .back-in-stock',
      text: ['alerte']
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.micromania.fr/playstation-4-slim-500-go-72241.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.micromania.fr/playstation-5-105642.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.micromania.fr/playstation-5-alldigital-106097.html',
    }
  ],
  name: 'micromania',
};
