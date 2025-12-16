import React from 'react';

// --- CONFIGURACIÓN DE COLORES Y CONTENIDO (Constantes necesarias) ---
const PALETA = {
  bgLight: 'bg-stone-50',           // Beige muy claro
  primaryDark: 'bg-emerald-700',    // Verde oscuro mate (Botones, Accents)
  primaryLight: 'bg-emerald-300',   // Verde claro mate (Acentos secundarios)
  accentPink: 'text-pink-600',      // Rosado oscuro para un toque formal
  textDark: 'text-stone-800',       // Texto oscuro para contraste
  textLight: 'text-white',          // Texto claro para contraste
  borderLight: 'border-emerald-200' // Borde suave
};

const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Residencia Principal - Fase I', imageUrl: 'https://picsum.photos/400/300?random=10' },
  { id: 2, title: 'Oficinas Corporativas - Estilo Minimalista', imageUrl: 'https://picsum.photos/400/300?random=11' },
  { id: 3, title: 'Espacio de Colaboración - Nórdico', imageUrl: 'https://picsum.photos/400/300?random=12' },
  { id: 4, title: 'Ático de Lujo - Proyecto Integral', imageUrl: 'https://picsum.photos/400/300?random=13' },
];

function Separacion() {
  
  // --- Funciones anidadas para modularidad (pueden ser incluidas en el return) ---

  /**
   * Tarjeta individual para mostrar un proyecto.
   * Se define dentro de la función principal ya que no se usa "const".
   */
  function PortfolioItemCard({ item }) {
    return (
      <div key={item.id} className="group overflow-hidden rounded-lg shadow-xl relative cursor-pointer border border-gray-100">
          {/* Imagen con efecto de escala */}
          <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
          />
          {/* Overlay de Título */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold transform translate-y-2 group-hover:translate-y-0 transition duration-300 opacity-0 group-hover:opacity-100">
                  {item.title}
              </h3>
          </div>
      </div>
    );
  }

  /**
   * Tarjeta genérica para información (Misión, Visión, Materiales).
   * Se define dentro de la función principal.
   */
  function FeatureCard({ title, content, type = 'default', children }) {
      let classes = `p-8 rounded-xl shadow-lg`;
      let titleClasses = PALETA.textDark;
      let dividerClasses = `${PALETA.primaryDark}`;

      if (type === 'value') { // Para la Proposición de Valor
          classes = `${classes} ${PALETA.primaryDark} ${PALETA.textLight}`;
          titleClasses = 'text-white';
          dividerClasses = `${PALETA.primaryLight}`;
      } else { // Para Materiales, Misión/Visión
          classes = `${classes} bg-white border-t-4 border-emerald-400`;
          if (title.includes('Cromática')) { // Para Paleta de Colores
              classes = `${classes.replace('border-emerald-400', 'border-pink-400')}`;
          } else {
              classes = `${classes} bg-stone-50`;
          }
      }

      return (
          <div className={classes}>
              <h3 className={`text-2xl font-semibold mb-4 ${titleClasses}`}>{title}</h3>
              {/* Divisor solo para Misión/Visión/Valor */}
              {type !== 'material' && <div className={`w-12 h-1 ${dividerClasses} mb-4 rounded-full`}></div>}
              
              {content && <p className="text-gray-600 mb-6">{content}</p>}
              
              {/* Contenido complejo inyectado */}
              {children}
          </div>
      );
  }


  return (
    <div className="antialiased font-sans">
      <main>
        {/* --- SECCIÓN 2: PORTAFOLIO (FOTOS DE TRABAJO) --- */}
        <section id="portfolio" className={`py-20 md:py-32 bg-white`}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${PALETA.textDark}`}>
              Portafolio de Proyectos Destacados
            </h2>
            
            {/* Galería de Fotos - Usando PortfolioItemCard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PORTFOLIO_ITEMS.map((item) => (
                <PortfolioItemCard key={item.id} item={item} />
              ))}
            </div>
            
            <div className="text-center mt-12">
                <button 
                    className={`py-3 px-8 rounded-lg font-semibold border ${PALETA.primaryDark} ${PALETA.textLight} hover:bg-emerald-800 transition shadow-md`}
                >
                    Solicitar Acceso a Casos de Estudio
                </button>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 3: MATERIALES --- */}
        <section id="materials" className={`py-20 md:py-32 ${PALETA.bgLight}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${PALETA.textDark}`}>
              Nuestra Curación de Materiales Premium
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Tarjeta de Textiles y Revestimientos */}
              <FeatureCard 
                title="Textiles y Revestimientos" 
                content="Seleccionamos texturas de alto rendimiento y patrones geométricos sutiles. Priorizamos la durabilidad, resistencia al fuego y acabados mate orgánicos." 
                type="material"
              >
                <div className="h-40 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://picsum.photos/400/250?random=20')" }}></div>
              </FeatureCard>

              {/* Tarjeta de Acabados Duros */}
              <FeatureCard 
                title="Acabados Duros" 
                content="Maderas certificadas, microcementos y piedras naturales de origen local. Nos enfocamos en superficies de bajo mantenimiento y alta calidez visual."
                type="material"
              >
                <div className="h-40 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://picsum.photos/400/250?random=21')" }}></div>
              </FeatureCard>

              {/* Tarjeta de Paleta de Colores */}
              <FeatureCard 
                title="Armonía Cromática" 
                content="Definimos la atmósfera mediante paletas que inducen a la calma, utilizando variaciones de verde oliva, beige hueso y sutiles acentos en tonos terrosos."
                type="material"
              >
                {/* Swatches de Color */}
                <div className="flex space-x-2 mt-4 justify-between">
                  <div className={`w-1/4 h-16 rounded-lg ${PALETA.bgLight} border border-gray-300`} title="Beige Hueso"></div>
                  <div className={`w-1/4 h-16 rounded-lg bg-emerald-300`} title="Verde Suave"></div>
                  <div className={`w-1/4 h-16 rounded-lg bg-emerald-700`} title="Verde Oscuro"></div>
                  <div className={`w-1/4 h-16 rounded-lg bg-pink-300`} title="Terracota Suave"></div>
                </div>
                <p className={`text-xs mt-3 text-center ${PALETA.textDark}`}>Filosofía Minimalista y Ecológica.</p>
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: CONÓCENOS --- */}
        <section id="about" className={`py-20 md:py-32 bg-white`}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${PALETA.textDark}`}>
              Nuestro Compromiso Institucional
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* MISIÓN */}
              <FeatureCard 
                title="Misión" 
                content="Ofrecer consultoría integral en diseño, desarrollando soluciones innovadoras que superen las expectativas funcionales y estéticas de nuestros clientes, garantizando la optimización de recursos."
              />

              {/* VISIÓN */}
              <FeatureCard 
                title="Visión" 
                content="Posicionarnos como líder regional en arquitectura y diseño de interiores, distinguidos por nuestro rigor técnico, excelencia en ejecución y profundo respeto por la sostenibilidad ambiental."
              />

              {/* VALOR DIFERENCIAL */}
              <FeatureCard 
                title="Nuestra Proposición de Valor" 
                type="value"
              >
                <ul className="list-disc ml-5 space-y-2 text-sm opacity-90">
                  <li>**Sostenibilidad Certificada**: Empleamos materiales de bajo impacto y proveedores responsables.</li>
                  <li>**Gestión 360°**: Dirección de proyecto, desde el concepto hasta la entrega llave en mano.</li>
                  <li>**Enfoque Holístico**: Priorizamos el bienestar y la ergonomía del usuario final en cada diseño.</li>
                </ul>
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 5: PROCESO DE TRABAJO --- */}
        <section id="process" className={`py-20 md:py-32 ${PALETA.bgLight}`}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${PALETA.textDark}`}>
              Estructura de la Colaboración
            </h2>
            
            <ol className="relative border-l-4 border-emerald-200 ml-4 md:ml-0">
              
              {/* Paso 1 */}
              <li className="mb-10 ml-6">
                <span className={`flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full ${PALETA.primaryDark} ${PALETA.textLight} ring-8 ring-stone-50 font-bold`}>1</span>
                <h3 className={`flex items-center mb-1 text-xl font-semibold ${PALETA.textDark}`}>Análisis y Requerimientos</h3>
                <p className="text-base font-normal text-gray-600">
                  Fase de levantamiento de información detallada, estudio de viabilidad y definición de los objetivos funcionales y presupuestarios del proyecto.
                </p>
              </li>
              
              {/* Paso 2 */}
              <li className="mb-10 ml-6">
                <span className={`flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full ${PALETA.primaryDark} ${PALETA.textLight} ring-8 ring-stone-50 font-bold`}>2</span>
                <h3 className={`flex items-center mb-1 text-xl font-semibold ${PALETA.textDark}`}>Diseño Conceptual y Técnico</h3>
                <p className="text-base font-normal text-gray-600">
                  Generación de planos, modelado 3D, selección final de materiales y aprobación de documentación técnica para la fase de ejecución.
                </p>
              </li>
              
              {/* Paso 3 */}
              <li className="mb-10 ml-6">
                <span className={`flex absolute -left-4 justify-center items-center w-8 h-8 rounded-full ${PALETA.primaryDark} ${PALETA.textLight} ring-8 ring-stone-50 font-bold`}>3</span>
                <h3 className={`flex items-center mb-1 text-xl font-semibold ${PALETA.textDark}`}>Dirección y Entrega</h3>
                <p className="text-base font-normal text-gray-600">
                  Supervisión rigurosa de la obra, gestión de proveedores y control de calidad hasta la entrega final del proyecto, asegurando el cumplimiento de plazos.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* --- SECCIÓN 6: CONTACTO --- */}
        
      </main>
    </div>
  );
}

export default Separacion;