import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Auth } from '../Auth';
import { GoogleLogin } from 'react-google-login'

configure({adapter: new Adapter()});

describe('<Auth />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Auth/>);
    });

    it('should render <GoogleLogin /> Button' , () => {     
        expect(wrapper.find(GoogleLogin)).toHaveLength(1);
    });
});
