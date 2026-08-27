"use client"

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, ChefHat, Utensils, Wine, Users, Calendar, Star, ArrowRight, Leaf, Flame, Heart, Instagram, Facebook, Twitter } from 'lucide-react'

const colors = {
  terracotta: '#D4A574',
  cream: '#FAF6F1',
  olive: '#6B7B3C',
  espresso: '#3D2B1F',
  walnut: '#8B7355'
}

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nuestra Historia', href: '#historia' },
  { name: 'Carta', href: '#carta' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Reservas', href: '#reservas' },
  { name: 'Contacto', href: '#contacto' }
]

const menuCategories = [
  {
    name: 'Antipasti',
    icon: Leaf,
    description: 'Entrantes tradicionales para abrir el apetito',
    items: ['Bruschetta al Pomodoro', 'Carpaccio di Manzo', 'Burrata con Prosciutto', 'Calamari Fritti']
  },
  {
    name: 'Pasta Fresca',
    icon: ChefHat,
    description: 'Elaborada diariamente a mano con recetas familiares',
    items: ['Tagliatelle al Ragù', 'Ravioli di Ricotta', 'Pappardelle ai Funghi', 'Spaghetti alle Vongole']
  },
  {
    name: 'Pizza Napolitana',
    icon: Flame,
    description: 'Horneada en horno de leña a más de 400 grados',
    items: ['Margherita DOP', 'Quattro Formaggi', 'Diavola', 'Napoli con Anchoas']
  },
  {
    name: 'Secondi Piatti',
    icon: Utensils,
    description: 'Carnes y pescados de primera calidad',
    items: ['Ossobuco alla Milanese', 'Saltimbocca alla Romana', 'Branzino al Forno', 'Pollo alla Parmigiana']
  },
  {
    name: 'Dolci',
    icon: Heart,
    description: 'Postres caseros para un final perfecto',
    items: ['Tiramisù della Nonna', 'Panna Cotta', 'Cannoli Siciliani', 'Affogato al Caffè']
  },
  {
    name: 'Vinos',
    icon: Wine,
    description: 'Selección de las mejores regiones italianas',
    items: ['Chianti Classico', 'Barolo', 'Prosecco', 'Amarone della Valpolicella']
  }
]

const featuredDishes = [
  {
    name: 'Tagliatelle al Tartufo Nero',
    description: 'Pasta fresca con trufa negra de temporada, mantequilla de granja y parmigiano reggiano 24 meses',
    tag: 'Especialidad de la Casa'
  },
  {
    name: 'Pizza Margherita DOP',
    description: 'Masa madre de 72 horas, tomate San Marzano, mozzarella di bufala campana y albahaca fresca',
    tag: 'Receta Original'
  },
  {
    name: 'Ossobuco alla Milanese',
    description: 'Jarrete de ternera braseado lentamente con gremolata, servido con risotto allo zafferano',
    tag: 'Plato Tradicional'
  },
  {
    name: 'Tiramisù della Nonna',
    description: 'Receta familiar desde 1987, con mascarpone artesanal, café espresso y cacao puro',
    tag: 'Postre Estrella'
  }
]

const galleryItems = [
  { title: 'Pasta Fresca del Día', aspect: 'tall' },
  { title: 'Pizza Margherita', aspect: 'wide' },
  { title: 'Interior del Restaurante', aspect: 'square' },
  { title: 'Tiramisù Artesanal', aspect: 'square' },
  { title: 'Cocina en Acción', aspect: 'tall' },
  { title: 'Mesa Familiar', aspect: 'wide' }
]

const processSteps = [
  {
    step: '01',
    title: 'Ingredientes Frescos',
    description: 'Cada mañana recibimos productos frescos de proveedores locales y directamente importados de Italia'
  },
  {
    step: '02',
    title: 'Elaboración Artesanal',
    description: 'Nuestra pasta se amasa a mano cada día siguiendo las técnicas transmitidas por tres generaciones'
  },
  {
    step: '03',
    title: 'Cocción Perfecta',
    description: 'Horno de leña para pizzas y cocción lenta para ragús, respetando los tiempos tradicionales'
  },
  {
    step: '04',
    title: 'Servicio con Amor',
    description: 'Cada plato se presenta con el cariño y la dedicación que merece nuestra tradición familiar'
  }
]

