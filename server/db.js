import dotenv from 'dotenv';
import mongoose from 'mongoose';

import items from './seeders/groceryItems';
import GroceryItem from './models/groceryItem';

dotenv.config();

let DB_URL;

if (process.env.NODE_ENV !== 'test') {
  if(process.env.NODE_ENV === 'development') {
    DB_URL = process.env.DB_DEV_URL;
  } else {
    DB_URL = process.env.DB_URL;
  }

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
}

export default mongoose;
