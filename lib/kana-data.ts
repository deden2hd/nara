export type KanaType = "hiragana" | "katakana"

export interface KanaChar {
  char: string
  romaji: string
  row: string
  type: string
  steps: string[]
}

export interface QuizConfig {
  selectedTypes: string[]
  selectedRows: string[]
  kanaType: KanaType
}

export interface SRSData {
  [char: string]: {
    correct: number
    incorrect: number
    lastReviewed?: string
  }
}

export interface QuizItem {
  kana: string
  correctRomaji: string
  options: string[]
  charObject: KanaChar
}

export interface ContextWord {
  chars: string[]
  word: string
  meaning: string
}

export const CONSONANT_ROWS = [
  { id: "a", name: "Baris Vokal (A)" },
  { id: "k", name: "Baris K/G (Ka, Ga)" },
  { id: "s", name: "Baris S/Z (Sa, Za)" },
  { id: "t", name: "Baris T/D (Ta, Da)" },
  { id: "n", name: "Baris N (Na)" },
  { id: "h", name: "Baris H/B/P (Ha, Ba, Pa)" },
  { id: "m", name: "Baris M (Ma)" },
  { id: "y", name: "Baris Y (Ya)" },
  { id: "r", name: "Baris R (Ra)" },
  { id: "w", name: "Baris W (Wa, Wo)" },
  { id: "n_char", name: "N Tunggal (ん/ン)" },
]

export const KANA_TYPES = [
  { id: "plain", name: "Polos (Seion)" },
  { id: "tenten", name: "Tenten/Dakuon (G, Z, D, B)" },
  { id: "maru", name: "Maru/Handakuon (P)" },
  { id: "yoon", name: "Yōon (Kombinasi Kecil)" },
  { id: "yoon_tenten", name: "Yōon + Tenten (Gya, Ju)" },
  { id: "yoon_maru", name: "Yōon + Maru (Pya)" },
]

export const CONTEXT_WORDS: ContextWord[] = [
  { chars: ["あ", "か"], word: "あか (Aka)", meaning: "Merah" },
  { chars: ["い", "ぬ"], word: "いぬ (Inu)", meaning: "Anjing" },
  { chars: ["う", "え"], word: "うえ (Ue)", meaning: "Atas" },
  { chars: ["お", "と"], word: "おと (Oto)", meaning: "Suara" },
  { chars: ["き", "く"], word: "きく (Kiku)", meaning: "Mendengar" },
  { chars: ["さ", "け"], word: "さけ (Sake)", meaning: "Minuman Keras Jepang" },
  { chars: ["た", "べ"], word: "たべる (Taberu)", meaning: "Makan" },
  { chars: ["に", "ほ", "ん"], word: "にほん (Nihon)", meaning: "Jepang" },
  { chars: ["へ", "や"], word: "へや (Heya)", meaning: "Kamar" },
  { chars: ["み", "ず"], word: "みず (Mizu)", meaning: "Air" },
]

