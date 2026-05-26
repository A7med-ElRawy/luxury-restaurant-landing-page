export interface TranslationData {
  navbar: {
    philosophy: string;
    menu: string;
    reviews: string;
    contact: string;
    bookTable: string;
  };
  hero: {
    michelinBadge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    secureReservation: string;
    exploreMenu: string;
    dinnerService: string;
    quoteText: string;
    quoteAuthor: string;
    tableLabel: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    tabLegacy: string;
    tabSourcing: string;
    tabPhilosophy: string;
    experienceBadge: string;
  };
  menu: {
    sectionTitle: string;
    sectionSubtitle: string;
    curatedTitle: string;
    curatedText: string;
    curatedButton: string;
    platingTitle: string;
    platingDescription: string;
    signatureLabel: string;
    priceLabel: string;
    ingredientsLabel: string;
    dietaryLabel: string;
    closeLabel: string;
    categories: {
      All: string;
      Appetizers: string;
      Mains: string;
      Desserts: string;
      Elixirs: string;
    };
    dishes: {
      [id: string]: {
        name: string;
        description: string;
        platingDetails?: string;
      };
    };
  };
  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
    reviews: {
      [id: string]: {
        author: string;
        location: string;
        text: string;
        date: string;
      };
    };
  };
  booking: {
    title: string;
    subtitle: string;
    guestsLabel: string;
    dateLabel: string;
    timeLabel: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    requestsLabel: string;
    requestsPlaceholder: string;
    dressCodeTitle: string;
    dressCodeText: string;
    btnCancel: string;
    btnSubmit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    boardingPassTitle: string;
    boardingPassId: string;
    boardingPassStatusLabel: string;
    boardingPassStatusValue: string;
    boardingPassClient: string;
    boardingPassSeats: string;
    boardingPassSchedule: string;
    boardingPassLayoutLabel: string;
    boardingPassLayoutValue: string;
    btnReturn: string;
  };
  footer: {
    hoursTitle: string;
    hoursWeek: string;
    hoursMon: string;
    hoursMonClosed: string;
    newsletterTitle: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    newsletterSuccess: string;
    rights: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    emailLabel: string;
  };
}

