class ApiErrorHandling extends Error {
    constructor(message, statusCode, error, stack) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack;

        if (stack) {
            this.stack = stack;
        }
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiErrorHandling;