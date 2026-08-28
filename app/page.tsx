"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChefHat,
  Wine,
  Utensils,
  Star,
  Calendar,
  Users,
  ArrowRight,
  Instagram,
  Facebook,
  Heart,
  Leaf,
  Flame,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const colors = {
  terracotta: "#C4613A",
  cream: "#F5EDE4",
  olive: "#6B7F59",
  darkBrown: "#3D2E2A",
  taupe: "#9A8B7A",
};

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#about" },
  { name: "Carta", href: "#menu" },
  { name: "Especialidades", href: "#specials" },
  { name: "Galería", href: "#gallery" },
  { name: "Reservar", href: "#booking" },
  { name: "Contacto", href: "#contact" },
];

const menuCategories = [
  {
    name: "Antipasti",
    icon: Leaf,
    description: "Entrantes tradicionales italianos preparados con ingredientes frescos del mercado",
    items: ["Bruschetta al Pomodoro", "Carpaccio di Manzo", "Burrata con Prosciutto", "Calamari Fritti"],
  },
  {
    name: "Pasta Fresca",
    icon: ChefHat,
    description: "Pasta artesanal elaborada cada día en nuestra cocina siguiendo recetas familiares",
    items: ["Tagliatelle al Ragù", "Ravioli di Ricotta e Spinaci", "Pappardelle ai Funghi Porcini", "Gnocchi alla Sorrentina"],
  },
  {
    name: "Pizza Napoletana",
    icon: Flame,
    description: "Auténtica pizza napolitana cocida en horno de leña a 450 grados",
    items: ["Margherita DOP", "Diavola", "Quattro Formaggi", "Napoli con Anchoas"],
  },
  {
    name: "Secondi Piatti",
    icon: Utensils,
    description: "Platos principales de carne y pescado preparados según la tradición italiana",
    items: ["Ossobuco alla Milanese", "Saltimbocca alla Romana", "Branzino al Forno", "Pollo alla Parmigiana"],
  },
  {
    name: "Dolci",
    icon: Heart,
    description: "Postres caseros elaborados con las recetas de la nonna",
    items: ["Tiramisù della Casa", "Panna Cotta", "Cannoli Siciliani", "Semifreddo al Limoncello"],
  },
  {
    name: "Vini",
    icon: Wine,
    description: "Selección de vinos italianos de las mejores regiones vinícolas",
    items: ["Chianti Classico", "Barolo", "Montepulciano", "Prosecco"],
  },
];

const featuredDishes = [
  {
    name: "Tagliatelle al Ragù della Nonna",
    description: "Nuestra pasta insignia, elaborada con la receta original de 1987. Tagliatelle fresco con ragú de carne cocinado lentamente durante 6 horas.",
    tag: "Especialidad de la Casa",
  },
  {
    name: "Pizza Margherita DOP",
    description: "Auténtica pizza napolitana con tomate San Marzano, mozzarella di bufala campana y albahaca fresca. Cocida en nuestro horno de leña importado de Nápoles.",
    tag: "Clásico Napolitano",
  },
  {
    name: "Ossobuco alla Milanese",
    description: "Jarrete de ternera estofado lentamente en vino blanco con gremolata, servido sobre risotto alla milanese con azafrán.",
    tag: "Tradición Lombarda",
  },
  {
    name: "Tiramisù della Casa",
    description: "El postre italiano por excelencia, preparado cada mañana con mascarpone cremoso, café espresso y cacao amargo. Receta familiar desde 1987.",
    tag: "Dolce Vita",
  },
];

const testimonials = [
  {
    text: "Como si hubieras viajado a Italia sin salir de la ciudad. La pasta fresca es incomparable y el ambiente te transporta directamente a una trattoria romana.",
    author: "Cliente desde 2005",
    rating: 5,
  },
  {
    text: "Tres generaciones de mi familia han celebrado aquí nuestros momentos más especiales. La calidad y el cariño en cada plato no han cambiado en todos estos años.",
    author: "Cliente desde 1992",
    rating: 5,
  },
  {
    text: "La mejor pizza napolitana que he probado fuera de Nápoles. El horno de leña marca la diferencia. Un lugar con alma y tradición auténtica.",
    author: "Cliente frecuente",
    rating: 5,
  },
  {
    text: "El tiramisù me recordó al que preparaba mi abuela italiana. Cada bocado es un viaje nostálgico a la verdadera cocina casera italiana.",
    author: "Cliente desde 2010",
    rating: 5,
  },
];

