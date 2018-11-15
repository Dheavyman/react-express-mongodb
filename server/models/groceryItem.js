import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const GroceryItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  purchased: {
    type: Boolean,
    default: false
  }
});

const GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema);

export default GroceryItem;
