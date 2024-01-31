import './App.css'

function App() {

  return (
    <>
      <h2>QR CODE GENERATOR</h2>
      <img src="" alt="QR-Code" />
      <div className='container'>
        <label htmlFor="data">Data for your QR code</label>
        <input type="text" id="data" value={""}/>
        <label htmlFor="size">Image size (e.g, 200);</label>
        <input type="text" id='size' value={"200"}/>
        <div className="btns">
          <button className="generate">Generate QR</button>
          <button className="download">Download QR</button>
        </div>
      </div>
    </>
  )
}

export default App
