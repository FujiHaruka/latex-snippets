import "./App.css"
import { useEffect, useRef, useState } from 'react';
import { useMathJaxContext } from './MathJaxLoader';
import Canvg from 'canvg'

function App() {
  const { ready } = useMathJaxContext()
  const [tex, setTex] = useState('ax^2=c')
  const [imgSrc, setImgSrc] = useState('')
  const canvas = useRef(null)
  useEffect(() => {
    if (!ready) {
      return
    }
    window.MathJax.tex2svgPromise(tex, { em: 32, ex: 16, scale: 2, display: false }).then((tex) => {
      const ctx = canvas.current.getContext('2d')
      Canvg.fromString(ctx, tex.outerHTML).start()
      const dataUrl = canvas.current.toDataURL()
      setImgSrc(dataUrl)
    })
  }, [ready, tex])
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header-title">LaTeX to Image</h2>
      </header>
      <div className="App-body">
      <div className="App-body-col">
        <textarea className="App-textarea" value={tex} onChange={(e) => setTex(e.target.value)} />
      </div>
      <div className="App-body-col">
        <img src={imgSrc} width="200" height="200" alt="" />
        <canvas className="App-canvas" ref={canvas} width="200" height="200"></canvas>
      </div>
      </div>
    </div>
  );
}

export default App;
