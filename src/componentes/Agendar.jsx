import React, { useState } from 'react';

// --- Paleta de Colores Personalizada (Códigos HEX proporcionados) ---
const customColors = {
  // Fondo Claro/Beige (e8c39e)
  primaryLight: '#e8c39e', 
  // Fondo Medio/Bronceado (c4a17d)
  secondaryMedium: '#c4a17d',
  // Acento Terroso/Terracota (a25d49) - Usado para CTA principal
  accentTerracotta: '#a25d49',
  // Sombra Oscura/Marrón Olivo (84623e) - Usado para fondo
  shadowDark: '#84623e',
  // Tono Frío/Gris Mate (8f9491) - Usado para bordes y texto secundario
  coolGray: '#8f9491', 
  // Color de texto oscuro para contraste
  textDark: '#3e3a35', 
};

function Agendar() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback({ message: '', type: '' });

        // Simulación de envío de datos
        console.log({ nombre, email, asunto, mensaje });

        setTimeout(() => {
            setLoading(false);
            if (Math.random() > 0.1) {
                setFeedback({
                    message: "✅ Su solicitud ha sido enviada con éxito. Un ejecutivo le contactará pronto para coordinar.",
                    type: 'success'
                });
                setNombre('');
                setEmail('');
                setAsunto('');
                setMensaje('');
            } else {
                setFeedback({
                    message: "⚠️ Error en el servidor. Por favor, inténtelo de nuevo más tarde o comuníquese con nuestra oficina.",
                    type: 'error'
                });
            }
        }, 1500);
    };

    const FeedbackMessage = () => {
        if (!feedback.message) return null;

        const baseClasses = "p-4 rounded-lg text-sm mb-6 font-medium border";
        
        // Colores de feedback adaptados a la paleta
        const successStyle = {
            backgroundColor: customColors.secondaryMedium + '50', // Bronceado claro
            color: customColors.textDark,
            borderColor: customColors.secondaryMedium
        };
        const errorStyle = {
            backgroundColor: customColors.accentTerracotta + '50', // Terracota claro
            color: customColors.textDark,
            borderColor: customColors.accentTerracotta
        };

        return (
            <div 
                className={`${baseClasses}`}
                style={feedback.type === 'success' ? successStyle : errorStyle}
            >
                {feedback.message}
            </div>
        );
    };

    // Estilos personalizados para los inputs
    const inputStyle = {
        backgroundColor: customColors.primaryLight, // Fondo beige claro
        borderColor: customColors.coolGray, // Borde gris mate
        color: customColors.textDark, // Texto oscuro
        transition: 'all 0.3s',
        // Efecto de focus (se debe aplicar en el className para clases Tailwind o con eventos JS para estilos en línea)
    };

    // Clase Tailwind para los inputs que aplica los estilos específicos de focus (Terracota)
    const inputClassName = `w-full p-4 border rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition`;

    return (
        // Contenedor principal: Fondo marrón oscuro (shadowDark)
        <section id="agenda" className="py-24 md:py-36 font-sans" style={{ backgroundColor: customColors.shadowDark }}>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Columna de Información de Contacto (Texto en Beige Claro) */}
                <div className="text-left lg:sticky lg:top-12">
                    <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: customColors.coolGray }}>
                        Solicitud de Colaboración
                    </p>
                    <h2 
                        className="text-5xl md:text-6xl font-light leading-tight mb-6"
                        style={{ color: customColors.primaryLight, fontFamily: 'Playfair Display, serif' }}
                    >
                        Comencemos a Definir su Espacio
                    </h2>
                    <p className="text-lg mb-8" style={{ color: customColors.secondaryMedium }}>
                        Rellene este breve formulario o utilice los datos de contacto directos para dar el primer paso hacia la materialización de su proyecto.
                    </p>

                    <div className="space-y-6 pt-6 border-t" style={{ borderColor: customColors.coolGray }}>
                        <div className="flex items-start space-x-4">
                            <span className="mt-1 text-xl" style={{ color: customColors.accentTerracotta }}>📧</span>
                            <div>
                                <p className="font-semibold" style={{ color: customColors.primaryLight }}>Correo Corporativo</p>
                                <a href="mailto:contacto@suempresa.com" className="hover:underline transition" style={{ color: customColors.secondaryMedium }}>
                                    contacto@suempresa.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="mt-1 text-xl" style={{ color: customColors.accentTerracotta }}>📞</span>
                            <div>
                                <p className="font-semibold" style={{ color: customColors.primaryLight }}>Oficina Principal</p>
                                <a href="tel:+1234567890" className="hover:underline transition" style={{ color: customColors.secondaryMedium }}>
                                    +XX XXX XXX XXX
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna de Formulario (Tarjeta Flotante - Bronceado Medio) */}
                <div 
                    className="p-8 md:p-12 rounded-xl shadow-2xl" 
                    style={{ backgroundColor: customColors.secondaryMedium }} // Fondo Bronceado
                >
                    
                    <FeedbackMessage />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Nombre y Correo */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input 
                                type="text" 
                                placeholder="Nombre Completo" 
                                required 
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className={`${inputClassName} focus:ring-[${customColors.accentTerracotta}] focus:border-[${customColors.accentTerracotta}]`}
                                style={inputStyle}
                            />
                            <input 
                                type="email" 
                                placeholder="Correo Electrónico Corporativo" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`${inputClassName} focus:ring-[${customColors.accentTerracotta}] focus:border-[${customColors.accentTerracotta}]`}
                                style={inputStyle}
                            />
                        </div>
                        
                        {/* Asunto */}
                        <input 
                            type="text" 
                            placeholder="Asunto (Ej: Nueva Sede / Remodelación Ejecutiva)" 
                            required 
                            value={asunto}
                            onChange={(e) => setAsunto(e.target.value)}
                            className={`${inputClassName} focus:ring-[${customColors.accentTerracotta}] focus:border-[${customColors.accentTerracotta}]`}
                            style={inputStyle}
                        />
                        
                        {/* Mensaje/Detalles */}
                        <textarea 
                            placeholder="Describa el alcance de su proyecto y sus objetivos principales." 
                            rows="6" 
                            required 
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            className={`${inputClassName} focus:ring-[${customColors.accentTerracotta}] focus:border-[${customColors.accentTerracotta}]`}
                            style={inputStyle}
                        ></textarea>
                        
                        {/* Botón de Envío (Terracota sólido) */}
                        <button 
                            type="submit"
                            disabled={loading}
                            className={`
                                w-full py-4 font-bold text-lg rounded-md shadow-lg transition duration-300
                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-90'}
                            `}
                            style={{ 
                                backgroundColor: customColors.accentTerracotta, 
                                color: customColors.primaryLight,
                                focusRingColor: customColors.accentTerracotta,
                                focusRingOffsetColor: customColors.secondaryMedium
                            }}
                        >
                            {loading ? 'Enviando Solicitud...' : 'Enviar Solicitud Confidencial'}
                        </button>

                        <p className="text-xs text-center pt-2" style={{ color: customColors.textDark }}>
                            *Garantizamos la confidencialidad de todos los datos proporcionados.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Agendar;