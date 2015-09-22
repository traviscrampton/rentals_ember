import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      // controller.set('owner', '');
      this.transitionTo('rentals');
    },
    update(rental, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            rental.set(key,params[key]);
debugger;
          }
        });
        rental.save();
        this.transitionTo('index');
      },

    destroyRental(rental) {
     rental.destroyRecord();
     this.transitionTo('rentals');
    }
  }
});
