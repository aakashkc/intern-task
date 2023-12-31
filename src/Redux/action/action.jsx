export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const apiRequest = () => (
    { 
        type: API_REQUEST 
    }
    );
export const apiSuccess = (data) => (
    { 
    type: API_SUCCESS,
     payload:data,
    }
 );
export const apiFailure = (error) => (
    { 
    type: API_FAILURE, 
    payload:error
    }
 );