const HIRAGANA_BASE: KanaChar[] = [
  {
    char: "あ",
    romaji: "a",
    row: "a",
    type: "plain",
    steps: ["Garis horizontal", "Garis miring, belok ke atas", "Lingkaran di bawah"],
  },
  { char: "い", romaji: "i", row: "a", type: "plain", steps: ["Garis miring kiri", "Garis miring kanan"] },
  {
    char: "う",
    romaji: "u",
    row: "a",
    type: "plain",
    steps: ["Garis pendek di atas", "Garis panjang vertikal dengan belokan"],
  },
  { char: "え", romaji: "e", row: "a", type: "plain", steps: ["Garis horizontal pendek", "Garis miring ke bawah"] },
  { char: "お", romaji: "o", row: "a", type: "plain", steps: ["Garis horizontal", "Garis vertikal dengan belokan"] },
  { char: "か", romaji: "ka", row: "k", type: "plain", steps: [] },
  { char: "き", romaji: "ki", row: "k", type: "plain", steps: [] },
  { char: "く", romaji: "ku", row: "k", type: "plain", steps: [] },
  { char: "け", romaji: "ke", row: "k", type: "plain", steps: [] },
  { char: "こ", romaji: "ko", row: "k", type: "plain", steps: [] },
  { char: "さ", romaji: "sa", row: "s", type: "plain", steps: [] },
  { char: "し", romaji: "shi", row: "s", type: "plain", steps: [] },
  { char: "す", romaji: "su", row: "s", type: "plain", steps: [] },
  { char: "せ", romaji: "se", row: "s", type: "plain", steps: [] },
  { char: "そ", romaji: "so", row: "s", type: "plain", steps: [] },
  { char: "た", romaji: "ta", row: "t", type: "plain", steps: [] },
  { char: "ち", romaji: "chi", row: "t", type: "plain", steps: [] },
  { char: "つ", romaji: "tsu", row: "t", type: "plain", steps: [] },
  { char: "て", romaji: "te", row: "t", type: "plain", steps: [] },
  { char: "と", romaji: "to", row: "t", type: "plain", steps: [] },
  { char: "な", romaji: "na", row: "n", type: "plain", steps: [] },
  { char: "に", romaji: "ni", row: "n", type: "plain", steps: [] },
  { char: "ぬ", romaji: "nu", row: "n", type: "plain", steps: [] },
  { char: "ね", romaji: "ne", row: "n", type: "plain", steps: [] },
  { char: "の", romaji: "no", row: "n", type: "plain", steps: [] },
  { char: "は", romaji: "ha", row: "h", type: "plain", steps: [] },
  { char: "ひ", romaji: "hi", row: "h", type: "plain", steps: [] },
  { char: "ふ", romaji: "fu", row: "h", type: "plain", steps: [] },
  { char: "へ", romaji: "he", row: "h", type: "plain", steps: [] },
  { char: "ほ", romaji: "ho", row: "h", type: "plain", steps: [] },
  { char: "ま", romaji: "ma", row: "m", type: "plain", steps: [] },
  { char: "み", romaji: "mi", row: "m", type: "plain", steps: [] },
  { char: "む", romaji: "mu", row: "m", type: "plain", steps: [] },
  { char: "め", romaji: "me", row: "m", type: "plain", steps: [] },
  { char: "も", romaji: "mo", row: "m", type: "plain", steps: [] },
  { char: "や", romaji: "ya", row: "y", type: "plain", steps: [] },
  { char: "ゆ", romaji: "yu", row: "y", type: "plain", steps: [] },
  { char: "よ", romaji: "yo", row: "y", type: "plain", steps: [] },
  { char: "ら", romaji: "ra", row: "r", type: "plain", steps: [] },
  { char: "り", romaji: "ri", row: "r", type: "plain", steps: [] },
  { char: "る", romaji: "ru", row: "r", type: "plain", steps: [] },
  { char: "れ", romaji: "re", row: "r", type: "plain", steps: [] },
  { char: "ろ", romaji: "ro", row: "r", type: "plain", steps: [] },
  { char: "わ", romaji: "wa", row: "w", type: "plain", steps: [] },
  { char: "を", romaji: "wo", row: "w", type: "plain", steps: [] },
  { char: "ん", romaji: "n", row: "n_char", type: "plain", steps: [] },
]

const HIRAGANA_TENTEN: KanaChar[] = [
  { char: "が", romaji: "ga", row: "k", type: "tenten", steps: [] },
  { char: "ぎ", romaji: "gi", row: "k", type: "tenten", steps: [] },
  { char: "ぐ", romaji: "gu", row: "k", type: "tenten", steps: [] },
  { char: "げ", romaji: "ge", row: "k", type: "tenten", steps: [] },
  { char: "ご", romaji: "go", row: "k", type: "tenten", steps: [] },
  { char: "ざ", romaji: "za", row: "s", type: "tenten", steps: [] },
  { char: "じ", romaji: "ji", row: "s", type: "tenten", steps: [] },
  { char: "ず", romaji: "zu", row: "s", type: "tenten", steps: [] },
  { char: "ぜ", romaji: "ze", row: "s", type: "tenten", steps: [] },
  { char: "ぞ", romaji: "zo", row: "s", type: "tenten", steps: [] },
  { char: "だ", romaji: "da", row: "t", type: "tenten", steps: [] },
  { char: "ぢ", romaji: "ji", row: "t", type: "tenten", steps: [] },
  { char: "づ", romaji: "zu", row: "t", type: "tenten", steps: [] },
  { char: "で", romaji: "de", row: "t", type: "tenten", steps: [] },
  { char: "ど", romaji: "do", row: "t", type: "tenten", steps: [] },
  { char: "ば", romaji: "ba", row: "h", type: "tenten", steps: [] },
  { char: "び", romaji: "bi", row: "h", type: "tenten", steps: [] },
  { char: "ぶ", romaji: "bu", row: "h", type: "tenten", steps: [] },
  { char: "べ", romaji: "be", row: "h", type: "tenten", steps: [] },
  { char: "ぼ", romaji: "bo", row: "h", type: "tenten", steps: [] },
]

