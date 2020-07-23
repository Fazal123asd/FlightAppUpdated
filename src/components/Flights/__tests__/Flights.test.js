import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Flights from '../Flights';
import Flight from '../Flight/Flight'

configure({adapter: new Adapter()});

describe('<Flights />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Flights/>);
    });

    it('should render <Flights /> component with all flight Details' , () => {     
        expect(wrapper.find(Flight)).toHaveLength(1);
    });
});
