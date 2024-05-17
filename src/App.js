import './App.css';

function App() {
  const title = "Welcome to the New Blog"
  const likes = 50;
  const person = {name:"yoshi", age:30}
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <h1>Liked {likes} times</h1>
        <p>{10}</p>
      </div>
    </div>
  );
}

export default App;
