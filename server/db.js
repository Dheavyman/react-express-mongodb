import mongoose from 'mongoose';

import items from './seeders/groceryItems';
import GroceryItem from './models/groceryItem';

mongoose.connect('mongodb://localhost/grocery', {
  useNewUrlParser: true
}, () => {
  console.log('Database connected');

  if (process.env.NODE_ENV !== 'production') {
    items.forEach(item => {
      GroceryItem.find({name: item.name}, (error, items) => {
        if(!error && !items.length) {
          GroceryItem.create(item);
        }
      });
    });
  }
});

export default mongoose;