const galleryItems = [
  { title: "Pasta Fresca del Día", aspect: "tall" },
  { title: "Nuestro Horno de Leña", aspect: "wide" },
  { title: "Pizza Margherita", aspect: "square" },
  { title: "Interior del Restaurante", aspect: "tall" },
  { title: "Tiramisù Casero", aspect: "square" },
  { title: "Mesa con Vista", aspect: "wide" },
  { title: "Vinos Selectos", aspect: "square" },
  { title: "Detalle de Decoración", aspect: "square" },
];

const timeline = [
  { year: "1987", event: "Apertura de Trattoria Napoli por la primera generación de la familia" },
  { year: "1995", event: "Instalación del horno de leña tradicional importado de Nápoles" },
  { year: "2005", event: "La segunda generación toma las riendas de la cocina" },
  { year: "2015", event: "Renovación del local manteniendo la esencia original" },
  { year: "2024", event: "La tercera generación continúa el legado familiar" },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por su solicitud de reserva. Nos pondremos en contacto pronto para confirmar.");
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main style={{ backgroundColor: colors.cream, color: colors.darkBrown }}>
      {/* Sticky Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: `${colors.cream}f5`, backdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.terracotta }}
              >
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="text-xl font-bold tracking-wide"
                  style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
                >
                  Trattoria Napoli
                </h1>
                <p className="text-xs tracking-widest uppercase" style={{ color: colors.taupe }}>
                  Dal 1987
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wide hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.darkBrown }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="px-6 py-3 text-sm tracking-wider uppercase transition-all hover:scale-105"
                style={{
                  backgroundColor: colors.terracotta,
                  color: colors.cream,
                  fontFamily: "Source Sans Pro, sans-serif",
                }}
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
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: colors.darkBrown }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: colors.darkBrown }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: colors.cream }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-lg border-b"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: colors.darkBrown,
                  borderColor: `${colors.taupe}30`,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="block text-center py-4 mt-4"
              style={{ backgroundColor: colors.terracotta, color: colors.cream }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Full */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${colors.darkBrown} 0%, ${colors.terracotta}90 50%, ${colors.olive}80 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5EDE4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="inline-block px-6 py-2 mb-8 border"
            style={{ borderColor: `${colors.cream}50` }}
          >
            <span
              className="text-sm tracking-[0.3em] uppercase"
              style={{ color: colors.cream, fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Tradición Familiar desde 1987
            </span>
          </div>
          
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif", color: colors.cream }}
          >
            Trattoria
            <br />
            <span style={{ color: colors.cream, opacity: 0.9 }}>Napoli</span>
          </h1>
          
          <p
            className="text-xl sm:text-2xl mb-4 italic"
            style={{ fontFamily: "Playfair Display, serif", color: `${colors.cream}cc` }}
          >
            Auténtica Cocina Italiana
          </p>
          
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "Source Sans Pro, sans-serif", color: `${colors.cream}99` }}
          >
            Pasta fresca artesanal y pizza napolitana cocida en horno de leña.
            Tres generaciones dedicadas a traer los sabores de Italia a tu mesa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg tracking-wider transition-all hover:scale-105"
              style={{
                backgroundColor: colors.cream,
                color: colors.terracotta,
                fontFamily: "Source Sans Pro, sans-serif",
              }}
            >
              <Calendar className="w-5 h-5" />
              Reservar Mesa
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg tracking-wider border-2 transition-all hover:bg-white/10"
              style={{
                borderColor: colors.cream,
                color: colors.cream,
                fontFamily: "Source Sans Pro, sans-serif",
              }}
            >
              Ver Carta
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: `linear-gradient(to top, ${colors.cream}, transparent)`,
          }}
        />
      </section>

      {/* About Split */}
      <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div
                className="aspect-[4/5] flex items-center justify-center"
                style={{
                  background: `linear-gradient(145deg, ${colors.terracotta}30, ${colors.olive}20)`,
                }}
              >
                <div className="text-center p-8">
                  <ChefHat className="w-20 h-20 mx-auto mb-4" style={{ color: colors.terracotta }} />
                  <p
                    className="text-lg italic"
                    style={{ fontFamily: "Playfair Display, serif", color: colors.taupe }}
                  >
                    Interior de nuestra trattoria
                  </p>
                </div>
              </div>
              
              {/* Floating Card */}
              <div
                className="absolute -bottom-6 -right-6 p-6 shadow-xl max-w-xs hidden lg:block"
                style={{ backgroundColor: colors.darkBrown }}
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif", color: colors.terracotta }}
                >
                  37+
                </p>
                <p style={{ color: colors.cream, fontFamily: "Source Sans Pro, sans-serif" }}>
                  Años de tradición familiar
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span
                className="text-sm tracking-[0.2em] uppercase"
                style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Nuestra Historia
              </span>
              
              <h2
                className="text-4xl lg:text-5xl font-bold mt-4 mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
              >
                Una Tradición que
                <br />
                <span style={{ color: colors.terracotta }}>Nació del Amor</span>
              </h2>
              
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
              >
                En 1987, nuestra familia abrió las puertas de Trattoria Napoli con un sueño:
                compartir los auténticos sabores de la cocina italiana que habíamos heredado
                de generación en generación.
              </p>
              
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
              >
                Hoy, tres generaciones después, seguimos amasando la pasta cada mañana,
                encendiendo el horno de leña al atardecer y recibiendo a nuestros clientes
                como si fueran familia. Porque en nuestra trattoria, cada mesa es una
                extensión de nuestro hogar.
              </p>

              {/* Timeline */}
              <div className="space-y-4 mb-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-16 h-8 flex items-center justify-center"
                      style={{ backgroundColor: `${colors.terracotta}20` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: colors.darkBrown, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all"
                style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Descubre nuestra carta
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section id="menu" className="py-24 lg:py-32" style={{ backgroundColor: colors.darkBrown }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
            >
              La Carta
            </span>
            
            <h2
              className="text-4xl lg:text-5xl font-bold mt-4 mb-6"
              style={{ fontFamily: "Playfair Display, serif", color: colors.cream }}
            >
              Sabores de Italia
            </h2>
            
            <p
              className="text-lg"
              style={{ fontFamily: "Source Sans Pro, sans-serif", color: `${colors.cream}99` }}
            >
              Cada plato cuenta una historia. Ingredientes frescos, recetas ancestrales
              y el amor de tres generaciones en cada preparación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group p-8 transition-all duration-300 hover:translate-y-[-4px]"
                  style={{
                    backgroundColor: `${colors.cream}08`,
                    borderLeft: `3px solid ${colors.terracotta}`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${colors.terracotta}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: colors.terracotta }} />
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "Playfair Display, serif", color: colors.cream }}
                    >
                      {category.name}
                    </h3>
                  </div>
                  
                  <p
                    className="text-sm mb-6"
                    style={{ fontFamily: "Source Sans Pro, sans-serif", color: `${colors.cream}80` }}
                  >
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: colors.cream, fontFamily: "Source Sans Pro, sans-serif" }}
                      >
                        <span style={{ color: colors.terracotta }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#booking"
              className="inline-flex items-center gap-3 px-10 py-4 text-lg tracking-wider transition-all hover:scale-105"
              style={{
                backgroundColor: colors.terracotta,
                color: colors.cream,
                fontFamily: "Source Sans Pro, sans-serif",
              }}
            >
              <Calendar className="w-5 h-5" />
              Reservar y Degustar
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="specials" className="py-24 lg:py-32" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span
                className="text-sm tracking-[0.2em] uppercase"
                style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Recomendaciones del Chef
              </span>
              
              <h2
                className="text-4xl lg:text-5xl font-bold mt-4"
                style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
              >
                Platos Destacados
              </h2>
            </div>
            
            <p
              className="text-lg max-w-md mt-4 lg:mt-0"
              style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
            >
              Los favoritos de nuestros clientes y las joyas de nuestra carta que no puedes dejar de probar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ backgroundColor: `${colors.darkBrown}08` }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Placeholder */}
                  <div
                    className="lg:w-2/5 aspect-square lg:aspect-auto flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.terracotta}40, ${colors.olive}30)`,
                    }}
                  >
                    <Utensils className="w-16 h-16" style={{ color: `${colors.cream}80` }} />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-3/5 p-8">
                    <span
                      className="inline-block px-3 py-1 text-xs tracking-wider uppercase mb-4"
                      style={{
                        backgroundColor: colors.terracotta,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    >
                      {dish.tag}
                    </span>
                    
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
                    >
                      {dish.name}
                    </h3>
                    
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
                    >
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section id="gallery" className="py-24 lg:py-32" style={{ backgroundColor: `${colors.taupe}15` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Galería
            </span>
            
            <h2
              className="text-4xl lg:text-5xl font-bold mt-4 mb-6"
              style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
            >
              Momentos en Trattoria Napoli
            </h2>
            
            <p
              className="text-lg"
              style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
            >
              Un vistazo a nuestra cocina, nuestros platos y el ambiente que nos hace únicos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => {
              const aspectClass =
                item.aspect === "tall"
                  ? "row-span-2"
                  : item.aspect === "wide"
                  ? "col-span-2"
                  : "";
              
              return (
                <div
                  key={index}
                  className={`${aspectClass} group relative overflow-hidden cursor-pointer`}
                  style={{
                    background: `linear-gradient(${45 + index * 20}deg, ${colors.terracotta}${30 + index * 5}, ${colors.olive}${20 + index * 3})`,
                    minHeight: item.aspect === "tall" ? "400px" : "200px",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p
                      className="text-center text-sm"
                      style={{ fontFamily: "Playfair Display, serif", color: `${colors.cream}90` }}
                    >
                      {item.title}
                    </p>
                  </div>

                  <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Opiniones
            </span>

            <h2
              className="text-4xl lg:text-5xl font-bold mt-4"
              style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
            >
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="relative">
            <div
              className="p-8 lg:p-12 text-center"
              style={{ backgroundColor: `${colors.darkBrown}08` }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: colors.terracotta }} />
                ))}
              </div>

              <p
                className="text-xl lg:text-2xl italic mb-8 leading-relaxed"
                style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
              >
                "{testimonials[currentTestimonial].text}"
              </p>

              <p
                className="text-sm tracking-wider uppercase"
                style={{ color: colors.taupe, fontFamily: "Source Sans Pro, sans-serif" }}
              >
                — {testimonials[currentTestimonial].author}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 transition-all hover:scale-110"
                style={{ backgroundColor: colors.terracotta }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" style={{ color: colors.cream }} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 transition-all hover:scale-110"
                style={{ backgroundColor: colors.terracotta }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" style={{ color: colors.cream }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 lg:py-32" style={{ backgroundColor: colors.darkBrown }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span
                className="text-sm tracking-[0.2em] uppercase"
                style={{ color: colors.terracotta, fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Reservaciones
              </span>

              <h2
                className="text-4xl lg:text-5xl font-bold mt-4 mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: colors.cream }}
              >
                Reserve Su Mesa
              </h2>

              <p
                className="text-lg mb-8"
                style={{ fontFamily: "Source Sans Pro, sans-serif", color: `${colors.cream}99` }}
              >
                Le recomendamos reservar con antelación, especialmente para fines de semana
                y fechas especiales. Estaremos encantados de recibirle.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: `${colors.terracotta}30` }}
                  >
                    <Phone className="w-5 h-5" style={{ color: colors.terracotta }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: `${colors.cream}80` }}>Teléfono</p>
                    <p style={{ color: colors.cream, fontFamily: "Source Sans Pro, sans-serif" }}>
                      +34 91 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: `${colors.terracotta}30` }}
                  >
                    <Clock className="w-5 h-5" style={{ color: colors.terracotta }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: `${colors.cream}80` }}>Horario</p>
                    <p style={{ color: colors.cream, fontFamily: "Source Sans Pro, sans-serif" }}>
                      Mar-Dom: 13:00-16:00 / 20:00-23:30
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: `${colors.terracotta}30` }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: colors.terracotta }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: `${colors.cream}80` }}>Dirección</p>
                    <p style={{ color: colors.cream, fontFamily: "Source Sans Pro, sans-serif" }}>
                      Calle Mayor 42, Madrid
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-8 lg:p-10"
              style={{ backgroundColor: `${colors.cream}08` }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-0 outline-none"
                      style={{
                        backgroundColor: `${colors.cream}10`,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-0 outline-none"
                      style={{
                        backgroundColor: `${colors.cream}10`,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-0 outline-none"
                      style={{
                        backgroundColor: `${colors.cream}10`,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Comensales
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border-0 outline-none"
                      style={{
                        backgroundColor: `${colors.cream}10`,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num} style={{ backgroundColor: colors.darkBrown }}>
                          {num} {num === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                      <option value="9+" style={{ backgroundColor: colors.darkBrown }}>9+ personas</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Fecha
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-0 outline-none"
                      style={{
                        backgroundColor: `${colors.cream}10`,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-2"
                      style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Hora
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-0 outline-none"
                      style={{
                        backgroundColor: `${colors.cream}10`,
                        color: colors.cream,
                        fontFamily: "Source Sans Pro, sans-serif",
                      }}
                    >
                      <option value="" style={{ backgroundColor: colors.darkBrown }}>Seleccione hora</option>
                      {["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"].map((time) => (
                        <option key={time} value={time} style={{ backgroundColor: colors.darkBrown }}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm mb-2"
                    style={{ color: `${colors.cream}80`, fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full px-4 py-3 border-0 outline-none resize-none"
                    style={{
                      backgroundColor: `${colors.cream}10`,
                      color: colors.cream,
                      fontFamily: "Source Sans Pro, sans-serif",
                    }}
                    placeholder="Alergias, ocasión especial, preferencias..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-lg tracking-wider uppercase transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: colors.terracotta,
                    color: colors.cream,
                    fontFamily: "Source Sans Pro, sans-serif",
                  }}
                >
                  Solicitar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-16" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.terracotta }}
                >
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
                  >
                    Trattoria Napoli
                  </h3>
                  <p className="text-xs uppercase tracking-widest" style={{ color: colors.taupe }}>
                    Dal 1987
                  </p>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
              >
                Tradición italiana en cada plato. Tres generaciones dedicadas a compartir
                los auténticos sabores de nuestra tierra.
              </p>
            </div>

            <div>
              <h4
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
              >
                Contacto
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+34911234567"
                  className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: colors.taupe, fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  <Phone className="w-4 h-4" style={{ color: colors.terracotta }} />
                  +34 91 123 4567
                </a>
                <a
                  href="mailto:info@trattorianapoli.es"
                  className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: colors.taupe, fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  <Mail className="w-4 h-4" style={{ color: colors.terracotta }} />
                  info@trattorianapoli.es
                </a>
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: colors.taupe, fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  <MapPin className="w-4 h-4" style={{ color: colors.terracotta }} />
                  Calle Mayor 42, Madrid
                </div>
              </div>
            </div>

            <div>
              <h4
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
              >
                Horario
              </h4>
              <div
                className="space-y-2 text-sm"
                style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
              >
                <p>Lunes: Cerrado</p>
                <p>Martes - Viernes: 13:00 - 16:00</p>
                <p className="pl-[104px]">20:00 - 23:30</p>
                <p>Sábado - Domingo: 13:00 - 16:30</p>
                <p className="pl-[104px]">20:00 - 00:00</p>
              </div>
            </div>

            <div>
              <h4
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: colors.darkBrown }}
              >
                Síguenos
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: colors.terracotta }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" style={{ color: colors.cream }} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: colors.terracotta }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" style={{ color: colors.cream }} />
                </a>
              </div>
              <p
                className="mt-6 text-sm"
                style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
              >
                Comparte tu experiencia con
                <br />
                <span style={{ color: colors.terracotta }}>#TrattoriaNapoli</span>
              </p>
            </div>
          </div>

          <div
            className="pt-8 border-t text-center"
            style={{ borderColor: `${colors.taupe}30` }}
          >
            <p
              className="text-sm"
              style={{ fontFamily: "Source Sans Pro, sans-serif", color: colors.taupe }}
            >
              © {new Date().getFullYear()} Trattoria Napoli. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}