import {Store} from './store';

export const Cultura: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.in-stock',
      text: ['En stock'],
    },
    maxPrice: {
      container: '.product-price-5274756',
      euroFormat: true,
    },
    outOfStock: {
      container: '.out-of-stock',
      text: ['Indisponible'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.cultura.com/ps4-slim-500-go-f-black-0711719407577.html',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.cultura.com/playstation-5-edition-standard-0711719395201.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.cultura.com/playstation-5-edition-digitale-version-sans-lecteur-optique-0711719395300.html',
    }
  ],
  name: 'cultura',
};
