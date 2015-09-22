import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.set('owner', '');
      this.transitionTo('rentals');
    },

    destroyRental(rental) {
     rental.destroyRecord();
     this.transitionTo('rentals');
    }
  }
});
