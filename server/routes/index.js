import items from '../db';

export default (app) => {
  app.route('/api/items')
    .get((req, res) => {
      return res.status(200).json({
        status: 'success',
        message: 'Grocery items retrieved',
        data: items
      });
    })

    .post((req, res) => {
      const item = req.body
      items.push(item);

      return res.status(201).json({
        status: 'success',
        message: 'Grocery item added',
        data: item
      });
    })
}
