import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginScreen() {
    const [email, setEmail] = useState('tralalalitas@greisy.nikolle');
    const [password, setPassword] = useState('*********');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Intentando iniciar sesión con:", email, password);
    };

    return (
        // 1. Fondo Exterior (Marrón Cálido)
        <div className="min-h-screen flex items-center justify-center bg-amber-600 p-8">
            
            {/* 2. Contenedor Principal (Tarjetón) */}
            <div className="w-full max-w-4xl bg-stone-100 rounded-2xl shadow-2xl overflow-hidden">
                
                {/* 3. Diseño Interno: Grid de 3 columnas (2 para Login, 1 para Social) */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    
                    {/* Columna Izquierda (Login Clásico - Ocupa 2/3) */}
                    <div className="md:col-span-2 p-12 bg-stone-100 text-stone-900">
                        
                        <p className="text-sm font-semibold text-stone-600 mb-2">Studio Mate</p>

                        <h1 className="text-3xl font-bold text-amber-800 mb-2">
                            Acceso de Miembros
                        </h1>
                        <p className="text-sm text-stone-700 mb-10">
                            Inicie sesión para gestionar sus proyectos.
                        </p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            
                            {/* Input Correo Electrónico */}
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-stone-300 rounded-xl bg-stone-50 text-stone-900 focus:ring-amber-800 focus:border-amber-800 transition"
                                    required
                                />
                            </div>

                            {/* Input Contraseña */}
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-stone-300 rounded-xl bg-stone-50 text-stone-900 focus:ring-amber-800 focus:border-amber-800 transition"
                                    required
                                />
                            </div>

                            {/* Botón ACCEDER (Terracota) */}
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 text-lg font-semibold text-stone-50 bg-amber-800 rounded-xl shadow-md shadow-amber-800/40 hover:bg-amber-700 transition duration-200"
                            >
                                ACCEDER
                            </button>
                        </form>

                        {/* Enlace de Registro */}
                        <div className="text-center mt-6 text-sm">
                            <p className="text-stone-700">
                                ¿Necesita una cuenta? 
                                <Link to="/register" className="font-semibold text-amber-800 hover:text-amber-700 ml-1">
                                    Regístrese
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha (Login Social - Ocupa 1/3) */}
                    <div className="md:col-span-1 p-12 flex flex-col items-center justify-center bg-amber-600 text-stone-50">
                        <p className="text-sm font-medium mb-4 uppercase tracking-wider">
                            O INGRESE CON
                        </p>

                        {/* Botón de Google */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-stone-50 text-stone-900 rounded-xl shadow-lg hover:bg-stone-200 transition duration-200"
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo-google-g.png" 
                                alt="Google Logo" 
                                className="w-5 h-5"
                            />
                            <span className="font-semibold">Ingresar con Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;