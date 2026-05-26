import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Leaf, Info, X, Wine } from 'lucide-react';
import { MenuItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import ImageWithFallback from './ImageWithFallback';

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: "Aigre-Doux Beetroot Rose",
    category: 'Appetizers',
    description: "Roasted organic heirloom chioggia beets shaped into a delicate rose, infused with absolute golden-leaf vinegar, dynamic walnut crisps, and wild thyme goats-milk curd.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    dietary: ["Organic", "Gluten-Free", "Vegetarian"],
    signature: true
  },
  {
    id: 'dish-2',
    name: "Diver Scallops & Aquatic Caviar",
    category: 'Appetizers',
    description: "Sashimi-grade cold diver scallops, Aquitaine black sturgeon caviar, pressed sea fennel oil, pickled ginger blossom, and a clarified yuzu-dashi broth.",
    price: "$38",
    image: "https://images.unsplash.com/photo-1532636875304-0c8fe1197e1d?auto=format&fit=crop&w=600&q=80",
    dietary: ["Seafood", "Keto"],
    signature: true
  },
  {
    id: 'dish-3',
    name: "Dry-Aged Imperial Wagyu Filet",
    category: 'Mains',
    description: "Hand-carved seared A5 Japanese Wagyu steak, caramelized baby shallots, slow bone-marrow glaze, shaved winter white truffle, and buttered asparagus spears.",
    price: "$98",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    dietary: ["Gluten-Free", "High Protein"],
    signature: true
  },
  {
    id: 'dish-4',
    name: "Saffron Sea Bass en Papillote",
    category: 'Mains',
    description: "Line-caught Pacific seabass slowly baked inside parchment paper, served with glazed seasonal vegetables, micro dill sprouts, and a premium saffron-lemongrass emulsion.",
    price: "$64",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    dietary: ["Seafood", "Gluten-Free"],
    signature: false
  },
  {
    id: 'dish-5',
    name: "Golden Or Noir Cocoa Dome",
    category: 'Desserts',
    description: "Ultra-luxurious 70% Valrhona dark chocolate dome layered with hazelnut praline sand, direct gold-leaf foil, and premium tableside salted espresso caramel pour.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegetarian"],
    signature: true
  },
  {
    id: 'dish-6',
    name: "Madagascar Vanilla Bean Royale",
    category: 'Desserts',
    description: "Decadent cream soufflé baked in orange blossom extract, centered with warm dark cherry compote, served with a scoop of house-churned organic raw honey gelato.",
    price: "$21",
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegetarian"],
    signature: false
  },
  {
    id: 'dish-7',
    name: "Imperial Smoked Truffle Negroni",
    category: 'Elixirs',
    description: "Artisanal botanic dry gin, wild cherry-bark infused vermouth, campari bitters fat-washed with aromatic white truffles, finished inside an active cherrywood-smoke dome.",
    price: "$19",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Organic"],
    signature: true
  },
  {
    id: 'dish-8',
    name: "The Emerald Green Elderflower Vesper",
    category: 'Elixirs',
    description: "Distilled floral craft vodka, Lillet Blanc, french chartreuse infusion, fresh organic standard key lime essence, and suspended microscopic silver luxury flakes.",
    price: "$20",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan"],
    signature: false
  }
];

