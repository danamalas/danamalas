// Lightweight client-side i18n: translations are AI-generated first drafts —
// have a native speaker review Spanish, French, and Arabic copy before relying
// on it for anything legal or customer-facing at scale.
var ABO_I18N = (function () {
  var STORAGE_KEY = "abo-lang";
  var RTL_LANGS = ["ar"];

  var LANG_NAMES = {
    en: "English",
    es: "Español",
    fr: "Français",
    ar: "العربية",
  };

  var T = {
    en: {
      "skip.content": "Skip to content",
      "nav.toggleAria": "Toggle navigation",
      "brand.aria": "ABÔ Atelier — Home",
      "cart.aria": "View cart",
      "nav.home": "Home",
      "nav.shop": "Shop",
      "nav.story": "Our Story",
      "nav.scarProject": "The Scar Project",
      "nav.contact": "Contact Us",
      "lang.aria": "Choose language",

      "footer.rights": "ABÔ Atelier. All rights reserved.",

      "newsletter.heading": "Sign up for our newsletter and get 10% off your first order.",
      "newsletter.tooltip": "Sign up for our newsletter and get 10% off your first order",
      "newsletter.dismissAria": "Dismiss",
      "newsletter.badgeAria": "Sign up for our newsletter",
      "newsletter.closeAria": "Close",
      "newsletter.name": "Name",
      "newsletter.email": "Email",
      "newsletter.emailAria": "Email address",
      "newsletter.countryCodeAria": "Country code",
      "newsletter.phone": "Phone number",
      "newsletter.submit": "Sign Up",

      "hero.story.text": "A scar turned into strength — how ABÔ Atelier came to be",
      "hero.story.link": "Read the story",
      "hero.scar.text": "Every scar carries a story, what's yours?",
      "hero.scar.link": "Explore the project",
      "hero.shop.text": "Discover fine jewellery in solid gold and sterling silver",
      "hero.shop.link": "View the collection",

      "story.eyebrow": "Our Story",
      "story.heading": "A scar turned into strength —<br>a mark of the journey you crossed",
      "story.lede": "ABÔ Atelier was never supposed to be just a jewellery brand.",
      "story.p1": "It rose from one of the hardest chapters of my life. For a while, I thought pain only took things away. But slowly, I began to understand that <em>pain can also create</em>.",
      "story.p2": "Every piece we create carries a reminder that something beautiful can come from something painful. ABÔ Atelier is my journey to recovery, but I don't want it to belong to only me. I want it to belong to anyone who has lost something, fought silently, started again, or is still finding their way back.",
      "story.p3": "Every ABÔ Atelier piece is crafted from verified precious metals, carefully tested to ensure purity, quality, and authenticity.",
      "story.quote": "A piece of jewellery cannot erase what happened, but it can remind you of the strength you carry.",
      "story.quoteCite": "— Founder, ABÔ Atelier",

      "contact.heading": "Welcome to Contact Us",
      "contact.emailLabel": "Email:",
      "contact.callLabel": "Call:",
      "contact.country": "Sweden",
      "contact.returnsLabel": "For questions regarding returns, email us at",
      "contact.returnsPolicyLink": "See our return policy.",

      "scar.eyebrow": "The Scar Project",
      "scar.heading": "Every scar carries a story, what's yours?",
      "scar.lede": "Some scars are visible. Most are not. The Scar Project is a growing collection of real stories from real people who have turned pain into strength; told in their own words, in their own time.",
      "scar.body": "This project is a community by ABÔ Atelier where you can safely share a personal story behind your scar. With your permission, the story will be transformed into written features, photographs, or short films, inspiring others on their own journey of healing and new beginnings.",
      "scar.cta": "Share Your Story",
      "scar.backHome": "← Back to Home",

      "wizard.eyebrow": "Share Your Scar",
      "wizard.introHint": "Your story is yours. How you share it is your choice.",
      "wizard.begin": "Begin →",
      "wizard.back": "← Back",
      "wizard.continue": "Continue →",
      "wizard.step01": "01 — About You",
      "wizard.requiredNote": "* Required",
      "wizard.firstName": "First name",
      "wizard.cityCountry": "City / Country",
      "wizard.email": "Email",
      "wizard.emailNote": "Kept private",
      "wizard.step02": "02 — Your Story",
      "wizard.storyQuestion": "Tell us about your story",
      "wizard.storyHint": "Share as much or as little as you feel comfortable sharing.",
      "wizard.step03": "03 — Today",
      "wizard.todayQuestion": "What strength have you found through your scar?",
      "wizard.participationQuestion": "How would you like to share your story?",
      "wizard.optionWritten": "Written story",
      "wizard.optionPhoto": "I'd be open to being photographed / filmed",
      "wizard.optionAnon": "I'd prefer to remain anonymous",
      "wizard.consentQuestion": "Before you submit",
      "wizard.consentCheckbox": "I agree to ABÔ Atelier reviewing my submission.",
      "wizard.finePrint": "Submitting your story does not automatically give ABÔ Atelier permission to publish it. If your story is selected, we will contact you by email before publication.",
      "wizard.reviewQuestion": "Your story",
      "wizard.reviewHint": "Take a moment to review what you've shared. You can edit anything before sending.",
      "wizard.submit": "Submit My Story",
      "wizard.doneTitle": "Your story has been received",
      "wizard.doneThanks": "Thank you for trusting us with a part of your journey.",
      "wizard.doneBody": "Every story submitted to The Scar Project is reviewed with care. The ABÔ Atelier team will contact you soon.",
      "wizard.discoverLink": "Discover the stories →",

      "wizard.error.email": "Please share a valid email so we can reach you if your story is chosen.",
      "wizard.error.story": "Please share at least a few words about your scar.",
      "wizard.error.today": "Please share what strength you've found through your scar.",
      "wizard.error.participation": "Please choose one option.",
      "wizard.error.consent": "Please confirm you're comfortable with ABÔ Atelier reviewing your submission.",
      "wizard.review.firstName": "First name",
      "wizard.review.cityCountry": "City / Country",
      "wizard.review.email": "Email",
      "wizard.review.story": "Your story",
      "wizard.review.today": "Strength found through your scar",
      "wizard.review.participation": "How you'd like to share",
      "wizard.review.consent": "Consent",
      "wizard.review.consentValue": "Reviewing submission: Yes",
      "wizard.review.edit": "Edit",
      "wizard.review.dash": "—",

      "shop.title": "The Collection",
      "shop.introText": "Handcrafted with precision and purpose, each piece is made from fine materials and finished to the highest standard.",
      "shop.comingSoon": "Coming Soon",

      "product.loading": "Loading…",
      "product.notFound": "We couldn't find that piece.",
      "product.returnToShop": "Return to the Shop.",
      "product.backToShop": "← Back to Shop",

      "policy.title": "Return Policy",
      "policy.placeholder": "Placeholder policy — replace this page with ABÔ Atelier's actual return and exchange terms.",
      "policy.returnsHeading": "Returns",
      "policy.returnsBody": "Each piece is cast to order by hand, so please contact us before purchasing if you have questions about fit, sizing, or materials. [Add your actual return window and conditions here.]",
      "policy.exchangesHeading": "Exchanges",
      "policy.exchangesBody": "[Add your exchange terms here — e.g. resizing, engraving corrections, store credit.]",
      "policy.contactHeading": "Contact",
      "policy.contactBody": "For questions regarding returns, email us at",

      "title.home": "ABÔ Atelier — Fine Jewellery",
      "title.shop": "Shop — ABÔ Atelier",
      "title.scarProject": "The Scar Project — ABÔ Atelier",
      "title.shareStory": "Share Your Story — The Scar Project — ABÔ Atelier",
      "title.returnPolicy": "Return Policy — ABÔ Atelier",
    },

    es: {
      "skip.content": "Saltar al contenido",
      "nav.toggleAria": "Abrir menú de navegación",
      "brand.aria": "ABÔ Atelier — Inicio",
      "cart.aria": "Ver carrito",
      "nav.home": "Inicio",
      "nav.shop": "Tienda",
      "nav.story": "Nuestra Historia",
      "nav.scarProject": "The Scar Project",
      "nav.contact": "Contacto",
      "lang.aria": "Elegir idioma",

      "footer.rights": "ABÔ Atelier. Todos los derechos reservados.",

      "newsletter.heading": "Suscríbete a nuestro boletín y obtén un 10% de descuento en tu primer pedido.",
      "newsletter.tooltip": "Suscríbete a nuestro boletín y obtén un 10% de descuento en tu primer pedido",
      "newsletter.dismissAria": "Descartar",
      "newsletter.badgeAria": "Suscríbete a nuestro boletín",
      "newsletter.closeAria": "Cerrar",
      "newsletter.name": "Nombre",
      "newsletter.email": "Correo electrónico",
      "newsletter.emailAria": "Dirección de correo electrónico",
      "newsletter.countryCodeAria": "Código de país",
      "newsletter.phone": "Número de teléfono",
      "newsletter.submit": "Suscribirme",

      "hero.story.text": "Una cicatriz convertida en fuerza — cómo nació ABÔ Atelier",
      "hero.story.link": "Leer la historia",
      "hero.scar.text": "Toda cicatriz cuenta una historia, ¿cuál es la tuya?",
      "hero.scar.link": "Explorar el proyecto",
      "hero.shop.text": "Descubre joyería fina en oro macizo y plata de ley",
      "hero.shop.link": "Ver la colección",

      "story.eyebrow": "Nuestra Historia",
      "story.heading": "Una cicatriz convertida en fuerza —<br>una marca del camino recorrido",
      "story.lede": "ABÔ Atelier nunca debía ser solo una marca de joyería.",
      "story.p1": "Nació de uno de los capítulos más difíciles de mi vida. Durante un tiempo pensé que el dolor solo quitaba cosas. Pero poco a poco entendí que <em>el dolor también puede crear</em>.",
      "story.p2": "Cada pieza que creamos lleva el recordatorio de que algo hermoso puede nacer de algo doloroso. ABÔ Atelier es mi camino de recuperación, pero no quiero que me pertenezca solo a mí. Quiero que pertenezca a cualquiera que haya perdido algo, luchado en silencio, vuelto a empezar, o que aún esté encontrando el camino de regreso.",
      "story.p3": "Cada pieza de ABÔ Atelier está elaborada con metales preciosos verificados, cuidadosamente probados para garantizar pureza, calidad y autenticidad.",
      "story.quote": "Una joya no puede borrar lo que pasó, pero puede recordarte la fuerza que llevas dentro.",
      "story.quoteCite": "— Fundadora, ABÔ Atelier",

      "contact.heading": "Bienvenido a Contacto",
      "contact.emailLabel": "Correo:",
      "contact.callLabel": "Teléfono:",
      "contact.country": "Suecia",
      "contact.returnsLabel": "Para preguntas sobre devoluciones, escríbenos a",
      "contact.returnsPolicyLink": "Consulta nuestra política de devoluciones.",

      "scar.eyebrow": "The Scar Project",
      "scar.heading": "Toda cicatriz cuenta una historia, ¿cuál es la tuya?",
      "scar.lede": "Algunas cicatrices se ven. La mayoría no. The Scar Project es una colección creciente de historias reales de personas reales que han convertido el dolor en fuerza; contadas con sus propias palabras, a su propio ritmo.",
      "scar.body": "Este proyecto es una comunidad de ABÔ Atelier donde puedes compartir con seguridad la historia personal detrás de tu cicatriz. Con tu permiso, la historia se transformará en reportajes escritos, fotografías o cortometrajes, inspirando a otros en su propio camino de sanación y nuevos comienzos.",
      "scar.cta": "Comparte Tu Historia",
      "scar.backHome": "← Volver al Inicio",

      "wizard.eyebrow": "Comparte Tu Cicatriz",
      "wizard.introHint": "Tu historia es tuya. Cómo la compartes es decisión tuya.",
      "wizard.begin": "Comenzar →",
      "wizard.back": "← Atrás",
      "wizard.continue": "Continuar →",
      "wizard.step01": "01 — Sobre Ti",
      "wizard.requiredNote": "* Obligatorio",
      "wizard.firstName": "Nombre",
      "wizard.cityCountry": "Ciudad / País",
      "wizard.email": "Correo electrónico",
      "wizard.emailNote": "Se mantiene privado",
      "wizard.step02": "02 — Tu Historia",
      "wizard.storyQuestion": "Cuéntanos tu historia",
      "wizard.storyHint": "Comparte tanto o tan poco como te sientas cómodo compartiendo.",
      "wizard.step03": "03 — Hoy",
      "wizard.todayQuestion": "¿Qué fortaleza has encontrado a través de tu cicatriz?",
      "wizard.participationQuestion": "¿Cómo te gustaría compartir tu historia?",
      "wizard.optionWritten": "Historia escrita",
      "wizard.optionPhoto": "Estoy dispuesto/a a ser fotografiado/a o filmado/a",
      "wizard.optionAnon": "Prefiero permanecer en el anonimato",
      "wizard.consentQuestion": "Antes de enviar",
      "wizard.consentCheckbox": "Acepto que ABÔ Atelier revise mi historia.",
      "wizard.finePrint": "Enviar tu historia no le da automáticamente a ABÔ Atelier permiso para publicarla. Si tu historia es seleccionada, te contactaremos por correo electrónico antes de la publicación.",
      "wizard.reviewQuestion": "Tu historia",
      "wizard.reviewHint": "Tómate un momento para revisar lo que has compartido. Puedes editar cualquier cosa antes de enviarlo.",
      "wizard.submit": "Enviar Mi Historia",
      "wizard.doneTitle": "Tu historia ha sido recibida",
      "wizard.doneThanks": "Gracias por confiarnos una parte de tu camino.",
      "wizard.doneBody": "Cada historia enviada a The Scar Project se revisa con cuidado. El equipo de ABÔ Atelier se pondrá en contacto contigo pronto.",
      "wizard.discoverLink": "Descubre las historias →",

      "wizard.error.email": "Por favor comparte un correo electrónico válido para poder contactarte si tu historia es elegida.",
      "wizard.error.story": "Por favor comparte al menos algunas palabras sobre tu cicatriz.",
      "wizard.error.today": "Por favor comparte qué fortaleza has encontrado a través de tu cicatriz.",
      "wizard.error.participation": "Por favor elige una opción.",
      "wizard.error.consent": "Por favor confirma que estás de acuerdo en que ABÔ Atelier revise tu historia.",
      "wizard.review.firstName": "Nombre",
      "wizard.review.cityCountry": "Ciudad / País",
      "wizard.review.email": "Correo electrónico",
      "wizard.review.story": "Tu historia",
      "wizard.review.today": "Fortaleza encontrada a través de tu cicatriz",
      "wizard.review.participation": "Cómo te gustaría compartir",
      "wizard.review.consent": "Consentimiento",
      "wizard.review.consentValue": "Revisión de la historia: Sí",
      "wizard.review.edit": "Editar",
      "wizard.review.dash": "—",

      "shop.title": "La Colección",
      "shop.introText": "Elaborado a mano con precisión y propósito, cada pieza está hecha de materiales finos y terminada con el máximo cuidado.",
      "shop.comingSoon": "Próximamente",

      "product.loading": "Cargando…",
      "product.notFound": "No pudimos encontrar esa pieza.",
      "product.returnToShop": "Volver a la Tienda.",
      "product.backToShop": "← Volver a la Tienda",

      "policy.title": "Política de Devoluciones",
      "policy.placeholder": "Política provisional — sustituye esta página con las condiciones reales de devolución y cambio de ABÔ Atelier.",
      "policy.returnsHeading": "Devoluciones",
      "policy.returnsBody": "Cada pieza se funde por encargo a mano, así que contáctanos antes de comprar si tienes preguntas sobre ajuste, talla o materiales. [Añade aquí tu plazo y condiciones reales de devolución.]",
      "policy.exchangesHeading": "Cambios",
      "policy.exchangesBody": "[Añade aquí tus condiciones de cambio — por ejemplo, ajuste de talla, correcciones de grabado, crédito en tienda.]",
      "policy.contactHeading": "Contacto",
      "policy.contactBody": "Para preguntas sobre devoluciones, escríbenos a",

      "title.home": "ABÔ Atelier — Joyería Fina",
      "title.shop": "Tienda — ABÔ Atelier",
      "title.scarProject": "The Scar Project — ABÔ Atelier",
      "title.shareStory": "Comparte Tu Historia — The Scar Project — ABÔ Atelier",
      "title.returnPolicy": "Política de Devoluciones — ABÔ Atelier",
    },

    fr: {
      "skip.content": "Passer au contenu",
      "nav.toggleAria": "Basculer la navigation",
      "brand.aria": "ABÔ Atelier — Accueil",
      "cart.aria": "Voir le panier",
      "nav.home": "Accueil",
      "nav.shop": "Boutique",
      "nav.story": "Notre Histoire",
      "nav.scarProject": "The Scar Project",
      "nav.contact": "Contact",
      "lang.aria": "Choisir la langue",

      "footer.rights": "ABÔ Atelier. Tous droits réservés.",

      "newsletter.heading": "Inscrivez-vous à notre newsletter et bénéficiez de 10 % de réduction sur votre première commande.",
      "newsletter.tooltip": "Inscrivez-vous à notre newsletter et bénéficiez de 10 % de réduction sur votre première commande",
      "newsletter.dismissAria": "Ignorer",
      "newsletter.badgeAria": "Inscrivez-vous à notre newsletter",
      "newsletter.closeAria": "Fermer",
      "newsletter.name": "Nom",
      "newsletter.email": "E-mail",
      "newsletter.emailAria": "Adresse e-mail",
      "newsletter.countryCodeAria": "Indicatif du pays",
      "newsletter.phone": "Numéro de téléphone",
      "newsletter.submit": "S'inscrire",

      "hero.story.text": "Une cicatrice devenue force — comment ABÔ Atelier est né",
      "hero.story.link": "Lire l'histoire",
      "hero.scar.text": "Chaque cicatrice raconte une histoire, quelle est la vôtre ?",
      "hero.scar.link": "Découvrir le projet",
      "hero.shop.text": "Découvrez une joaillerie fine en or massif et argent sterling",
      "hero.shop.link": "Voir la collection",

      "story.eyebrow": "Notre Histoire",
      "story.heading": "Une cicatrice devenue force —<br>la marque du chemin parcouru",
      "story.lede": "ABÔ Atelier ne devait jamais être qu'une simple marque de bijoux.",
      "story.p1": "Elle est née de l'un des chapitres les plus difficiles de ma vie. Pendant un temps, j'ai cru que la douleur ne faisait que prendre. Mais peu à peu, j'ai compris que <em>la douleur peut aussi créer</em>.",
      "story.p2": "Chaque pièce que nous créons porte le rappel que quelque chose de beau peut naître de quelque chose de douloureux. ABÔ Atelier est mon chemin vers la guérison, mais je ne veux pas qu'il n'appartienne qu'à moi. Je veux qu'il appartienne à quiconque a perdu quelque chose, s'est battu en silence, a recommencé, ou cherche encore son chemin.",
      "story.p3": "Chaque pièce ABÔ Atelier est façonnée à partir de métaux précieux certifiés, soigneusement testés pour garantir pureté, qualité et authenticité.",
      "story.quote": "Un bijou ne peut effacer ce qui s'est passé, mais il peut vous rappeler la force que vous portez.",
      "story.quoteCite": "— Fondatrice, ABÔ Atelier",

      "contact.heading": "Bienvenue dans la rubrique Contact",
      "contact.emailLabel": "E-mail :",
      "contact.callLabel": "Téléphone :",
      "contact.country": "Suède",
      "contact.returnsLabel": "Pour toute question relative aux retours, écrivez-nous à",
      "contact.returnsPolicyLink": "Consultez notre politique de retour.",

      "scar.eyebrow": "The Scar Project",
      "scar.heading": "Chaque cicatrice raconte une histoire, quelle est la vôtre ?",
      "scar.lede": "Certaines cicatrices sont visibles. La plupart ne le sont pas. The Scar Project est une collection grandissante d'histoires vraies, racontées par de vraies personnes ayant transformé la douleur en force ; dans leurs propres mots, à leur propre rythme.",
      "scar.body": "Ce projet est une communauté créée par ABÔ Atelier où vous pouvez partager en toute sécurité l'histoire personnelle derrière votre cicatrice. Avec votre autorisation, l'histoire sera transformée en récits écrits, photographies ou courts métrages, pour inspirer d'autres personnes dans leur propre chemin de guérison et de renouveau.",
      "scar.cta": "Partagez Votre Histoire",
      "scar.backHome": "← Retour à l'Accueil",

      "wizard.eyebrow": "Partagez Votre Cicatrice",
      "wizard.introHint": "Votre histoire vous appartient. La façon de la partager est votre choix.",
      "wizard.begin": "Commencer →",
      "wizard.back": "← Retour",
      "wizard.continue": "Continuer →",
      "wizard.step01": "01 — À Propos de Vous",
      "wizard.requiredNote": "* Obligatoire",
      "wizard.firstName": "Prénom",
      "wizard.cityCountry": "Ville / Pays",
      "wizard.email": "E-mail",
      "wizard.emailNote": "Reste confidentiel",
      "wizard.step02": "02 — Votre Histoire",
      "wizard.storyQuestion": "Parlez-nous de votre histoire",
      "wizard.storyHint": "Partagez autant ou aussi peu que vous vous sentez à l'aise de le faire.",
      "wizard.step03": "03 — Aujourd'hui",
      "wizard.todayQuestion": "Quelle force avez-vous trouvée grâce à votre cicatrice ?",
      "wizard.participationQuestion": "Comment souhaitez-vous partager votre histoire ?",
      "wizard.optionWritten": "Histoire écrite",
      "wizard.optionPhoto": "Je suis ouvert(e) à être photographié(e) ou filmé(e)",
      "wizard.optionAnon": "Je préfère rester anonyme",
      "wizard.consentQuestion": "Avant d'envoyer",
      "wizard.consentCheckbox": "J'accepte qu'ABÔ Atelier examine ma soumission.",
      "wizard.finePrint": "L'envoi de votre histoire ne donne pas automatiquement à ABÔ Atelier la permission de la publier. Si votre histoire est sélectionnée, nous vous contacterons par e-mail avant publication.",
      "wizard.reviewQuestion": "Votre histoire",
      "wizard.reviewHint": "Prenez un moment pour relire ce que vous avez partagé. Vous pouvez tout modifier avant l'envoi.",
      "wizard.submit": "Envoyer Mon Histoire",
      "wizard.doneTitle": "Votre histoire a bien été reçue",
      "wizard.doneThanks": "Merci de nous avoir confié une part de votre parcours.",
      "wizard.doneBody": "Chaque histoire soumise à The Scar Project est examinée avec attention. L'équipe d'ABÔ Atelier vous contactera bientôt.",
      "wizard.discoverLink": "Découvrir les histoires →",

      "wizard.error.email": "Merci de renseigner un e-mail valide afin que nous puissions vous contacter si votre histoire est choisie.",
      "wizard.error.story": "Merci de partager au moins quelques mots sur votre cicatrice.",
      "wizard.error.today": "Merci de partager la force que vous avez trouvée grâce à votre cicatrice.",
      "wizard.error.participation": "Merci de choisir une option.",
      "wizard.error.consent": "Merci de confirmer que vous acceptez qu'ABÔ Atelier examine votre soumission.",
      "wizard.review.firstName": "Prénom",
      "wizard.review.cityCountry": "Ville / Pays",
      "wizard.review.email": "E-mail",
      "wizard.review.story": "Votre histoire",
      "wizard.review.today": "Force trouvée grâce à votre cicatrice",
      "wizard.review.participation": "Comment vous souhaitez partager",
      "wizard.review.consent": "Consentement",
      "wizard.review.consentValue": "Examen de la soumission : Oui",
      "wizard.review.edit": "Modifier",
      "wizard.review.dash": "—",

      "shop.title": "La Collection",
      "shop.introText": "Fabriquée à la main avec précision et intention, chaque pièce est réalisée à partir de matériaux fins et finie selon les normes les plus exigeantes.",
      "shop.comingSoon": "Bientôt Disponible",

      "product.loading": "Chargement…",
      "product.notFound": "Nous n'avons pas trouvé cette pièce.",
      "product.returnToShop": "Retourner à la Boutique.",
      "product.backToShop": "← Retour à la Boutique",

      "policy.title": "Politique de Retour",
      "policy.placeholder": "Politique provisoire — remplacez cette page par les conditions réelles de retour et d'échange d'ABÔ Atelier.",
      "policy.returnsHeading": "Retours",
      "policy.returnsBody": "Chaque pièce est coulée sur commande à la main ; contactez-nous avant l'achat pour toute question sur l'ajustement, la taille ou les matériaux. [Ajoutez ici votre délai et vos conditions de retour réels.]",
      "policy.exchangesHeading": "Échanges",
      "policy.exchangesBody": "[Ajoutez ici vos conditions d'échange — par exemple redimensionnement, corrections de gravure, avoir.]",
      "policy.contactHeading": "Contact",
      "policy.contactBody": "Pour toute question relative aux retours, écrivez-nous à",

      "title.home": "ABÔ Atelier — Joaillerie Fine",
      "title.shop": "Boutique — ABÔ Atelier",
      "title.scarProject": "The Scar Project — ABÔ Atelier",
      "title.shareStory": "Partagez Votre Histoire — The Scar Project — ABÔ Atelier",
      "title.returnPolicy": "Politique de Retour — ABÔ Atelier",
    },

    ar: {
      "skip.content": "الانتقال إلى المحتوى",
      "nav.toggleAria": "تبديل التنقل",
      "brand.aria": "ABÔ Atelier — الصفحة الرئيسية",
      "cart.aria": "عرض السلة",
      "nav.home": "الرئيسية",
      "nav.shop": "المتجر",
      "nav.story": "قصتنا",
      "nav.scarProject": "مشروع الندبة",
      "nav.contact": "تواصل معنا",
      "lang.aria": "اختر اللغة",

      "footer.rights": "ABÔ Atelier. جميع الحقوق محفوظة.",

      "newsletter.heading": "اشترك في نشرتنا البريدية واحصل على خصم 10٪ على طلبك الأول.",
      "newsletter.tooltip": "اشترك في نشرتنا البريدية واحصل على خصم 10٪ على طلبك الأول",
      "newsletter.dismissAria": "إغلاق",
      "newsletter.badgeAria": "اشترك في نشرتنا البريدية",
      "newsletter.closeAria": "إغلاق",
      "newsletter.name": "الاسم",
      "newsletter.email": "البريد الإلكتروني",
      "newsletter.emailAria": "عنوان البريد الإلكتروني",
      "newsletter.countryCodeAria": "رمز الدولة",
      "newsletter.phone": "رقم الهاتف",
      "newsletter.submit": "اشترك",

      "hero.story.text": "ندبة تحولت إلى قوة — كيف وُلدت ABÔ Atelier",
      "hero.story.link": "اقرأ القصة",
      "hero.scar.text": "كل ندبة تحمل قصة، فما هي قصتك؟",
      "hero.scar.link": "اكتشف المشروع",
      "hero.shop.text": "اكتشفي المجوهرات الفاخرة من الذهب الخالص والفضة الإسترليني",
      "hero.shop.link": "عرض المجموعة",

      "story.eyebrow": "قصتنا",
      "story.heading": "ندبة تحولت إلى قوة —<br>علامة على الرحلة التي عبرتها",
      "story.lede": "لم يكن من المفترض أن تكون ABÔ Atelier مجرد علامة مجوهرات.",
      "story.p1": "وُلدت من أحد أصعب فصول حياتي. لفترة، ظننت أن الألم لا يفعل شيئًا سوى أن يأخذ. لكن ببطء، بدأت أدرك أن <em>الألم يمكن أن يخلق أيضًا</em>.",
      "story.p2": "كل قطعة نصنعها تحمل تذكيرًا بأن شيئًا جميلًا يمكن أن ينبثق من شيء مؤلم. ABÔ Atelier هي رحلتي نحو التعافي، لكنني لا أريدها أن تخصني وحدي. أريدها أن تخص كل من فقد شيئًا، أو قاوم بصمت، أو بدأ من جديد، أو ما زال يبحث عن طريق العودة.",
      "story.p3": "كل قطعة من ABÔ Atelier مصنوعة من معادن ثمينة موثقة، تم اختبارها بعناية لضمان النقاء والجودة والأصالة.",
      "story.quote": "لا يمكن لقطعة مجوهرات أن تمحو ما حدث، لكنها يمكن أن تذكرك بالقوة التي تحملها.",
      "story.quoteCite": "— المؤسِّسة، ABÔ Atelier",

      "contact.heading": "مرحبًا بكم في صفحة التواصل",
      "contact.emailLabel": "البريد الإلكتروني:",
      "contact.callLabel": "الهاتف:",
      "contact.country": "السويد",
      "contact.returnsLabel": "لأي استفسارات بخصوص الإرجاع، راسلونا على",
      "contact.returnsPolicyLink": "اطّلع على سياسة الإرجاع الخاصة بنا.",

      "scar.eyebrow": "مشروع الندبة",
      "scar.heading": "كل ندبة تحمل قصة، فما هي قصتك؟",
      "scar.lede": "بعض الندوب ظاهرة، ومعظمها ليس كذلك. مشروع الندبة هو مجموعة متنامية من القصص الحقيقية لأشخاص حقيقيين حوّلوا الألم إلى قوة؛ يروونها بكلماتهم الخاصة، وفي وقتهم الخاص.",
      "scar.body": "هذا المشروع مجتمع من ABÔ Atelier حيث يمكنك أن تشارك بأمان قصتك الشخصية وراء ندبتك. وبإذنك، سيتم تحويل القصة إلى تقارير مكتوبة أو صور فوتوغرافية أو أفلام قصيرة، لإلهام الآخرين في رحلتهم الخاصة نحو الشفاء والبدايات الجديدة.",
      "scar.cta": "شارك قصتك",
      "scar.backHome": "→ العودة إلى الرئيسية",

      "wizard.eyebrow": "شارك ندبتك",
      "wizard.introHint": "قصتك ملك لك. وطريقة مشاركتها اختيارك.",
      "wizard.begin": "← ابدأ",
      "wizard.back": "→ رجوع",
      "wizard.continue": "← متابعة",
      "wizard.step01": "01 — عنك",
      "wizard.requiredNote": "* مطلوب",
      "wizard.firstName": "الاسم الأول",
      "wizard.cityCountry": "المدينة / الدولة",
      "wizard.email": "البريد الإلكتروني",
      "wizard.emailNote": "يبقى سريًا",
      "wizard.step02": "02 — قصتك",
      "wizard.storyQuestion": "أخبرنا عن قصتك",
      "wizard.storyHint": "شارك بقدر ما تشعر بالراحة لمشاركته.",
      "wizard.step03": "03 — اليوم",
      "wizard.todayQuestion": "ما القوة التي اكتشفتها من خلال ندبتك؟",
      "wizard.participationQuestion": "كيف تود مشاركة قصتك؟",
      "wizard.optionWritten": "قصة مكتوبة",
      "wizard.optionPhoto": "لدي استعداد للتصوير الفوتوغرافي أو المصور",
      "wizard.optionAnon": "أفضّل البقاء مجهول الهوية",
      "wizard.consentQuestion": "قبل الإرسال",
      "wizard.consentCheckbox": "أوافق على مراجعة ABÔ Atelier لمشاركتي.",
      "wizard.finePrint": "إرسال قصتك لا يمنح ABÔ Atelier تلقائيًا إذنًا بنشرها. إذا تم اختيار قصتك، سنتواصل معك عبر البريد الإلكتروني قبل النشر.",
      "wizard.reviewQuestion": "قصتك",
      "wizard.reviewHint": "خذ لحظة لمراجعة ما شاركته. يمكنك تعديل أي شيء قبل الإرسال.",
      "wizard.submit": "أرسل قصتي",
      "wizard.doneTitle": "تم استلام قصتك",
      "wizard.doneThanks": "شكرًا لثقتك بنا بجزء من رحلتك.",
      "wizard.doneBody": "تتم مراجعة كل قصة تُرسل إلى مشروع الندبة بعناية. سيتواصل معك فريق ABÔ Atelier قريبًا.",
      "wizard.discoverLink": "← اكتشف القصص",

      "wizard.error.email": "يرجى إدخال بريد إلكتروني صالح حتى نتمكن من التواصل معك إذا تم اختيار قصتك.",
      "wizard.error.story": "يرجى مشاركة بضع كلمات على الأقل عن ندبتك.",
      "wizard.error.today": "يرجى مشاركة القوة التي اكتشفتها من خلال ندبتك.",
      "wizard.error.participation": "يرجى اختيار خيار واحد.",
      "wizard.error.consent": "يرجى تأكيد موافقتك على مراجعة ABÔ Atelier لمشاركتك.",
      "wizard.review.firstName": "الاسم الأول",
      "wizard.review.cityCountry": "المدينة / الدولة",
      "wizard.review.email": "البريد الإلكتروني",
      "wizard.review.story": "قصتك",
      "wizard.review.today": "القوة المكتشفة من خلال ندبتك",
      "wizard.review.participation": "كيف تود المشاركة",
      "wizard.review.consent": "الموافقة",
      "wizard.review.consentValue": "مراجعة المشاركة: نعم",
      "wizard.review.edit": "تعديل",
      "wizard.review.dash": "—",

      "shop.title": "المجموعة",
      "shop.introText": "مصنوعة يدويًا بدقة وهدف، كل قطعة مصنوعة من مواد فاخرة ومصقولة وفق أعلى المعايير.",
      "shop.comingSoon": "قريبًا",

      "product.loading": "جارٍ التحميل…",
      "product.notFound": "لم نتمكن من العثور على هذه القطعة.",
      "product.returnToShop": "العودة إلى المتجر.",
      "product.backToShop": "→ العودة إلى المتجر",

      "policy.title": "سياسة الإرجاع",
      "policy.placeholder": "سياسة مؤقتة — استبدل هذه الصفحة بشروط الإرجاع والاستبدال الفعلية الخاصة بـ ABÔ Atelier.",
      "policy.returnsHeading": "الإرجاع",
      "policy.returnsBody": "كل قطعة تُصنع عند الطلب يدويًا، لذا يرجى التواصل معنا قبل الشراء إذا كانت لديك أسئلة حول المقاس أو المواد. [أضف هنا مدة الإرجاع الفعلية وشروطها.]",
      "policy.exchangesHeading": "الاستبدال",
      "policy.exchangesBody": "[أضف هنا شروط الاستبدال — مثل تعديل المقاس، تصحيحات النقش، رصيد المتجر.]",
      "policy.contactHeading": "التواصل",
      "policy.contactBody": "لأي استفسارات بخصوص الإرجاع، راسلونا على",

      "title.home": "ABÔ Atelier — مجوهرات فاخرة",
      "title.shop": "المتجر — ABÔ Atelier",
      "title.scarProject": "مشروع الندبة — ABÔ Atelier",
      "title.shareStory": "شارك قصتك — مشروع الندبة — ABÔ Atelier",
      "title.returnPolicy": "سياسة الإرجاع — ABÔ Atelier",
    },
  };

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && T[stored]) return stored;
    } catch (e) {}
    return "en";
  }

  function t(key) {
    var lang = getLang();
    var dict = T[lang] || T.en;
    return dict[key] !== undefined ? dict[key] : T.en[key] !== undefined ? T.en[key] : key;
  }

  function applyDom() {
    var lang = getLang();
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", RTL_LANGS.indexOf(lang) !== -1 ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    updateSwitcherUI();
    document.body.classList.add("i18n-ready");
  }

  function setLang(lang) {
    if (!T[lang]) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyDom();
    document.dispatchEvent(new CustomEvent("abo:langchange", { detail: { lang: lang } }));
  }

  function updateSwitcherUI() {
    var lang = getLang();
    document.querySelectorAll(".lang-switcher-label").forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll(".lang-switcher-menu button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  function closeAllMenus() {
    document.querySelectorAll(".lang-switcher-menu").forEach(function (menu) {
      menu.hidden = true;
    });
    document.querySelectorAll(".lang-switcher-btn").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function buildSwitcher() {
    var header = document.querySelector(".header-inner");
    if (!header || header.querySelector(".lang-switcher")) return;

    var cartLink = header.querySelector(".cart-link");

    var wrapper = document.createElement("div");
    wrapper.className = "header-actions";

    var switcher = document.createElement("div");
    switcher.className = "lang-switcher";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-switcher-btn";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("data-i18n-aria", "lang.aria");
    btn.setAttribute("aria-label", t("lang.aria"));

    var label = document.createElement("span");
    label.className = "lang-switcher-label";
    label.textContent = getLang().toUpperCase();
    btn.appendChild(label);

    var menu = document.createElement("ul");
    menu.className = "lang-switcher-menu";
    menu.hidden = true;

    ["en", "es", "fr", "ar"].forEach(function (code) {
      var li = document.createElement("li");
      var optBtn = document.createElement("button");
      optBtn.type = "button";
      optBtn.setAttribute("data-lang", code);
      optBtn.textContent = LANG_NAMES[code];
      if (code === getLang()) optBtn.classList.add("is-active");
      optBtn.addEventListener("click", function () {
        setLang(code);
        closeAllMenus();
      });
      li.appendChild(optBtn);
      menu.appendChild(li);
    });

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = !menu.hidden;
      closeAllMenus();
      menu.hidden = isOpen;
      btn.setAttribute("aria-expanded", String(!isOpen));
    });

    document.addEventListener("click", function () {
      closeAllMenus();
    });

    switcher.appendChild(btn);
    switcher.appendChild(menu);

    if (cartLink) {
      cartLink.parentNode.insertBefore(wrapper, cartLink);
      wrapper.appendChild(switcher);
      wrapper.appendChild(cartLink);
    } else {
      header.appendChild(wrapper);
      wrapper.appendChild(switcher);
    }
  }

  buildSwitcher();
  applyDom();

  return { t: t, getLang: getLang, setLang: setLang, applyDom: applyDom };
})();

function t(key) {
  return ABO_I18N.t(key);
}
