import {Store} from './store';

export const Boulanger: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'a.button.buttonOrange.x-addToCart',
      // container : '.add-to-cart-container.d-none > .add-to-cart',
      text: ['panier']
    },
    maxPrice: {
      container: 'span.exponent',
      euroFormat: true,
    },
    outOfStock: {
      container: '.purchaseBlockAvailability',
      text: ['indisponible']
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.boulanger.com/ref/1141943',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.boulanger.com/ref/1147567',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.boulanger.com/ref/1147568',
    }
  ],
  name: 'boulanger',
};
