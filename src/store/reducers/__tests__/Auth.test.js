import reducer from '../Auth';
import * as actionTypes from '../../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: "",
            loading: false,
            authRedirect: '/',
            email: ''
        });
    });

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: "",
            loading: false,
            authRedirect: '/',
            email: ''

        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            useerId: undefined
           
        })).toEqual({
            token: 'some-token',
            userId: undefined,
            error: null,
            loading: false,
            authRedirect: '/',
            email: ''
        });
    })
});
