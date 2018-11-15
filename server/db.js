import dotenv from 'dotenv';
import mongoose from 'mongoose';

import items from './seeders/groceryItems';
import GroceryItem from './models/groceryItem';

dotenv.config();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
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
