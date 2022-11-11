import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello EveryOne',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
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
