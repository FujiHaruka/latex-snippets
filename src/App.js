import { useEffect, useRef, useState } from 'react';
import { useMathJaxContext } from './MathJaxLoader';
import Canvg from 'canvg'

function App() {
  const { ready } = useMathJaxContext()
  const [tex, setTex] = useState('ax^2=c')
  const canvas = useRef()
  useEffect(() => {
    if (!ready) {
      return
    }
    window.MathJax.tex2svgPromise(tex, { containerWidth: 200, display: false }).then((tex) => {
      const ctx = canvas.current.getContext('2d')
      Canvg.fromString(ctx, tex.outerHTML).start()
    })
  }, [ready, tex])
  return (
    <div className="App">
      <div>
        <textarea value={tex} onChange={(e) => setTex(e.target.value)} />
      </div>
      <canvas ref={canvas} width="200" height="200"></canvas>
    </div>
  );
}

export default App;
