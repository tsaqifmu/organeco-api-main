function Error(error, message) {
  this.error = error;
  this.message = message;
}

function Success(error, message, data) {
  this.error = error;
  this.message = message;
  this.data = data;
}

const Response = {
  Error,
  Success,
};

export default Response;
