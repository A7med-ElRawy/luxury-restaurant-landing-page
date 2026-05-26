import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Award, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'legacy' | 'sourcing' | 'philosophy'>('legacy');
  const isAr = language === 'ar';

  const tabContents = {
    legacy: {
      label: t.about.tabLegacy,
      title: isAr 
        ? "إرث عريق من التميز في عالم الطهي" 
        : "Guiding Legacy of Culinary Perfection",
      text: isAr
        ? "وُلد مطعم ليتوال من شغف عميق بفنون الطهي الفاخر، ليكون معبداً للابتكار المتميز. تظل رؤيتنا متأصلة كما هي: تصميم تجربة طعام حميمية تترجم شاعرية الحياة على طبق. بإشراف نخبة من كبار الطهاة الحائزين على جوائز عالمية، نحول تناول الطعام إلى ذكرى خالدة من الروائح والقوام والفنون البصرية."
        : "Born from a lifelong passion for fine dining, L'Étoile opened its doors to serve as a temple of culinary innovation. Our founding vision remains unchanged: to design an intimate dining lounge that captures the poetry of life on a plate. Guided by award-winning chefs, we transform luxury dining into an indelible memory of textures, aromas, and visual fine art.",
      icon: Award,
      badge: isAr ? "تأسس عام ١٩٩٦" : "Est. 1996",
      stat: isAr ? "أكثر من ٢٥ عاماً من الخبرة الطهوية" : "25+ Years of Mastery",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    sourcing: {
      label: t.about.tabSourcing,
      title: isAr
        ? "تفاصيل عضوية ومستدامة ومحلية فائقة الجودة"
        : "Artisanal, Sustainable & Microlocal",
      text: isAr
        ? "نؤمن بأن النكهة الحقيقية تولد من عمق الأرض والبحر. يحرص طهاتنا على بناء علاقات متينة مع مزارعين محليين يتبعون أساليب الزراعة العضوية، وصيادين ملتزمين بالصيد المستدام. من الزهور القابلة للأكل المقطوفة عند الفجر إلى ثمار البحر الطازجة، يحمل كل طبق وثيقة منشأ معتمدة لضمان الجودة والمسؤولية البيئية."
        : "We believe that true flavor is born in the soil and sea. Our chefs nurture strong relationships with microlocal organic farmers, sustainable deep-sea fishermen, and passionate truffle foragers. From heirloom flowers handpicked at dawn to pristine cold-water shellfish harvested under strict ecological limits, each item on our plate carries a tracing certificate of origin.",
      icon: Leaf,
      badge: isAr ? "مصادر موثوقة ١٠٠٪" : "100% Traceable",
      stat: isAr ? "محاصيل عضوية مباشرة من المزرعة" : "Direct Organic Harvests",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
    },
    philosophy: {
      label: t.about.tabPhilosophy,
      title: isAr
        ? "سيمفونية الطهي المعاصر ذي الأبعاد الحسية"
        : "The Symphony of Modern Gastronomy",
      text: isAr
        ? "تتمحور فلسفتنا التصميمية حول تقديم التباينات الحسية الرائعة: الحار مقابل البارد، الحلو والمالح، البساطة والتعقيد. من خلال دمج تقنيات الطهي الفرنسي الكلاسيكي مع فيزياء الأطعمة الحديثة، نبرز المذاق الأصيل بدلاً من تغطيته. المذاق هو رحلة جميلة، ومهمتنا هي توفير بيئة ساحرة للانغماس الحسي التام."
        : "Our design philosophy centers on contrast: cold vs warm, sweet vs savory, minimalist vs complex. By combining traditional French slow-reduction techniques with modern food physics, we elevate the natural flavor notes rather than cover them. Flavor is a beautiful journey, and our task is to provide an elite atmosphere of sensory immersion.",
      icon: Compass,
      badge: isAr ? "نهج حداثي متطور" : "Modernist Approach",
      stat: isAr ? "تطبيقات حسية غنية بالفوائد" : "Multi-Sensory Pairings",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
    }
  };

  const current = tabContents[activeTab];

  return (
    <section
      id="story"
      className="py-24 md:py-32 bg-accent-bg relative overflow-hidden text-gold-cream border-t border-b border-mid-brown/40"
    >
      {/* Absolute Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/60 pointer-events-none border-b border-l border-mid-brown/30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mid-brown/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Image Collage with high luxury feel */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer frame */}
              <div className="absolute inset-0 border border-gold-cream/10 rounded-none transform translate-x-4 translate-y-4 pointer-events-none" />
              
              {/* Active Tab Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden bg-black shadow-2xl border border-mid-brown/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={current.image}
                      fallbackSrc={current.fallbackImage}
                      alt={current.title}
                      className="w-full h-full object-cover filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Floating Stat Badge */}
                <div className={`absolute top-4 py-2 px-4 bg-black/80 backdrop-blur-md rounded-none border border-gold-cream/20 text-xs font-mono tracking-widest uppercase ${
                  isAr ? 'right-4' : 'left-4'
                }`}>
                  {current.badge}
                </div>
                
                {/* Micro detail line */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-mid-brown via-gold-cream to-mid-brown" />
              </div>

              {/* Decorative signature label underneath layout */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-serif italic text-gold-cream/95 text-lg">
                    {isAr ? 'ماروا دي توال' : "Maroise d'Étoile"}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-cream/50 mt-1">
                    {isAr ? 'المؤسس / المدير العام' : 'Founder / Culinary Director'}
                  </p>
                </div>
                <div className={`flex items-center space-x-1 text-gold-cream/40 ${isAr ? 'space-x-reverse' : ''}`}>
                  <Sparkles className="h-4 w-4 fill-current" />
                  <span className="font-mono text-xs font-light">
                    {isAr ? 'معايير النخبة معتمدة' : 'Elegance Verified'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Pure Copy and Interactive Navigation Menu */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <span className={`font-mono text-[10px] uppercase tracking-[0.3em] text-gold-cream/55 mb-3 flex items-center ${
              isAr ? 'justify-start space-x-reverse space-x-2' : 'space-x-2'
            }`}>
              <span>{isAr ? 'تفاصيل وحرفية خالية من الحلول الوسط' : 'UNCOMPROMISING CRAFTSMANSHIP'}</span>
              <span className="h-[1px] w-6 bg-gold-cream/30" />
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-normal text-gold-cream font-semibold mb-8">
              {isAr ? (
                <>
                  حيث تتجلى <br />
                  <span className="italic font-normal">عجائب الطهي الفاخر</span>
                </>
              ) : (
                <>
                  Where Gastronomic <br />
                  <span className="italic font-normal">Wonders Unfold</span>
                </>
              )}
            </h2>

            {/* Interactive Concept Tab Buttons */}
            <div className={`flex border-b border-mid-brown/50 mb-8 overflow-x-auto pb-px ${
              isAr ? 'space-x-reverse space-x-3' : 'space-x-1'
            }`}>
              {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map((tab) => {
                const isActive = activeTab === tab;
                const IconComponent = tabContents[tab].icon;
                return (
                  <button
                    key={tab}
                    id={`about-tab-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center space-x-2.5 px-6 pb-4 pt-1 font-mono text-xs uppercase tracking-[0.2em] transition-all relative whitespace-nowrap cursor-pointer ${
                      isActive ? 'text-gold-cream font-medium' : 'text-gold-cream/40 hover:text-gold-cream/70'
                    } ${isAr ? 'space-x-reverse' : ''}`}
                  >
                    <IconComponent className={`h-4.5 w-4.5 ${isActive ? 'text-gold-cream' : 'text-gold-cream/45'}`} />
                    <span>{tabContents[tab].label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeAboutTabSubline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-cream"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content Display Panel */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl text-gold-cream/95 leading-snug">
                    {current.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-gold-cream/70 text-justify">
                    {current.text}
                  </p>
                  
                  {/* Decorative Key Stat Row */}
                  <div className={`flex items-center space-x-3.5 bg-black/35 py-3.5 px-5 rounded-none border border-mid-brown/50 w-fit ${
                    isAr ? 'space-x-reverse' : ''
                  }`}>
                    <span className="h-1.5 w-1.5 bg-gold-cream" />
                    <span className="font-mono text-xs tracking-[0.15em] text-gold-cream/80 font-medium uppercase">
                      {current.stat}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
