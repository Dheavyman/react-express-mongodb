import GroceryItemController from '../controllers/groceryItem';
import validateGroceryItemField from '../middleware/validateGroceryItem';

export default (app) => {
  app.route('/api/items')
    .get(GroceryItemController.getAllGroceryItems)
    .post(validateGroceryItemField, GroceryItemController.addGroceryItem);

  app.route('/api/items/:itemId')
    .put(validateGroceryItemField, GroceryItemController.updateGroceryItem)
    .delete(GroceryItemController.deleteGroceryItem)
}
