import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NovaKomponenta from './NovaKomponenta';


configure({adapter: new Adapter()});

describe('<NovaKomponenta />', () => {
    const komponenta = shallow(<NovaKomponenta />);

    // prvo proverava da li se dobro renderuje
    it('renders properly', () => {
        expect(komponenta).toMatchSnapshot();
    });


    // onda proverava da li u statu postoje propertiji sa kojim cemo raditi
    it('initializes person and present (some property) in state', () => {
        expect(komponenta.state()).toEqual({ person: '', present: '' });
    })

});