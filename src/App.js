import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Heart from './heart';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Heart />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Phạm Sáng
                </p>
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
            </header>
        </div>
    );
}

export default App;
