import { createContext, useContext, useEffect, useState } from 'react'

const MathJaxContext = createContext({ ready: false })

export const useMathJaxContext = () => useContext(MathJaxContext)

export const MathJaxLoader = ({ children }) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    // Load MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$']]
      },
      svg: {
        fontCache: 'none'
      },
      startup: {
        ready: () => {
          window.MathJax.startup.defaultReady();
          setReady(true)
        }
      }
    };
    void import("mathjax/es5/tex-svg-full")
  }, [])
  return (
    <MathJaxContext.Provider value={{ ready }}>
      {children}
    </MathJaxContext.Provider>
  )
}
