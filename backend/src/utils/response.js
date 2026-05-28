function successResponse(res, data, status = 200) {
  res.status(status).json(data);
}

function errorResponse(res, message, status = 500) {
  res.status(status).json({ error: message });
}

module.exports = { successResponse, errorResponse };
