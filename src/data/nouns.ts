// 교재 명사의 성(관사)과 복수형.
// key = 관사 없는 단수형(교재 표기 그대로). g: m=der, f=die, n=das, pl=복수로만 쓰임
// pl: 복수형 전체 표기 (없으면 복수 잘 안 씀)
// bare: 보통 관사 없이 쓰는 말(나라·언어·요일·달 등) → 입력 시 관사 요구 안 함

export type Gender = "m" | "f" | "n" | "pl";
export type NounInfo = { g: Gender; pl?: string; bare?: boolean };

const m = (pl?: string): NounInfo => ({ g: "m", pl });
const f = (pl?: string): NounInfo => ({ g: "f", pl });
const n = (pl?: string): NounInfo => ({ g: "n", pl });
const plural = (): NounInfo => ({ g: "pl" });
const bareN: NounInfo = { g: "n", bare: true };
const bareM: NounInfo = { g: "m", bare: true };

export const NOUNS: Record<string, NounInfo> = {
  // BAND 1 · 알파벳
  Auto: n("Autos"),
  Baum: m("Bäume"),
  Dorf: n("Dörfer"),
  Ente: f("Enten"),
  Fenster: n("Fenster"),
  Geld: n(),
  Haus: n("Häuser"),
  Igel: m("Igel"),
  Jahr: n("Jahre"),
  Konto: n("Konten"),
  Lager: n("Lager"),
  Mann: m("Männer"),
  Nachmittag: m("Nachmittage"),
  Obst: n(),
  Post: f(),
  Quelle: f("Quellen"),
  Rat: m("Ratschläge"),
  Sprache: f("Sprachen"),
  Tasse: f("Tassen"),
  Uhr: f("Uhren"),
  Vater: m("Väter"),
  Wind: m("Winde"),
  Taxi: n("Taxis"),
  Yacht: f("Yachten"),
  Zoo: m("Zoos"),
  Käse: m(),
  Öl: n("Öle"),
  Übung: f("Übungen"),
  Fuß: m("Füße"),

  // 자기소개
  Name: m("Namen"),
  Vorname: m("Vornamen"),
  Nachname: m("Nachnamen"),
  Krankenschwester: f("Krankenschwestern"),
  Muttersprache: f("Muttersprachen"),
  Fremdsprache: f("Fremdsprachen"),

  // 나라 (관사 없이 씀, 예외: die Schweiz, die Türkei)
  Deutschland: bareN,
  Korea: bareN,
  Japan: bareN,
  China: bareN,
  Amerika: bareN,
  Frankreich: bareN,
  England: bareN,
  Österreich: bareN,
  Italien: bareN,
  Spanien: bareN,
  Schweiz: f(),
  Türkei: f(),

  // 언어 (관사 없이 씀)
  Deutsch: bareN,
  Englisch: bareN,
  Koreanisch: bareN,
  Japanisch: bareN,
  Chinesisch: bareN,
  Französisch: bareN,
  Italienisch: bareN,
  Türkisch: bareN,

  // 시간
  Minute: f("Minuten"),
  Stunde: f("Stunden"),
  Morgen: m("Morgen"),
  Mittag: m("Mittage"),
  Abend: m("Abende"),
  Nacht: f("Nächte"),
  Tag: m("Tage"),
  Woche: f("Wochen"),
  Monat: m("Monate"),
  Montag: bareM, Dienstag: bareM, Mittwoch: bareM, Donnerstag: bareM,
  Freitag: bareM, Samstag: bareM, Sonntag: bareM,
  Januar: bareM, Februar: bareM, März: bareM, April: bareM, Mai: bareM, Juni: bareM,
  Juli: bareM, August: bareM, September: bareM, Oktober: bareM, November: bareM, Dezember: bareM,

  // 장소
  Schule: f("Schulen"),
  Arbeit: f("Arbeiten"),
  Supermarkt: m("Supermärkte"),
  Bahnhof: m("Bahnhöfe"),
  Kino: n("Kinos"),
  Bank: f("Banken"),
  Krankenhaus: n("Krankenhäuser"),
  Hotel: n("Hotels"),
  Restaurant: n("Restaurants"),
  Apotheke: f("Apotheken"),
  Erdgeschoss: n("Erdgeschosse"),
  Abteilung: f("Abteilungen"),
  Geschäft: n("Geschäfte"),
  Markt: m("Märkte"),
  Park: m("Parks"),
  Museum: n("Museen"),
  Stadt: f("Städte"),

  // 음식
  Brot: n("Brote"),
  Fleisch: n(),
  Fisch: m("Fische"),
  Gemüse: n(),
  Salat: m("Salate"),
  Suppe: f("Suppen"),
  Wasser: n(),
  Kaffee: m("Kaffees"),
  Tee: m("Tees"),
  Milch: f(),
  Bier: n("Biere"),
  Wein: m("Weine"),
  Saft: m("Säfte"),
  Frühstück: n("Frühstücke"),
  Brötchen: n("Brötchen"),
  Lieblingsessen: n("Lieblingsessen"),
  Hunger: m(),
  Durst: m(),
  Speisekarte: f("Speisekarten"),
  Gericht: n("Gerichte"),
  Vorspeise: f("Vorspeisen"),
  Hauptgericht: n("Hauptgerichte"),
  Nachtisch: m("Nachtische"),
  Getränk: n("Getränke"),
  Rechnung: f("Rechnungen"),
  Apfel: m("Äpfel"),
  Ei: n("Eier"),
  Kuchen: m("Kuchen"),

  // 쇼핑
  Möbel: plural(),
  Preis: m("Preise"),
  Größe: f("Größen"),
  Farbe: f("Farben"),
  Stück: n("Stücke"),
  Flasche: f("Flaschen"),
  Packung: f("Packungen"),

  // 교통
  Bus: m("Busse"),
  Zug: m("Züge"),
  Fahrrad: n("Fahrräder"),
  Flugzeug: n("Flugzeuge"),
  Straßenbahn: f("Straßenbahnen"),
  "U-Bahn": f("U-Bahnen"),
  Motorrad: n("Motorräder"),
  Schiff: n("Schiffe"),
  Kreuzung: f("Kreuzungen"),
  Ampel: f("Ampeln"),
  Brücke: f("Brücken"),
  Straße: f("Straßen"),

  // 집
  Wohnung: f("Wohnungen"),
  Zimmer: n("Zimmer"),
  Wohnzimmer: n("Wohnzimmer"),
  Schlafzimmer: n("Schlafzimmer"),
  Küche: f("Küchen"),
  Badezimmer: n("Badezimmer"),
  Arbeitszimmer: n("Arbeitszimmer"),
  Kinderzimmer: n("Kinderzimmer"),
  Sofa: n("Sofas"),
  Tisch: m("Tische"),
  Stuhl: m("Stühle"),
  Bett: n("Betten"),
  Schrank: m("Schränke"),
  Flur: m("Flure"),
  Balkon: m("Balkone"),
  Terrasse: f("Terrassen"),
  Garten: m("Gärten"),
  Garage: f("Garagen"),
  Lampe: f("Lampen"),

  // 날씨
  Brief: m("Briefe"),
  Sonne: f(),
  Regen: m(),
  Schnee: m(),
  Wolke: f("Wolken"),
  Grad: m("Grad"),
  Wetter: n(),

  // 몸
  Kopf: m("Köpfe"),
  Gesicht: n("Gesichter"),
  Nase: f("Nasen"),
  Mund: m("Münder"),
  Auge: n("Augen"),
  Ohr: n("Ohren"),
  Hand: f("Hände"),
  Arm: m("Arme"),
  Bein: n("Beine"),
  Hals: m("Hälse"),
  Bauch: m("Bäuche"),
  Rücken: m("Rücken"),
  Finger: m("Finger"),
  Knie: n("Knie"),
  Zahn: m("Zähne"),
  Haar: n("Haare"),
  Haare: plural(),
  Lippen: plural(),
  Zunge: f("Zungen"),
  Oberschenkel: m("Oberschenkel"),
  Schmerzen: plural(),
  Kopfschmerz: m("Kopfschmerzen"),
  Bauchschmerz: m("Bauchschmerzen"),
  Rückenschmerz: m("Rückenschmerzen"),
  Kopfschmerzen: plural(),
  Bauchschmerzen: plural(),
  Rückenschmerzen: plural(),
  Fieber: n(),
  Husten: m(),
  Schnupfen: m(),
  Magen: m("Mägen"),
  Brille: f("Brillen"),
  Locken: plural(),
  Arzt: m("Ärzte"),
  Ärztin: f("Ärztinnen"),

  // 사람·가족
  Frau: f("Frauen"),
  Kind: n("Kinder"),
  Mutter: f("Mütter"),
  Bruder: m("Brüder"),
  Schwester: f("Schwestern"),
  Eltern: plural(),
  Geschwister: plural(),
  Freund: m("Freunde"),
  Freundin: f("Freundinnen"),
  Onkel: m("Onkel"),
  Tante: f("Tanten"),
  Oma: f("Omas"),
  Opa: m("Opas"),

  // 물건
  Handy: n("Handys"),
  Pass: m("Pässe"),
  Buch: n("Bücher"),
  Tasche: f("Taschen"),
  Schlüssel: m("Schlüssel"),
  Computer: m("Computer"),
  Kuli: m("Kulis"),
  Heft: n("Hefte"),
  Platz: m("Plätze"),
  Ticket: n("Tickets"),
  Fahrkarte: f("Fahrkarten"),
  Termin: m("Termine"),
  Urlaub: m("Urlaube"),
  Hobby: n("Hobbys"),
  Sport: m(),
  Musik: f(),
  Film: m("Filme"),
};

export const ARTICLE: Record<Gender, string> = { m: "der", f: "die", n: "das", pl: "die" };

const ARTICLE_RE = /^(der|die|das)\s+(.+)$/;

/** "das Auto" 또는 "Auto" → 명사 정보. 명사가 아니면 null */
export function lookupNoun(german: string): { bare: string; info: NounInfo; article: string } | null {
  const t = german.trim();
  const m = t.match(ARTICLE_RE);
  const bare = m ? m[2] : t;
  const info = NOUNS[bare];
  if (info) return { bare, info, article: ARTICLE[info.g] };
  // 교재에 관사와 함께 적혀 있지만 사전에 없는 명사
  if (m && /^[A-ZÄÖÜ]\S*$/.test(bare)) {
    const g: Gender = m[1] === "der" ? "m" : m[1] === "das" ? "n" : "f";
    return { bare, info: { g }, article: m[1] };
  }
  return null;
}
