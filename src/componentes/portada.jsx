import React from 'react';
import { Link } from 'react-router-dom';

// --- Paleta de Colores Personalizada ---
const customColors = {
    primaryLight: '#e8c39e',       // Fondo Claro/Beige (Usado para texto claro)
    secondaryMedium: '#c4a17d',    // Fondo Medio/Bronceado
    accentTerracotta: '#a25d49',   // Acento Terroso/Terracota (Usado para CTA)
    shadowDark: '#84623e',         // Fondo de página / Marrón Oscuro (Usado para Header/Footer)
    textDark: '#3e3a35',           // Color de texto oscuro (Usado para títulos)
    coolGray: '#8f9491',           // Gris Mate/Tono Frío (Usado para texto secundario)
};

function Portada () {
    // URL SIMULADA PARA LA IMAGEN DE FONDO
    const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D'; 

    // --- SECCIÓN 1: PORTADA (Modificada para parecerse a la imagen) ---
    function CoverSection() {
        return (
            // Usamos md:h-screen para que en pantallas grandes ocupe la altura completa.
            <section id="home" className="relative pt-16 md:h-screen flex items-center">
                
                {/* CONTENEDOR DE LA IMAGEN Y EL COLOR DE FONDO */}
                <div 
                    className="absolute inset-0 bg-cover bg-right"
                    style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
                >
                    {/* SUPERPOSICIÓN DE COLOR TERRRACOTA (Izquierda) */}
                    <div 
                        className="absolute inset-0 w-full md:w-0/3 " // Ajusta el ancho para pantallas grandes
                        style={{ backgroundColor: customColors.accentTerracotta }}
                    ></div>
                </div>

                {/* CONTENIDO DE LA PORTADA - ALINEADO A LA IZQUIERDA Y TEXTO CLARO */}
                <div className="relative z-10 max-w-7xl mx-auto p-8 text-left h-full flex flex-col justify-center">
                    <h1 
                        className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-md"
                        style={{ color: customColors.primaryLight }} // Texto Blanco/Beige Claro
                    >
                        Transformamos 
                        <br />
                        Espacios
                    </h1>
                    <p 
                        className="text-xl md:text-2xl mb-8 max-w-xl drop-shadow-sm" 
                        style={{ color: customColors.textDark, opacity: 0.9 }} // Texto Blanco/Beige Claro
                    >
                        Compañeros de diseño interior. Creamos ambientes minimalistas y acogedores, enfocados en la luz natural y la armonía de tus colores preferidos.
                    </p>
                    {/* CTA con estilo rectangular y colores invertidos */}
                    <Link
                        className="
                            font-semibold py-3 px-8 w-max rounded-lg shadow-xl 
                            transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl
                        "
                        style={{ 
                            backgroundColor: customColors.primaryLight, // Fondo Beige Claro
                            color: customColors.accentTerracotta, // Texto Terracota
                        }}
                        to="/separación"
                    >
                        ¡Nuestro Trabajo!
                    </Link>
                </div>
            </section>
        );
    }

    // --- SECCIÓN 2: CONÓCENOS (MISIÓN, VISIÓN, DIFERENCIAS) ---
    function AboutSection() {
        return (
            <section id="about" className="py-20 md:py-32" style={{ backgroundColor: customColors.primaryLight }}>
                <div 
                    className="max-w-6xl mx-auto px-6 py-12 rounded-2xl shadow-2xl"
                    style={{ backgroundColor: 'white' }}
                >
                    <h2 
                        className="text-4xl md:text-5xl font-bold mb-16 text-center" 
                        style={{ color: customColors.textDark }}
                    >
                        Conócenos: Nuestra Esencia
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-10">
                        
                        {/* MISIÓN */}
                        <div className="p-8 rounded-xl shadow-md" style={{ backgroundColor: customColors.primaryLight }}>
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: customColors.accentTerracotta }}>Misión</h3>
                            <div 
                                className="w-12 h-1 mb-4 rounded-full" 
                                style={{ backgroundColor: customColors.secondaryMedium }}
                            ></div>
                            <p style={{ color: customColors.textDark }}>
                                Ofrecer soluciones de diseño de interiores personalizadas que eleven la calidad de vida de nuestros clientes, creando espacios funcionales, estéticos y emocionalmente resonantes.
                            </p>
                        </div>

                        {/* VISIÓN */}
                        <div className="p-8 rounded-xl shadow-md" style={{ backgroundColor: customColors.primaryLight }}>
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: customColors.accentTerracotta }}>Visión</h3>
                            <div 
                                className="w-12 h-1 mb-4 rounded-full" 
                                style={{ backgroundColor: customColors.secondaryMedium }}
                            ></div>
                            <p style={{ color: customColors.textDark }}>
                                Ser el estudio de diseño referente en Latinoamérica, reconocido por su enfoque en la sostenibilidad, la innovación de materiales y el uso armónico de paletas de colores naturales y mate.
                            </p>
                        </div>

                        {/* ¿QUÉ NOS HACE DIFERENTES? (Caja de Acento) */}
                        <div className="p-8 rounded-xl shadow-xl" style={{ backgroundColor: customColors.shadowDark, color: customColors.primaryLight }}>
                            <h3 className="text-2xl font-semibold mb-4">¿Qué nos hace diferentes?</h3>
                            <div 
                                className="w-12 h-1 mb-4 rounded-full" 
                                style={{ backgroundColor: customColors.accentTerracotta }}
                            ></div>
                            <ul className="list-disc ml-5 space-y-2 text-base opacity-95">
                                <li>Enfoque en la **Paleta Tierra**: Usamos marrones, beiges y acentos en azul acero para un look atemporal.</li>
                                <li>Diseño **Holístico**: Consideramos la luz, el sonido y la textura.</li>
                                <li>Compromiso **Ecológico**: Priorizamos materiales locales y sostenibles.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // --- SECCIÓN 3: PROCESO DE TRABAJO ---
    function ProcessSection() {
        return (
            <section id="process" className="py-20 md:py-32" style={{ backgroundColor: customColors.primaryLight }}>
                <div 
                    className="max-w-6xl mx-auto px-6 py-12 rounded-2xl shadow-2xl"
                    style={{ backgroundColor: 'white' }}
                >
                    <h2 
                        className="text-4xl md:text-5xl font-bold mb-16 text-center"
                        style={{ color: customColors.textDark }}
                    >
                        Nuestro Proceso de Trabajo
                    </h2>
                    
                    <ol className="relative border-l-4 ml-4 md:ml-0" style={{ borderColor: customColors.coolGray }}>
                        
                        {/* Paso 1 */}
                        <li className="mb-10 ml-6">
                            <span 
                                className="flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full ring-8 font-bold shadow-md"
                                style={{ backgroundColor: customColors.accentTerracotta, color: customColors.primaryLight, ringColor: customColors.primaryLight }}
                            >1</span>
                            <h3 className="flex items-center mb-1 text-xl font-semibold" style={{ color: customColors.textDark }}>Descubrimiento y Concepto</h3>
                            <p className="text-base font-normal" style={{ color: customColors.coolGray }}>
                                Charlamos sobre tus sueños, necesidades y el estilo de vida que deseas. Definimos el *moodboard* y la paleta de colores.
                            </p>
                        </li>
                        
                        {/* Paso 2 */}
                        <li className="mb-10 ml-6">
                            <span 
                                className="flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full ring-8 font-bold shadow-md"
                                style={{ backgroundColor: customColors.accentTerracotta, color: customColors.primaryLight, ringColor: customColors.primaryLight }}
                            >2</span>
                            <h3 className="flex items-center mb-1 text-xl font-semibold" style={{ color: customColors.textDark }}>Diseño y Visualización 3D</h3>
                            <p className="text-base font-normal" style={{ color: customColors.coolGray }}>
                                Desarrollamos planos detallados y renders 3D realistas para que veas el resultado final antes de construir. Aprobación de materiales.
                            </p>
                        </li>
                        
                        {/* Paso 3 */}
                        <li className="mb-10 ml-6">
                            <span 
                                className="flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full ring-8 font-bold shadow-md"
                                style={{ backgroundColor: customColors.accentTerracotta, color: customColors.primaryLight, ringColor: customColors.primaryLight }}
                            >3</span>
                            <h3 className="flex items-center mb-1 text-xl font-semibold" style={{ color: customColors.textDark }}>Ejecución y Dirección de Obra</h3>
                            <p className="text-base font-normal" style={{ color: customColors.coolGray }}>
                                Gestionamos y supervisamos la construcción o remodelación, asegurando que cada detalle se ejecute con precisión y calidad.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>
        );
    }

    // --- COMPONENTE PRINCIPAL ---
    return (
        <div className="antialiased font-sans" style={{ backgroundColor: customColors.primaryLight }}>
            {/* BARRA DE NAVEGACIÓN (HEADER) */}
            <header className="fixed w-full z-30">
                <div style={{ backgroundColor:'transparent' , opacity: 0.95 }}> 
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            
                            {/* Logo o Nombre del Estudio */}
                            <a 
                                href="#home" 
                                className="text-2xl font-bold tracking-wider transition duration-150"
                                style={{ color: customColors.primaryLight }}
                            >
                                STUDIO MATE
                            </a>
                            
                            {/* Botones de Navegación */}
                            <nav className="hidden md:flex space-x-8">
                                {[
                                    { text: 'Inicio', href: '#home' },
                                    { text: 'Opiniones', to: '/opiniones' },
                                    { text: 'Nosotras', to: '/nosotras' },
                                    { text: 'Iniciar sesión', to: '/iniciar' },
                                    { text: 'Registrarse', to: '/registrar' },
                                    { text: 'Portafolio', to: '/portafolio' },
                                    { text: 'Más', to: '/mas' }
                                ].map((item, index) => (
                                    item.href ? (
                                        <a key={index} 
                                           href={item.href} 
                                           className="text-sm font-medium uppercase opacity-80 transition duration-150"
                                           style={{ color: customColors.primaryLight }}
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <Link key={index} 
                                            to={item.to} 
                                            className="text-sm font-medium uppercase opacity-80 transition duration-150"
                                            style={{ color: customColors.primaryLight }}
                                        >
                                            {item.text}
                                        </Link>
                                    )
                                ))}
                            </nav>
                            
                            {/* CTA en el Header (Botón Terracota) */}
                            <Link 
                                to="/agendar"
                                className="hidden md:inline-block py-2 px-6 text-sm font-semibold rounded-full transition duration-150 hover:opacity-90 shadow-md"
                                style={{ 
                                    backgroundColor: customColors.accentTerracotta, 
                                    color: customColors.primaryLight 
                                }}
                            >
                                Agendar cita
                            </Link>

                        </div>
                    </div>
                </div>
            </header>

            <main>
                <CoverSection />
                <AboutSection />
                <ProcessSection />
            </main>

            {/* Pie de Página Simple */}
            <footer className="py-8 text-center text-sm" style={{ backgroundColor: customColors.shadowDark, color: customColors.primaryLight }}>
                © {new Date().getFullYear()} Estudio Mate. Todos los derechos reservados.
            </footer>
        </div>
    );
}

export default Portada;