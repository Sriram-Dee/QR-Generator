import { useState } from 'react'
import './App.css'


function App() {

  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("https://sriram-dee.github.io/QR-Generator/")
  const [size, setSize] = useState('200');

    async function generateQR(){
      setLoading(true);
      try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
        setImg(url)
      }catch(error){
        console.log("Error on generating QR ", error);
      }finally{
        setLoading(false);
      }
    }

    function downloadQr(){
      fetch(img).then((reponse)=>reponse.blob()).then((blob)=>{
        const link = document.createElement("a");
        link.href= URL.createObjectURL(blob);
        link.download="Your_QR.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }

  return (
    <>
      <h2>QR CODE GENERATOR</h2>
      {img && <img src={img} alt="QR-Code" />}
      {loading && <p>Please wait...</p>}
      <div className='container'>
        <label htmlFor="data">Data for your QR code</label>
        <input type="text" id="data" onChange={(e)=>setQrData(e.target.value)} placeholder='Enter your text or URL'/>
        <label htmlFor="size">Image size (e.g, 200);</label>
        <input type="text" id='size' onChange={(e)=>setSize(e.target.value)} placeholder='E.g: 150'/>
        <div className="btns">
          <button className="generate"  onClick={generateQR}>Generate QR</button>
          <button className="download" onClick={downloadQr}>Download QR</button>
        </div>
      </div>
    </>
  )
}

export default App
