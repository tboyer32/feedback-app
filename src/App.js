function App() {

    const title = "Blog Post";
    const body = "This is my blog post";
    const list = [
        {id: 1, text: 'comment 1'},
        {id: 2, text: 'comment 2'},
        {id: 3, text: 'comment 3'}
    ];

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default App;