const HIRAGANA_MARU: KanaChar[] = [
  { char: "ぱ", romaji: "pa", row: "h", type: "maru", steps: [] },
  { char: "ぴ", romaji: "pi", row: "h", type: "maru", steps: [] },
  { char: "ぷ", romaji: "pu", row: "h", type: "maru", steps: [] },
  { char: "ぺ", romaji: "pe", row: "h", type: "maru", steps: [] },
  { char: "ぽ", romaji: "po", row: "h", type: "maru", steps: [] },
]

const HIRAGANA_YOON: KanaChar[] = [
  { char: "きゃ", romaji: "kya", row: "k", type: "yoon", steps: [] },
  { char: "きゅ", romaji: "kyu", row: "k", type: "yoon", steps: [] },
  { char: "きょ", romaji: "kyo", row: "k", type: "yoon", steps: [] },
  { char: "しゃ", romaji: "sha", row: "s", type: "yoon", steps: [] },
  { char: "しゅ", romaji: "shu", row: "s", type: "yoon", steps: [] },
  { char: "しょ", romaji: "sho", row: "s", type: "yoon", steps: [] },
  { char: "ちゃ", romaji: "cha", row: "t", type: "yoon", steps: [] },
  { char: "ちゅ", romaji: "chu", row: "t", type: "yoon", steps: [] },
  { char: "ちょ", romaji: "cho", row: "t", type: "yoon", steps: [] },
  { char: "にゃ", romaji: "nya", row: "n", type: "yoon", steps: [] },
  { char: "にゅ", romaji: "nyu", row: "n", type: "yoon", steps: [] },
  { char: "にょ", romaji: "nyo", row: "n", type: "yoon", steps: [] },
  { char: "ひゃ", romaji: "hya", row: "h", type: "yoon", steps: [] },
  { char: "ひゅ", romaji: "hyu", row: "h", type: "yoon", steps: [] },
  { char: "ひょ", romaji: "hyo", row: "h", type: "yoon", steps: [] },
  { char: "みゃ", romaji: "mya", row: "m", type: "yoon", steps: [] },
  { char: "みゅ", romaji: "myu", row: "m", type: "yoon", steps: [] },
  { char: "みょ", romaji: "myo", row: "m", type: "yoon", steps: [] },
  { char: "りゃ", romaji: "rya", row: "r", type: "yoon", steps: [] },
  { char: "りゅ", romaji: "ryu", row: "r", type: "yoon", steps: [] },
  { char: "りょ", romaji: "ryo", row: "r", type: "yoon", steps: [] },
]

const HIRAGANA_YOON_TENTEN: KanaChar[] = [
  { char: "ぎゃ", romaji: "gya", row: "k", type: "yoon_tenten", steps: [] },
  { char: "ぎゅ", romaji: "gyu", row: "k", type: "yoon_tenten", steps: [] },
  { char: "ぎょ", romaji: "gyo", row: "k", type: "yoon_tenten", steps: [] },
  { char: "じゃ", romaji: "ja", row: "s", type: "yoon_tenten", steps: [] },
  { char: "じゅ", romaji: "ju", row: "s", type: "yoon_tenten", steps: [] },
  { char: "じょ", romaji: "jo", row: "s", type: "yoon_tenten", steps: [] },
  { char: "びゃ", romaji: "bya", row: "h", type: "yoon_tenten", steps: [] },
  { char: "びゅ", romaji: "byu", row: "h", type: "yoon_tenten", steps: [] },
  { char: "びょ", romaji: "byo", row: "h", type: "yoon_tenten", steps: [] },
]

const HIRAGANA_YOON_MARU: KanaChar[] = [
  { char: "ぴゃ", romaji: "pya", row: "h", type: "yoon_maru", steps: [] },
  { char: "ぴゅ", romaji: "pyu", row: "h", type: "yoon_maru", steps: [] },
  { char: "ぴょ", romaji: "pyo", row: "h", type: "yoon_maru", steps: [] },
]

