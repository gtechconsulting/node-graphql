import { GraphQLError } from "graphql";

export const ErrorTypes = {
    BAD_USER_INPUT: {
        errorCode: 'BAD_USER_INPUT',
        errorStatus: 400
    },
    ALREADY_EXISTS: {
        errorCode: 'ALREADY_EXISTS',
        errorStatus: 400
    },
    NOT_FOUND: {
        errorCode: 'NOT_FOUND',
        errorStatus: 404
    },
    UNAUTHENTICATED: {
        errorCode: 'UNAUTHENTICATED',
        errorStatus: 401
    },
    INTERNAL_SERVER_ERROR: {
        errorCode: 'INTERNAL_SERVER_ERROR',
        errorStatus: 500
    }
};

export default (errorMessage, errorType) => {
    throw new GraphQLError(errorMessage, {
        extensions: {
            code: errorType.errorCode,
            http: {
                status: errorType.errorStatus 
            }
        }
    })
}