const testimonials = [
  {
    text: 'La mejor pasta fresca que he probado fuera de Italia. El ambiente te transporta directamente a una trattoria napolitana.',
    author: 'Cliente desde 2005',
    rating: 5
  },
  {
    text: 'Llevamos celebrando nuestros aniversarios aquí desde hace 15 años. La calidad y el servicio son siempre impecables.',
    author: 'Familia habitual',
    rating: 5
  },
  {
    text: 'El tiramisù de la nonna es simplemente espectacular. Una receta que se nota que viene del corazón.',
    author: 'Amante de la cocina italiana',
    rating: 5
  }
]

const timelineEvents = [
  { year: '1987', title: 'Apertura', description: 'Una familia napolitana abre las puertas de su sueño' },
  { year: '1995', title: 'Horno de Leña', description: 'Instalamos nuestro primer horno tradicional importado de Nápoles' },
  { year: '2005', title: 'Segunda Generación', description: 'Los hijos toman el relevo manteniendo las recetas originales' },
  { year: '2015', title: 'Reconocimiento', description: 'Reconocidos como referente de la cocina italiana auténtica' },
  { year: 'Hoy', title: 'Tradición Viva', description: 'Seguimos elaborando cada plato con la misma pasión del primer día' }
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <main style={{ backgroundColor: colors.cream, color: colors.espresso }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: `${colors.cream}f0`, backdropFilter: 'blur(10px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#inicio" className="flex flex-col">
              <span className="font-serif text-2xl tracking-wide" style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}>
                Trattoria Napoli
              </span>
              <span className="text-xs tracking-widest uppercase" style={{ color: colors.walnut }}>
                Dal 1987
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wide hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'Source Sans Pro, sans-serif', color: colors.espresso }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservas"
                className="px-6 py-3 text-sm tracking-wide transition-all hover:scale-105"
                style={{ backgroundColor: colors.terracotta, color: colors.cream, fontFamily: 'Source Sans Pro, sans-serif' }}
              >
                Reservar Mesa
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ backgroundColor: colors.cream }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-lg border-b transition-colors"
                style={{ borderColor: `${colors.terracotta}30`, fontFamily: 'Source Sans Pro, sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservas"
              className="block text-center py-4 mt-4"
              style={{ backgroundColor: colors.terracotta, color: colors.cream }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.espresso} 0%, ${colors.walnut} 50%, ${colors.terracotta} 100%)`
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAF6F1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}
          >
            Auténtica Cocina Italiana desde 1987
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}
          >
            Trattoria Napoli
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: `${colors.cream}cc`, fontFamily: 'Source Sans Pro, sans-serif' }}
          >
            Pasta fresca artesanal y pizza napolitana horneada en leña. 
            Una tradición familiar que celebra los sabores auténticos de Italia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservas"
              className="px-10 py-4 text-lg tracking-wide transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{ backgroundColor: colors.terracotta, color: colors.cream, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Reservar Mesa
              <ArrowRight size={20} />
            </a>
            <a
              href="#carta"
              className="px-10 py-4 text-lg tracking-wide border-2 transition-all hover:bg-white hover:bg-opacity-10"
              style={{ borderColor: colors.cream, color: colors.cream, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Ver Carta
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: `${colors.cream}50` }}>
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: colors.cream }} />
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section id="historia" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image placeholder */}
            <div className="relative">
              <div
                className="aspect-[4/5] relative"
                style={{
                  background: `linear-gradient(145deg, ${colors.terracotta}, ${colors.walnut})`,
                  borderRadius: '4px'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center" style={{ color: colors.cream }}>
                    <Users size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-sm tracking-widest uppercase opacity-70">Familia Fundadora</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div
                className="absolute -bottom-8 -right-8 w-48 h-48 -z-10"
                style={{
                  background: `repeating-linear-gradient(45deg, ${colors.olive}20, ${colors.olive}20 10px, transparent 10px, transparent 20px)`
                }}
              />
            </div>

            {/* Right side - Content */}
            <div>
              <p
                className="text-sm tracking-[0.2em] uppercase mb-4"
                style={{ color: colors.olive, fontFamily: 'Source Sans Pro, sans-serif' }}
              >
                Nuestra Historia
              </p>
              <h2
                className="text-4xl md:text-5xl mb-8 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}
              >
                Tres generaciones de pasión por la cocina italiana
              </h2>
              <div className="space-y-6" style={{ fontFamily: 'Source Sans Pro, sans-serif', color: colors.walnut }}>
                <p className="text-lg leading-relaxed">
                  En 1987, una familia napolitana llegó con un sueño: compartir los sabores auténticos de su tierra natal. Con recetas heredadas de la nonna y el amor por la cocina tradicional, abrieron las puertas de Trattoria Napoli.
                </p>
                <p className="text-lg leading-relaxed">
                  Hoy, mantenemos viva esa tradición. Cada mañana amasamos nuestra pasta a mano, seleccionamos los mejores ingredientes importados de Italia y preparamos cada plato como si fuera para nuestra propia familia.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-12 space-y-4">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.terracotta, color: colors.cream }}
                    >
                      <span className="font-serif text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {event.year}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: colors.espresso }}>{event.title}</h4>
                      <p className="text-sm" style={{ color: colors.walnut }}>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section id="carta" className="py-24 lg:py-32" style={{ backgroundColor: colors.espresso }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Nuestra Carta
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}
            >
              Sabores de Italia
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: `${colors.cream}aa`, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Cada plato cuenta una historia, cada ingrediente es seleccionado con cuidado
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 flex items-center gap-2 transition-all ${activeCategory === index ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                  style={{
                    backgroundColor: activeCategory === index ? colors.terracotta : 'transparent',
                    color: colors.cream,
                    border: `1px solid ${activeCategory === index ? colors.terracotta : colors.walnut}`,
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                >
                  <IconComponent size={18} />
                  {category.name}
                </button>
              )
            })}
          </div>

          {/* Active category display */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className="aspect-square flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${colors.walnut}, ${colors.terracotta}80)`,
                borderRadius: '4px'
              }}
            >
              {(() => {
                const IconComponent = menuCategories[activeCategory].icon
                return <IconComponent size={120} style={{ color: `${colors.cream}50` }} />
              })()}
            </div>

            <div>
              <h3
                className="text-3xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: colors.cream }}
              >
                {menuCategories[activeCategory].name}
              </h3>
              <p
                className="text-lg mb-8"
                style={{ color: `${colors.cream}aa`, fontFamily: 'Source Sans Pro, sans-serif' }}
              >
                {menuCategories[activeCategory].description}
              </p>
              <ul className="space-y-4">
                {menuCategories[activeCategory].items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-3 border-b"
                    style={{ borderColor: `${colors.walnut}50` }}
                  >
                    <span style={{ color: colors.cream, fontFamily: 'Source Sans Pro, sans-serif' }}>
                      {item}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: colors.terracotta, fontFamily: 'Source Sans Pro, sans-serif' }}
                    >
                      Consultar precio
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="especialidades" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: colors.olive, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Del Día
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}
            >
              Platos Especiales
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: colors.walnut, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Las joyas de nuestra cocina, preparadas con los ingredientes más frescos de temporada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden transition-all hover:scale-[1.02]"
                style={{ backgroundColor: colors.cream, border: `1px solid ${colors.terracotta}30` }}
              >
                {/* Image placeholder */}
                <div
                  className="h-64"
                  style={{
                    background: `linear-gradient(${135 + index * 30}deg, ${colors.terracotta}40, ${colors.olive}30)`
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    <Utensils size={48} style={{ color: colors.walnut }} className="opacity-30" />
                  </div>
                </div>

                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-4 py-2"
                  style={{ backgroundColor: colors.terracotta, color: colors.cream }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    {dish.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}
                  >
                    {dish.name}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: colors.walnut, fontFamily: 'Source Sans Pro, sans-serif' }}
                  >
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Masonry Section */}
      <section id="galeria" className="py-24 lg:py-32" style={{ backgroundColor: `${colors.terracotta}15` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: colors.olive, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Momentos
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}
            >
              Nuestra Galería
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${item.aspect === 'tall' ? 'row-span-2' : item.aspect === 'wide' ? 'col-span-2' : ''}`}
                style={{
                  background: `linear-gradient(${index * 45}deg, ${colors.terracotta}, ${colors.walnut})`,
                  minHeight: item.aspect === 'tall' ? '400px' : '200px'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Utensils size={32} style={{ color: `${colors.cream}50` }} className="mx-auto mb-2" />
                    <p
                      className="text-sm tracking-wide"
                      style={{ color: `${colors.cream}90`, fontFamily: 'Source Sans Pro, sans-serif' }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: `${colors.espresso}80` }}
                >
                  <span style={{ color: colors.cream, fontFamily: 'Playfair Display, serif' }} className="text-xl">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: colors.olive, fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Nuestro Proceso
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}
            >
              Del Corazón a Tu Mesa
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: colors.terracotta, color: colors.cream }}
                >
                  <span className="text-2xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: colors.espresso }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: colors.walnut, fontFamily: 'Source Sans Pro, sans-serif' }}
                >
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-full">
                    <ArrowRight size={24} style={{ color: colors.terracotta }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: colors.espresso }}>
        <div className="max-w-4xl