'use strict'

const DbService = require("../mixins/db.mixin");

module.exports = {
  name: 'promotions',
  mixins: [DbService("promotions")],

  settings: {
    fields: ['id', 'name', 'price']
  },

  actions: {

    get: {
      params: {
        id: 'string'
      },
      handler(ctx) {
				console.log('****ctx.params get*****');
        		console.log(ctx.params);
        
				return this.findByID(ctx.params.id)
					.then(entity => {
						console.log('****entity get*****');
						console.log(entity);
						return entity;
					})
			}
    },	

    getAll: {
      handler(ctx) {
				console.log('****ctx.params*****');
				console.log(ctx.params);

				return this.adapter.find()
					.then(entity => {
						console.log('****entity*****');
						console.log(entity);
						return entity;
					})
			}
    },
  },

  methods: {
    findByID(id) {
	  return this.adapter.findOne({ "_id": id });
    },
    
		seedDB() {
			this.logger.info("Seed Promotions DB...");
			return Promise.resolve()
				.then(() => this.adapter.insert({
					name: "hotel melia promo",
					price: 120
				}))
				.then(() => this.adapter.insert({
					name: "restaurante el tunel descuento nochevieja",
					price: 90
				}))
				.then(() => this.adapter.insert({
					name: "descuento cine",
					price: 3
				}))
				.then(() => this.adapter.insert({
					name: "descuento teatro",
					price: 10
				}))
    },
	},

	afterConnected() {
		return this.adapter.count().then(count => {
			if (count == 0) {
				this.seedDB();
			}
		});
	}

}