const KATAKANA_BASE: KanaChar[] = [
  { char: "ア", romaji: "a", row: "a", type: "plain", steps: ["Garis horizontal", "Garis vertikal miring"] },
  { char: "イ", romaji: "i", row: "a", type: "plain", steps: ["Dua goresan miring sejajar"] },
  { char: "ウ", romaji: "u", row: "a", type: "plain", steps: ["Garis pendek atas", "Garis melengkung ke bawah"] },
  { char: "エ", romaji: "e", row: "a", type: "plain", steps: ["Garis horizontal atas", "Garis horizontal bawah"] },
  { char: "オ", romaji: "o", row: "a", type: "plain", steps: ["Garis horizontal", "Garis vertikal dan miring"] },
  { char: "カ", romaji: "ka", row: "k", type: "plain", steps: [] },
  { char: "キ", romaji: "ki", row: "k", type: "plain", steps: [] },
  { char: "ク", romaji: "ku", row: "k", type: "plain", steps: [] },
  { char: "ケ", romaji: "ke", row: "k", type: "plain", steps: [] },
  { char: "コ", romaji: "ko", row: "k", type: "plain", steps: [] },
  { char: "サ", romaji: "sa", row: "s", type: "plain", steps: [] },
  { char: "シ", romaji: "shi", row: "s", type: "plain", steps: [] },
  { char: "ス", romaji: "su", row: "s", type: "plain", steps: [] },
  { char: "セ", romaji: "se", row: "s", type: "plain", steps: [] },
  { char: "ソ", romaji: "so", row: "s", type: "plain", steps: [] },
  { char: "タ", romaji: "ta", row: "t", type: "plain", steps: [] },
  { char: "チ", romaji: "chi", row: "t", type: "plain", steps: [] },
  { char: "ツ", romaji: "tsu", row: "t", type: "plain", steps: [] },
  { char: "テ", romaji: "te", row: "t", type: "plain", steps: [] },
  { char: "ト", romaji: "to", row: "t", type: "plain", steps: [] },
  { char: "ナ", romaji: "na", row: "n", type: "plain", steps: [] },
  { char: "ニ", romaji: "ni", row: "n", type: "plain", steps: [] },
  { char: "ヌ", romaji: "nu", row: "n", type: "plain", steps: [] },
  { char: "ネ", romaji: "ne", row: "n", type: "plain", steps: [] },
  { char: "ノ", romaji: "no", row: "n", type: "plain", steps: [] },
  { char: "ハ", romaji: "ha", row: "h", type: "plain", steps: [] },
  { char: "ヒ", romaji: "hi", row: "h", type: "plain", steps: [] },
  { char: "フ", romaji: "fu", row: "h", type: "plain", steps: [] },
  { char: "ヘ", romaji: "he", row: "h", type: "plain", steps: [] },
  { char: "ホ", romaji: "ho", row: "h", type: "plain", steps: [] },
  { char: "マ", romaji: "ma", row: "m", type: "plain", steps: [] },
  { char: "ミ", romaji: "mi", row: "m", type: "plain", steps: [] },
  { char: "ム", romaji: "mu", row: "m", type: "plain", steps: [] },
  { char: "メ", romaji: "me", row: "m", type: "plain", steps: [] },
  { char: "モ", romaji: "mo", row: "m", type: "plain", steps: [] },
  { char: "ヤ", romaji: "ya", row: "y", type: "plain", steps: [] },
  { char: "ユ", romaji: "yu", row: "y", type: "plain", steps: [] },
  { char: "ヨ", romaji: "yo", row: "y", type: "plain", steps: [] },
  { char: "ラ", romaji: "ra", row: "r", type: "plain", steps: [] },
  { char: "リ", romaji: "ri", row: "r", type: "plain", steps: [] },
  { char: "ル", romaji: "ru", row: "r", type: "plain", steps: [] },
  { char: "レ", romaji: "re", row: "r", type: "plain", steps: [] },
  { char: "ロ", romaji: "ro", row: "r", type: "plain", steps: [] },
  { char: "ワ", romaji: "wa", row: "w", type: "plain", steps: [] },
  { char: "ヲ", romaji: "wo", row: "w", type: "plain", steps: [] },
  { char: "ン", romaji: "n", row: "n_char", type: "plain", steps: [] },
]

