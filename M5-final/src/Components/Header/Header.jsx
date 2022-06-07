import React, { useRef, useState } from 'react'
import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <>
    <header className='divPai'>
      <section className='divTitulo'>
        <h1 className='tituloPrincipal'>Resilia Tattoo Studio</h1>
      </section>

        
    </header>
    <section className={`menuContainer menu ${isActive ? "active" : "inactive"}`}>
          <button className={`menuMobile ${isActive ? "active" : "inactive"}`} onClick={onClick}>Menu</button>
          <nav className={`menuHeader desktop`}>
            <Link to="/" className='menuItens'>Home</Link>
            <Link to="/catalogo" className='menuItens'>Catálogo</Link>
            <Link to="/acessorios" className='menuItens'>Acessórios</Link>
            <Link to="/tatuadores" className='menuItens'>Tatuadores</Link>
            <Link to="/orcamento" className='menuItens'>Orçamento</Link>
          </nav>
        </section>
        <nav className={`menuHeader navbar ${isActive ? "active" : "inactive"}`}>
            <Link to="/" className='menuItens'>Home</Link>
            <Link to="/catalogo" className='menuItens'>Catálogo</Link>
            <Link to="/acessorios" className='menuItens'>Acessórios</Link>
            <Link to="/tatuadores" className='menuItens'>Tatuadores</Link>
            <Link to="/orcamento" className='menuItens'>Orçamento</Link>
          </nav>
    </>
  )
}