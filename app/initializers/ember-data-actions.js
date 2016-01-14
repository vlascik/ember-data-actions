import StoreMixin from 'ember-data-actions/mixins/store';

export default {
  name: 'ember-data-actions',
  after: 'store',
  initialize(container) {
    var store = instance.__container__.lookup("service:store");
    store.reopen(StoreMixin);
  }
};
