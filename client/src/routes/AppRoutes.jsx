import { Route, Routes } from 'react-router-dom'
import React from 'react'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Inicio</p>} />
            <Route path="/fichajes" element={<p>Fichajes</p>} />
            <Route path="/calendario" element={<p>Calendario</p>} />
            <Route path="/notificaciones" element={<p>Notificaciones</p>} />
            <Route path="/perfil" element={<p>Perfil</p>} />
            <Route path="*" element={<p>El ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes