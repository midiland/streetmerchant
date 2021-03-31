import {Store} from './store';

export const Fnac: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'html.no-touchevents body div.Main.Main--fullWidth div.f-productPage.clearfix.js-articleView div.productPageTop div.f-productPage-colRight.clearfix section.f-productOffers.js-articleOffers ul.f-productOffers-contents.js-productOffersContent li.f-productOffers-fnacContent.js-fnacTabContent.isActive div.f-productOffers-content.f-productOffers-fnac.clearfix.js-fnacBuyBox div.f-buyShopBox div.f-buyBox.js-ProductBuy div.f-buyBox-buttons button.ff-button.ff-button--block.ff-button--medium.ff-button--orange.js-ProductBuy-add',
      // container : '.add-to-cart-container.d-none > .add-to-cart',
      text: ['panier']
    },
    maxPrice: {
      container: 'html.no-touchevents body div.Main.Main--fullWidth div.f-productPage.clearfix.js-articleView div.productPageTop div.f-productPage-colRight.clearfix section.f-productOffers.js-articleOffers ul.f-productOffers-contents.js-productOffersContent li.f-productOffers-fnacContent.js-fnacTabContent.isActive div.f-productOffers-content.f-productOffers-fnac.clearfix.js-fnacBuyBox div.f-productOffer.f-productOffer--options.clearfix div.f-productOffer-option.clearfix div.f-productOffer-priceBox div.f-priceBox span.f-priceBox-price.f-priceBox-price--reco.checked',
      euroFormat: true,
    },
    outOfStock: {
      container: 'html.no-touchevents body div.Main.Main--fullWidth div.f-productPage.clearfix.js-articleView div.productPageTop div.f-productPage-colRight.clearfix section.f-productOffers.js-articleOffers ul.f-productOffers-contents.js-productOffersContent li.f-productOffers-fnacContent.js-fnacTabContent.isActive div.f-productOffers-content.f-productOffers-fnac.clearfix.js-fnacBuyBox div.f-buyShopBox div.f-buyBox.js-ProductBuy div.f-buyBox-infos div.f-buyBox-availability.f-buyBox-availabilityStatus-unavailable p span.f-buyBox-availabilityStatus-unavailable',
      text: ['indisponible']
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.fnac.com/Console-Sony-PS4-Slim-500-Go-Noir/a12878653/w-4',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.fnac.com/Console-Sony-PS5-Edition-Digital/a14119961/w-4',
    }
  ],
  name: 'fnac',
};
