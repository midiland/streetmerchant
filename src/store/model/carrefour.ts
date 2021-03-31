import {Store} from './store';

export const Carrefour: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.pl-button.add-to-cart__plus.pl-button--primary span.pl-button__label span',
      // container : '.add-to-cart-container.d-none > .add-to-cart',
      text: ['ACHETER']
    },
    maxPrice: {
      container: '.product-card-price__price div.ds-body-text.ds-body-text--size-s',
      euroFormat: true,
    },
    outOfStock: {
      container: '.ds-body-text.ds-body-text--weight-bold.ds-body-text--size-s.ds-body-text--color-standard-2',
      text: ['disponible']
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.carrefour.fr/p/manette-sans-fil-dualsense-ps5-sony-interactive-0711719399506',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.carrefour.fr/p/console-playstation-5-edition-standard-sony-interactive-0711719395201',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.carrefour.fr/p/console-playstation-5-edition-digitale-sony-interactive-0711719395300',
    }
  ],
  name: 'carrefour',
};
