import './App.css'

function App() {

  const yourName = "hi";

  const currentYear = 2026;

  const colorlel = "blue";

  const imageUrl = "https://i1.sndcdn.com/artworks-ahelQysi0JU9iwOF-trpTRA-t1080x1080.png";

  return (

    <div>

      <h1>Hello, React!</h1>

      <h2>My name is {yourName}</h2>

      <p>I’m learning React in {currentYear}.</p>

      <p>This is my first React component!</p>

      <ul>
        <li> I wanna build some surveys and forms i guess</li>
        <li> I wanna makea mango or something</li>
        <li> I wanna make a website for my portfolio</li>
      </ul>

      <p>{colorlel}</p>

      <img src='https://i1.sndcdn.com/artworks-ahelQysi0JU9iwOF-trpTRA-t1080x1080.png' alt="A cool image" />

    </div>

  );

}


export default App;