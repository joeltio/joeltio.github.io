import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Hello!</h1>
                <p>This site is a showcase of what I learnt from React.</p>
                <p>It is currently empty as I still need to learn more.</p>
                <p>Stay tuned!</p>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);