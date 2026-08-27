"use client"

import { useState } from 'react'
import { Menu, X, Clock, MapPin, Phone, Mail, ChevronRight, Star, Users, Flame, Wine, Calendar, ChefHat, Heart, Utensils, Pizza, Leaf, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

const colors = {
  terracotta: '#C4704F',
  cream: '#F5EBE0',
  olive: '#6B7B4C',
  espresso: '#3D2E2A',
  taupe: '#A89B8C'
}

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nuestra Historia', href: '#about' },
  { name: 'Menú', href: '#menu' },
  { name: 'Especialidades', href: '#specials' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Reservaciones', href: '#booking' },
  { name: 'Contacto', href: '#contact' }
]

const menuCategories = [
  { name: 'Antipasti', icon: Leaf, description: 'Entrantes tradicionales italianos' },
  { name: 'Pasta Fresca', icon: Utensils, description: 'Hecha a mano cada día' },
  { name: 'Pizza Napolitana', icon: Pizza, description: 'Horno de leña auténtico' },
  { name: 'Secondi', icon: Flame, description: 'Carnes y pescados selectos' },
  { name: 'Dolci', icon: Heart, description: 'Postres de la casa' },
  { name: 'Vini', icon: Wine, description: 'Selección de vinos italianos' }
]

const featuredDishes = [
  { name: 'Tagliatelle al Tartufo', category: 'Pasta Fresca', description: 'Pasta fresca cortada a mano con trufa negra de temporada, mantequilla dorada y parmigiano reggiano 24 meses' },
  { name: 'Pizza Margherita DOC', category: 'Pizza Napolitana', description: 'Tomate San Marzano DOP, mozzarella di bufala campana, albahaca fresca y aceite de oliva virgen extra' },
  { name: 'Ossobuco alla Milanese', category: 'Secondi', description: 'Jarrete de ternera braseado lentamente con gremolata de limón, servido con risotto azafrán' },
  { name: 'Tiramisù della Nonna', category: 'Dolci', description: 'Receta familiar de tres generaciones con mascarpone artesanal y café espresso italiano' }
]

const timelineEvents = [
  { year: '1987', title: 'El Comienzo', description: 'La familia abre las puertas de Trattoria Napoli con las recetas de la abuela napolitana' },
  { year: '1995', title: 'El Horno de Leña', description: 'Instalamos nuestro horno napolitano tradicional, importado directamente de Italia' },
  { year: '2005', title: 'Segunda Generación', description: 'Los hijos toman las riendas, manteniendo viva la tradición familiar' },
  { year: '2015', title: 'Reconocimiento', description: 'Reconocidos como referente de la auténtica cocina italiana en la ciudad' },
  { year: '2024', title: 'Tradición Viva', description: 'Más de 35 años compartiendo la pasión por la cocina italiana auténtica' }
]

const testimonials = [
  { text: 'La pasta más auténtica que he probado fuera de Italia. Cada bocado me transporta a la casa de mi abuela en Nápoles.', role: 'Cliente desde 2010' },
  { text: 'El ambiente es mágico, como entrar en una verdadera trattoria romana. La pizza es simplemente perfecta.', role: 'Crítico gastronómico' },
  { text: 'Celebramos todas nuestras ocasiones especiales aquí. El servicio es impecable y la comida, extraordinaria.', role: 'Cliente frecuente' },
  { text: 'Los mejores antipasti de la ciudad. El carpaccio de pulpo es una obra de arte culinaria.', role: 'Chef profesional' }
]

const galleryItems = [
  { title: 'Pasta Artesanal', category: 'Cocina' },
  { title: 'Nuestro Horno', category: 'Tradición' },
  { title: 'Ingredientes Frescos', category: 'Calidad' },
  { title: 'Ambiente Íntimo', category: 'Espacio' },
  { title: 'Pizza Napolitana', category: 'Especialidad' },
  { title: 'Mesa Familiar', category: 'Experiencia' },
  { title: 'Vinos Selectos', category: 'Carta' },
  { title: 'Postres Caseros', category: 'Dolci' }
]

const processSteps = [
  { step: '01', title: 'Ingredientes Selectos', description: 'Importamos directamente de Italia: tomates San Marzano, mozzarella di bufala, aceite de oliva toscano y más' },
  { step: '02', title: 'Preparación Artesanal', description: 'Nuestra pasta se amasa y corta a mano cada mañana, siguiendo las técnicas tradicionales napolitanas' },
  { step: '03', title: 'Cocción Perfecta', description: 'Horno de leña a 450°C para pizzas, brasas lentas para estofados, todo en su punto exacto' },
  { step: '04', title: 'Servicio con Alma', description: 'Cada plato se presenta con el cariño y la atención que merece nuestra tradición familiar' }
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main style={{ backgroundColor: colors.cream, color: colors.espresso }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: `${colors.cream}f0`, backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.terracotta }}>
                <ChefHat className="w-6 h-6" style={{ color: colors.cream }} />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>Trattoria Napoli</span>
                <p className="text-xs tracking-widest uppercase" style={{ color: colors.taupe }}>Dal 1987</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'Source Sans Pro, sans-serif', color: colors.espresso }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="px-6 py-3 text-sm font-semibold tracking-wide transition-all hover:scale-105"
                style={{ backgroundColor: colors.terracotta, color: colors.cream, fontFamily: 'Source Sans Pro, sans-serif' }}
              >
                Reservar Mesa
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: colors.espresso }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: colors.espresso }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ backgroundColor: colors.cream }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium border-b"
                style={{ borderColor: `${colors.taupe}30`, color: colors.espresso }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-4 mt-4 font-semibold"
              style={{ backgroundColor: colors.terracotta, color: colors.cream }}
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.espresso} 0%, ${colors.terracotta}90 50%, ${colors.olive}80 100%)`
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${colors.terracotta} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colors.olive} 0%, transparent 50%)`
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-10" style={{ border: `2px solid ${colors.cream}`, borderRadius: '50%' }} />
        <div className="absolute bottom-32 right-20 w-48 h-48 opacity-10" style={{ border: `2px solid ${colors.cream}`, borderRadius: '50%' }} />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6" style={{ color: `${colors.cream}cc`, fontFamily: 'Source Sans Pro, sans-serif' }}>
            Auténtica Cocina Italiana desde 1987
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}>
            Trattoria<br />
            <span style={{ color: colors.terracotta, textShadow: `2px 2px 0 ${colors.cream}30` }}>Napoli</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: `${colors.cream}dd`, fontFamily: 'Source Sans Pro, sans-serif' }}>
            Donde la tradición familiar se encuentra con la pasión por la auténtica cocina napolitana. 
            Pasta fresca, pizza de horno de leña y el calor de una verdadera trattoria italiana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="px-10 py-4 text-lg font-semibold tracking-wide transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.terracotta, color: colors.cream }}
            >
              Reservar Mesa
              <Calendar className="w-5 h-5" />
            </a>
            <a
              href="#menu"
              className="px-10 py-4 text-lg font-semibold tracking-wide transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: 'transparent', color: colors.cream, border: `2px solid ${colors.cream}` }}
            >
              Ver Menú
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: `${colors.cream}60` }}>
            <div className="w-2 h-3 rounded-full" style={{ backgroundColor: colors.cream }} />
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}>
                Nuestra Historia
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>
                Tres Generaciones de Pasión Italiana
              </h2>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: colors.taupe, fontFamily: 'Source Sans Pro, sans-serif' }}>
                <p>
                  En 1987, una familia napolitana llegó con un sueño: compartir los sabores auténticos de su tierra natal. 
                  Con las recetas de la abuela cuidadosamente guardadas y el corazón lleno de nostalgia por los aromas de Nápoles, 
                  abrimos las puertas de nuestra pequeña trattoria.
                </p>
                <p>
                  Hoy, más de tres décadas después, seguimos amasando la pasta a mano cada mañana, 
                  manteniendo vivo el horno de leña que importamos de Italia, y recibiendo a cada comensal 
                  como un miembro más de nuestra familia.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <div className="text-center">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: colors.terracotta }}>35+</span>
                  <p className="text-sm mt-1" style={{ color: colors.taupe }}>Años de tradición</p>
                </div>
                <div className="w-px h-16" style={{ backgroundColor: colors.taupe }} />
                <div className="text-center">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: colors.terracotta }}>3</span>
                  <p className="text-sm mt-1" style={{ color: colors.taupe }}>Generaciones</p>
                </div>
                <div className="w-px h-16" style={{ backgroundColor: colors.taupe }} />
                <div className="text-center">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: colors.terracotta }}>∞</span>
                  <p className="text-sm mt-1" style={{ color: colors.taupe }}>Amor por Italia</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div
                className="aspect-[4/5] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${colors.terracotta}40, ${colors.olive}30)`,
                  borderRadius: '0 60px 0 60px'
                }}
              >
                <div className="text-center p-8">
                  <Heart className="w-20 h-20 mx-auto mb-6" style={{ color: colors.terracotta }} />
                  <p className="text-2xl font-serif italic" style={{ color: colors.espresso, fontFamily: 'Playfair Display, serif' }}>
                    &ldquo;La cocina es el corazón del hogar&rdquo;
                  </p>
                  <p className="mt-4 text-sm tracking-wider" style={{ color: colors.taupe }}>— Proverbio italiano</p>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 flex items-center justify-center"
                style={{ backgroundColor: colors.olive }}
              >
                <ChefHat className="w-12 h-12" style={{ color: colors.cream }} />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>
              Nuestra Trayectoria
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px hidden lg:block" style={{ backgroundColor: `${colors.terracotta}30` }} />
              <div className="space-y-12 lg:space-y-0">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className={`lg:flex items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <div className="p-6 transition-all hover:shadow-lg" style={{ backgroundColor: `${colors.cream}`, border: `1px solid ${colors.taupe}30` }}>
                        <span className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: colors.terracotta }}>{event.year}</span>
                        <h4 className="text-xl font-semibold mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>{event.title}</h4>
                        <p style={{ color: colors.taupe, fontFamily: 'Source Sans Pro, sans-serif' }}>{event.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{ backgroundColor: colors.terracotta, top: `${index * 25 + 5}%` }} />
                    <div className="lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section id="menu" className="py-24 lg:py-32" style={{ backgroundColor: colors.espresso }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}>
              Nuestra Carta
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}>
              Sabores de Nápoles
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `${colors.cream}aa`, fontFamily: 'Source Sans Pro, sans-serif' }}>
              Cada plato cuenta una historia de tradición, pasión y los mejores ingredientes importados de Italia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((category, index) => (
              <a
                key={category.name}
                href="#specials"
                className="group relative p-8 transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ 
                  backgroundColor: index % 2 === 0 ? `${colors.terracotta}15` : `${colors.olive}15`,
                  border: `1px solid ${colors.taupe}30`
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-8 -translate-y-8">
                  <category.icon className="w-full h-full" style={{ color: colors.cream }} />
                </div>
                <category.icon className="w-10 h-10 mb-4" style={{ color: colors.terracotta }} />
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}>
                  {category.name}
                </h3>
                <p className="mb-4" style={{ color: `${colors.cream}88`, fontFamily: 'Source Sans Pro, sans-serif' }}>
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all" style={{ color: colors.terracotta }}>
                  Explorar <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="specials" className="py-24 lg:py-32" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}>
                Del Chef
              </p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>
                Platos Especiales
              </h2>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all"
              style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Ver carta completa <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: colors.cream, border: `1px solid ${colors.taupe}30` }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div
                    className="lg:w-2/5 aspect-square lg:aspect-auto flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.terracotta}${index % 2 === 0 ? '60' : '40'}, ${colors.olive}${index % 2 === 0 ? '40' : '60'})`
                    }}
                  >
                    <Utensils className="w-16 h-16" style={{ color: colors.cream }} />
                  </div>
                  <div className="lg:w-3/5 p-8">
                    <span className="text-xs tracking-wider uppercase" style={{ color: colors.olive, fontFamily: 'Source Sans Pro, sans-serif' }}>
                      {dish.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-4" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>
                      {dish.name}
                    </h3>
                    <p className="leading-relaxed" style={{ color: colors.taupe, fontFamily: 'Source Sans Pro, sans-serif' }}>
                      {dish.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm" style={{ color: colors.taupe }}>Consultar precio</span>
                      <span className="flex items-center gap-1" style={{ color: colors.terracotta }}>
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Special Banner */}
          <div
            className="mt-16 p-8 lg:p-12 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.olive} 0%, ${colors.espresso} 100%)`
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-24 h-24 rounded-full" style={{ border: `2px solid ${colors.cream}` }} />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full" style={{ border: `2px solid ${colors.cream}` }} />
            </div>
            <div className="relative z-10">
              <Flame className="w-12 h-12 mx-auto mb-4" style={{ color: colors.terracotta }} />
              <p className="text-sm tracking-[0.3em] uppercase mb-2" style={{ color: `${colors.cream}aa` }}>Especial del Día</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}>
                Pregunta a nuestro equipo por las creaciones de hoy
              </h3>
              <p style={{ color: `${colors.cream}cc`, fontFamily: 'Source Sans Pro, sans-serif' }}>
                Cada día preparamos platos especiales con los ingredientes más frescos del mercado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section id="gallery" className="py-24 lg:py-32" style={{ backgroundColor: `${colors.taupe}15` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}>
              Galería
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>
              Momentos en Trattoria
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Todos', 'Cocina', 'Espacio', 'Tradición'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-6 py-2 text-sm font-medium transition-all"
                style={{
                  backgroundColor: selectedCategory === cat ? colors.terracotta : 'transparent',
                  color: selectedCategory === cat ? colors.cream : colors.espresso,
                  border: `1px solid ${colors.terracotta}`
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index)