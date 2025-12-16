import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Zap, Compass, Heart } from 'lucide-react'; // Iconos de React

// --- Paleta de Colores Consolidada ---
const customColors = {
    fondoClaro: '#e8c39e',        // Beige Claro
    fondoMedio: '#c4a17d',      // Bronceado Medio
    acentoTerracota: '#a25d49', // Terracota (Títulos, CTA)
    fondoOscuro: '#84623e',      // Marrón Oscuro (Header/Footer)
    textoPrincipal: '#3e3a35',   // Texto Oscuro
    textoSecundario: '#8f9491',  // Gris Frío
};

// --- Componente de Tarjeta de Equipo (Mejorado visualmente) ---
const TeamCard = ({ name, title }) => {
    return (
        <div className="text-center p-8 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ backgroundColor: customColors.fondoClaro, border: `1px solid ${customColors.fondoMedio}` }}>
            {/* Placeholder de Avatar o Imagen */}
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full mb-4 ring-2 ring-offset-2" style={{ backgroundColor: customColors.acentoTerracota, ringColor: customColors.fondoMedio }}>
                <Users size={32} style={{ color: customColors.fondoClaro }} />
            </div>
            
            <h3 className="text-xl font-bold mb-1" style={{ color: customColors.textoPrincipal }}>{name}</h3>
            <p className="text-sm italic font-medium" style={{ color: customColors.textoSecundario }}>{title}</p>
        </div>
    );
};

