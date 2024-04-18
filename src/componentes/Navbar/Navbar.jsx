import { useState } from 'react'
import reactLogo from '/workspaces/landing-page-form-react/src/assets/react.svg'
import viteLogo from '/workspaces/landing-page-form-react/public/vite.svg'
import '/workspaces/landing-page-form-react/src/componentes/Navbar/navbar.css'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and  xfgh sdfhsr 
        </p>
      </div>
      <p className="read-the-docs">
        Click on thexcfghxfgbxfgbhxfth dfth dfh dsfh 333333
      </p>
    </>
  )
}

export default NavBar