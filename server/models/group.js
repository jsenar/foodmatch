const mongoose = require('mongoose');

const { Schema } = mongoose;

const BusinessSchema = new Schema({
  name: { type: String },
  alias: { type: String },
  rating: { type: Number},
  review_count: { type: Number},
  price: { type: String },
  formatted_address: { type: String },
  img_url: { type: String },
  url: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

const GroupSchema = new Schema({
  name: { type: String },
  dateCreated: { type: Number },
  businesses: [BusinessSchema],
});

GroupSchema.statics.like = function like(id, alias) {
  return this.findById(id)
    .then((group) => {
      const business = group.businesses.filter(bus => bus.alias === alias)[0];
      business.likes += 1;
      return group.save();
    });
};

GroupSchema.statics.dislike = function dislike(id, alias) {
  return this.findById(id)
    .then((group) => {
      const business = group.businesses.filter(bus => bus.alias === alias)[0];
      business.dislikes += 1;
      return group.save();
    });
};

mongoose.model('group', GroupSchema);
