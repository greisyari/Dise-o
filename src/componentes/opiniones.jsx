import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, updateProfile, signOut } from "firebase/auth"; 
import { Link, useNavigate } from 'react-router-dom';

// Datos de ejemplo iniciales (Mantenidos)
const opinionesTarotIniciales = [
    { id: 1, usuario: "Luana", puntuacion: 5, comentario: "Esta pagina es muy sofisticada.", fecha: "2024-09-15", ownerId: 'default' },
    { id: 2, usuario: "katshnn", puntuacion: 5, comentario: "Ame la pagina es muy interactiva y su propuesta personalizada es muy buena ameeee", fecha: "2024-09-10", ownerId: 'default' },
    { id: 3, usuario: "jackie_23", puntuacion: 4, comentario: "La propuesta fue muy precisa sobre mi estilo de vida actual. Me ayudó a tomar decisiones importantes.", fecha: "2024-09-20", ownerId: 'default' },
    { id: 4, usuario: "Neutro_Observador", puntuacion: 3, comentario: "Está bien, cumple con lo prometido pero no me sorprendió.", fecha: "2024-10-01", ownerId: 'default' },
];

// --- StarRating (Sin cambios) ---
export const StarRating = ({ rating, size = 'w-5 h-5', onRatingChange, isEditable = false }) => {
    const totalStars = 5;
    const handleStarClick = (newRating) => {
        if (isEditable && onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div className="flex space-x-0.5">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= rating;
                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleStarClick(starValue)}
                        disabled={!isEditable}
                        className={isEditable ? "hover:scale-110 transition duration-150" : ""}
                    >
                        <svg
                            className={`${size} ${isFilled ? 'text-amber-500' : 'text-stone-400'} ${isEditable ? 'cursor-pointer' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.691l1.07-3.292z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
};

// --- TarotReviewCard (Sin cambios) ---
export const TarotReviewCard = ({ review, currentUser, onEdit, onDelete }) => {
    const isOwner = currentUser && currentUser.uid === review.ownerId;

    return (
        <div className="bg-stone-100 p-6 pt-10 rounded-xl shadow-lg transition duration-300 border-l-4 border-amber-800 hover:shadow-amber-800/20 hover:scale-[1.02] flex flex-col justify-between relative">
            
            {/* Acciones de Edición/Eliminación */}
            {isOwner && (
                <div className="absolute top-2 right-2 flex space-x-1">
                    <button
                        onClick={() => onEdit(review)}
                        title="Editar Reseña"
                        className="p-1 text-xs rounded-full text-amber-800 hover:bg-stone-200 transition"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM14 5l1 1-7 7-1-1 7-7z"></path><path d="M5 18a1 1 0 01-1-1v-4a1 1 0 112 0v4h4a1 1 0 110 2H5z"></path></svg>
                    </button>
                    <button
                        onClick={() => onDelete(review.id)}
                        title="Eliminar Reseña"
                        className="p-1 text-xs rounded-full text-red-600 hover:bg-stone-200 transition"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            )}
            
            {/* Contenido de la reseña */}
            <div>
                <div className="flex justify-between items-start mb-3">
                    <p className="text-lg font-semibold text-stone-900">{review.usuario || 'Anónimo'}</p> 
                    <p className="text-sm text-stone-500 hidden sm:block">{review.fecha}</p>
                </div>
                
                <div className="mb-4">
                    <StarRating rating={review.puntuacion} />
                </div>
                
                <p className="text-stone-700 italic pl-3 mb-4 text-sm border-l-2 border-amber-800/50"> 
                    "{review.comentario}"
                </p>
            </div>
        </div>
    );
};

// --- Modales (Sin cambios) ---

const EditProfileModal = ({ isOpen, onClose, user, onUpdate }) => {
    const [newDisplayName, setNewDisplayName] = useState(user?.displayName || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUpdate = async () => {
        if (!newDisplayName.trim()) {
            setError("El nombre no puede estar vacío.");
            return;
        }
        setLoading(true);
        setError('');
        await onUpdate(newDisplayName.trim());
        setLoading(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-stone-900 bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300">
            <div className="bg-stone-100 p-8 rounded-xl shadow-2xl w-full max-w-sm border-t-4 border-amber-800 space-y-4 transform transition-transform duration-300 scale-100 text-stone-900">
                <h3 className="text-2xl font-bold text-amber-800">Editar Perfil</h3>
                
                {error && <p className="text-sm text-red-600">{error}</p>}

                <input
                    type="text"
                    value={newDisplayName}
                    onChange={(e) => setNewDisplayName(e.target.value)}
                    placeholder="Nuevo Nombre"
                    className="w-full px-4 py-3 bg-amber-200 border border-stone-300 rounded-lg text-stone-900 focus:ring-amber-800 focus:border-amber-800 transition"
                    disabled={loading}
                />
                
                <div className="flex justify-end space-x-3 mt-4">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 text-sm font-semibold text-stone-700 border border-stone-400 rounded-lg hover:bg-stone-300 transition"
                        disabled={loading}
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={handleUpdate} 
                        className="px-4 py-2 text-sm font-semibold text-stone-50 bg-amber-800 rounded-lg hover:bg-amber-700 transition"
                        disabled={loading}
                    >
                        {loading ? 'Actualizando...' : 'Guardar Cambios'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const EditReviewModal = ({ isOpen, review, onClose, onSave }) => {
    const [editText, setEditText] = useState(review?.comentario || '');
    const [editRating, setEditRating] = useState(review?.puntuacion || 5);
    const [error, setError] = useState('');

    useEffect(() => {
        setEditText(review?.comentario || '');
        setEditRating(review?.puntuacion || 5);
        setError('');
    }, [review]);

    const handleSave = () => {
        if (editText.length < 10) {
            setError("Tu reseña debe tener al menos 10 caracteres.");
            return;
        }
        if (review) {
            onSave(review.id, editText, editRating);
            onClose();
        }
    };

    if (!isOpen || !review) return null;

    return (
        <div className="fixed inset-0 bg-stone-900 bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300">
            <div className="bg-stone-100 p-8 rounded-xl shadow-2xl w-full max-w-lg border-t-4 border-amber-800 space-y-4 transform transition-transform duration-300 scale-100 text-stone-900">
                <h3 className="text-2xl font-bold text-amber-800">Editar Reseña</h3>
                
                {error && <p className="text-sm text-red-600">{error}</p>}

                <div className="flex items-center space-x-3">
                    <label className="text-stone-700">Puntuación:</label>
                    <StarRating rating={editRating} size="w-7 h-7" isEditable={true} onRatingChange={setEditRating} />
                </div>
                
                <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="Edita tu opinión aquí..."
                    rows="5"
                    className="w-full px-4 py-3 bg-amber-200 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:ring-amber-800 focus:border-amber-800 transition duration-200"
                    required
                ></textarea>
                
                <div className="flex justify-end space-x-3 mt-4">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 text-sm font-semibold text-stone-700 border border-stone-400 rounded-lg hover:bg-stone-300 transition"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={handleSave} 
                        className="px-4 py-2 text-sm font-semibold text-stone-50 bg-amber-800 rounded-lg hover:bg-amber-700 transition"
                    >
                        Guardar Edición
                    </button>
                </div>
            </div>
        </div>
    );
};

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, reviewId }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-stone-900 bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300">
            <div className="bg-stone-100 p-8 rounded-xl shadow-2xl w-full max-w-sm border-t-4 border-red-600 space-y-6 transform transition-transform duration-300 scale-100 text-stone-900">
                <h3 className="text-2xl font-bold text-red-600">⚠️ Confirmar Eliminación</h3>
                <p className="text-stone-700">
                    ¿Estás absolutamente seguro de que deseas eliminar esta reseña? Esta acción no se puede deshacer.
                </p>
                
                <div className="flex justify-end space-x-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 text-sm font-semibold text-stone-700 border border-stone-400 rounded-lg hover:bg-stone-300 transition"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={() => { onConfirm(reviewId); onClose(); }} 
                        className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                    >
                        Eliminar Reseña
                    </button>
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// Componente Principal: Dashboard de Opiniones con Fondo Terracota (Amber-800)
// ----------------------------------------------------------------------
function Opiniones({ initialReviews = opinionesTarotIniciales }) {
    const auth = getAuth();
    const navigate = useNavigate();
    const [reviews, setReviews] = useState(initialReviews);
    const [currentUser, setCurrentUser] = useState(null);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [newReviewText, setNewReviewText] = useState('');
    const [newReviewRating, setNewReviewRating] = useState(5);
    const [reviewError, setReviewError] = useState('');
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [reviewIdToDelete, setReviewIdToDelete] = useState(null);

    // [Manejadores de estado de autenticación y CRUD, se mantienen]
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    const handleUpdateProfile = async (newDisplayName) => { /* ... lógica ... */ 
        if (!currentUser) return;
        try {
            await updateProfile(currentUser, { displayName: newDisplayName });
            setCurrentUser({ ...currentUser, displayName: newDisplayName }); 
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
        }
    };
    
    const handlePostReview = (e) => { /* ... lógica ... */ 
        e.preventDefault();
        setReviewError('');
        if (!currentUser || newReviewText.length < 10) {
            setReviewError(currentUser ? "Tu reseña debe tener al menos 10 caracteres." : "Debes iniciar sesión para publicar una reseña.");
            return;
        }
        
        const newReview = {
            id: Date.now(),
            ownerId: currentUser.uid,
            usuario: currentUser.displayName || currentUser.email.split('@')[0],
            puntuacion: newReviewRating,
            comentario: newReviewText,
            fecha: new Date().toISOString().split('T')[0],
        };
        setReviews([newReview, ...reviews]); 
        setNewReviewText('');
        setNewReviewRating(5);
    };

    const handleDeleteReviewStart = (reviewId) => {
        setReviewIdToDelete(reviewId);
        setIsConfirmModalOpen(true);
    }

    const handleDeleteReviewConfirm = (reviewId) => {
        setReviews(reviews.filter(r => r.id !== reviewId));
        setReviewIdToDelete(null);
    };

    const handleEditStart = (review) => {
        setReviewToEdit(review);
        setIsReviewModalOpen(true);
    };

    const handleEditSave = (reviewId, newComment, newRating) => {
        setReviews(reviews.map(r => 
            r.id === reviewId ? { ...r, comentario: newComment, puntuacion: newRating, fecha: new Date().toISOString().split('T')[0] } : r
        ));
        setReviewToEdit(null);
        setIsReviewModalOpen(false);
    };

    // Cálculo del promedio y totales (Mantenido)
    const totalPuntuaciones = reviews.reduce((sum, review) => sum + review.puntuacion, 0);
    const promedio = (reviews.length > 0 ? (totalPuntuaciones / reviews.length) : 0).toFixed(1);
    const positivas = reviews.filter(r => r.puntuacion >= 4).length; 
    const neutras = reviews.filter(r => r.puntuacion === 3).length;
    const negativas = reviews.filter(r => r.puntuacion <= 2).length; 
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        // CAMBIO PRINCIPAL: Fondo Terracota/Ladrillo (bg-amber-800)
        <div className="min-h-screen bg-amber-800 text-stone-900 p-4 md:p-12 font-sans">
            
            {/* Modales */}
            <EditProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} user={currentUser} onUpdate={handleUpdateProfile} />
            {reviewToEdit && <EditReviewModal isOpen={isReviewModalOpen} review={reviewToEdit} onClose={() => setIsReviewModalOpen(false)} onSave={handleEditSave} />}
            <ConfirmDeleteModal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)} onConfirm={handleDeleteReviewConfirm} reviewId={reviewIdToDelete} />


            {/* --- CONTENEDOR PRINCIPAL --- */}
            <div className="max-w-7xl mx-auto">
                
                {/* Cabecera y Resumen (Tarjeta Elevada) */}
                {/* Fondo de tarjeta: bg-stone-100 (Beige Claro), Borde: amber-800, Texto: text-stone-900 */}
                <div className="bg-stone-100 p-8 rounded-xl shadow-2xl mb-12 border-l-8 border-amber-800 shadow-amber-800/20">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-amber-800">
                            Dashboard de Experiencia
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            {currentUser ? (
                                <>
                                    <button 
                                        onClick={() => setIsProfileModalOpen(true)}
                                        className="px-4 py-2 text-sm font-semibold rounded-full bg-stone-300 text-amber-800 hover:bg-stone-400 transition duration-200 hover:scale-[1.05]"
                                    >
                                        ✏️ Perfil
                                    </button>
                                    <button 
                                        onClick={handleLogout}
                                        className="px-4 py-2 text-sm font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-200 hover:scale-[1.05]"
                                    >
                                        🚪 Salir
                                    </button>
                                </>
                            ) : (
                                <Link 
                                    to="/login"
                                    className="px-6 py-2 text-base font-semibold rounded-full bg-amber-800 text-stone-50 hover:bg-amber-700 transition duration-200 hover:scale-105"
                                >
                                    Inicia Sesión para Administrar
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Resumen Global */}
                    <div className="flex justify-between items-center border-t border-stone-300 pt-6">
                        <div className="text-left">
                            <p className="text-xl font-bold text-stone-900">
                                Promedio Global: <span className="text-4xl text-amber-800">{promedio}</span> / 5.0
                            </p>
                            <p className="text-sm text-stone-600">
                                {reviews.length} Reseñas Analizadas
                            </p>
                        </div>
                        <div className="flex space-x-6 text-sm font-medium">
                            <p className="text-green-600">🟢 {positivas} Positivas</p>
                            <p className="text-yellow-700">🟡 {neutras} Neutras</p>
                            <p className="text-red-600">🔴 {negativas} Negativas</p>
                        </div>
                    </div>
                </div>

                {/* --- GRID DE CONTENIDO (Formulario + Listado) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* COLUMNA 1: Publicar Nueva Reseña (Sticky) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-10 h-min">
                        {/* Fondo de tarjeta: bg-stone-100, Borde: amber-800 */}
                        <div className="bg-stone-100 p-6 rounded-xl shadow-lg border-t-4 border-amber-800">
                            <h3 className="text-xl font-bold text-stone-900 mb-4 border-b pb-2 border-stone-300">
                                Publicar Tu Opinión
                            </h3>
                            
                            {currentUser ? (
                                <form onSubmit={handlePostReview} className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <label className="text-stone-700">Puntuación:</label>
                                        <StarRating 
                                            rating={newReviewRating} 
                                            size="w-6 h-6" 
                                            isEditable={true} 
                                            onRatingChange={setNewReviewRating} 
                                        />
                                    </div>

                                    {reviewError && <p className="text-sm text-red-600">{reviewError}</p>}

                                    <textarea
                                        value={newReviewText}
                                        onChange={(e) => setNewReviewText(e.target.value)}
                                        placeholder="Tu reseña profesional aquí..."
                                        rows="4"
                                        className="w-full px-4 py-3 bg-amber-200 border border-stone-300 rounded-md text-stone-900 placeholder-stone-500 focus:ring-amber-800 transition duration-200"
                                        required
                                    ></textarea>
                                    
                                    <button 
                                        type="submit"
                                        className="w-full py-2 font-bold text-stone-50 rounded-md bg-amber-800 hover:bg-amber-700 transition duration-200 hover:scale-[1.01]"
                                    >
                                        Enviar Reseña
                                    </button>
                                </form>
                            ) : (
                                <p className="text-stone-600 text-sm">
                                    <Link to="/login" className="text-amber-800 font-semibold hover:text-amber-700">Inicia sesión</Link> para compartir tu experiencia.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* COLUMNA 2/3: Listado de Opiniones */}
                    <div className="lg:col-span-2">
                        {/* Texto de encabezado ahora es blanco para contrastar con el fondo oscuro */}
                        <h3 className="text-2xl font-bold text-stone-100 mb-6"> 
                            Opiniones de la Comunidad ({reviews.length})
                        </h3>
                        <div className="space-y-6">
                            {reviews.map(review => (
                                <TarotReviewCard 
                                    key={review.id} 
                                    review={review} 
                                    currentUser={currentUser}
                                    onEdit={handleEditStart}
                                    onDelete={handleDeleteReviewStart}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
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
}

export default Opiniones;