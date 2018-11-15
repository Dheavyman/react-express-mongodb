import Joi from 'joi';

/**
 * Validate grocery item fields
 *
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next route handler
 *
 * @returns {any} Response object
 */
const validateGroceryItemFields = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().regex(/^[a-z][a-z- ]*$/i).required().error(new Error(
      'Item name must contain only english alphabets, spaces and hyphen.')),
    purchased: Joi.boolean().error(new Error(
      'Purchased must be a boolean containing "true" or "false".'))
  });
  const options = {
    allowUnknown: true,
    stripUnknown: true
  }
  const { error, value } = Joi.validate(req.body, schema, options);

  if (error) {
    return res.status(422).json({
      status: 'error',
      message: error.message
    });
  }
  req.body = value;
  next();
};

export default validateGroceryItemFields;