const KATAKANA_TENTEN: KanaChar[] = [
  { char: "ガ", romaji: "ga", row: "k", type: "tenten", steps: [] },
  { char: "ギ", romaji: "gi", row: "k", type: "tenten", steps: [] },
  { char: "グ", romaji: "gu", row: "k", type: "tenten", steps: [] },
  { char: "ゲ", romaji: "ge", row: "k", type: "tenten", steps: [] },
  { char: "ゴ", romaji: "go", row: "k", type: "tenten", steps: [] },
  { char: "ザ", romaji: "za", row: "s", type: "tenten", steps: [] },
  { char: "ジ", romaji: "ji", row: "s", type: "tenten", steps: [] },
  { char: "ズ", romaji: "zu", row: "s", type: "tenten", steps: [] },
  { char: "ゼ", romaji: "ze", row: "s", type: "tenten", steps: [] },
  { char: "ゾ", romaji: "zo", row: "s", type: "tenten", steps: [] },
  { char: "ダ", romaji: "da", row: "t", type: "tenten", steps: [] },
  { char: "ヂ", romaji: "ji", row: "t", type: "tenten", steps: [] },
  { char: "ヅ", romaji: "zu", row: "t", type: "tenten", steps: [] },
  { char: "デ", romaji: "de", row: "t", type: "tenten", steps: [] },
  { char: "ド", romaji: "do", row: "t", type: "tenten", steps: [] },
  { char: "バ", romaji: "ba", row: "h", type: "tenten", steps: [] },
  { char: "ビ", romaji: "bi", row: "h", type: "tenten", steps: [] },
  { char: "ブ", romaji: "bu", row: "h", type: "tenten", steps: [] },
  { char: "ベ", romaji: "be", row: "h", type: "tenten", steps: [] },
  { char: "ボ", romaji: "bo", row: "h", type: "tenten", steps: [] },
]

const KATAKANA_MARU: KanaChar[] = [
  { char: "パ", romaji: "pa", row: "h", type: "maru", steps: [] },
  { char: "ピ", romaji: "pi", row: "h", type: "maru", steps: [] },
  { char: "プ", romaji: "pu", row: "h", type: "maru", steps: [] },
  { char: "ペ", romaji: "pe", row: "h", type: "maru", steps: [] },
  { char: "ポ", romaji: "po", row: "h", type: "maru", steps: [] },
]

const KATAKANA_YOON: KanaChar[] = [
  { char: "キャ", romaji: "kya", row: "k", type: "yoon", steps: [] },
  { char: "キュ", romaji: "kyu", row: "k", type: "yoon", steps: [] },
  { char: "キョ", romaji: "kyo", row: "k", type: "yoon", steps: [] },
  { char: "シャ", romaji: "sha", row: "s", type: "yoon", steps: [] },
  { char: "シュ", romaji: "shu", row: "s", type: "yoon", steps: [] },
  { char: "ショ", romaji: "sho", row: "s", type: "yoon", steps: [] },
  { char: "チャ", romaji: "cha", row: "t", type: "yoon", steps: [] },
  { char: "チュ", romaji: "chu", row: "t", type: "yoon", steps: [] },
  { char: "チョ", romaji: "cho", row: "t", type: "yoon", steps: [] },
  { char: "ニャ", romaji: "nya", row: "n", type: "yoon", steps: [] },
  { char: "ニュ", romaji: "nyu", row: "n", type: "yoon", steps: [] },
  { char: "ニョ", romaji: "nyo", row: "n", type: "yoon", steps: [] },
  { char: "ヒャ", romaji: "hya", row: "h", type: "yoon", steps: [] },
  { char: "ヒュ", romaji: "hyu", row: "h", type: "yoon", steps: [] },
  { char: "ヒョ", romaji: "hyo", row: "h", type: "yoon", steps: [] },
  { char: "ミャ", romaji: "mya", row: "m", type: "yoon", steps: [] },
  { char: "ミュ", romaji: "myu", row: "m", type: "yoon", steps: [] },
  { char: "ミョ", romaji: "myo", row: "m", type: "yoon", steps: [] },
  { char: "リャ", romaji: "rya", row: "r", type: "yoon", steps: [] },
  { char: "リュ", romaji: "ryu", row: "r", type: "yoon", steps: [] },
  { char: "リョ", romaji: "ryo", row: "r", type: "yoon", steps: [] },
]