// --- Componente Principal: Nosotras/About Us ---
const Nosotras = () => {

    // --- SECCIÓN 1: INTRODUCCIÓN Y METODOLOGÍA (Textos actualizados) ---
    const IntroSection = () => (
        <section className="pt-32 pb-20 md:py-32" style={{ backgroundColor: 'white' }}>
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 
                    className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight"
                    style={{ color: customColors.textoPrincipal }}
                >
                    Hola, ¡Un placer conocerte!
                </h2>
                
                {/* Bloque de Escucha y Entrega: Con nuevo estilo visual */}
                <div className="mb-20 p-12 rounded-3xl shadow-2xl text-center border-b-4 border-r-4" style={{ backgroundColor: customColors.fondoClaro, borderColor: customColors.acentoTerracota }}>
                    <p className="text-3xl font-serif font-light leading-snug" style={{ color: customColors.textoPrincipal }}>
                        <Heart size={32} style={{ color: customColors.acentoTerracota }} className="inline mr-3 mb-1" />
                        Escuchamos profundamente a nuestros clientes y entregamos diseños que superan sus expectativas.
                    </p>
                </div>

                {/* Bloques de Texto de Presentación */}
                <div className="space-y-10 text-xl font-light leading-relaxed" style={{ color: customColors.textoPrincipal }}>
                    {/* Primer Párrafo Actualizado */}
                    <p>
                        En Studio Mate, revolucionamos la transformación de espacios** con un enfoque integral y personalizado. Ofrecemos un servicio llave en mano que abarca desde la **consultoría inicial y la planificación minuciosa, hasta el diseño estético, la instalación de mobiliario exclusivo y la fotografía profesional lista para marketing. Nos encargamos de todos los detalles, entregando un ambiente cautivador y completamente montado, listo para ser disfrutado o vendido.
                    </p>
                    {/* Segundo Párrafo Actualizado */}
                    <p>
                        Con una sólida trayectoria de proyectos en diversos rincones de Latinoamérica, nuestra premisa es clara: **cada espacio posee una historia y una personalidad única**. Nuestra labor consiste en descifrarla y realzarla. Por ello, contamos con un inventario de mobiliario y decoración excepcionalmente amplio, capaz de adaptarse y complementar la diversidad de estilos, planos y culturas de nuestra vasta comunidad.
                    </p>
                </div>

            </div>
        </section>
    );

    // --- SECCIÓN 2: MISIÓN Y VISIÓN (Textos actualizados y estilo dinámico) ---
    const MissionVisionSection = () => (
        <section className="py-20 md:py-32" style={{ backgroundColor: customColors.fondoMedio }}>
            <div className="max-w-6xl mx-auto px-6">
                <h2 
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    style={{ color: customColors.textoPrincipal }}
                >
                    Lo que nos hace diferentes
                </h2>
                
                <div className="grid md:grid-cols-2 gap-10">
                    
                    {/* MISIÓN - Texto Actualizado */}
                    <div className="p-10 rounded-xl shadow-2xl transform transition duration-300 hover:scale-[1.02]" style={{ backgroundColor: 'white' }}>
                        <div className="flex items-center mb-4">
                            <Zap size={28} style={{ color: customColors.acentoTerracota }} className="mr-3" />
                            <h3 className="text-3xl font-bold" style={{ color: customColors.acentoTerracota }}>Nuestra Misión</h3>
                        </div>
                        <div className="w-20 h-1 mb-6 rounded-full" style={{ backgroundColor: customColors.fondoMedio }}></div>
                        <p className="text-lg" style={{ color: customColors.textoPrincipal }}>
                            Nuestra misión es fusionar la **innovación tecnológica** con la **sensibilidad del diseño humano** para entregar resultados medibles: **maximizar el valor de la propiedad**, optimizar su presencia en el mercado y acortar el ciclo de venta. Todo esto, logrando ambientes que no solo se vendan rápido, sino que también inspiren una nueva forma de vivir.
                        </p>
                    </div>

                    {/* VISIÓN - Texto ligeramente mejorado */}
                    <div className="p-10 rounded-xl shadow-2xl transform transition duration-300 hover:scale-[1.02]" style={{ backgroundColor: 'white' }}>
                        <div className="flex items-center mb-4">
                            <Compass size={28} style={{ color: customColors.acentoTerracota }} className="mr-3" />
                            <h3 className="text-3xl font-bold" style={{ color: customColors.acentoTerracota }}>Nuestra Visión</h3>
                        </div>
                        <div className="w-20 h-1 mb-6 rounded-full" style={{ backgroundColor: customColors.fondoMedio }}></div>
                        <p className="text-lg" style={{ color: customColors.textoPrincipal }}>
                            Nos esforzamos por convertirnos en el **estándar global para el diseño de interiores**. Durante demasiado tiempo, este proceso ha sido largo, complicado y fragmentado. Nuestro objetivo es cambiar eso, ofreciendo una experiencia **rápida, transparente y de valor inigualable**.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

    // --- SECCIÓN 3: EL EQUIPO Y CTA (Mejorado con 3 miembros) ---
    const TeamAndCtaSection = () => (
        <section className="py-20 md:py-32" style={{ backgroundColor: 'white' }}>
            <div className="max-w-6xl mx-auto px-6">
                <h2 
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    style={{ color: customColors.textoPrincipal }}
                >
                    Conoce a las Fundadoras
                </h2>

                {/* Tarjetas del Equipo con layout de 3 columnas */}
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    <TeamCard 
                        name="Greisy Hinostroza" 
                        title="Fundadora | Dir. Desarrollo de Negocios" 
                    />
                    <TeamCard 
                        name="Nikolle Mendoza" 
                        title="Cofundadora | Diseñadora Principal" 
                    />
                    <TeamCard
                        name="Alondra Aldave" 
                        title="Cofundadora | Diseñadora Creativa" 
                    />
                </div>

                {/* CTA - Estimación Instantánea (Máximo contraste visual) */}
                <div className="text-center p-16 rounded-3xl shadow-2xl ring-4 ring-offset-4 ring-offset-white" style={{ backgroundColor: customColors.fondoOscuro, ringColor: customColors.acentoTerracota }}>
                    <h3 className="text-4xl font-extrabold mb-4" style={{ color: customColors.fondoClaro }}>
                        ¿Lista para transformar tu propiedad?
                    </h3>
                    <p className="text-xl mb-10" style={{ color: customColors.fondoClaro, opacity: 0.9 }}>
                        Obtén una estimación instantánea y descubre el potencial de tu espacio.
                    </p>
                    <Link
                        className="
                            font-extrabold py-4 px-12 w-max inline-block rounded-full shadow-2xl text-lg uppercase tracking-wider
                            transition duration-300 ease-in-out transform hover:scale-[1.05] hover:opacity-95
                        "
                        style={{ 
                            backgroundColor: customColors.acentoTerracota, 
                            color: customColors.fondoClaro,
                        }}
                        to="/estimacion"
                    >
                        Obtener Estimación Instantánea
                    </Link>
                </div>
            </div>
        </section>
    );

    // --- SECCIÓN 4: MAPA DEL SITIO/SERVICIOS (Footer Extra) ---
    const SitemapSection = () => {
        // Estructura del sitemap basada en el texto proporcionado
        const sitemapStructure = [
            { 
                title: 'Información', 
                links: [
                    { text: 'Inicio', to: '/home' },
                    { text: 'Antes y Después', to: '/before-after' },
                    { text: 'Portafolio', to: '/portafolio' },
                    { text: 'Blogs', to: '/blogs' }
                ] 
            },
            { 
                title: 'Empresa', 
                links: [
                    { text: 'Contáctanos', to: '/contact-us' },
                    { text: 'Carreras', to: '/careers' },
                    { text: 'Nosotras', to: '/about-us' },
                    { text: 'Términos y Condiciones', to: '/terms' }
                ] 
            },
            { 
                title: 'Legal y Ayuda', 
                links: [
                    { text: 'Testimonios', to: '/testimonials' },
                    { text: 'Política de Privacidad', to: '/privacy' },
                ] 
            },
            { 
                title: 'Servicios', 
                links: [
                    { text: 'Consulta de Diseño de Interiores', to: '/services/consultation' },
                    { text: 'Consultas de Color', to: '/services/color' },
                ] 
            },
        ];

        return (
            <div className="py-20 px-6" style={{ backgroundColor: customColors.fondoOscuro }}>
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-3xl font-bold mb-12" style={{ color: customColors.fondoClaro }}>Mapa del Sitio</h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-10">
                        {sitemapStructure.map((column, index) => (
                            <div key={index}>
                                <h4 className="text-xl font-bold mb-5 tracking-wide" style={{ color: customColors.acentoTerracota }}>{column.title}</h4>
                                <ul className="space-y-3">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link 
                                                to={link.to} 
                                                className="text-base transition duration-150 hover:text-white"
                                                style={{ color: customColors.fondoClaro, opacity: 0.8 }}
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // --- COMPONENTE PRINCIPAL RENDER ---
    return (
        <div className="antialiased font-sans" style={{ backgroundColor: customColors.fondoClaro }}>
            
            {/* BARRA DE NAVEGACIÓN (HEADER) */}
            <header className="fixed w-full z-30 shadow-2xl" style={{ backgroundColor: customColors.fondoOscuro, opacity: 0.98 }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link 
                            to="/" 
                            className="text-3xl font-extrabold tracking-widest transition duration-150"
                            style={{ color: customColors.fondoClaro }}
                        >
                            STUDIO MATE
                        </Link>
                        
                        <nav className="hidden md:flex space-x-10">
                            {[
                                { text: 'Inicio', to: '/' },
                                { text: 'Portafolio', to: '/portafolio' }, 
                                { text: 'Nosotras', to: '/about-us' },
                                { text: 'Contacto', to: '/contact-us' }
                            ].map((item, index) => (
                                <Link key={index} 
                                    to={item.to} 
                                    className="text-base font-semibold uppercase tracking-wider transition duration-150 hover:text-white"
                                    style={{ color: customColors.fondoClaro, opacity: 0.9 }}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </nav>
                        
                        <Link 
                            to="/agendar"
                            className="hidden md:inline-block py-3 px-8 text-base font-bold rounded-lg transition duration-150 hover:bg-opacity-90 shadow-xl"
                            style={{ 
                                backgroundColor: customColors.acentoTerracota, 
                                color: customColors.fondoClaro 
                            }}
                        >
                            Agendar Cita
                        </Link>

                    </div>
                </div>
            </header>

            <main>
                <IntroSection />
                <MissionVisionSection />
                <TeamAndCtaSection />
            </main>

            {/* Inclusión del Footer final */}
            <SitemapSection />
            <footer className="py-6 text-center text-sm" style={{ backgroundColor: customColors.fondoOscuro, color: customColors.fondoClaro, opacity: 0.5 }}>
                © {new Date().getFullYear()} Estudio Mate. Todos los derechos reservados. | Diseñado con pasión en Latinoamérica.
            </footer>
        </div>
    );
};

export default Nosotras;