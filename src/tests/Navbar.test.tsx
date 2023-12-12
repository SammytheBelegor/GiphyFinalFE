import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react';
import Navbar from "../pages/components/Navbar/Navbar";


    test('renders learn react link', () => {
        render(<Navbar/>);
        const iconElem = screen.getByText(/giphy/i);
        expect(iconElem).toBeInTheDocument();
    });


