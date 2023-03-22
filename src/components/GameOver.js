import React from 'react'
import './GameOver.css'
import { useState } from 'react'


const GameOver = ({retry, score}) => {
  const [mensagem, setMensagem] = useState('')
  
  

  const notGame = () => {
    
    setMensagem('Até a próxima!!!')
    

    
  }
  return (
    <div>
        <h1 className='piscar'>Fim de Jogo</h1>
        <h2>A sua pontuação foi <span>{score}</span></h2>
        <h2>Deseja jogar novamente??</h2>
        <button onClick={retry}>Sim</button>
        <button onClick={notGame}>Não</button>
        <p className="nao">{mensagem}</p>
        
        
        
    </div>
  )
}

export default GameOver