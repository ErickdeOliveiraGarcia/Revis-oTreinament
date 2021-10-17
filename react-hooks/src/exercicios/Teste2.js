import React from 'react'

export default function Teste2(){
    const [msg, setMsg] = React.useState('')

    const buttonClick = event => {
        setMsg('Este é segundo componete de teste')
    }
    return (
        <>
        <button onClick={buttonClick}>Clique aqui</button>
        <div>{msg}</div>
        </>
    )
}
