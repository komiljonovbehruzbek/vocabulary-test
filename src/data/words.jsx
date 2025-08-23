// words.js
const words = {
    A1: [
        { uz: "olma", en: "apple" },
        { uz: "kitob", en: "book" },
        { uz: "mushuk", en: "cat" },
        { uz: "it", en: "dog" },
        { uz: "uy", en: "house" },
        { uz: "mashina", en: "car" },
        { uz: "suv", en: "water" },
        { uz: "ovqat", en: "food" },
        { uz: "maktab", en: "school" },
        { uz: "do‘st", en: "friend" },
        { uz: "stol", en: "table" },
        { uz: "stul", en: "chair" },
        { uz: "qalam", en: "pen" },
        { uz: "sumka", en: "bag" },
        { uz: "eshik", en: "door" },
        { uz: "deraza", en: "window" },
        { uz: "sut", en: "milk" },
        { uz: "non", en: "bread" },
        { uz: "o‘qituvchi", en: "teacher" },
        { uz: "talaba", en: "student" },
        { uz: "kitobxon", en: "reader" },
        { uz: "soat", en: "clock" },
        { uz: "xona", en: "room" },
        { uz: "ko‘cha", en: "street" },
        { uz: "daraxt", en: "tree" },
        { uz: "gul", en: "flower" },
        { uz: "bulut", en: "cloud" },
        { uz: "quyosh", en: "sun" },
        { uz: "oy", en: "moon" },
        { uz: "yulduz", en: "star" },
        { uz: "dengiz", en: "sea" },
        { uz: "daryo", en: "river" },
        { uz: "tog‘", en: "mountain" },
        { uz: "ko‘l", en: "lake" },
        { uz: "qish", en: "winter" },
        { uz: "bahor", en: "spring" },
        { uz: "yoz", en: "summer" },
        { uz: "kuz", en: "autumn" },
        { uz: "kun", en: "day" },
        { uz: "kecha", en: "night" },
        { uz: "ertalab", en: "morning" },
        { uz: "tushlik", en: "afternoon" },
        { uz: "kechki", en: "evening" },
        { uz: "yomg‘ir", en: "rain" },
        { uz: "qor", en: "snow" },
        { uz: "issiq", en: "hot" },
        { uz: "sovuq", en: "cold" },
        { uz: "katta", en: "big" },
        { uz: "kichik", en: "small" },
        { uz: "yaxshi", en: "good" },
        { uz: "yomon", en: "bad" },
        { uz: "yangi", en: "new" },
        { uz: "eski", en: "old" },
        { uz: "qiz", en: "girl" },
        { uz: "o‘g‘il", en: "boy" },
        { uz: "ota", en: "father" },
        { uz: "ona", en: "mother" },
        { uz: "aka", en: "brother" },
        { uz: "opa", en: "sister" },
        { uz: "oilaviy", en: "family" },
    ],
    A2: [
    { uz: "loviya", en: "beans" }, // "loviyalar" o'rniga "loviya" (ko'plik shart emas)
    { uz: "gazli ichimlik", en: "fizzy drink" },
    { uz: "uzum", en: "grape" },
    { uz: "sutli kokteyl", en: "milkshake" }, // "sutli shirin salqin ichimlik" o'rniga asl so'z qoldirildi, chunki bu mahalliy ifoda emas
    { uz: "yong'oq", en: "nuts" }, // "yong'oqlar" o'rniga "yong'oq" (ko'plik shart emas)
    { uz: "shisha", en: "bottle" },
    { uz: "konserva", en: "can" },
    { uz: "qog'oz quti", en: "carton" }, // "kichik qog'oz quti" o'rniga qisqartirildi, chunki "carton" o'zini anglatadi
    { uz: "stakan", en: "cup" }, // "stakan, chashka" o'rniga faqat "stakan" qoldirildi, chunki "cup" asosan stakan ma'nosida ishlatiladi
    { uz: "stakan", en: "glass" }, // "shisha" o'rniga "stakan" (chunki "glass" ko'pincha stakan ma'nosida), "shisha" allaqachon "bottle" uchun ishlatilgan
    { uz: "paket", en: "packet" },
    { uz: "bo'lak", en: "slice" },
    { uz: "qo'shimcha", en: "additive" }, // "qo'shiladigan narsa" o'rniga aniqroq "qo'shimcha"
    { uz: "miqdor", en: "amount" }, // "pul, miqdor" o'rniga faqat "miqdor" (chunki "amount" umumiy miqdor ma'nosida)
    { uz: "antioksidant", en: "antioxidant" },
    { uz: "baholash", en: "assess" }, // "baxolamoq" o'rniga "baholash" (amalning natijasi sifatida)
    { uz: "muvozanatli", en: "balanced" }, // "teng, o'rtamiyona" o'rniga "muvozanatli" (ko'proq mos)
    { uz: "kalsiy", en: "calcium" },
    { uz: "uglevod", en: "carbohydrate" }, // "uglevot" o'rniga to'g'ri transliteratsiya
    { uz: "kimyoviy", en: "chemical" },
    { uz: "tanlash", en: "choose" }, // "tanlamoq" o'rniga "tanlash" (amalning natijasi)
    { uz: "iste'molchi", en: "consumer" },
    { uz: "sut mahsulotlari", en: "dairy" }, // "sutli" o'rniga "sut mahsulotlari" (ko'proq kontekstli)
    { uz: "desert", en: "dessert" }, // "desert" o'rniga "dessert" (yozuv xatosi tuzatildi, lekin "uz" o'zgartirilmadi chunki "desert" noto'g'ri)
    { uz: "qandli diabet", en: "diabetes" },
    { uz: "energiya", en: "energy" },
    { uz: "yog'", en: "fats" }, // "yog'lar" o'rniga "yog'" (umumiy ma'no)
    { uz: "ovqat tolasi", en: "fibre" }, // "yengil taom" o'rniga "ovqat tolasi" (to'g'riroq)
    { uz: "ta'm", en: "flavour" }, // "tam" o'rniga to'g'ri yozuv
    { uz: "to'liq yog'li", en: "full-fat" },
    { uz: "sarimsoq", en: "garlic" },
    { uz: "gomon", en: "hormone" }, // "garmon" o'rniga to'g'ri transliteratsiya
    { uz: "kam yog'li", en: "low-fat" },
    { uz: "oziq moddasi", en: "nutrient" }, // "oziq, ozuqa" o'rniga aniqroq
    { uz: "yog'li", en: "oily" },
    { uz: "sayr", en: "picnic" }, // "bog' sayri" o'rniga qisqartirildi, chunki "picnic" umumiy ma'no
    { uz: "ko'p", en: "plenty of" },
    { uz: "tishlash", en: "bite" },
    { uz: "meduza", en: "jellyfish" },
    { uz: "chayon", en: "scorpion" },
    { uz: "o'rgimchak", en: "spider" }, // "o'rgamchak" o'rniga to'g'ri yozuv
    { uz: "chaqish", en: "sting" }, // "nish" o'rniga "chaqish" (to'g'riroq)
    { uz: "dal", en: "field" }, // "dala" o'rniga "dal" (qisqa va to'g'ri)
    { uz: "o't", en: "grass" }, // "o't, maysa" o'rniga "o't"
    { uz: "vodiy", en: "valley" },
    { uz: "tuman", en: "fog" },
    { uz: "tumonli", en: "foggy" }, // "tumali" o'rniga to'g'ri yozuv
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
    { uz: "tirik", en: "alive" }, // "hayot" o'rniga "tirik" (to'g'riroq)
    { uz: "balandlik", en: "altitude" },
    { uz: "grafik", en: "bar graph" }, // "bar grafik" o'rniga qisqartirildi
    { uz: "qimmatga tushmoq", en: "be worth" }, // "arziydi" o'rniga kontekstliroq
    { uz: "cho'chqa", en: "pig" },
    { uz: "ixcham", en: "compact" },
    { uz: "musobaqalashtirish", en: "compete" }, // "musobaqalashmoq" o'rniga aniqroq
    { uz: "murakkab", en: "complicated" },
    { uz: "ishtirokchi", en: "contestant" },
    { uz: "kiyik", en: "deer" }, // "kiyik, bug'u" o'rniga "kiyik"
    { uz: "qat'iyat", en: "determination" }, // "qasd olish" o'rniga to'g'riroq
    { uz: "diagramm", en: "diagram" }, // "diagramma, chizma" o'rniga qisqartirildi
    { uz: "tarqatish", en: "distribution" },
    { uz: "yo'qolib ketish xavfi ostidagi tur", en: "endangered species" }, // biroz aniqlashtirildi
    { uz: "yo'q bo'lib ketish", en: "extinction" }, // "yo'qolib ketish" o'rniga aniqroq
    { uz: "ekstremal", en: "extreme" }, // "keskin" o'rniga kontekstliroq
    { uz: "yashash joyi", en: "habitat" }, // "kelib chiqishi" o'rniga to'g'riroq
    { uz: "o'txo'r ozuqali", en: "herbivore" }, // "o'txo'r hayvon" o'rniga aniqroq
    { uz: "ieroglif", en: "hieroglyphics" }, // "ierogliflar" o'rniga qisqartirildi
    { uz: "ovlash", en: "hunting" }, // "ovlamoq" o'rniga "ovlash"
    { uz: "pichoq", en: "knife" },
    { uz: "uzunlik", en: "length" },
    { uz: "gugurt", en: "match" },
    { uz: "hech qachon", en: "no way" }, // "bo'lishi mumkin emas" o'rniga kontekstliroq
    { uz: "to'siq", en: "obstacle" },
    { uz: "parashyut", en: "parachute" },
    { uz: "aylana diagramm", en: "pie chart" }, // "aylana diogramma" o'rniga qisqartirildi
    { uz: "ko'tarilish", en: "rise" }, // "ko'tarilmoq" o'rniga "ko'tarilish"
    { uz: "choyshab", en: "sheet" },
    { uz: "bug'u", en: "stag" },
    { uz: "maqom", en: "status" },
    { uz: "ip", en: "string" },
    { uz: "omon qolish", en: "survival" }, // "tirik qolish" o'rniga aniqroq
    { uz: "jamoa ishi", en: "teamwork" }, // "o'zaro hamkorlik" o'rniga kontekstliroq
    { uz: "tarjima", en: "translation" },
    { uz: "vazn", en: "weight" }, // "og'irlik, vazn" o'rniga "vazn"
    { uz: "jahl bilan", en: "angry" }, // "jahli chiqmoq" o'rniga kontekstliroq
    { uz: "zerikish", en: "bored" }, // "zerikmoq" o'rniga "zerikish"
    { uz: "chalkash", en: "confused" }, // "tushunmaslik" o'rniga aniqroq
    { uz: "hafsalasi pir bo'lgan", en: "disappointed" },
    { uz: "hayajonli", en: "excited" }, // "juda xursand" o'rniga "hayajonli"
    { uz: "qo'rqqan", en: "frightened" }, // "qo'rqib ketgan" o'rniga qisqartirildi
    { uz: "xursand", en: "happy" },
    { uz: "qiziqish", en: "interested" }, // "qiziqmoq" o'rniga "qiziqish"
    { uz: "xotirjam", en: "relaxed" }, // "hotirjam" o'rniga to'g'ri yozuv
    { uz: "g'amgin", en: "sad" }, // "hafa" o'rniga "g'amgin" (to'g'riroq kontekst)
    { uz: "stress ostida", en: "stressed" }, // "siqilgan" o'rniga kontekstliroq
    { uz: "hayron", en: "surprised" }, // "hayron bo'lmoq" o'rniga "hayron"
    { uz: "charchagan", en: "tired" },
    { uz: "xavotirda", en: "worried" }, // "xavotirlanmoq" o'rniga "xavotirda"
    { uz: "xushchaqchaq", en: "cheerful" }, // "xursand" o'rniga o'ziga xos sinonim
    { uz: "aqlli", en: "intelligent" }, // "ziyoli, aqlli" o'rniga "aqlli"
    { uz: "jim", en: "quiet" }, // "tinch" o'rniga "jim" (to'g'riroq)
    { uz: "mas'ul", en: "responsible" }, // "javobgar, ma'sul" o'rniga "mas'ul"
    { uz: "jiddiy", en: "serious" },
    { uz: "jinoyat", en: "crime" },
    { uz: "uysizlik", en: "homelessness" },
    { uz: "ochlik", en: "hunger" },
    { uz: "ifloslanish", en: "pollution" },
    { uz: "qashshoqlik", en: "poverty" },
    { uz: "ishsizlik", en: "unemployment" },
    { uz: "zo'ravonlik", en: "violence" },
    { uz: "maqsad", en: "aim" },
    { uz: "chodir", en: "camp" },
    { uz: "mashina ishlab chiqarish", en: "car manufacturing" },
    { uz: "diqqatni jamlamoq", en: "concentrate on" }, // "diqqatni jamlang" o'rniga "diqqatni jamlamoq"
    { uz: "qurilish", en: "construction" },
    { uz: "turmush darajasi", en: "cost of living" }, // "yashash uchun ketadigan kundalik harajatlar" o'rniga qisqartirildi
    { uz: "shafqatsiz", en: "cruel" }, // "shavqatsiz" o'rniga to'g'ri yozuv
    { uz: "iqtisodiy", en: "economic" },
    { uz: "asosiy", en: "fundamental" },
    { uz: "jihoz", en: "gadget" }, // "moslama" o'rniga "jihoz" (umumiy ma'no)
    { uz: "bitirish", en: "graduate" }, // "tugatmoq" o'rniga "bitirish"
    { uz: "IQ testi", en: "IQ" }, // "test" o'rniga kontekstliroq
    { uz: "hayotga xavfli", en: "life-threatening" }, // "hayotga xavf soluvchi" o'rniga qisqartirildi
    { uz: "omadli", en: "lucky" },
    { uz: "tilak bildirish", en: "make a wish" }, // "tilagingizni tilang" o'rniga kontekstliroq
    { uz: "insoniyat", en: "mankind" },
    { uz: "ilhomlantirish", en: "motivate" }, // "undamoq" o'rniga "ilhomlantirish"
    { uz: "salbiy", en: "negative" },
    { uz: "maqsad", en: "objective" }, // "ko'zlangan maqsad" o'rniga qisqartirildi
    { uz: "orkestr", en: "orchestra" },
    { uz: "ijobiy", en: "positive" },
    { uz: "yomg'ir miqdori", en: "rainfall" }, // "yog'ingarchilik" o'rniga aniqroq
    { uz: "pul yig'ish", en: "raise money" }, // "pulni ko'taring" o'rniga kontekstliroq
    { uz: "ishonchli", en: "reliable" },
    { uz: "hisobot", en: "report" }, // "xabar" o'rniga "hisobot"
    { uz: "qutqarish", en: "rescue" }, // "qutqarmoq" o'rniga "qutqarish"
    { uz: "azob chekish", en: "suffer" }, // "aziyat chekmoq" o'rniga aniqroq
    { uz: "xulosa chiqarish", en: "summarise" }, // "xulosa qilmoq" o'rniga "xulosa chiqarish"
    { uz: "qo'llab-quvvatlamoq", en: "support" },
    { uz: "davolash", en: "treatment" },
    { uz: "axloqsiz", en: "unethical" }, // "insoniylikga to'g'ri kelmaydigan" o'rniga "axloqsiz"
    { uz: "ko'ngilli", en: "volunteer" }, // "ko'ngilliy" o'rniga "ko'ngilli"
    { uz: "ko'fta", en: "blouse" },
    { uz: "etik", en: "boots" }, // "etiklar" o'rniga "etik"
    { uz: "palto", en: "coat" },
    { uz: "ko'ylak", en: "dress" }, // "ko'ylak (ayollar uchun)" o'rniga qisqartirildi
    { uz: "jilet", en: "jacket" }, // "jiket" o'rniga to'g'ri yozuv
    { uz: "jinsi shim", en: "jeans" },
    { uz: "jemper", en: "jumper" },
    { uz: "sviter", en: "sweater" },
    { uz: "leggings", en: "leggings" }, // "gamash" o'rniga asl so'z qoldirildi, chunki mahalliy emas
    { uz: "ko'ylak", en: "shirt" }, // "ko'ylak (erkalar uchun)" o'rniga qisqartirildi
    { uz: "poyabzal", en: "shoes" },
    { uz: "sho'rt", en: "shorts" }, // "sho'rtik" o'rniga "sho'rt"
    { uz: "yubka", en: "skirt" },
    { uz: "kostyum", en: "suit" }, // "kostyum shim" o'rniga "kostyum"
    { uz: "tolstofka", en: "sweatshirt" },
    { uz: "galstuk", en: "tie" }, // "galustuk" o'rniga to'g'ri yozuv
    { uz: "kalso", en: "tights" }, // "kalgotka" o'rniga mahalliy "kalso"
    { uz: "yuqori kiyim", en: "top" }, // "yuqoriga kiyiladigan kiyimlar" o'rniga qisqartirildi
    { uz: "sport kostyum", en: "tracksuit" }, // "spartivka" o'rniga kontekstliroq
    { uz: "sport poyabzal", en: "trainers" }, // "krasofkalar" o'rniga kontekstliroq
    { uz: "shim", en: "trousers" }, // "shimlar" o'rniga "shim"
    { uz: "futbolka", en: "T-shirt" }, // "futbolak" o'rniga to'g'ri yozuv
    { uz: "kamar", en: "belt" },
    { uz: "kepka", en: "cap" },
    { uz: "ko'zoynak", en: "glasses" },
    { uz: "qalpoq", en: "hat" },
    { uz: "taqinchoq", en: "jewellery" }, // "taqinchoqlar" o'rniga "taqinchoq"
    { uz: "sharf", en: "scarf" },
    { uz: "quyoshdan saqlovchi ko'zoynak", en: "sunglasses" },
    { uz: "qo'l soati", en: "watch" },
    { uz: "nonvoyxona", en: "bakery" },
    { uz: "bank", en: "bank" },
    { uz: "kitob do'koni", en: "bookshop" },
    { uz: "qassobxona", en: "butcher's" }, // "qassofxona" o'rniga to'g'ri yozuv
    { uz: "dorixona", en: "chemist's" },
    { uz: "kiyim do'koni", en: "clothes shop" },
    { uz: "universal do'kon", en: "department store" },
    { uz: "elektronika do'koni", en: "electrical goods shop" }, // "elektrik jihozlari do'koni" o'rniga aniqroq
    { uz: "meva-sabzavot do'koni", en: "greengrocer's" }, // "meva va sabzavotlar do'koni" o'rniga qisqartirildi
    { uz: "taqinchoq do'koni", en: "jeweller's" },
    { uz: "gazeta do'koni", en: "newsagents" }, // "gazeta do'konlari" o'rniga qisqartirildi
    { uz: "pochta", en: "post office" },
    { uz: "poyabzal do'koni", en: "shoe shop" },
    { uz: "sport do'koni", en: "sports shop" },
    { uz: "kantselyariya do'koni", en: "stationery shop" }, // "ish yuritish do'koni" o'rniga aniqroq
    { uz: "supermarket", en: "supermarket" },
    { uz: "yorqin", en: "bright" }, // "yorug', yorqin" o'rniga "yorqin"
    { uz: "qulash", en: "collapse" }, // "barbod bo'lish, qulash" o'rniga qisqartirildi
    { uz: "rangli", en: "colourful" }, // "rang-barang, har hil rang" o'rniga "rangli"
    { uz: "paxta", en: "cotton" },
    { uz: "hozirgi", en: "current" }, // "ayni paytdagi" o'rniga "hozirgi"
    { uz: "dizayn", en: "design" },
    { uz: "dizayner", en: "designer" },
    { uz: "chegirma", en: "discount" },
    { uz: "axloqiy", en: "ethical" },
    { uz: "zavod", en: "factory" },
    { uz: "yarmarka", en: "fair" },
    { uz: "jonli", en: "live" }, // "tirik" o'rniga "jonli" (kontekstliroq)
    { uz: "boshqaruvchi", en: "manager" }, // "ish boshqaruvchi" o'rniga qisqartirildi
    { uz: "oldingi", en: "previous" },
    { uz: "eslatish", en: "remind somebody of" }, // "kimdirni eslatish" o'rniga qisqartirildi
    { uz: "hisobga olingan qiymat", en: "sentimental value" }, // biroz aniqlashtirildi
    { uz: "baqirmoq", en: "shout at" },
    { uz: "imzo", en: "signature" },
    { uz: "korxona", en: "sweatshop" },
    { uz: "savdo", en: "trade" },
    { uz: "muomala qilmoq", en: "treat" }, // "muamala qilmoq, munosabatda bo'lmoq" o'rniga qisqartirildi
    { uz: "ishchi", en: "worker" },
    { uz: "raqamli kamera", en: "digital camera" },
    { uz: "noutbuk", en: "laptop" },
    { uz: "navigatsiya moslamasi", en: "satnav" }, // "sun'iy yo'ldosh orqali haydovchiga yo'l ko'rsatuvchi moslama" o'rniga qisqartirildi
    { uz: "qurish", en: "build" }, // "qurmoq" o'rniga "qurish"
    { uz: "quruvchi", en: "builder" },
    { uz: "bino", en: "building" },
    { uz: "yaratish", en: "create" }, // "yaratmoq" o'rniga "yaratish"
    { uz: "yaratuvchi", en: "creator" },
    { uz: "yaratish", en: "creation" },
    { uz: "dizayn", en: "design" },
    { uz: "dizayner", en: "designer" },
    { uz: "kashf qilish", en: "discover" }, // "kashf qilmoq" o'rniga "kashf qilish"
    { uz: "kashfiyotchi", en: "discoverer" },
    { uz: "kashfiyot", en: "discovery" },
    { uz: "ixtiro qilish", en: "invent" }, // "ixtiro qilmoq" o'rniga "ixtiro qilish"
    { uz: "ixtirochi", en: "inventor" },
    { uz: "ixtiro", en: "invention" },
    { uz: "ishlab chiqarish", en: "produce" }, // "ishlab chiqarmoq" o'rniga "ishlab chiqarish"
    { uz: "ishlab chiqaruvchi", en: "producer" },
    { uz: "mahsulot", en: "product" },
    { uz: "harakat", en: "action" },
    { uz: "tavsif", en: "description" },
    { uz: "tushuntirish", en: "explanation" },
    { uz: "ifoda", en: "expression" }, // "ifodalash" o'rniga "ifoda"
    { uz: "tasavvur", en: "imagination" },
    { uz: "ixtiro", en: "invention" },
    { uz: "tergov", en: "investigation" },
    { uz: "asrab olish", en: "adopt" }, // "asrab olmoq" o'rniga "asrab olish"
    { uz: "asrab oluvchi", en: "adoptive" },
    { uz: "aerodinamik", en: "aerodynamic" },
    { uz: "chet ellik", en: "alien" }, // "boshqa yurtlik" o'rniga mahalliy "chet ellik"
    { uz: "dengiz tubi", en: "bottom of the sea" },
    { uz: "o'q o'tkazmaydigan ko'ylak", en: "bullet-proof jacket" },
    { uz: "bosmoq", en: "click on" }, // "ustiga bosing" o'rniga "bosmoq"
    { uz: "tushirish", en: "drop" }, // "tushurib yubormoq" o'rniga "tushirish"
    { uz: "zilzila", en: "earthquake" },
    { uz: "elektronika", en: "electronics" },
    { uz: "dalil", en: "evidence" }, // "asos, dalil, isbot" o'rniga "dalil"
    { uz: "bobo", en: "great-father" }, // "katta bobo" o'rniga "bobo" (kontekstliroq)
    { uz: "dubulg'a", en: "helmet" },
    { uz: "yuqori sifat", en: "high resolution" }, // "yuqori aniqlik" o'rniga "yuqori sifat"
    { uz: "chuqur", en: "hole" }, // "chuqurlik" o'rniga "chuqur"
    { uz: "bog'lanish", en: "link" }, // "bog'liqlik" o'rniga "bog'lanish"
    { uz: "pioner", en: "pioneer" }, // "yangilik yaratuvchi" o'rniga qisqartirildi
    { uz: "qum", en: "sand" },
    { uz: "xizmatkor", en: "servant" },
    { uz: "shakl", en: "shape" }, // "shakil" o'rniga "shakl"
    { uz: "dasturiy ta'minot", en: "software" },
    { uz: "manba", en: "source" },
    { uz: "qalin", en: "thick" },
    { uz: "oyna tozalagich", en: "windscreen wiper" }
  ],
}

export default words
