class CustomError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class RouteNotFoundError extends CustomError {
  constructor(originalUrl) {
    super(`Route "${originalUrl}" does not exist`, 404);
  }
}

class NoResultsError extends CustomError {
  constructor(query) {
    super(`No results found for "${query}".`, 404);
  }
}

class AuthenticationError extends CustomError {
  constructor(error) {
    super(error, 401);
  }
}

module.exports = {
  CustomError,
  RouteNotFoundError,
  NoResultsError,
  AuthenticationError,
};
