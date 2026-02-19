import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Food from './Components/Food'

function App() {

  const yourName = "hi";

  const currentYear = 2026;

  const colorlel = "blue";

  const imageUrl = "https://i1.sndcdn.com/artworks-ahelQysi0JU9iwOF-trpTRA-t1080x1080.png";


  return (

    <div>
      <Header />
      <main>
        <h2>Welcome to my wbesite!</h2>
        <Food />
        <Food />
      </main>
      <Footer /> 
    </div>



  );

}


export default App;