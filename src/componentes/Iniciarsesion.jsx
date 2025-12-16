import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

// --- Paleta de Colores Personalizada ---
const customColors = {
  // Fondo Claro/Beige (e8c39e) - Base principal
  primaryLight: '#e8c39e', 
  // Fondo Medio/Bronceado (c4a17d) - Fondo del input/campos de relleno
  secondaryMedium: '#c4a17d',
  // Acento Terroso/Terracota (a25d49) - CTA principal
  accentTerracotta: '#a25d49',
  // Sombra Oscura/Marrón Olivo (84623e) - Fondo de la página
  shadowDark: '#84623e',
  // Tono Frío/Gris Mate (8f9491) - Bordes, texto secundario
  coolGray: '#8f9491', 
  // Color de texto oscuro para contraste
  textDark: '#3e3a35', 
};

// Instancia global del proveedor de Google
const provider = new GoogleAuthProvider();

function Iniciarsesion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    // Funciones de Firebase (se mantienen igual)
    const iniciarSesion = () => {
        setErrorMessage("");
        const auth = getAuth(); 
        signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/"))
        .catch((error) => {
            let message = "Error al iniciar sesión. Verifique su correo y contraseña.";
            if (error.code === 'auth/user-not-found') {
                message = "Credenciales inválidas. El usuario no está registrado.";
            } else if (error.code === 'auth/wrong-password') {
                message = "Contraseña incorrecta. Intente de nuevo.";
            } else if (error.code === 'auth/invalid-email') {
                message = "El formato del correo electrónico es inválido.";
            }
            setErrorMessage(message);
        });
    } 

    const iniciarGoogle = () => {
        setErrorMessage("");
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(() => navigate("/"))
        .catch((error) => {
            console.error("Error al iniciar sesión con Google:", error);
            setErrorMessage("Error al iniciar sesión con Google.");
        });
    }

    // Estilos de Input unificados para bordes redondeados completos
    const inputStyle = {
        backgroundColor: customColors.secondaryMedium + '60', // Bronceado más opaco
        border: `2px solid ${customColors.secondaryMedium}`, 
        color: customColors.textDark,
        padding: '14px 20px', 
    };
    
    // Estilo para el focus (usando box-shadow para un anillo suave)
    const focusStyle = {
        boxShadow: `0 0 0 3px ${customColors.accentTerracotta}70`,
        borderColor: customColors.accentTerracotta,
        outline: 'none'
    };


    return (
        // Fondo principal marrón oscuro (shadowDark)
        <div 
            className="min-h-screen flex items-center justify-center p-6 font-sans"
            style={{ backgroundColor: customColors.shadowDark }}
        >
            
            {/* Contenedor Principal - Diseño de Tarjeta Dividida */}
            <div 
                className="flex flex-col md:flex-row w-full max-w-4xl shadow-3xl overflow-hidden"
                style={{ 
                    borderRadius: '20px', // Bordes más grandes
                    backgroundColor: customColors.primaryLight, 
                    boxShadow: `0 20px 25px -5px ${customColors.textDark}60, 0 10px 10px -5px ${customColors.textDark}40`
                }}
            >
                
                {/* Columna Izquierda: Formulario de Email/Password */}
                <div className="p-8 md:p-12 w-full md:w-3/5 space-y-7">
                    
                    <div className="space-y-2">
                        {/* Logo/Header (Opcional, simulado con texto elegante) */}
                        <h1 className="text-xl font-light" style={{ color: customColors.coolGray, fontFamily: 'Garamond, serif' }}>
                            Studio Mate
                        </h1>
                        
                        <h2 
                            className="text-4xl font-normal"
                            style={{ color: customColors.textDark, fontFamily: 'Garamond, serif' }}
                        >
                            Acceso de Miembros
                        </h2>
                        <p className="text-md" style={{ color: customColors.coolGray }}>
                            Inicie sesión para gestionar sus proyectos.
                        </p>
                    </div>

                    {/* Mensaje de Error (Estilo de Terracota) */}
                    {errorMessage && (
                        <div 
                            className="p-3 text-sm rounded-full text-center font-medium"
                            style={{ 
                                backgroundColor: customColors.accentTerracotta + '20', 
                                color: customColors.textDark,
                                border: `1px dashed ${customColors.accentTerracotta}70` // Borde de guiones
                            }}
                        >
                            {errorMessage}
                        </div>
                    )}

                    {/* Campos de Formulario */}
                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); iniciarSesion(); }}>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: customColors.textDark }}>
                                Correo Electrónico
                            </label>
                            <input 
                                id="email"
                                type="email" 
                                placeholder="ejemplo@dominio.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-full transition duration-300"
                                style={inputStyle}
                                onFocus={(e) => e.target.style.boxShadow = focusStyle.boxShadow}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>

                        {/* Contraseña */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: customColors.textDark }}>
                                Contraseña
                            </label>
                            <input 
                                id="password"
                                type="password"
                                placeholder="••••••••" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-full transition duration-300"
                                style={inputStyle}
                                onFocus={(e) => e.target.style.boxShadow = focusStyle.boxShadow}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>

                        {/* Botón de Acceso - Terracota sólido con bordes redondeados completos */}
                        <button 
                            type="submit"
                            className="w-full py-4 rounded-full font-bold tracking-widest uppercase transition duration-300 transform hover:scale-[1.01] hover:shadow-lg"
                            style={{ 
                                backgroundColor: customColors.accentTerracotta, 
                                color: customColors.primaryLight,
                                boxShadow: `0 4px 10px -2px ${customColors.accentTerracotta}80`,
                            }}
                        >
                            Acceder
                        </button>
                    </form>
                    
                    {/* Enlace de Registro al final de la columna */}
                    <p className="pt-4 text-center text-sm" style={{ color: customColors.coolGray }}>
                        ¿Necesita una cuenta? 
                        <Link 
                        to="/registrar" 
                        className="font-semibold ml-1 transition duration-200 hover:text-opacity-80"
                        style={{ color: customColors.accentTerracotta }}
                        >
                            Regístrese
                        </Link>
                    </p>
                </div>

                {/* Columna Derecha: Opciones de Terceros (Diseño Acentuado) */}
                <div 
                    className="w-full md:w-2/5 p-8 flex flex-col items-center justify-center space-y-4"
                    style={{ 
                        backgroundColor: customColors.secondaryMedium, // Fondo de columna medio/bronceado
                        color: customColors.textDark,
                    }}
                >
                    
                    <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: customColors.shadowDark }}>
                        O INGRESE CON
                    </p>
                    
                    {/* Botón de Inicio de Sesión con Google - Estilo Bronceado */}
                    <button 
                        onClick={iniciarGoogle}
                        className="w-full py-3 rounded-full font-semibold transition duration-300 flex items-center justify-center space-x-3 shadow-md hover:bg-opacity-90"
                        style={{ 
                            backgroundColor: customColors.primaryLight, // Más claro para que contraste en esta columna
                            color: customColors.textDark, 
                            border: `1px solid ${customColors.coolGray}80`,
                        }}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0001 4.75C14.0001 4.75 15.6181 5.438 16.8901 6.643L19.5051 3.999C17.7561 2.375 15.0001 1.5 12.0001 1.5C7.27211 1.5 3.19711 3.974 1.25011 7.422L4.54211 9.967C5.46711 7.214 8.48711 4.75 12.0001 4.75Z" fill="#EA4335"/>
                            <path d="M23.25 12.0001C23.25 11.1001 23.181 10.2561 23.007 9.47911H12V13.5001H18.665C18.375 15.1561 17.49 16.5141 16.273 17.3871L19.505 19.9631C21.782 17.9571 23.25 15.1111 23.25 12.0001Z" fill="#4285F4"/>
                            <path d="M6.642 16.891L3.349 19.435C5.297 22.883 9.373 25.358 14.101 25.358C17.042 25.358 19.704 24.367 21.611 22.793L18.878 20.252C17.306 21.36 15.093 22.067 12.355 22.067C8.944 22.067 6.009 19.742 4.962 16.891H6.642Z" fill="#FBBC05"/>
                            <path d="M1.25 7.42197L4.542 9.96697C4.168 11.054 3.975 12.0001 3.975 13.5001C3.975 14.8811 4.249 16.2001 4.747 17.3871L1.25 20.2451C0.292 18.2321 0 15.8641 0 13.5001C0 10.7411 0.707 8.52897 1.25 7.42197Z" fill="#0F9D58"/>
                        </svg>
                        <span>Ingresar con Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Iniciarsesion;