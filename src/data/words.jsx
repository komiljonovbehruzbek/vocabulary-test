// words.js
// A2 darajadagi so‘zlar (uzbekcha -> inglizcha)

const words = {
    A1: [
        { uz: "kitob", en: "book" },
        { uz: "stol", en: "table" },
        { uz: "do'st", en: "friend" },
        { uz: "uy", en: "house" },
        { uz: "ota", en: "father" },
        { uz: "ona", en: "mother" },
        { uz: "qalam", en: "pen" },
        { uz: "o‘qituvchi", en: "teacher" },
    ],
    A2: [
        // Unit 6 - Food and drink
        { uz: "loviyalar", en: "beans" },
        { uz: "gazli ichimlik", en: "fizzy drink" },
        { uz: "uzum", en: "grape" },
        { uz: "sutli shirin salqin ichimlik", en: "milkshake" },
        { uz: "yong'oqlar", en: "nuts" },

        // Containers
        { uz: "shisha", en: "bottle" },
        { uz: "konserva", en: "can" },
        { uz: "kichik qog'oz quti", en: "carton" },
        { uz: "stakan, chashka", en: "cup" },
        { uz: "shisha", en: "glass" },
        { uz: "paket", en: "packet" },
        { uz: "bo'lak", en: "slice" },

        // Other words and phrases (Unit 6)
        { uz: "qo'shiladigan narsa", en: "additive" },
        { uz: "miqdor", en: "amount" },
        { uz: "antioksidant", en: "antioxidant" },
        { uz: "baholamoq", en: "assess" },
        { uz: "teng, o'rtamiyona", en: "balanced" },
        { uz: "kalsiy", en: "calcium" },
        { uz: "uglevod", en: "carbohydrate" },
        { uz: "kimyoviy", en: "chemical" },
        { uz: "tanlamoq", en: "choose" },
        { uz: "iste'molchi", en: "consumer" },
        { uz: "sutli", en: "dairy" },
        { uz: "desert", en: "dessert" },
        { uz: "qandli diabet", en: "diabetes" },
        { uz: "energiya", en: "energy" },
        { uz: "yog'lar", en: "fats" },
        { uz: "yengil taom", en: "fibre" },
        { uz: "ta'm", en: "flavour" },
        { uz: "yog'i olinmagan", en: "full-fat" },
        { uz: "sarimsoq", en: "garlic" },
        { uz: "gormon", en: "hormone" },
        { uz: "yog'i kam", en: "low-fat" },
        { uz: "oziq, ozuqa", en: "nutrient" },
        { uz: "yog'li", en: "oily" },
        { uz: "bog' sayri", en: "picnic" },
        { uz: "ko'p", en: "plenty of" },

        // Unit 7 - Wild animals and insects
        { uz: "tishlash", en: "bite" },
        { uz: "meduza", en: "jellyfish" },
        { uz: "chayon", en: "scorpion" },
        { uz: "o'rgimchak", en: "spider" },
        { uz: "nish", en: "sting" },

        // The natural world
        { uz: "dala", en: "field" },
        { uz: "o't, maysa", en: "grass" },
        { uz: "vodiy", en: "valley" },

        // The weather
        { uz: "tuman", en: "fog" },
        { uz: "tumanli", en: "foggy" },
        { uz: "muz", en: "ice" },
        { uz: "muzli", en: "icy" },
        { uz: "qor", en: "snow" },
        { uz: "qorli", en: "snowy" },
        { uz: "bo'ron", en: "storm" },
        { uz: "bo'ronli", en: "stormy" },
        { uz: "iliq", en: "warm" },
        { uz: "nam", en: "wet" },
        { uz: "shamol", en: "wind" },
        { uz: "shamolli", en: "windy" },

        // Other words and phrases (Unit 7)
        { uz: "hayot", en: "alive" },
        { uz: "balandlik", en: "altitude" },
        { uz: "bar grafik", en: "bar graph" },
        { uz: "arziydi", en: "be worth" },
        { uz: "cho'chqa", en: "boar" },
        { uz: "ixcham", en: "compact" },
        { uz: "musobaqalashmoq", en: "compete" },
        { uz: "murakkab", en: "complicated" },
        { uz: "ishtirokchi", en: "contestant" },
        { uz: "kiyik, bug'u", en: "deer" },
        { uz: "qasd olish", en: "determination" },
        { uz: "diagramma, chizma", en: "diagram" },
        { uz: "tarqatish", en: "distribution" },
        { uz: "yo'qolib ketish havfi bo'lgan tur", en: "endangered species" },
        { uz: "yo'qolib ketish", en: "extinction" },
        { uz: "keskin", en: "extreme" },
        { uz: "kelib chiqishi", en: "habitat" },
        { uz: "o'txo'r hayvon", en: "herbivore" },
        { uz: "ierogliflar", en: "hieroglyphics" },
        { uz: "ovlamoq", en: "hunting" },
        { uz: "pichoq", en: "knife" },
        { uz: "uzunlik", en: "length" },
        { uz: "gugurt", en: "match" },
        { uz: "bo'lishi mumkin emas", en: "no way" },
        { uz: "to'siq", en: "obstacle" },
        { uz: "parashyut", en: "parachute" },
        { uz: "aylana diagramma", en: "pie chart" },
        { uz: "ko'tarilmoq", en: "rise" },
        { uz: "choyshab", en: "sheet" },
        { uz: "bug'u", en: "stag" },
        { uz: "maqom", en: "status" },
        { uz: "ip", en: "string" },
        { uz: "tirik qolish", en: "survival" },
        { uz: "o'zaro hamkorlik", en: "teamwork" },
        { uz: "tarjima", en: "translation" },
        { uz: "og'irlik, vazn", en: "weight" },
    ]

    // ... Unit 8, 9, 10 ham shu formatda davom etadi ...
}

export default words
