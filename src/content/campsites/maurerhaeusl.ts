import type { CampsiteConfig } from "../types";

const IMG = "/campsites/maurerhaeusl";

const maurerhaeusl: CampsiteConfig = {
  name: "Naturcamping Maurerhäusl",
  shortName: "Maurerhäusl",
  slug: "maurerhaeusl",
  ort: "Hochfilzen",
  region: "Tirol",
  brandKind: "Naturcamping",
  regionLong: "PillerseeTal · Tirol · Österreich",

  heroVariant: "center",

  claim: "Eine Perle in der Natur — am Fuße der Buchensteinwand",
  claimEmphasis: "Perle in der Natur",
  emailDetail: "euer kleiner Bauernhof mit Pony, Ziegen und Hühnern",
  intro:
    "Außerhalb vom Biathlondorf Hochfilzen, am Fuße der Buchensteinwand, findest du unseren kleinen, familiär geführten Naturcampingplatz — ruhig, naturbelassen und mit herrlichem Blick auf die Tiroler Bergwelt.",

  logo: { src: `${IMG}/logo.png`, alt: "Naturcamping Maurerhäusl Logo" },

  statement: {
    text: "Nach dem Motto „weniger ist mehr“ findest du am Maurerhäusl zurück zur Natur — fernab vom Alltagsstress.",
    emphasis: "weniger ist mehr",
  },

  pillars: [
    { title: "Am Fuße der Berge", text: "Der Platz liegt am Fuße der Buchensteinwand — ringsum nur Wiesen, Wald und die Tiroler Bergwelt.", image: { src: `${IMG}/haus-berg.webp`, alt: "Wohnwagen zwischen Blumenwiese und Bergwald am Naturcamping Maurerhäusl im Sommer" } },
    { title: "Mitten in der Wiese", text: "Ebene Stellplätze mitten in der Blumenwiese, kurze Wege und viel Platz zum Durchatmen.", image: { src: `${IMG}/blumenwiese.webp`, alt: "Blühende Wiese mit Wohnwagen vor den Bergen am Maurerhäusl" } },
    { title: "Ein kleiner Bauernhof", text: "Pony Moritz, Ziegen, Schafe und Hühner gehören dazu — Landwirtschaft zum Anfassen.", image: { src: `${IMG}/pony-moritz.webp`, alt: "Pony Moritz auf der Wiese am Maurerhäusl" } },
  ],

  usps: ["36 Stellplätze mit Strom", "Täglicher Brötchenservice", "Gasverkauf am Platz", "Hunde willkommen", "Ruhige Naturlage"],

  trust: {
    heading: "Klein, ruhig und ganz nah an der Natur",
    headingEmphasis: "nah an der Natur",
    intro:
      "Hier zählt nicht die Masse, sondern die Ruhe: ein familiär geführter Platz mit rund 36 Stellplätzen, eigenen Tieren am Hof und Rad- und Wanderwegen, die direkt am Platz vorbeiführen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-luftbild.webp`, alt: "Luftaufnahme des Naturcamping Maurerhäusl im Tal vor verschneiten Gipfeln" },
  },

  breather: {
    image: { src: `${IMG}/abend-berge.webp`, alt: "Dramatische Gewitterstimmung mit Blitz über dem Naturcamping Maurerhäusl und dem PillerseeTal" },
    line: "Abende mit Blick auf die Tiroler Bergwelt.",
  },

  camping: {
    heading: "Camping am Maurerhäusl",
    intro:
      "Rund 36 ebene Stellplätze mit Strom, gepflegte Sanitäranlagen mit Duschen und Waschraum, täglicher Brötchenservice und Gasverkauf — alles für entspannte Tage in der Natur.",
    features: [
      { title: "Stellplätze mit Bergblick", text: "Ebene Wiesenplätze mit Stromanschluss (13 Ampere) — und morgens der Blick auf die umliegenden Berge.", image: { src: `${IMG}/stellplaetze.webp`, alt: "Blick über die Stellplätze des Maurerhäusl mit Bergpanorama" } },
      { title: "Eingebettet ins Tal", text: "Der Platz liegt ruhig im Tal, abseits vom Trubel — rundum nur Wiesen, Wald und Tiroler Bergwelt.", image: { src: `${IMG}/lage-tal.webp`, alt: "Luftbild der Lage des Maurerhäusl im PillerseeTal" } },
      { title: "Empfang & Brötchen", text: "An der Rezeption wirst du persönlich begrüßt — frische Brötchen gibt es jeden Morgen auf Bestellung.", image: { src: `${IMG}/rezeption.webp`, alt: "Rezeption und Eingang des Maurerhäusl mit Blumen" } },
      { title: "Mittendrin in der Natur", text: "Zwischen Wiese und Wald stehst du hier wirklich in der Natur — mit Tieren als ruhigen Nachbarn.", image: { src: `${IMG}/natur.webp`, alt: "Naturnaher Blick über die Wiese mit grasenden Tieren am Maurerhäusl" } },
      { title: "Auch im Winter dabei", text: "Mit Gasverkauf am Platz bist du auch für die kalte Jahreszeit gerüstet — Wintercamping inklusive.", image: { src: `${IMG}/wintercamping.webp`, alt: "Verschneites Maurerhäusl im Winter mit Räumfahrzeug" } },
      { title: "Plätze zum Durchatmen", text: "Kein Massentourismus, kein Lärm — nur ein kleiner Platz, an dem du wirklich zur Ruhe kommst.", image: { src: `${IMG}/ruhebank.webp`, alt: "Holzbank mit Herz und Blick auf den Campingplatz Maurerhäusl" } },
    ],
  },

  kinder: {
    heading: "Tiere, Wiese und jede Menge Platz",
    intro:
      "Unsere kleinen Gäste lieben die Tiere und das freie Spielen in der Natur — Pony Moritz, Ziegen, Schafe und Hühner gehören zur Familie.",
    features: [
      { title: "Ponys am Wiesensee", text: "Am nahen Wiesensee grasen unsere Ponys — über den Rad- und Wanderweg ist er in wenigen Minuten erreicht.", image: { src: `${IMG}/wiesensee-ponys.webp`, alt: "Kinder und Ponys am Wiesensee nahe dem Maurerhäusl" } },
      { title: "Unsere Ziegen", text: "Unsere Ziegen sind echte Kletterkünstler — nach Absprache zeigen wir den Kindern gern alle Tiere am Hof.", image: { src: `${IMG}/ziege.webp`, alt: "Ziege im Felsen am Maurerhäusl" } },
    ],
  },

  aktivitaeten: {
    heading: "Freizeit im PillerseeTal",
    intro:
      "Rad-, Wander- und Reitwege führen direkt am Platz vorbei, der Wiesensee mit Kneippanlage liegt nur Minuten entfernt — und im Winter startet die Langlaufloipe fast vor der Tür.",
    items: [
      { title: "Wiesensee & Kneippanlage", text: "Wiesensee mit Kneippanlage und Naturkletterwand — über den Wanderweg in wenigen Minuten erreicht.", image: { src: `${IMG}/wiesensee.webp`, alt: "Stiller See mit Schilf und Bergen im PillerseeTal" } },
      { title: "Langlaufen am Platz", text: "Die Langlaufloipe führt fast direkt am Haus vorbei — schneesicher von Ende November bis nach Ostern.", image: { src: `${IMG}/langlauf-loipe.webp`, alt: "Langlaufloipe direkt am verschneiten Maurerhäusl" } },
      { title: "Ski & Winterwandern", text: "Das Skigebiet Buchensteinwand ist in Minuten erreicht — dazu Winterwandern und Tourengehen ringsum.", image: { src: `${IMG}/winter-panorama.webp`, alt: "Verschneite Bergkulisse über dem PillerseeTal" } },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Unterwarming",
    modes: [
      { title: "Mit dem Auto", text: "Über die A12 Inntalautobahn ins PillerseeTal nach Hochfilzen, dann Richtung Unterwarming — Anreise ab 13 Uhr möglich." },
      { title: "Mit der Bahn", text: "Der Bahnhof Hochfilzen liegt an der Linie Wörgl–Salzburg, von dort sind es nur wenige Minuten zum Platz." },
      { title: "Mit dem Flugzeug", text: "Die Flughäfen Innsbruck und Salzburg liegen jeweils rund eine Autostunde entfernt." },
    ],
  },

  galerie: {
    heading: "Vom Sommer bis tief in den Winter",
    headingEmphasis: "tief in den Winter",
    intro:
      "Blühende Wiesen im Sommer, ein Regenbogen über dem Platz und tief verschneite Berge — ein paar Eindrücke rund ums Maurerhäusl.",
    tag: "Sommer & Winter",
    moreCount: 30,
    images: [
      { src: `${IMG}/sommerwiese.webp`, alt: "Luftaufnahme des Naturcamping Maurerhäusl mit Haus und Stellplätzen am Fuße der Tiroler Bergwälder" },
      { src: `${IMG}/regenbogen.webp`, alt: "Regenbogen über dem Campingplatz Maurerhäusl" },
      { src: `${IMG}/winter-berge.webp`, alt: "Verschneite Bergkulisse rund um Hochfilzen" },
      { src: `${IMG}/huehner.webp`, alt: "Frei laufende Hühner auf der Wiese am Maurerhäusl" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in der Natur",
    headingEmphasis: "in der Natur",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Bauer meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtwerte Vorsaison 2026 · Stellplatz € 14 zzgl. € 10 pro Erwachsenem (hier für 2 Pers.), Wohnmobilstellplatz € 33 inkl. 2 Personen · zzgl. Kurtaxe € 3,90 pro Person/Nacht (ab 15 J.), Umweltbeitrag € 4 pro Platz/Tag und Strom € 1/kWh · Kinder (0–12 J.) € 7.",
    highlight: { title: "Strom an jedem Platz", text: "Rund 36 Stellplätze mit Stromanschluss (13 Ampere), dazu Gasverkauf direkt am Platz." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 10 },
      { id: "wohnmobil", label: "Wohnmobilstellplatz", perNight: 33, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    tel: "+43 664 206 92 02",
    telHref: "tel:+436642069202",
    mail: "office@maurerhaeusl.com",
    facebook: "https://www.facebook.com/Naturcamping-Maurerhäusl-Hochfilzen-351667445263189/",
    adresse: "Unterwarming 3 · 6395 Hochfilzen · Tirol",
    coords: { lat: 47.48702, lng: 12.610693 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Service", href: "#camping" },
    ]},
    { label: "Tiere & Kinder", href: "#kinder" },
    { label: "Freizeit", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default maurerhaeusl;
