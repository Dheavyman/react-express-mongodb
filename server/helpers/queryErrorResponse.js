/**
 * Database query error response
 *
 * @param {object} error - Error object
 * @param {object} res- Response object
 *
 * @returns {object} Response object
 */
const queryErrorResponse = (error, res) => (
  res.status(500).json({
    status: 'error',
    message: error.message
  })
);

export default queryErrorResponse;