const KATAKANA_YOON_TENTEN: KanaChar[] = [
  { char: "ギャ", romaji: "gya", row: "k", type: "yoon_tenten", steps: [] },
  { char: "ギュ", romaji: "gyu", row: "k", type: "yoon_tenten", steps: [] },
  { char: "ギョ", romaji: "gyo", row: "k", type: "yoon_tenten", steps: [] },
  { char: "ジャ", romaji: "ja", row: "s", type: "yoon_tenten", steps: [] },
  { char: "ジュ", romaji: "ju", row: "s", type: "yoon_tenten", steps: [] },
  { char: "ジョ", romaji: "jo", row: "s", type: "yoon_tenten", steps: [] },
  { char: "ビャ", romaji: "bya", row: "h", type: "yoon_tenten", steps: [] },
  { char: "ビュ", romaji: "byu", row: "h", type: "yoon_tenten", steps: [] },
  { char: "ビョ", romaji: "byo", row: "h", type: "yoon_tenten", steps: [] },
]

const KATAKANA_YOON_MARU: KanaChar[] = [
  { char: "ピャ", romaji: "pya", row: "h", type: "yoon_maru", steps: [] },
  { char: "ピュ", romaji: "pyu", row: "h", type: "yoon_maru", steps: [] },
  { char: "ピョ", romaji: "pyo", row: "h", type: "yoon_maru", steps: [] },
]

export const KANA_DATA: Record<KanaType, KanaChar[]> = {
  hiragana: [
    ...HIRAGANA_BASE,
    ...HIRAGANA_TENTEN,
    ...HIRAGANA_MARU,
    ...HIRAGANA_YOON,
    ...HIRAGANA_YOON_TENTEN,
    ...HIRAGANA_YOON_MARU,
  ],
  katakana: [
    ...KATAKANA_BASE,
    ...KATAKANA_TENTEN,
    ...KATAKANA_MARU,
    ...KATAKANA_YOON,
    ...KATAKANA_YOON_TENTEN,
    ...KATAKANA_YOON_MARU,
  ],
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function filterKana(config: QuizConfig, srsData?: SRSData, isSRSMode = false): KanaChar[] {
  const charSet = KANA_DATA[config.kanaType]
  let filteredSet = charSet.filter(
    (kana) => config.selectedTypes.includes(kana.type) && config.selectedRows.includes(kana.row),
  )

  if (isSRSMode && srsData) {
    const hardChars = Object.keys(srsData).filter((char) => {
      const data = srsData[char]
      return data.incorrect > data.correct && data.incorrect > 0
    })
    if (hardChars.length === 0) return []
    filteredSet = filteredSet.filter((kana) => hardChars.includes(kana.char))
  }

  const nChar = config.kanaType === "hiragana" ? "ん" : "ン"
  if (!config.selectedRows.includes("n_char")) {
    filteredSet = filteredSet.filter((kana) => kana.char !== nChar)
  }

  const uniqueChars = [...new Set(filteredSet.map((c) => c.char))]
  return uniqueChars.map((char) => filteredSet.find((c) => c.char === char)!)
}

export function generateQuizSet(kanaSet: KanaChar[]): QuizItem[] {
  if (kanaSet.length === 0) return []

  const quizList = kanaSet.map((correctChar) => {
    const correctRomaji = correctChar.romaji
    const allPossibleRomaji = [...new Set(kanaSet.map((c) => c.romaji))]
    const decoys = shuffleArray(allPossibleRomaji.filter((r) => r !== correctRomaji)).slice(0, 3)
    let options = shuffleArray([correctRomaji, ...decoys])

    while (options.length < 4) {
      const globalRomaji = [...new Set(KANA_DATA.hiragana.concat(KANA_DATA.katakana).map((c) => c.romaji))]
      const extra = globalRomaji.find((r) => !options.includes(r))
      if (extra) options.push(extra)
      else break
    }
    options = options.slice(0, 4)

    return { kana: correctChar.char, correctRomaji, options, charObject: correctChar }
  })

  return shuffleArray(quizList)
}

export function getHardCharsCount(srsData: SRSData): number {
  return Object.keys(srsData).filter((char) => {
    const data = srsData[char]
    return data.incorrect > data.correct && data.incorrect > 0
  }).length
}
