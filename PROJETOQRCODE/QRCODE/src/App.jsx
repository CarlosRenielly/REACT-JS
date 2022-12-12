import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLik from 'qrcode'
import './App.css'




function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')



  function handleGenerate(link_url){  
    QRCodeLik.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function(err, url ){
      setQrcodeLink(url)
    })
  } 



  function handleQrcode (e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className='container'>
      
     <QRCode
      value={link}
     /> 

      <input className='input'  
      value={link} 
      type="text" 
      placeholder='Digite seu link...' 
      onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QrCode</a>
    </div>
        
  )
}

export default App
