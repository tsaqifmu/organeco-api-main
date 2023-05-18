function createError(error, message) {
  return { error: error, message: message };
}

function createSuccess(error, message, data) {
  return { error: error, message: message, data: data };
}

export { createError as Error, createSuccess as Success };
