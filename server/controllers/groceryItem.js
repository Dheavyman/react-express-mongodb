import GroceryItem from '../models/groceryItem';
import queryErrorResponse from '../helpers/queryErrorResponse';

/**
 * Grocery Items Controller
 *
 * @class GroceryItemController
 */
class GroceryItemController {
  /**
   * Get all grocery items
   *
   * @static
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @returns {object} Response to request
   * @memberof GroceryItemController
   */
  static getAllGroceryItems(req, res) {
    GroceryItem.find({}, (error, items) => {
      if (error) {
        return queryErrorResponse(error, res);
      }
      return res.status(200).json({
        status: 'success',
        message: 'Grocery items retrieved',
        data: items
      });
    });
  }

  /**
   * Add grocery item
   *
   * @static
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @returns {object} Response to request
   * @memberof GroceryItemController
   */
  static addGroceryItem(req, res) {
    const newItem = new GroceryItem(req.body);

    newItem.save((error, item) => {
      if (error) {
        return queryErrorResponse(error, res);
      }
      return res.status(201).json({
        status: 'success',
        message: 'Grocery item added',
        data: item
      });
    })
  }

  static updateGroceryItem(req, res) {
    GroceryItem.findById(req.params.itemId, (error, item) => {
      if (error) {
        return queryErrorResponse(error, res);
      }
      for (let key in req.body) {
        item[key] = req.body[key];
      }
      item.save((error, savedItem) => {
        if (error) {
          return queryErrorResponse(error, res);
        }
        return res.status(200).json({
          status: 'success',
          message: 'Grocery item updated',
          data: savedItem
        });
      });
    });
  }

  static deleteGroceryItem(req, res) {
    GroceryItem.findByIdAndDelete(req.params.itemId, (error, item) => {
      if (error) {
        return queryErrorResponse(error, res);
      }
      if (!item) {
        return res.status(404).json({
          status: 'error',
          message: 'Grocery item does not exist'
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'Grocery item removed'
      });
    });
  }
}

export default GroceryItemController;
