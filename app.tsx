import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X, Heart, Star, ArrowRight, Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Silk Evening Gown',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2NTE5MDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'NEW',
      rating: 5,
    },
    {
      id: 2,
      name: 'Luxury Cashmere Coat',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTExODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'BESTSELLER',
      rating: 5,
    },
    {
      id: 3,
      name: 'Glamorous Party Dress',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1660549887727-e10c8f6733b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBkcmVzcyUyMHdvbWFufGVufDF8fHx8MTc2NTIwOTI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'HOT',
      rating: 5,
    },
    {
      id: 4,
      name: 'Elegant Black Ensemble',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1658498613819-6f3ab24df253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBibGFja3xlbnwxfHx8fDE3NjUyMDkyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 5,
      name: 'Studio Fashion Collection',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1715541448446-3369e1cc0ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzdHVkaW98ZW58MXx8fHwxNzY1MTQ3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'LIMITED',
      rating: 5,
    },
    {
      id: 6,
      name: 'Sophisticated Style Set',
      price: '$1,199',
      image: 'https://images.unsplash.com/photo-1648065460033-5c59f2ef1d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjBzdHlsZXxlbnwxfHx8fDE3NjUyMDkyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
  ];

  const accessories = [
    {
      id: 7,
      name: 'Designer Heels',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1761110583261-3ea6f09f0699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhlZWxzJTIwbHV4dXJ5fGVufDF8fHx8MTc2NTIwOTI0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 8,
      name: 'Gold Jewelry Set',
      price: '$2,299',
      image: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjUxOTQ4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'EXCLUSIVE',
      rating: 5,
    },
    {
      id: 9,
      name: 'Fashion Sunglasses',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1620743364130-8a1669f00b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3VuZ2xhc3NlcyUyMHdvbWFufGVufDF8fHx8MTc2NTIwOTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 10,
      name: 'Leather Handbag',
      price: '$1,499',
      image: 'https://images.unsplash.com/photo-1634474588488-9107cd14e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaGFuZGJhZyUyMGxlYXRoZXJ8ZW58MXx8fHwxNzY1MjA5MjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'TRENDING',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <h1 className="tracking-[0.3em] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                NEXUS FASHION
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['New Arrivals', 'Collections', 'Dresses', 'Accessories', 'Sale'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-pink-300 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-pink-300 transition-colors hidden md:block"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-pink-300 transition-colors hidden md:block"
              >
                <User className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-pink-300 transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              </motion.button>
              <button
                className="md:hidden text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.nav
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4 py-4 border-t border-white/10">
              {['New Arrivals', 'Collections', 'Dresses', 'Accessories', 'Sale'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-pink-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1734794070127-3ef2bad0510e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGZhc2hpb258ZW58MXx8fHwxNzY1MjA5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-pink-300" />
              <p className="tracking-[0.3em] text-sm text-pink-300">SPRING COLLECTION 2025</p>
              <Sparkles className="w-5 h-5 text-pink-300" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-6xl md:text-8xl bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent"
            >
              Luxury Redefined
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-10 text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Discover exclusive designer pieces that celebrate your elegance and sophistication
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 hover:from-pink-600 hover:to-purple-600 transition-all inline-flex items-center space-x-3 group"
            >
              <span className="tracking-wider">EXPLORE COLLECTION</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-5xl bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Featured Collection
            </h2>
            <p className="text-gray-400 text-lg">Handpicked luxury pieces for the discerning woman</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {product.badge && (
                    <motion.span
                      initial={{ x: -100 }}
                      whileInView={{ x: 0 }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 text-xs tracking-widest"
                    >
                      {product.badge}
                    </motion.span>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                  >
                    <Heart className="w-5 h-5 text-pink-300" />
                  </motion.button>

                  <motion.button
                    onClick={() => setCartCount(cartCount + 1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 opacity-0 group-hover:opacity-100 transition-all hover:from-pink-600 hover:to-purple-600"
                  >
                    ADD TO CART
                  </motion.button>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                  <h4 className="mb-1 text-gray-200 group-hover:text-pink-300 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xl text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section className="relative h-96 overflow-hidden">
        <motion.div
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NTE5MjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: scrollY * 0.5,
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div>
            <h3 className="mb-4 text-5xl bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Signature Fragrances
            </h3>
            <p className="text-gray-300 text-xl mb-8">Complete your luxury experience</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-pink-400 text-pink-300 px-10 py-3 hover:bg-pink-400 hover:text-white transition-all"
            >
              DISCOVER MORE
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Accessories */}
      <section className="py-24 bg-gradient-to-b from-black via-pink-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-5xl bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Luxury Accessories
            </h2>
            <p className="text-gray-400 text-lg">Elevate every outfit with exquisite details</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group relative"
              >
                <div className="relative aspect-square overflow-hidden mb-4 rounded-lg bg-gradient-to-br from-pink-900/20 to-purple-900/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs tracking-wider">
                      {item.badge}
                    </span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <motion.button
                      onClick={() => setCartCount(cartCount + 1)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-black py-2 text-sm tracking-wider hover:bg-pink-400 hover:text-white transition-colors"
                    >
                      QUICK ADD
                    </motion.button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-1 text-gray-200">{item.name}</h4>
                  <p className="text-pink-400">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '✨',
                title: 'Authentic Luxury',
                description: 'Every piece is carefully curated and verified for authenticity',
              },
              {
                icon: '🔒',
                title: 'Secure Shopping',
                description: 'Shop with confidence using our encrypted payment system',
              },
              {
                icon: '🚚',
                title: 'Free Shipping',
                description: 'Complimentary worldwide shipping on orders over $500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="mb-2 text-pink-300">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-6" />
            <h3 className="mb-4 text-4xl bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Join Our VIP List
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get exclusive access to new collections, private sales, and styling tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 focus:outline-none focus:border-pink-400 text-white placeholder-gray-500 backdrop-blur-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 hover:from-pink-600 hover:to-purple-600 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-purple-950/20 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h3 className="tracking-[0.3em] mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                NEXUS FASHION
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Luxury fashion for the modern woman. Elegance redefined.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="mb-4 text-pink-300">Shop</h4>
              <ul className="space-y-2 text-sm">
                {['New Arrivals', 'Dresses', 'Accessories', 'Sale'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="mb-4 text-pink-300">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="mb-4 text-pink-300">About</h4>
              <ul className="space-y-2 text-sm">
                {['Our Story', 'Sustainability', 'Careers', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Nexus Fashion. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
