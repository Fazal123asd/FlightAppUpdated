import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PassengerList } from '../PassengerList';
import Passengers from '../../../components/Passengers/Passengers'

configure({adapter: new Adapter()});

describe('<PassengerList />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<PassengerList onFetchPassengerData={()=>{}}/>);
    });

    it('should render <Passengers /> when receiving PassengerData', () => {
       wrapper.setProps({loading: false})
        expect(wrapper.find(Passengers)).toHaveLength(1);
    });
});