export const translations: { en: TranslationData; ar: TranslationData } = {
  en: {
    navbar: {
      philosophy: "Philosophy",
      menu: "Signature Menu",
      reviews: "Guest Reviews",
      contact: "Hours & Contact",
      bookTable: "Book a Table",
    },
    hero: {
      michelinBadge: "EST. 1994 • MICHELIN STARRED",
      titleLine1: "A Symphony",
      titleLine2: "of Pure Taste",
      description: "Indulge in a sensory journey at L'Étoile, where ancient culinary disciplines dance harmoniously with modern innovation. Each dish is an exquisite story told in rare, hand-selected ingredients.",
      secureReservation: "Secure Reservation",
      exploreMenu: "Explore Menu",
      dinnerService: "Dinner Service TUE-SUN",
      quoteText: "Senses are aroused, ingredients speak, excellence is served.",
      quoteAuthor: "Chef de Cuisine",
      tableLabel: "Grand Salle Table 12",
    },
    about: {
      sectionTitle: "Gastronomic Mastery",
      sectionSubtitle: "Born from a passion for uncompromising prestige.",
      tabLegacy: "Our Legacy",
      tabSourcing: "Sourcing",
      tabPhilosophy: "Philosophy",
      experienceBadge: "The Art of Living",
    },
    menu: {
      sectionTitle: "Signature Carte",
      sectionSubtitle: "Explore a dynamic landscape of textures and micro-local elements.",
      curatedTitle: "SOMMELIER SPECIAL RECOMMENDATION",
      curatedText: "Pair any Main selected with our Grand Vin Château de Margaux 2012 for complete harmonic notes.",
      curatedButton: "Ask your Server",
      platingTitle: "Chef's Plating specs",
      platingDescription: "Artisanal layout optimized for thermodynamic retention and balanced flavor distribution.",
      signatureLabel: "Signature",
      priceLabel: "Prestige Pricing",
      ingredientsLabel: "Tasting Elements",
      dietaryLabel: "Dietary Profile",
      closeLabel: "Close",
      categories: {
        All: "All",
        Appetizers: "Appetizers",
        Mains: "Mains",
        Desserts: "Desserts",
        Elixirs: "Elixirs",
      },
      dishes: {
        'dish-1': {
          name: "Aigre-Doux Beetroot Rose",
          description: "Roasted organic heirloom chioggia beets shaped into a delicate rose, infused with absolute golden-leaf vinegar, dynamic walnut crisps, and wild thyme goats-milk curd.",
          platingDetails: "Arranged in concentric overlapping rose layers on chilled white bone china, lightly misted with organic thyme distillates at tableside."
        },
        'dish-2': {
          name: "Diver Scallops & Aquatic Caviar",
          description: "Sashimi-grade cold diver scallops, Aquitaine black sturgeon caviar, pressed sea fennel oil, pickled ginger blossom, and a clarified yuzu-dashi broth.",
          platingDetails: "Resting inside an authentic hand-polished mother-of-pearl half shell, set over a custom micro-ice ring and kelp vapors."
        },
        'dish-3': {
          name: "Dry-Aged Imperial Wagyu Filet",
          description: "Hand-carved seared A5 Japanese Wagyu steak, caramelized baby shallots, slow bone-marrow glaze, shaved winter white truffle, and buttered asparagus spears.",
          platingDetails: "Slightly elevated over hot basalt stones, allowing minor ongoing curing, served with charcoal-dusted local salt crystals on the margins."
        },
        'dish-4': {
          name: "Saffron Sea Bass en Papillote",
          description: "Line-caught Pacific seabass slowly baked inside parchment paper, served with glazed seasonal vegetables, micro dill sprouts, and a premium saffron-lemongrass emulsion.",
          platingDetails: "Presented wrapped in natural parchment, sliced open tableside to release a concentrated aromatic puff of oceanic herbal heat."
        },
        'dish-5': {
          name: "Golden Or Noir Cocoa Dome",
          description: "Ultra-luxurious 70% Valrhona dark chocolate dome layered with hazelnut praline sand, direct gold-leaf foil, and premium tableside salted espresso caramel pour.",
          platingDetails: "Centering a geometric black obsidian platter. Hot espresso caramel is slowly poured to collapse the dome, revealing vanilla raw-honey gelato."
        },
        'dish-6': {
          name: "Madagascar Vanilla Bean Royale",
          description: "Decadent cream soufflé baked in orange blossom extract, centered with warm dark cherry compote, served with a scoop of house-churned organic raw honey gelato.",
          platingDetails: "Elevated on a silver pedestal with high-temp porcelain ramekins, garnished with hand-painted gold leaf filaments."
        },
        'dish-7': {
          name: "Imperial Smoked Truffle Negroni",
          description: "Artisanal botanic dry gin, wild cherry-bark infused vermouth, campari bitters fat-washed with aromatic white truffles, finished inside an active cherrywood-smoke dome.",
          platingDetails: "Poured over a high-density, crystal-clear ice sphere stamped with the L'Étoile insignia, captured in pre-chilled crystal glassware."
        },
        'dish-8': {
          name: "The Emerald Green Elderflower Vesper",
          description: "Distilled floral craft vodka, Lillet Blanc, french chartreuse infusion, fresh organic standard key lime essence, and suspended microscopic silver luxury flakes.",
          platingDetails: "Excellently chilled inside an insulated double-walled chalice, releasing an effervescent mist of micro-citrus extract."
        }
      }
    },
    testimonials: {
      sectionTitle: "Guild & Guest Voices",
      sectionSubtitle: "Echoes of unmatched dining journeys from world-renowned culinary chroniclers.",
      reviews: {
        'review-1': {
          author: "Evelyn Montgomery",
          location: "New York Gastronomy Guild",
          text: "Dining at L'Étoile is not merely a meal; it is an evocative, transportive artistic masterpiece. The Aigre-Doux Beetroot Rose is visually heartbreaking, and the table service remains classical royalty.",
          date: "May 2026"
        },
        'review-2': {
          author: "Lord Harrison Vance",
          location: "London Culinary Register",
          text: "The seared Imperial A5 Wagyu is quite literally the finest cut I have experienced outside of Kyoto. Understated elegance paired with extreme culinary discipline. A pristine, high-contrast masterpiece.",
          date: "April 2026"
        },
        'review-3': {
          author: "Elena Rostova",
          location: "Milan Avant-Garde Journal",
          text: "Absolute gastronomic theater! The Gold Noir chocolate dome melting tableside had our entire party in awe. The ambiance is dark, velvety, intimate, and profoundly luxurious.",
          date: "March 2026"
        }
      }
    },
    booking: {
      title: "Secure a Table",
      subtitle: "Verify your exclusive reservations for a high-dining culinary journey.",
      guestsLabel: "Number of Guests",
      dateLabel: "Select Date",
      timeLabel: "Preferred Seating Time",
      nameLabel: "Your Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      requestsLabel: "Special Dietary & Occasions Notes",
      requestsPlaceholder: "e.g. Vegetarian preference on dessert, anniversary setup...",
      dressCodeTitle: "Dress Alliance Code:",
      dressCodeText: "To maintain L'Étoile's elite standards, guests are respectfully asked to adhere to a Smart Elegant / Casual Luxury Dress Code. Active sportswear, swimwear, and flip-flops are respectfully prohibited.",
      btnCancel: "Cancel",
      btnSubmit: "Authorize Booking",
      submitting: "Reviewing...",
      successTitle: "Reservation Arranged",
      successText: "Your space has been assigned. A separate visual confirmation slip has been sent. Your prestige lounge pass is displayed below.",
      boardingPassTitle: "L'ÉTOILE PRESTIGE PASS",
      boardingPassId: "RESERVE ID",
      boardingPassStatusLabel: "Table Status",
      boardingPassStatusValue: "PENDING CONFIRMATION",
      boardingPassClient: "CLIENT",
      boardingPassSeats: "SEATS ASSIGNED",
      boardingPassSchedule: "SCHEDULE",
      boardingPassLayoutLabel: "SALLE DISPOSITION",
      boardingPassLayoutValue: "PREMIUM COUPE WINDOW LOUNGE",
      btnReturn: "Return to Lounge",
    },
    footer: {
      hoursTitle: "Service Hours",
      hoursWeek: "Dinner Service 18:00 - 23:30",
      hoursMon: "Mondays",
      hoursMonClosed: "Closed",
      newsletterTitle: "VIP Lounge Invitations",
      newsletterText: "Directly receive seasonal carte adjustments, exclusive chef degustation slots, and private vintage winery release details.",
      newsletterPlaceholder: "Enter email for invitations",
      newsletterSuccess: "Registered successfully! Bienvenue.",
      rights: "© 2026 ALL RIGHTS RESERVED BY L'ÉTOILE ENTERPRISES.",
      addressLabel: "ADDRESS",
      addressVal: "75 Rue de la Paix, Paris",
      phoneLabel: "TELEPHONE",
      emailLabel: "MAISON DIRECT",
    }
  },
  ar: {
    navbar: {
      philosophy: "فلسفتنا",
      menu: "قائمة الأطباق المميزة",
      reviews: "آراء الضيوف",
      contact: "ساعات العمل والتواصل",
      bookTable: "حجز طاولة",
    },
    hero: {
      michelinBadge: "تأسس عام ١٩٩٤ • حائز على كوكب ميشلان",
      titleLine1: "سيمفونية",
      titleLine2: "المذاق الخالص",
      description: "انغمس في رحلة حسية ساحرة في مطعم ليتوال، حيث يتكامل إرث الطهي العريق بشكل مثالي مع الابتكار العصري الجريء. كل طبق يحكي حكاية آسرة من المكونات النادرة المنتقاة يدوياً بعناية فائقة.",
      secureReservation: "احجز جلستك الآن",
      exploreMenu: "استكشف القائمة",
      dinnerService: "خدمة العشاء: الثلاثاء - الأحد",
      quoteText: "الحواس تستيقظ، المكونات تتكلم، والتميز المتقن يقدم لكم بحب.",
      quoteAuthor: "رئيس الطهاة",
      tableLabel: "القاعة الكبرى • طاولة ١٢",
    },
    about: {
      sectionTitle: "إتقان الطهي الفاخر",
      sectionSubtitle: "تأسس بدافع من الشغف لتقديم مستويات مطلقة من الفخامة والتميز.",
      tabLegacy: "إرثنا العريق",
      tabSourcing: "مصادرنا العضوية",
      tabPhilosophy: "فلسفة المذاق",
      experienceBadge: "فن العيش الراقي",
    },
    menu: {
      sectionTitle: "قائمة الأطباق المميزة",
      sectionSubtitle: "استكشف عالماً ديناميكياً من القوام المتباين والعناصر المقطوفة محلياً.",
      curatedTitle: "توصية خبير العصائر الخاصة",
      curatedText: "نوصي بمطابقة أي طبق رئيسي مع عصير العنب الفاخر شاتو دي مارغو ٢٠١٢ للحصول على نغمات عطرية متكاملة.",
      curatedButton: "استفسر من المضيف",
      platingTitle: "تفاصيل تنسيق الطبق",
      platingDescription: "تنسيق فني مصمم لضمان الاحتفاظ الحراري الديناميكي وتوزيع مثالي للنكهات على الطبق.",
      signatureLabel: "طبق مميز",
      priceLabel: "سعر الفخامة",
      ingredientsLabel: "عناصر التذوق",
      dietaryLabel: "الملف الغذائي والصحي",
      closeLabel: "إغلاق",
      categories: {
        All: "الكل",
        Appetizers: "المقبلات",
        Mains: "الأطباق الرئيسية",
        Desserts: "الحلويات",
        Elixirs: "المشروبات والكوكتيلات",
      },
      dishes: {
        'dish-1': {
          name: "وردة الشمندر الحلو والحامض",
          description: "شرائح رقيقة من الشمندر العضوي المحمص بعناية على شكل وردة مذهلة، معززة بخل أوراق الذهب النقي، ومقرمشات الجوز، وقريشة حليب الماعز بالزعتر البري.",
          platingDetails: "يتم ترتيبها في طبقات متحدة المركز على شكل وردة فوق طبق الصيني الأبيض البارد مع رذاذ من مستخلص الزعتر العضوي يقدم بجانب الطاولة مباشرة."
        },
        'dish-2': {
          name: "محار الغواص الإمبراطوري والكافيار",
          description: "محار غواص طازج بدرجة الساشيمي الفاخرة، كافيار الأكويتين الأسود النادر، زيت شمر البحر المعصور، براعم الزنجبيل المخلل، وحساء اليوزو الداشي المصفى.",
          platingDetails: "مقدم داخل صدفة لؤلؤ أصلية مصقولة يدوياً بالكامل، وموضوعة فوق حلقة ثلجية خاصة مع أبخرة عشب البحر النقية."
        },
        'dish-3': {
          name: "فيليه واجيو المعتق الفاخر",
          description: "ستيك لحم واجيو ياباني A5 مشوح ومقطع يدوياً بمهارة، مع كراث بيبي مكرمل، جليز نخاع العظم المطبوخ ببطء، كمأة الشتاء البيضاء المبشورة، وأعواد الهليون بالزبدة.",
          platingDetails: "يقدم مرتفعاً قليلاً على أحجار البازلت الساخنة للحفاظ على جودة اللحم الدافئة، بجانب كريستالات الملح الأسود بالفحم على الحواف الخارجية."
        },
        'dish-4': {
          name: "قاروص البحر بالزعفران الفاخر",
          description: "سمك قاروص البحر الطازج المخبوز ببطء داخل ورق الزبدة العضوي، يقدم مع خضروات الموسم الدافئة، وبراعم الشبت الميكروية، ومستحلب الذهب بالزعفران وعشب الليمون.",
          platingDetails: "يُقدم مغلفاً بورق البرشمان الطبيعي، ويُشق بسطوع عند الطاولة لإطلاق نفحة عطرية دافئة ومركزة من أعشاب المحيط الغنية."
        },
        'dish-5': {
          name: "قبة كاكاو الذهب الأسود أور نوير",
          description: "قبة شوكولاتة فالرونا الداكنة الفاخرة 70%، محشوة برمال البخاخ المحمص، وورق الذهب الخالص القابل للأكل، مع صب كراميل الإسبريسو الساخن والمالح بجانب الطاولة مباشرة.",
          platingDetails: "تتوسط طبقاً مسطحاً مصمماً من حجر الأوبسيديان الأسود الهندسي. ويُسكب كراميل الإسبريسو الساخن ببطء لإذابة القبة، كاشفاً عن جيلاتو الفانيليا وعسل الخام الطبيعي."
        },
        'dish-6': {
          name: "سوفليه رويال بفانيليا مدغشقر",
          description: "سوفليه الكريم الفرنسي المخبوز بخلاصة زهر البرتقال العطرية، محاط بكومبوت الكرز الداكن الدافئ، يقدم مع ملعقة من جيلاتو عسل النحل العضوي المعد منزلياً.",
          platingDetails: "يقدم مرتفعاً على قاعدة فضية مميزة مع أواني ramekins الخزفية المقاومة للحرارة، مزيناً بخيوط أوراق الذهب المطلية يدوياً."
        },
        'dish-7': {
          name: "نيغروني الكمأة المدخن الإمبراطوري",
          description: "مشروب جاف بنكهات عشبية فاخرة، مع عصير لحاء الكرز البري، كامباري غني بنكهة ترسبات الكمأة البيضاء المعتقة، مدخن محلياً تحت القبة مباشرة بخشب الكرز العطري.",
          platingDetails: "يُسكب على كرة ثلجية عالية الكثافة خالية من الشوائب ومطبوع عليها شعار ليتوال، ومقدم في زجاج كريستالي فاخر مبرد مسبقاً."
        },
        'dish-8': {
          name: "كوكتيل فيسبر الزمردي بزهر البيلسان",
          description: "مستخلص الزهور العطرية الفاخر، عصير ليليه بلان النقي، شارتريوز الفرنسية النادرة، خلاصة الليمون العضوي المعصور، ورقائق الفضة الدقيقة المعلقة محلقة في الكوب.",
          platingDetails: "يقدم مبرداً بشكل رائع داخل كأس مزدوج الجدران عازل للحرارة، مما يطلق ضباباً فوّاحاً من مستخلص الحمضيات النادر."
        }
      }
    },
    testimonials: {
      sectionTitle: "أصداء وأقلام نقادنا",
      sectionSubtitle: "مراجعات حصرية وشهادات تاريخية من أبرز الصحف العالمية ونقاد فنون الأطعمة.",
      reviews: {
        'review-1': {
          author: "إيفيلين مونتغمري",
          location: "اتحاد نقاد فن الطهي - نيويورك",
          text: "تناول الطعام في مطعم ليتوال ليس مجرد وجبة عابرة، بل هو تحفة فنية تأخذك إلى عالم آخر من السحر والجمال. وردة الشمندر جذابة للغاية، والخدمة ملكية كلاسيكية راقية.",
          date: "مايو ٢٠٢٦"
        },
        'review-2': {
          author: "اللورد هاريسون فانس",
          location: "السجلCulinary المرموق - لندن",
          text: "قطعة لحم الواجيو A5 المشوحة هي بلا شك أرقى وألذ شريحة لحم تذوقتها على الإطلاق خارج مدينة كيوتو اليابانية. بساطة مطلقة وفخامة مقترنة بانضباط مطبخي استثنائي وعريق.",
          date: "أبريل ٢٠٢٦"
        },
        'review-3': {
          author: "إيلينا روستوفا",
          location: "المجلة الطليعية - ميلان",
          text: "مسرح طبخي حسي بامتياز! إذابة قبة شوكولاتة الذهب الأسود الفاخرة أمامنا مباشرة بجانب الطاولة أبهرت جميع الحضور وعززت الأجواء المخملية الدافئة والرائعة للمكان.",
          date: "مارس ٢٠٢٦"
        }
      }
    },
    booking: {
      title: "احجز طاولة حصرية",
      subtitle: "نظم واضمن موقعك لتجربة استثنائية تأخذك لأعلى مراتب الذوق والأناقة.",
      guestsLabel: "عدد الضيوف والمرافقين",
      dateLabel: "اختر التاريخ المفضل",
      timeLabel: "وقت الجلسة المناسب",
      nameLabel: "الاسم الكامل المعتمد",
      emailLabel: "عنوان البريد الإلكتروني",
      phoneLabel: "رقم الهاتف للتواصل المباشر",
      requestsLabel: "ملاحظات غذائية خاصة أو طلبات المناسبات",
      requestsPlaceholder: "مثال: حساسية طعام معينة، رغبات نباتية، تجهيز لذكرى سنوية خاصة...",
      dressCodeTitle: "ميثاق اللباس المعتمد:",
      dressCodeText: "للحفاظ على المعايير النخبة لمطعم ليتوال، نرجو من ضيوفنا الكرام الالتزام بزي فاخر كاجوال أو زي أنيق رسمي. يُمنع تماماً ارتداء الملابس الرياضية النشطة، ملابس السباحة، أو النعال الخفيفة.",
      btnCancel: "إلغاء",
      btnSubmit: "تأكيد واستصدار الحجز",
      submitting: "جارٍ المراجعة الفورية...",
      successTitle: "تم تسجيل وتأكيد الطلب بنجاح",
      successText: "تم تخصيص جلستك الفاخرة بنجاح. أرسلنا تفاصيل التأكيد عبر البريد الإلكتروني الخاص بك. تجد أدناه تذكرة الصعود لصالون الضيوف الفاخرة.",
      boardingPassTitle: "بطاقة النخبة المعتمدة من ليتوال",
      boardingPassId: "رمز الحجز الخاص",
      boardingPassStatusLabel: "حالة الطلب",
      boardingPassStatusValue: "قيد المراجعة الفورية",
      boardingPassClient: "اسم الضيف الفاخر",
      boardingPassSeats: "المقاعد والضيوف",
      boardingPassSchedule: "الوقت والتاريخ المختار",
      boardingPassLayoutLabel: "ترتيب جلوس الصالون",
      boardingPassLayoutValue: "كوبيه المافذة المتميز • إطلالة هادئة",
      btnReturn: "العودة إلى صالون الخدمة",
    },
    footer: {
      hoursTitle: "ساعات تقديم الخدمة",
      hoursWeek: "خدمة العشاء والخدمات الراقية: ١٨:٠٠ - ٢٣:٣٠",
      hoursMon: "يوم الاثنين",
      hoursMonClosed: "مغلق بالكامل",
      newsletterTitle: "دعوات الصالون الحصرية والخاصة",
      newsletterText: "احجز مقعدك لتلقي تحديثات القائمة الموسمية وتوصيات الطهاة وإعلانات زجاجات العنب المعتقة والنادرة المحدودة مباشرة.",
      newsletterPlaceholder: "أدخل بريدك لتلقي الدعوات الأنيقة",
      newsletterSuccess: "تم تسجيل بريدك بنجاح! أهلاً بك في عالمنا.",
      rights: "© ٢٠٢٦ جميع الحقوق محفوظة لشركة مؤسسة ليتوال الفاخرة.",
      addressLabel: "العنوان المعتمد",
      addressVal: "٧٥ شارع السلام، باريس • فرنسا",
      phoneLabel: "الهاتف المباشر",
      emailLabel: "بريد الميزون المباشر",
    }
  }
};
