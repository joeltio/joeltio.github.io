import React from 'react';

import { rhythm } from '../utils/typography';
import Navbar from './navbar';

const Layout = ({ location, children }) => (
    <div
        style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
    >
        <header>
            <Navbar location={location} />
        </header>
        <main>{children}</main>
        <footer>
            ©
            {' '}
            {new Date().getFullYear()}
            , Joel Tio
        </footer>
    </div>
);

export default Layout;