export default function SignatureMenu() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Appetizers' | 'Mains' | 'Desserts' | 'Elixirs'>('All');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const isAr = language === 'ar';

  const categories: Array<'All' | 'Appetizers' | 'Mains' | 'Desserts' | 'Elixirs'> = [
    'All', 'Appetizers', 'Mains', 'Desserts', 'Elixirs'
  ];

  const filteredItems = selectedCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  // Return dynamic translations for dish id
  const getTranslatedDish = (item: MenuItem) => {
    const override = t.menu.dishes[item.id];
    return {
      ...item,
      name: override?.name || item.name,
      description: override?.description || item.description,
      platingDetails: override?.platingDetails || "Gourmet arrangement set on pre-chilled crystal porcelain, misted with light distillates."
    };
  };

  return (
    <section
      id="menu"
      className="py-24 md:py-32 bg-black text-gold-cream relative overflow-hidden text-left"
    >
      {/* Decorative Light Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mid-brown/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-cream/55 flex items-center justify-center space-x-2">
            <span className="h-[1px] w-6 bg-gold-cream/30" />
            <span>{isAr ? "اختيارات طهوية متميزة ونادرة" : "GASTRONOMIC SELECTIONS"}</span>
            <span className="h-[1px] w-6 bg-gold-cream/30" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mt-4 mb-5 text-gold-cream">
            {t.menu.sectionTitle}
          </h2>
          <p className="font-sans text-sm text-gold-cream/70 leading-relaxed">
            {t.menu.sectionSubtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div id="menu-categories" className={`flex items-center justify-center flex-wrap gap-2.5 md:gap-4 mb-16 border-b border-mid-brown/40 pb-6 max-w-3xl mx-auto ${
          isAr ? 'space-x-reverse' : ''
        }`}>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const label = t.menu.categories[category as keyof typeof t.menu.categories] || category;
            return (
              <button
                key={category}
                id={`cat-btn-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-[0.25em] transition-all rounded-none cursor-pointer ${
                  isActive 
                    ? 'bg-mid-brown text-gold-cream border border-gold-cream/35 shadow-md shadow-black/80 font-medium' 
                    : 'text-gold-cream/50 bg-[#1F150C]/40 hover:text-gold-cream border border-transparent hover:border-mid-brown'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const dish = getTranslatedDish(item);
              const translatedCategory = t.menu.categories[dish.category as keyof typeof t.menu.categories] || dish.category;
              return (
                <motion.div
                  key={dish.id}
                  id={`menu-card-${dish.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-accent-bg border border-mid-brown/30 hover:border-gold-cream/30 rounded-none overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg h-full"
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border-b border-mid-brown/25 rounded-none">
                    <ImageWithFallback
                      src={dish.image}
                      fallbackSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button
                        id={`info-btn-${dish.id}`}
                        onClick={() => setSelectedDish(dish)}
                        className={`w-full flex items-center justify-center space-x-2 py-2 bg-mid-brown text-gold-cream text-xs uppercase tracking-widest border border-gold-cream/20 hover:bg-gold-cream hover:text-black rounded-none transition-all cursor-pointer ${
                          isAr ? 'space-x-reverse' : ''
                        }`}
                      >
                        <Info className="h-4 w-4" />
                        <span>{isAr ? "تفاصيل التنسيق" : "Plating Specs"}</span>
                      </button>
                    </div>

                    {/* Signature Ribbon */}
                    {dish.signature && (
                      <div className={`absolute top-3 py-1 px-3 bg-mid-brown/95 backdrop-blur-md border border-gold-cream/40 rounded-none text-[9px] uppercase tracking-widest text-[#E1DCC9] font-medium flex items-center shadow-md ${
                        isAr ? 'left-3 space-x-reverse space-x-1' : 'right-3 space-x-1'
                      }`}>
                        <Star className="h-2.5 w-2.5 fill-current text-amber-400" />
                        <span>{t.menu.signatureLabel}</span>
                      </div>
                    )}
                    
                    {/* Category Stamp */}
                    <span className={`absolute top-3 py-1 px-2.5 bg-black/70 backdrop-blur-sm rounded-none text-[9px] font-mono uppercase tracking-[0.15em] text-gold-cream/70 border border-mid-brown/40 ${
                      isAr ? 'right-3' : 'left-3'
                    }`}>
                      {translatedCategory}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className={`p-5 flex-1 flex flex-col justify-between ${isAr ? 'text-right' : 'text-left'}`}>
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="font-serif text-lg text-gold-cream font-medium tracking-wide group-hover:text-gold-cream transition-colors">
                          {dish.name}
                        </h3>
                        <span className="font-serif text-lg text-gold-cream font-semibold pl-2">
                          {dish.price}
                        </span>
                      </div>
                      
                      <p className="font-sans text-xs text-gold-cream/65 leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
                        {dish.description}
                      </p>
                    </div>

                    {/* Dietary Info Tags & Interaction */}
                    <div className="pt-3 border-t border-mid-brown/20 flex items-center justify-between">
                      <div className={`flex flex-wrap gap-1.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                        {dish.dietary.slice(0, 2).map((diet) => (
                          <span 
                            key={diet} 
                            className="text-[9px] font-mono text-gold-cream/50 bg-black/40 py-0.5 px-2 rounded-none border border-mid-brown/20"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                      <button
                        id={`peek-link-${dish.id}`}
                        onClick={() => setSelectedDish(dish)}
                        className={`text-[10px] font-mono text-gold-cream/60 hover:text-gold-cream uppercase tracking-wider flex items-center group/btn cursor-pointer ${
                          isAr ? 'space-x-reverse space-x-1' : 'space-x-1'
                        }`}
                      >
                        <span>{isAr ? 'تفاصيل' : 'Peek'}</span>
                        <span className={`text-[8px] transform duration-200 ${
                          isAr ? 'group-hover/btn:-translate-x-1.5 rotate-180' : 'group-hover/btn:translate-x-1.5'
                        }`}>→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Chef's Curated Recommendation Message */}
        <div className={`mt-20 p-6 md:p-10 bg-accent-bg border-l-4 border border-l-gold-cream border-mid-brown/40 rounded-none max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden ${
          isAr ? 'md:flex-row-reverse text-right' : 'text-left'
        }`}>
          <div className="space-y-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#E1DCC9]/50">
              {t.menu.curatedTitle}
            </span>
            <p className="font-serif italic text-gold-cream text-lg">
              "{t.menu.curatedText}"
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest border border-gold-cream/15 py-2 px-4 rounded-none text-gold-cream/70 whitespace-nowrap bg-black/30">
            {t.menu.curatedButton}
          </p>
        </div>

      </div>

      {/* Detail Showcase Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            id="dish-detail-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              id="dish-detail-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`relative bg-accent-bg border border-mid-brown border-t-gold-cream border-t-2 max-w-2xl w-full rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row ${
                isAr ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Pane */}
              <div className="md:w-5/12 relative aspect-video md:aspect-auto bg-black border-r border-mid-brown/20">
                <ImageWithFallback
                  src={selectedDish.image}
                  fallbackSrc="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-accent-bg via-transparent to-transparent md:via-transparent`} />
              </div>

              {/* Text Specs Pane */}
              <div className={`p-6 md:w-7/12 flex flex-col justify-between ${isAr ? 'text-right' : 'text-left'}`}>
                <div>
                  {/* Top line with Close Button */}
                  <div className={`flex items-center justify-between mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold-cream/40">
                      {isAr ? "اختيار حصري" : `${selectedDish.category} Specialty`}
                    </span>
                    <button
                      id="close-dish-modal"
                      onClick={() => setSelectedDish(null)}
                      className="p-1 text-gold-cream/60 hover:text-gold-cream border border-mid-brown/40 hover:border-gold-cream/30 rounded-none cursor-pointer"
                      aria-label="Close Modal"
                    >
                      <X className="h-4.5 w-4.5" />
                    </button>
                  </div>

                  {/* Name and Price */}
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl text-gold-cream leading-tight mb-1 font-medium">
                      {selectedDish.name}
                    </h3>
                    <p className="font-serif text-xl text-gold-cream font-semibold">
                      {selectedDish.price}
                    </p>
                  </div>

                  {/* Fully detailed description */}
                  <p className="font-sans text-xs md:text-sm text-gold-cream/75 leading-relaxed mb-6">
                    {selectedDish.description}
                  </p>

                  {/* Details Block */}
                  <div className="space-y-3.5 mb-6">
                    <div className={`flex items-start space-x-2.5 text-xs text-gold-cream/80 ${isAr ? 'space-x-reverse' : ''}`}>
                      <Wine className="h-4 w-4 text-gold-cream/60 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-mono uppercase tracking-wider text-[10px] text-gold-cream/55">
                          {isAr ? "توصية الشراب:" : "Wine Alliance:"}
                        </span>
                        <p className="font-sans text-[11px] text-gold-cream/80 italic">
                          {isAr ? "شابليس جراند كرو، لوس كلوس ٢٠١٩" : "Chablis Grand Cru, Les Clos 2019"}
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-start space-x-2.5 text-xs text-gold-cream/80 ${isAr ? 'space-x-reverse' : ''}`}>
                      <Leaf className="h-4 w-4 text-gold-cream/60 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-mono uppercase tracking-wider text-[10px] text-gold-cream/55">
                          {t.menu.platingTitle}:
                        </span>
                        <p className="font-sans text-[11px] text-gold-cream/80">
                          {selectedDish.platingDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dietary Badge Row */}
                <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-mid-brown/25 ${isAr ? 'justify-start flex-row-reverse' : ''}`}>
                  {selectedDish.dietary.map((lbl) => (
                    <span 
                      key={lbl} 
                      className="text-[9px] font-mono text-gold-cream bg-mid-brown/40 border border-gold-cream/15 py-1 px-2.5 rounded-none"
                    >
                      {lbl}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
