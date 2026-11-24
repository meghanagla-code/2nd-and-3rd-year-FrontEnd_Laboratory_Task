import './App.css'

function Header(){
  return(
    <div>
      <h1>Header Component</h1>
    </div>
  )
}

function PersonDetails(){
  let name="Meghana";
  let age=99;
  let address = "Bangalore";
  let food = "Masala Dosa"
  return(
    <>
    <p>Name : {name}</p>
    <p>Age : {age}</p>
    <p>Address: {address}</p>
    <p>food : {food}</p>
    </>
  )
}

function HelloWorld(){
  return(
    <>
    <h1>Hello World</h1>
    </>
  )
}

function Footer(){
  return(
    <>
    <h1>Footer Component</h1>
    </>
  )
}


function App() {
  return(
    <>
     <Header/>
     <hr></hr>
     <PersonDetails/>
     <hr></hr>
     <HelloWorld/>
     <hr></hr>
     <Footer/>
    </>
  )
}

export default App
