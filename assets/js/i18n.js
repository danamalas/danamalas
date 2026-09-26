// Lightweight client-side i18n: translations are AI-generated first drafts —
// have a native speaker review French and Arabic copy before relying on it
// for anything legal or customer-facing at scale.
var ABO_I18N = (function () {
  var STORAGE_KEY = "abo-lang";
  var RTL_LANGS = ["ar"];

  var LANG_NAMES = {
    en: "English",
    fr: "Français",
    ar: "العربية",
  };

  var T = {
    en: {
      "skip.content": "Skip to content",
      "nav.toggleAria": "Toggle navigation",
      "brand.aria": "ABÔ Atelier — Home",
      "cart.aria": "View cart",
      "cart.title": "Your Cart",
      "cart.empty": "Your cart is empty.",
      "cart.subtotal": "Subtotal",
      "cart.checkout": "Checkout",
      "cart.checkingOut": "Redirecting…",
      "cart.checkoutError": "Something went wrong. Please try again.",
      "cart.closeAria": "Close cart",
      "cart.removeAria": "Remove item",
      "product.addToCart": "Add to Cart",
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
      "newsletter.sending": "Sending…",
      "newsletter.success": "Thank you! You're on the list.",
      "newsletter.error": "Something went wrong. Please try again.",
      "phone.searchPlaceholder": "Search country…",

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
      "story.p3": "This is where your story can become part of ours. Join our community <a href=\"the-scar-project.html\">here</a>.",
      "story.quote": "A piece of jewellery cannot erase what happened, but it can remind you of the strength you carry.",
      "story.quoteCite": "— Founder, ABÔ Atelier",

      "contact.heading": "Welcome to Contact Us",
      "contact.emailLabel": "Email:",
      "contact.callLabel": "Call:",
      "contact.country": "Greece",
      "contact.returnsLabel": "For any questions, email us at",
      "contact.returnsPolicyLink": "See our return policy",
      "contact.form.message": "Message",
      "contact.form.submit": "Send Message",
      "contact.form.success": "Thank you! We'll be in touch soon.",

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
      "wizard.step01": "01 — Your Story",
      "wizard.requiredNote": "* Required",
      "wizard.firstName": "First name",
      "wizard.cityCountry": "City / Country",
      "wizard.email": "Email",
      "wizard.emailNote": "Kept private",
      "wizard.storyQuestion": "Tell us about your story",
      "wizard.storyHint": "Share as much or as little as you feel comfortable sharing.",
      "wizard.step02": "02 — Today",
      "wizard.step03": "03 — About You",
      "wizard.todayQuestion": "What strength have you found through your scar?",
      "wizard.participationQuestion": "How would you like to share your story?",
      "wizard.optionWritten": "Written story",
      "wizard.optionVideoByUs": "I'd like an anonymous video created for me",
      "wizard.optionOwnVideo": "I'd like to create my own video",
      "wizard.consentQuestion": "Before you submit",
      "wizard.consentCheckbox": "I agree to ABÔ Atelier reviewing my submission.",
      "wizard.finePrint": "Submitting your story does not automatically give ABÔ Atelier permission to publish it. If your story is selected, we will contact you by email before publication.",
      "wizard.reviewQuestion": "Your story",
      "wizard.reviewHint": "Take a moment to review what you've shared. You can edit anything before sending.",
      "wizard.submit": "Submit My Story",
      "wizard.submitting": "Submitting…",
      "wizard.submitError": "Something went wrong sending your story. Please try again.",
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
      "shop.introText": "Every ABÔ Atelier piece carries the same idea: that strength can rise from something difficult. Each piece is handmade from verified precious metals, carefully tested to ensure purity, quality, and authenticity.",
      "shop.comingSoon": "Still healing.<br>Available soon.",
      "storyShowcase.showAll": "Show All Products",

      "cookieConsent.text": "Your privacy matters to us. We use cookies to run our site and analyse traffic. Learn more in our <a href=\"privacy-policy.html\">Privacy Policy</a>.",
      "cookieConsent.acceptAll": "Accept",
      "cookieConsent.rejectAll": "Decline",
      "cookieConsent.manageSettings": "Manage Settings",
      "cookieConsent.settingsTitle": "Cookie Settings",
      "cookieConsent.necessaryLabel": "Necessary",
      "cookieConsent.necessaryDesc": "Required for the site to function (cart, language). Always on.",
      "cookieConsent.analyticsLabel": "Analytics",
      "cookieConsent.analyticsDesc": "Helps us understand site traffic via Google Analytics.",
      "cookieConsent.savePreferences": "Save Preferences",

      "title.privacyPolicy": "Privacy Policy — ABÔ Atelier",
      "privacyPolicy.title": "Privacy Policy",
      "privacyPolicy.placeholder": "Placeholder policy — replace this page with ABÔ Atelier's actual, lawyer-reviewed privacy policy before relying on it.",
      "privacyPolicy.dataHeading": "What Information We Collect",
      "privacyPolicy.dataBody": "We collect information you provide directly — such as your name, email, and phone number when you sign up for our newsletter, contact us, or place an order — and information collected automatically via cookies (see below).",
      "privacyPolicy.whatAreHeading": "What Are Cookies?",
      "privacyPolicy.whatAreBody": "Cookies are small pieces of data stored on your device that help websites function and understand how they're used.",
      "privacyPolicy.necessaryHeading": "Necessary Cookies",
      "privacyPolicy.necessaryBody": "These are required for the site to work correctly — for example, remembering the contents of your cart and your selected language. They cannot be disabled and do not track you across other sites.",
      "privacyPolicy.analyticsHeading": "Analytics Cookies",
      "privacyPolicy.analyticsBody": "With your consent, we use Google Analytics to understand how visitors use our site (pages viewed, general location, device type) so we can improve it. This data is anonymized and never sold. You can withdraw consent at any time by clearing your browser's site data and revisiting the site.",
      "privacyPolicy.ordersHeading": "Orders & Payments",
      "privacyPolicy.ordersBody": "When you make a purchase, your payment is processed securely by Stripe. We do not store your card details ourselves. Stripe's own privacy practices govern how your payment information is handled.",
      "privacyPolicy.rightsHeading": "Your Rights",
      "privacyPolicy.rightsBody": "Depending on your location, you may have the right to access, correct, delete, or export the personal data we hold about you, and to withdraw consent for analytics cookies at any time. [Add your data controller details and any additional regional rights here.]",
      "privacyPolicy.manageHeading": "Managing Your Cookie Preferences",
      "privacyPolicy.manageBody": "You can accept or reject non-essential cookies at any time via the cookie banner shown on your first visit, or by clearing your browser's site data to see it again.",
      "privacyPolicy.contactHeading": "Contact",
      "privacyPolicy.contactBody": "For questions regarding this policy, reach out via our",
      "privacyPolicy.contactBodyEnd": "page.",

      "product.loading": "Loading…",
      "product.notFound": "We couldn't find that piece.",
      "product.returnToShop": "Return to the Shop.",
      "product.backToShop": "← Back to Shop",
      "product.enquire": "Enquire about this piece",
      "product.enquireSubmit": "Send Enquiry",
      "product.chooseAmount": "Choose Amount",

      "policy.title": "Return Policy",
      "policy.intro": "Our return policy is set separately for each country we ship to, in line with local consumer protection law. The General Conditions below apply to every return; find your shipping destination further down for its specific terms.",
      "policy.generalHeading": "General Conditions",
      "policy.generalBody": "To qualify for any return, exchange, or refund described on this page, an item must be unused, unworn, and undamaged, with all original tags and its certificate of authenticity attached, and returned in its original packaging. Pierced earrings cannot be returned or exchanged once their hygiene seal has been broken. Resized, engraved, or otherwise customized pieces are final sale. Proof of purchase is required for every return. Approved refunds are issued to the original payment method only, once we have received and inspected the returned item.",
      "policy.usHeading": "United States",
      "policy.usBody": "Outside of items that arrive defective, damaged, or not as described, we do not offer cash refunds. Eligible non-defective items may be exchanged, or returned for store credit, within 7 days of delivery, subject to the General Conditions above. Return shipping is paid by the customer. Defective or incorrect items are replaced or refunded in full, including original shipping costs, at no charge to the customer.",
      "policy.euHeading": "European Union",
      "policy.euBody": "If your order is shipped within the European Union, you have a statutory right to withdraw from your purchase within 14 days of receiving it, without giving any reason, under the EU Consumer Rights Directive. Contact us within that 14-day period, then return the item within a further 14 days. We refund the price paid for the item within 14 days of receiving it back, to your original payment method. Return shipping is paid by the customer. Pierced earrings and customized or resized pieces are excluded from the right of withdrawal, as permitted by law.",
      "policy.saHeading": "Saudi Arabia",
      "policy.saBody": "Under Saudi Arabia's E-Commerce Law, an unused item may be returned within 7 days of receipt for a full refund of the price paid — the maximum return window we offer for this destination. Returns must meet the General Conditions above; pierced earrings and customized or resized pieces cannot be returned.",
      "policy.omHeading": "Oman",
      "policy.omBody": "We do not offer returns for change of mind on orders shipped to Oman. In line with Omani consumer protection law, an item that is defective or does not match its description will be repaired, exchanged, or refunded, at our discretion, if reported within 7 days of delivery.",
      "policy.qaHeading": "Qatar",
      "policy.qaBody": "As with Oman, we do not accept returns for change of mind on orders shipped to Qatar. Items that are defective, non-conforming, or not as ordered are exchanged or refunded, at our discretion, if reported within 7 days of delivery. If delivery is delayed by more than 30 days, you may cancel your order for a full refund.",
      "policy.kwHeading": "Kuwait",
      "policy.kwBody": "Under Kuwait's Digital Commerce Law (Decree-Law No. 10 of 2026), you may withdraw from your purchase within 14 days of receiving it and return the item for a full refund at no additional cost, provided it meets the General Conditions above. Pierced earrings and customized or resized pieces are excluded, as permitted under the law. Precious-metal and other high-value items may become subject to a shorter withdrawal window under forthcoming ministerial regulation; this page will be updated once that takes effect.",
      "policy.trHeading": "Türkiye",
      "policy.trBody": "Under Turkish Law No. 6502 and the Distance Contracts Regulation, you may withdraw from your purchase within 14 days of delivery, without giving any reason. Return shipping is paid by the customer. We refund the price paid within 14 days of receiving the returned item. Pierced earrings and customized or resized pieces are excluded from the right of withdrawal, as permitted by law.",
      "policy.howHeading": "How to Request a Return",
      "policy.howBody": "To start a return or report a defective item, contact us with your order number and the reason for your request. We will confirm whether your item is eligible and send instructions for returning it.",
      "policy.contactHeading": "Contact",
      "policy.contactBody": "For questions regarding returns, reach out via our",
      "policy.contactBodyEnd": "page.",

      "notFound.title": "Page Not Found",
      "notFound.body": "The page you're looking for doesn't exist or may have moved.",
      "notFound.homeLink": "Return to Home",
      "notFound.shopLink": "Visit the Shop",

      "title.home": "ABÔ Atelier — Fine Jewellery",
      "title.shop": "Shop — ABÔ Atelier",
      "title.scarProject": "The Scar Project — ABÔ Atelier",
      "title.shareStory": "Share Your Story — The Scar Project — ABÔ Atelier",
      "title.returnPolicy": "Return Policy — ABÔ Atelier",
      "title.notFound": "Page Not Found — ABÔ Atelier",
    },

    fr: {
      "skip.content": "Passer au contenu",
      "nav.toggleAria": "Basculer la navigation",
      "brand.aria": "ABÔ Atelier — Accueil",
      "cart.aria": "Voir le panier",
      "cart.title": "Votre panier",
      "cart.empty": "Votre panier est vide.",
      "cart.subtotal": "Sous-total",
      "cart.checkout": "Paiement",
      "cart.checkingOut": "Redirection…",
      "cart.checkoutError": "Une erreur s'est produite. Veuillez réessayer.",
      "cart.closeAria": "Fermer le panier",
      "cart.removeAria": "Retirer l'article",
      "product.addToCart": "Ajouter au panier",
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
      "newsletter.sending": "Envoi…",
      "newsletter.success": "Merci ! Vous êtes inscrit(e).",
      "newsletter.error": "Une erreur est survenue. Merci de réessayer.",
      "phone.searchPlaceholder": "Rechercher un pays…",

      "hero.story.text": "Une cicatrice devenue force — comment ABÔ Atelier est né",
      "hero.story.link": "Lire l'histoire",
      "hero.scar.text": "Chaque cicatrice raconte une histoire, quelle est la vôtre ?",
      "hero.scar.link": "Découvrir le projet",
      "hero.shop.text": "Découvrez une joaillerie fine en or massif et argent sterling",
      "hero.shop.link": "Voir la collection",

      "story.eyebrow": "Notre Histoire",
      "story.heading": "Une cicatrice devenue force —<br>la trace du chemin parcouru",
      "story.lede": "ABÔ Atelier n'a jamais eu vocation à être une simple marque de bijoux.",
      "story.p1": "Elle est née de l'un des chapitres les plus difficiles de ma vie. J'ai longtemps cru que la douleur ne faisait que détruire. Mais peu à peu, j'ai compris que <em>la douleur peut aussi créer</em>.",
      "story.p2": "Chaque pièce que nous créons est un rappel que quelque chose de beau peut naître de la douleur. ABÔ Atelier est mon chemin vers la guérison, mais je ne veux pas qu'il m'appartienne à moi seule. Je veux qu'il appartienne à tous ceux qui ont perdu quelque chose, se sont battus en silence, ont recommencé, ou cherchent encore leur chemin.",
      "story.p3": "C'est ici que votre histoire peut devenir une part de la nôtre. Rejoignez notre communauté <a href=\"the-scar-project.html\">ici</a>.",
      "story.quote": "Un bijou ne peut effacer ce qui s'est passé, mais il peut vous rappeler la force que vous portez.",
      "story.quoteCite": "— Fondatrice, ABÔ Atelier",

      "contact.heading": "Bienvenue dans la rubrique Contact",
      "contact.emailLabel": "E-mail :",
      "contact.callLabel": "Téléphone :",
      "contact.country": "Grèce",
      "contact.returnsLabel": "Pour toute question, écrivez-nous à",
      "contact.returnsPolicyLink": "Consultez notre politique de retour",
      "contact.form.message": "Message",
      "contact.form.submit": "Envoyer le Message",
      "contact.form.success": "Merci ! Nous vous contacterons bientôt.",

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
      "wizard.step01": "01 — Votre Histoire",
      "wizard.requiredNote": "* Obligatoire",
      "wizard.firstName": "Prénom",
      "wizard.cityCountry": "Ville / Pays",
      "wizard.email": "E-mail",
      "wizard.emailNote": "Reste confidentiel",
      "wizard.storyQuestion": "Parlez-nous de votre histoire",
      "wizard.storyHint": "Partagez autant ou aussi peu que vous vous sentez à l'aise de le faire.",
      "wizard.step02": "02 — Aujourd'hui",
      "wizard.step03": "03 — À Propos de Vous",
      "wizard.todayQuestion": "Quelle force avez-vous trouvée grâce à votre cicatrice ?",
      "wizard.participationQuestion": "Comment souhaitez-vous partager votre histoire ?",
      "wizard.optionWritten": "Histoire écrite",
      "wizard.optionVideoByUs": "J'aimerais qu'une vidéo anonyme soit créée pour moi",
      "wizard.optionOwnVideo": "J'aimerais créer ma propre vidéo",
      "wizard.consentQuestion": "Avant d'envoyer",
      "wizard.consentCheckbox": "J'accepte qu'ABÔ Atelier examine ma soumission.",
      "wizard.finePrint": "L'envoi de votre histoire ne donne pas automatiquement à ABÔ Atelier la permission de la publier. Si votre histoire est sélectionnée, nous vous contacterons par e-mail avant publication.",
      "wizard.reviewQuestion": "Votre histoire",
      "wizard.reviewHint": "Prenez un moment pour relire ce que vous avez partagé. Vous pouvez tout modifier avant l'envoi.",
      "wizard.submit": "Envoyer Mon Histoire",
      "wizard.submitting": "Envoi…",
      "wizard.submitError": "Une erreur est survenue lors de l'envoi de votre histoire. Merci de réessayer.",
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
      "shop.introText": "Chaque pièce ABÔ Atelier porte la même idée : que la force peut naître de quelque chose de difficile. Elle est faite à la main à partir de métaux précieux certifiés, soigneusement testés pour garantir pureté, qualité et authenticité.",
      "shop.comingSoon": "Encore en cicatrisation.<br>Bientôt disponible.",
      "storyShowcase.showAll": "Voir Tous Les Produits",

      "cookieConsent.text": "Votre vie privée compte. Nous utilisons des cookies pour faire fonctionner notre site et analyser le trafic. En savoir plus dans notre <a href=\"privacy-policy.html\">Politique de Confidentialité</a>.",
      "cookieConsent.acceptAll": "Accepter",
      "cookieConsent.rejectAll": "Refuser",
      "cookieConsent.manageSettings": "Gérer les Préférences",
      "cookieConsent.settingsTitle": "Préférences de Cookies",
      "cookieConsent.necessaryLabel": "Nécessaires",
      "cookieConsent.necessaryDesc": "Nécessaires au fonctionnement du site (panier, langue). Toujours actifs.",
      "cookieConsent.analyticsLabel": "Analytiques",
      "cookieConsent.analyticsDesc": "Nous aident à comprendre le trafic du site via Google Analytics.",
      "cookieConsent.savePreferences": "Enregistrer les Préférences",

      "title.privacyPolicy": "Politique de Confidentialité — ABÔ Atelier",
      "privacyPolicy.title": "Politique de Confidentialité",
      "privacyPolicy.placeholder": "Politique provisoire — remplacez cette page par la véritable politique de confidentialité d'ABÔ Atelier, revue par un avocat, avant de vous y fier.",
      "privacyPolicy.dataHeading": "Quelles Informations Nous Collectons",
      "privacyPolicy.dataBody": "Nous collectons les informations que vous nous fournissez directement — comme votre nom, votre e-mail et votre numéro de téléphone lorsque vous vous inscrivez à notre newsletter, nous contactez ou passez une commande — ainsi que les informations collectées automatiquement via des cookies (voir ci-dessous).",
      "privacyPolicy.whatAreHeading": "Que sont les Cookies ?",
      "privacyPolicy.whatAreBody": "Les cookies sont de petites données stockées sur votre appareil qui aident les sites web à fonctionner et à comprendre comment ils sont utilisés.",
      "privacyPolicy.necessaryHeading": "Cookies Nécessaires",
      "privacyPolicy.necessaryBody": "Ils sont nécessaires au bon fonctionnement du site — par exemple, pour mémoriser le contenu de votre panier et la langue sélectionnée. Ils ne peuvent pas être désactivés et ne vous suivent pas sur d'autres sites.",
      "privacyPolicy.analyticsHeading": "Cookies Analytiques",
      "privacyPolicy.analyticsBody": "Avec votre consentement, nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site (pages consultées, localisation générale, type d'appareil) afin de l'améliorer. Ces données sont anonymisées et jamais vendues. Vous pouvez retirer votre consentement à tout moment en effaçant les données du site dans votre navigateur puis en revisitant le site.",
      "privacyPolicy.ordersHeading": "Commandes et Paiements",
      "privacyPolicy.ordersBody": "Lorsque vous effectuez un achat, votre paiement est traité de manière sécurisée par Stripe. Nous ne stockons pas vos données de carte nous-mêmes. Les propres pratiques de confidentialité de Stripe régissent la manière dont vos informations de paiement sont traitées.",
      "privacyPolicy.rightsHeading": "Vos Droits",
      "privacyPolicy.rightsBody": "Selon votre localisation, vous pouvez avoir le droit d'accéder, de corriger, de supprimer ou d'exporter les données personnelles que nous détenons à votre sujet, et de retirer votre consentement aux cookies analytiques à tout moment. [Ajoutez ici les coordonnées de votre responsable du traitement et tout droit régional supplémentaire.]",
      "privacyPolicy.manageHeading": "Gérer vos Préférences de Cookies",
      "privacyPolicy.manageBody": "Vous pouvez accepter ou refuser les cookies non essentiels à tout moment via la bannière de cookies affichée lors de votre première visite, ou en effaçant les données du site dans votre navigateur pour la revoir.",
      "privacyPolicy.contactHeading": "Contact",
      "privacyPolicy.contactBody": "Pour toute question concernant cette politique, contactez-nous via notre",
      "privacyPolicy.contactBodyEnd": "page.",

      "product.loading": "Chargement…",
      "product.notFound": "Nous n'avons pas trouvé cette pièce.",
      "product.returnToShop": "Retourner à la Boutique.",
      "product.backToShop": "← Retour à la Boutique",
      "product.enquire": "Se renseigner sur cette pièce",
      "product.chooseAmount": "Choisir le Montant",
      "product.enquireSubmit": "Envoyer la Demande",

      "policy.title": "Politique de Retour",
      "policy.contactHeading": "Contact",
      "policy.contactBody": "Pour toute question relative aux retours, contactez-nous via notre page",
      "policy.contactBodyEnd": ".",

      "notFound.title": "Page Introuvable",
      "notFound.body": "La page que vous recherchez n'existe pas ou a peut-être été déplacée.",
      "notFound.homeLink": "Retour à l'Accueil",
      "notFound.shopLink": "Visiter la Boutique",

      "title.home": "ABÔ Atelier — Joaillerie Fine",
      "title.shop": "Boutique — ABÔ Atelier",
      "title.scarProject": "The Scar Project — ABÔ Atelier",
      "title.shareStory": "Partagez Votre Histoire — The Scar Project — ABÔ Atelier",
      "title.returnPolicy": "Politique de Retour — ABÔ Atelier",
      "title.notFound": "Page Introuvable — ABÔ Atelier",
    },

    ar: {
      "skip.content": "الانتقال إلى المحتوى",
      "nav.toggleAria": "تبديل القائمة",
      "brand.aria": "ABÔ Atelier — الصفحة الرئيسية",
      "cart.aria": "عرض السلة",
      "cart.title": "سلتك",
      "cart.empty": "سلتك فارغة.",
      "cart.subtotal": "المجموع الفرعي",
      "cart.checkout": "الدفع",
      "cart.checkingOut": "جارٍ التوجيه…",
      "cart.checkoutError": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      "cart.closeAria": "إغلاق السلة",
      "cart.removeAria": "إزالة العنصر",
      "product.addToCart": "أضف إلى السلة",
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
      "newsletter.sending": "جارٍ الإرسال…",
      "newsletter.success": "شكرًا لك! تم تسجيلك في القائمة.",
      "newsletter.error": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      "phone.searchPlaceholder": "ابحث عن الدولة…",

      "hero.story.text": "ندبة تحولت إلى قوة — كيف وُلدت ABÔ Atelier",
      "hero.story.link": "اقرأ القصة",
      "hero.scar.text": "كل ندبة تحمل قصة، فما هي قصتك؟",
      "hero.scar.link": "اكتشف المشروع",
      "hero.shop.text": "اكتشف المجوهرات الفاخرة من الذهب الخالص والفضة الإسترليني",
      "hero.shop.link": "عرض المجموعة",

      "story.eyebrow": "قصتنا",
      "story.heading": "ندبة تحولت إلى قوة —<br>علامة على الرحلة التي قطعتها",
      "story.lede": "لم تكن ABÔ Atelier يومًا مجرد علامة مجوهرات.",
      "story.p1": "وُلدت من أحد أصعب فصول حياتي. لفترة، ظننت أن الألم لا يفعل سوى الأخذ. لكن ببطء، بدأت أدرك أن <em>الألم يمكن أن يُبدِع أيضًا</em>.",
      "story.p2": "كل قطعة نصنعها تذكّرنا بأن شيئًا جميلًا يمكن أن ينبثق من شيء مؤلم. ABÔ Atelier هي رحلتي نحو التعافي، لكنني لا أريدها أن تخصني وحدي. أريدها أن تخص كل من فقد شيئًا، أو قاوم بصمت، أو بدأ من جديد، أو ما زال يبحث عن طريق العودة.",
      "story.p3": "قصتك يمكن أن تصبح جزءًا من قصتنا. انضم إلى مجتمعنا <a href=\"the-scar-project.html\">من هنا</a>.",
      "story.quote": "لا يمكن لقطعة مجوهرات أن تمحو ما حدث، لكنها يمكن أن تذكرك بالقوة التي تحملها.",
      "story.quoteCite": "— المؤسِّسة، ABÔ Atelier",

      "contact.heading": "تواصل معنا",
      "contact.emailLabel": "البريد الإلكتروني:",
      "contact.callLabel": "الهاتف:",
      "contact.country": "اليونان",
      "contact.returnsLabel": "لأي استفسار، راسلونا على",
      "contact.returnsPolicyLink": "اطّلع على سياسة الإرجاع الخاصة بنا",
      "contact.form.message": "الرسالة",
      "contact.form.submit": "إرسال الرسالة",
      "contact.form.success": "شكرًا لك! سنتواصل معك قريبًا.",

      "scar.eyebrow": "مشروع الندبة",
      "scar.heading": "كل ندبة تحمل قصة، فما هي قصتك؟",
      "scar.lede": "بعض الندوب ظاهرة، ومعظمها ليس كذلك. مشروع الندبة هو مجموعة متنامية من القصص الحقيقية لأشخاص حقيقيين حوّلوا الألم إلى قوة؛ يروونها بكلماتهم الخاصة، وفي وقتهم الخاص.",
      "scar.body": "هذا المشروع مجتمع تابع لـABÔ Atelier حيث يمكنك أن تشارك بأمان قصتك الشخصية المرتبطة بندبتك. وبإذنك، سيتم تحويل القصة إلى تقارير مكتوبة أو صور فوتوغرافية أو أفلام قصيرة، لإلهام الآخرين في رحلتهم الخاصة نحو الشفاء والبدايات الجديدة.",
      "scar.cta": "شارك قصتك",
      "scar.backHome": "→ العودة إلى الرئيسية",

      "wizard.eyebrow": "شارك ندبتك",
      "wizard.introHint": "قصتك ملك لك. وطريقة مشاركتها اختيارك.",
      "wizard.begin": "← ابدأ",
      "wizard.back": "→ رجوع",
      "wizard.continue": "← متابعة",
      "wizard.step01": "01 — قصتك",
      "wizard.requiredNote": "* مطلوب",
      "wizard.firstName": "الاسم الأول",
      "wizard.cityCountry": "المدينة / الدولة",
      "wizard.email": "البريد الإلكتروني",
      "wizard.emailNote": "يبقى سريًا",
      "wizard.storyQuestion": "أخبرنا عن قصتك",
      "wizard.storyHint": "شارك بقدر ما تشعر بالراحة لمشاركته.",
      "wizard.step02": "02 — اليوم",
      "wizard.step03": "03 — عنك",
      "wizard.todayQuestion": "ما القوة التي اكتشفتها من خلال ندبتك؟",
      "wizard.participationQuestion": "كيف تود مشاركة قصتك؟",
      "wizard.optionWritten": "قصة مكتوبة",
      "wizard.optionVideoByUs": "أرغب في الحصول على فيديو مجهول الهوية",
      "wizard.optionOwnVideo": "أرغب في إنشاء الفيديو الخاص بي بنفسي",
      "wizard.consentQuestion": "قبل الإرسال",
      "wizard.consentCheckbox": "أوافق على مراجعة ABÔ Atelier لمشاركتي.",
      "wizard.finePrint": "إرسال قصتك لا يمنح ABÔ Atelier تلقائيًا إذنًا بنشرها. إذا تم اختيار قصتك، سنتواصل معك عبر البريد الإلكتروني قبل النشر.",
      "wizard.reviewQuestion": "قصتك",
      "wizard.reviewHint": "خذ لحظة لمراجعة ما شاركته. يمكنك تعديل أي شيء قبل الإرسال.",
      "wizard.submit": "أرسل قصتي",
      "wizard.submitting": "جارٍ الإرسال…",
      "wizard.submitError": "حدث خطأ أثناء إرسال قصتك. يرجى المحاولة مرة أخرى.",
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
      "shop.introText": "كل قطعة من ABÔ Atelier تحمل الفكرة ذاتها: أن القوة يمكن أن تنبع من شيء صعب. وهي مصنوعة يدويًا من معادن ثمينة موثقة، تم اختبارها بعناية لضمان النقاء والجودة والأصالة.",
      "shop.comingSoon": "لا يزال يلتئم.<br>متوفر قريبًا.",
      "storyShowcase.showAll": "عرض جميع المنتجات",

      "cookieConsent.text": "خصوصيتك مهمة. نستخدم ملفات تعريف الارتباط لتشغيل موقعنا وتحليل حركة المرور. تعرّف على المزيد في <a href=\"privacy-policy.html\">سياسة الخصوصية</a> الخاصة بنا.",
      "cookieConsent.acceptAll": "قبول",
      "cookieConsent.rejectAll": "رفض",
      "cookieConsent.manageSettings": "إدارة الإعدادات",
      "cookieConsent.settingsTitle": "إعدادات ملفات تعريف الارتباط",
      "cookieConsent.necessaryLabel": "ضرورية",
      "cookieConsent.necessaryDesc": "ضرورية لعمل الموقع (السلة، اللغة). مفعّلة دائمًا.",
      "cookieConsent.analyticsLabel": "تحليلات",
      "cookieConsent.analyticsDesc": "تساعدنا على فهم حركة الموقع عبر Google Analytics.",
      "cookieConsent.savePreferences": "حفظ التفضيلات",

      "title.privacyPolicy": "سياسة الخصوصية — ABÔ Atelier",
      "privacyPolicy.title": "سياسة الخصوصية",
      "privacyPolicy.placeholder": "سياسة نموذجية — استبدل هذه الصفحة بسياسة الخصوصية الفعلية لـ ABÔ Atelier، بعد مراجعتها من قبل محامٍ، قبل الاعتماد عليها.",
      "privacyPolicy.dataHeading": "المعلومات التي نجمعها",
      "privacyPolicy.dataBody": "نجمع المعلومات التي تقدمها لنا مباشرة — مثل اسمك وبريدك الإلكتروني ورقم هاتفك عند الاشتراك في نشرتنا الإخبارية أو التواصل معنا أو تقديم طلب — والمعلومات التي يتم جمعها تلقائيًا عبر ملفات تعريف الارتباط (انظر أدناه).",
      "privacyPolicy.whatAreHeading": "ما هي ملفات تعريف الارتباط؟",
      "privacyPolicy.whatAreBody": "ملفات تعريف الارتباط هي بيانات صغيرة تُخزَّن على جهازك تساعد المواقع على العمل وفهم كيفية استخدامها.",
      "privacyPolicy.necessaryHeading": "ملفات تعريف الارتباط الضرورية",
      "privacyPolicy.necessaryBody": "هذه ضرورية لعمل الموقع بشكل صحيح — على سبيل المثال، لتذكر محتويات سلتك واللغة التي اخترتها. لا يمكن تعطيلها ولا تتعقبك عبر مواقع أخرى.",
      "privacyPolicy.analyticsHeading": "ملفات تعريف ارتباط التحليلات",
      "privacyPolicy.analyticsBody": "بموافقتك، نستخدم Google Analytics لفهم كيفية استخدام الزوار لموقعنا (الصفحات المُشاهَدة، الموقع العام، نوع الجهاز) لنتمكن من تحسينه. هذه البيانات مجهولة الهوية ولا تُباع أبدًا. يمكنك سحب موافقتك في أي وقت عن طريق مسح بيانات الموقع من متصفحك وزيارة الموقع مرة أخرى.",
      "privacyPolicy.ordersHeading": "الطلبات والمدفوعات",
      "privacyPolicy.ordersBody": "عند إجراء عملية شراء، تتم معالجة دفعتك بشكل آمن بواسطة Stripe. نحن لا نخزّن بيانات بطاقتك بأنفسنا. تحكم ممارسات الخصوصية الخاصة بـ Stripe كيفية التعامل مع معلومات الدفع الخاصة بك.",
      "privacyPolicy.rightsHeading": "حقوقك",
      "privacyPolicy.rightsBody": "بحسب موقعك، قد يكون لديك الحق في الوصول إلى بياناتك الشخصية التي نحتفظ بها أو تصحيحها أو حذفها أو تصديرها، وسحب موافقتك على ملفات تعريف ارتباط التحليلات في أي وقت. [أضف هنا بيانات جهة التحكم بالبيانات وأي حقوق إقليمية إضافية.]",
      "privacyPolicy.manageHeading": "إدارة تفضيلات ملفات تعريف الارتباط الخاصة بك",
      "privacyPolicy.manageBody": "يمكنك قبول أو رفض ملفات تعريف الارتباط غير الضرورية في أي وقت عبر شعار ملفات تعريف الارتباط الذي يظهر عند زيارتك الأولى، أو عن طريق مسح بيانات الموقع من متصفحك لرؤيته مرة أخرى.",
      "privacyPolicy.contactHeading": "اتصل بنا",
      "privacyPolicy.contactBody": "لأية أسئلة بخصوص هذه السياسة، تواصل معنا عبر صفحة",
      "privacyPolicy.contactBodyEnd": "الخاصة بنا.",

      "product.loading": "جارٍ التحميل…",
      "product.notFound": "لم نتمكن من العثور على هذه القطعة.",
      "product.returnToShop": "العودة إلى المتجر.",
      "product.backToShop": "→ العودة إلى المتجر",
      "product.enquire": "الاستفسار عن هذه القطعة",
      "product.chooseAmount": "اختر المبلغ",
      "product.enquireSubmit": "إرسال الاستفسار",

      "policy.title": "سياسة الإرجاع",
      "policy.contactHeading": "التواصل",
      "policy.contactBody": "لأي استفسارات بخصوص الإرجاع، يرجى التواصل معنا عبر صفحة",
      "policy.contactBodyEnd": ".",

      "notFound.title": "الصفحة غير موجودة",
      "notFound.body": "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
      "notFound.homeLink": "العودة إلى الصفحة الرئيسية",
      "notFound.shopLink": "زيارة المتجر",

      "title.home": "ABÔ Atelier — مجوهرات فاخرة",
      "title.shop": "المتجر — ABÔ Atelier",
      "title.scarProject": "مشروع الندبة — ABÔ Atelier",
      "title.shareStory": "شارك قصتك — مشروع الندبة — ABÔ Atelier",
      "title.returnPolicy": "سياسة الإرجاع — ABÔ Atelier",
      "title.notFound": "الصفحة غير موجودة — ABÔ Atelier",
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

    ["en", "fr", "ar"].forEach(function (code) {
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
