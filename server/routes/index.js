import GroceryItemController from '../controllers/groceryItem';
import validateGroceryItemFields from '../middleware/validateGroceryItem';

export default (app) => {
  app.route('/api/items')
    .get(GroceryItemController.getAllGroceryItems)
    .post(validateGroceryItemFields, GroceryItemController.addGroceryItem);

  app.route('/api/items/:itemId')
    .put(validateGroceryItemFields, GroceryItemController.updateGroceryItem)
    .delete(GroceryItemController.deleteGroceryItem)
}
