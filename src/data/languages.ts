export interface Language {
  id: string;
  name: string;
  aliases: string[];
  family: string;
  region: string;
  tier: number;
  script: string;
  clue: string;
  confusedWith: string[];
  sentences: string[];
}

export const languages: Language[] = [
  {
    id: 'french', name: 'French', aliases: ['francais'], family: 'Romance', region: 'Europe', tier: 1, script: 'Latin',
    clue: "Frequent apostrophes (l', j', qu'), words ending in -eau, -eux, accents (é, è, ç).", confusedWith: ['Italian', 'Spanish'],
    sentences: ["Où est la gare s'il vous plaît?", "J'aime beaucoup le café le matin.", "Il fait froid dehors ce soir.", "Nous allons au marché ce weekend.", "C'est une belle journée aujourd'hui.", "Je ne comprends pas ce que vous dites.", "Pouvez-vous m'aider à trouver mon chemin?", "La nourriture ici est vraiment délicieuse.", "À quelle heure le train arrive-t-il?", "Il pleut des cordes depuis ce matin.", "Je suis très heureux de vous rencontrer.", "Combien coûte ce livre ancien?", "Nous habitons près de la tour Eiffel.", "Les enfants jouent dans le parc.", "J'ai oublié mes clés à la maison.", "Elle lit un roman très intéressant.", "Le chat dort sur le canapé.", "Voulez-vous boire un verre de vin?", "Ce film était incroyable à regarder.", "Mon frère travaille dans un hôpital."]
  },
  {
    id: 'spanish', name: 'Spanish', aliases: ['espanol', 'español'], family: 'Romance', region: 'Europe/Americas', tier: 1, script: 'Latin',
    clue: 'Inverted punctuation (¿, ¡), tilde over n (ñ), frequent endings in -ción, -dad.', confusedWith: ['Portuguese', 'Italian'],
    sentences: ["¿Dónde está la biblioteca?", "Me gusta mucho el café por la mañana.", "Hace frío afuera esta noche.", "Vamos al mercado este fin de semana.", "Es un hermoso día hoy.", "¿Cómo te llamas, amigo mío?", "No hablo muy bien el idioma.", "Quiero comer una paella deliciosa.", "El museo está cerrado los lunes.", "Tengo que ir a trabajar temprano.", "Mis padres viven en la ciudad.", "El cielo está muy despejado hoy.", "Necesito comprar billetes de tren.", "¿A qué hora empieza la película?", "Ella tiene un perro pequeño.", "Nosotros estudiamos todos los días.", "El libro está sobre la mesa.", "Me duele mucho la cabeza ahora.", "Vamos a la playa a nadar.", "¡Qué sorpresa tan agradable verte!"]
  },
  {
    id: 'german', name: 'German', aliases: ['deutsch'], family: 'Germanic', region: 'Europe', tier: 1, script: 'Latin',
    clue: 'Capitalized nouns, umlauts (ä, ö, ü), eszett (ß), long compound words.', confusedWith: ['Dutch', 'Swedish'],
    sentences: ["Wo ist der Bahnhof bitte?", "Ich trinke gerne Kaffee am Morgen.", "Es ist heute Abend sehr kalt.", "Wir gehen dieses Wochenende auf den Markt.", "Es ist ein schöner Tag heute.", "Wie spät ist es jetzt genau?", "Ich verstehe diesen Satz nicht.", "Können Sie mir das bitte erklären?", "Das Essen schmeckt wunderbar.", "Mein Bruder lebt in Berlin.", "Der Hund läuft durch den Wald.", "Wir müssen den Zug erwischen.", "Das ist eine sehr gute Frage.", "Sie liest ein spannendes Buch.", "Ich habe gestern mein Auto gewaschen.", "Die Katze schläft auf dem Stuhl.", "Morgen wird es wahrscheinlich regnen.", "Ich möchte ein Bier bestellen.", "Wo kann ich hier parken?", "Die Kinder spielen im Garten."]
  },
  {
    id: 'italian', name: 'Italian', aliases: ['italiano'], family: 'Romance', region: 'Europe', tier: 1, script: 'Latin',
    clue: 'Almost all words end in a vowel, double consonants (tt, ll, nn), accents usually terminal (è, à).', confusedWith: ['Spanish', 'French'],
    sentences: ["Dov'è la stazione per favore?", "Mi piace molto il caffè la mattina.", "Fa freddo fuori stasera.", "Andiamo al mercato questo fine settimana.", "È una bellissima giornata oggi.", "Come ti chiami?", "Non parlo bene questa lingua.", "Voglio mangiare una pizza Margherita.", "Il museo è chiuso il lunedì.", "Devo andare a lavorare presto.", "I miei genitori vivono in città.", "Il cielo è molto limpido oggi.", "Ho bisogno di comprare i biglietti.", "A che ora inizia il film?", "Lei ha un cane piccolo.", "Noi studiamo tutti i giorni.", "Il libro è sul tavolo.", "Mi fa molto male la testa.", "Andiamo in spiaggia a nuotare.", "Che bella sorpresa vederti qui!"]
  },
  {
    id: 'portuguese', name: 'Portuguese', aliases: ['portugues', 'português'], family: 'Romance', region: 'Europe/Americas', tier: 1, script: 'Latin',
    clue: 'Use of ã, õ, ç, frequent endings in -ão, -ções, -mente. No inverted question marks.', confusedWith: ['Spanish', 'Galician'],
    sentences: ["Onde fica a estação de trem?", "Eu gosto muito de café pela manhã.", "Está frio lá fora esta noite.", "Vamos ao mercado neste fim de semana.", "Está um lindo dia hoje.", "Como você se chama?", "Eu não falo bem esse idioma.", "Quero comer um pastel de nata.", "O museu está fechado às segundas.", "Tenho que ir trabalhar cedo.", "Meus pais moram na cidade.", "O céu está muito limpo hoje.", "Preciso comprar passagens de trem.", "A que horas começa o filme?", "Ela tem um cachorro pequeno.", "Nós estudamos todos os dias.", "O livro está em cima da mesa.", "Minha cabeça dói muito agora.", "Vamos à praia para nadar.", "Que surpresa agradável te ver!"]
  },
  {
    id: 'dutch', name: 'Dutch', aliases: ['nederlands'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: "Double vowels (aa, ee, oo, uu) and double consonants, ij digraph (kijken), words ending in -en.", confusedWith: ['German', 'Danish'],
    sentences: ["Waar is het treinstation alstublieft?", "Ik hou erg van koffie 's ochtends.", "Het is vanavond erg koud buiten.", "We gaan dit weekend naar de markt.", "Het is een mooie dag vandaag.", "Hoe laat is het precies?", "Ik begrijp deze zin niet helemaal.", "Kunt u me dat uitleggen?", "Het eten smaakt echt heerlijk.", "Mijn broer woont in Amsterdam.", "De hond rent door het bos.", "We moeten de trein halen.", "Dat is een heel goede vraag.", "Zij leest een spannend boek.", "Ik heb gisteren mijn auto gewassen.", "De kat slaapt op de stoel.", "Morgen gaat het waarschijnlijk regenen.", "Ik wil graag een biertje bestellen.", "Waar kan ik hier parkeren?", "De kinderen spelen in de tuin."]
  },
  {
    id: 'swedish', name: 'Swedish', aliases: ['svenska'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: 'Vowels å, ä, ö. Definite articles are suffixed (-en, -et). Words ending in -r for present tense.', confusedWith: ['Danish', 'Norwegian'],
    sentences: ["Var ligger tågstationen tack?", "Jag älskar kaffe på morgonen.", "Det är väldigt kallt ute ikväll.", "Vi går till marknaden den här helgen.", "Det är en vacker dag idag.", "Vad är klockan nu?", "Jag förstår inte den här meningen.", "Kan du förklara det för mig?", "Maten smakar verkligen underbart.", "Min bror bor i Stockholm.", "Hunden springer genom skogen.", "Vi måste hinna med tåget.", "Det är en mycket bra fråga.", "Hon läser en spännande bok.", "Jag tvättade min bil igår.", "Katten sover på stolen.", "Imorgon kommer det förmodligen att regna.", "Jag skulle vilja beställa en öl.", "Var kan jag parkera här?", "Barnen leker ute i trädgården."]
  },
  {
    id: 'polish', name: 'Polish', aliases: ['polski'], family: 'Slavic', region: 'Europe', tier: 2, script: 'Latin',
    clue: 'High frequency of z, w, cz, sz, rz, dz. Diacritics: ą, ę, ł, ś, ć, ż, ź.', confusedWith: ['Czech', 'Slovak'],
    sentences: ["Gdzie jest dworzec kolejowy?", "Bardzo lubię kawę rano.", "Dziś wieczorem jest bardzo zimno na zewnątrz.", "Idziemy na targ w ten weekend.", "To piękny dzień dzisiaj.", "Która jest teraz godzina?", "Nie rozumiem tego zdania.", "Czy możesz mi to wytłumaczyć?", "Jedzenie smakuje wspaniale.", "Mój brat mieszka w Warszawie.", "Pies biegnie przez las.", "Musimy zdążyć na pociąg.", "To jest bardzo dobre pytanie.", "Ona czyta ciekawą książkę.", "Wczoraj umyłem swój samochód.", "Kot śpi na krześle.", "Jutro prawdopodobnie będzie padać.", "Chciałbym zamówić jedno piwo.", "Gdzie mogę tutaj zaparkować?", "Dzieci bawią się w ogrodzie."]
  },
  {
    id: 'russian', name: 'Russian', aliases: ['russkiy', 'русский'], family: 'Slavic', region: 'Europe', tier: 1, script: 'Cyrillic',
    clue: 'Uses the Cyrillic alphabet (я, и, г, д, ж, п, ф). No Latin letters.', confusedWith: ['Ukrainian', 'Bulgarian'],
    sentences: ["Где находится вокзал?", "Я очень люблю кофе по утрам.", "Сегодня вечером очень холодно.", "Мы идём на рынок в эти выходные.", "Сегодня прекрасный день.", "Который сейчас час?", "Я не понимаю это предложение.", "Не могли бы вы мне это объяснить?", "Еда действительно вкусная.", "Мой брат живет в Москве.", "Собака бежит по лесу.", "Нам нужно успеть на поезд.", "Это очень хороший вопрос.", "Она читает интересную книгу.", "Вчера я помыл свою машину.", "Кошка спит на стуле.", "Завтра, вероятно, пойдет дождь.", "Я бы хотел заказать пиво.", "Где здесь можно припарковаться?", "Дети играют в саду."]
  },
  {
    id: 'japanese', name: 'Japanese', aliases: ['nihongo', '日本語'], family: 'Japonic', region: 'Asia', tier: 1, script: 'Kanji / Kana',
    clue: 'Mixes complex Chinese characters (Kanji) with simple, curved/angular phonetic characters (Hiragana/Katakana).', confusedWith: ['Mandarin', 'Korean'],
    sentences: ["駅はどこですか？", "私は毎朝コーヒーを飲みます。", "今夜はとても寒いです。", "今週末に市場へ行きます。", "今日は美しい日です。", "今何時ですか？", "この文が理解できません。", "これを私に説明してくれますか？", "食べ物は本当に美味しいです。", "私の兄は東京に住んでいます。", "犬が森の中を走っています。", "私たちは電車に乗らなければなりません。", "それはとても良い質問ですね。", "彼女は面白い本を読んでいます。", "昨日、私は車を洗いました。", "猫が椅子の上で眠っています。", "明日はたぶん雨が降るでしょう。", "ビールを一つ注文したいです。", "どこに駐車できますか？", "子供たちが庭で遊んでいます。"]
  },
  {
    id: 'korean', name: 'Korean', aliases: ['hangul', '한국어'], family: 'Koreanic', region: 'Asia', tier: 1, script: 'Hangul',
    clue: 'Characters are blocky, highly geometric combinations of circles, straight lines, and squares (ㅇ, ㅁ, ㅂ). Spaces between words.', confusedWith: ['Japanese', 'Mandarin'],
    sentences: ["기차역이 어디에 있나요?", "저는 매일 아침 커피를 마셔요.", "오늘 밤 밖이 매우 추워요.", "우리는 이번 주말에 시장에 가요.", "오늘은 아름다운 날입니다.", "지금 몇 시인가요?", "저는 이 문장을 이해하지 못해요.", "이것을 설명해 주시겠어요?", "음식이 정말 맛있어요.", "제 형은 서울에 살아요.", "개가 숲 속을 달리고 있어요.", "우리는 기차를 타야 해요.", "그것은 아주 좋은 질문이네요.", "그녀는 재미있는 책을 읽고 있어요.", "어제 저는 세차를 했어요.", "고양이가 의자 위에서 자고 있어요.", "내일은 비가 올 것 같아요.", "맥주 한 잔 주문하고 싶어요.", "여기에 주차해도 되나요?", "아이들이 정원에서 놀고 있어요."]
  },
  {
    id: 'mandarin', name: 'Mandarin', aliases: ['chinese', 'zhongwen', '中文', 'hanyu'], family: 'Sinitic', region: 'Asia', tier: 1, script: 'Han Characters',
    clue: 'Logographic characters without spacing between words. Highly compact visually.', confusedWith: ['Japanese (Kanji)', 'Cantonese'],
    sentences: ["请问火车站怎么走？", "我每天早上喜欢喝咖啡。", "今晚外面很冷。", "我们这个周末去市场。", "今天是个美丽的日子。", "现在几点了？", "我不明白这句话。", "你能给我解释一下吗？", "这里的食物真好吃。", "我哥哥住在北京。", "狗在森林里跑。", "我们必须赶上火车。", "这是一个非常好的问题。", "她正在读一本有趣的书。", "昨天我洗了我的车。", "猫在椅子上睡觉。", "明天可能会下雨。", "我想点一杯啤酒。", "我可以在哪里停车？", "孩子们在花园里玩耍。"]
  },
  {
    id: 'arabic', name: 'Arabic', aliases: ['arabiyyah'], family: 'Semitic', region: 'Middle East/Africa', tier: 1, script: 'Arabic',
    clue: 'Written right-to-left. Cursive flowing script with various dots positioned above or below sweeping lines.', confusedWith: ['Persian', 'Urdu'],
    sentences: ["أين محطة القطار من فضلك؟", "أحب شرب القهوة في الصباح كثيراً.", "الجو بارد جداً في الخارج الليلة.", "نذهب إلى السوق هذا الأسبوع.", "إنه يوم جميل اليوم.", "كم الساعة الآن؟", "أنا لا أفهم هذه الجملة.", "هل يمكنك شرح ذلك لي؟", "الطعام لذيذ جداً.", "أخي يعيش في القاهرة.", "الكلب يركض في الغابة.", "يجب أن نلحق بالقطار.", "هذا سؤال جيد جداً.", "هي تقرأ كتاباً مثيراً للاهتمام.", "لقد غسلت سيارتي أمس.", "القطة نائمة على الكرسي.", "من المحتمل أن تمطر غداً.", "أود أن أطلب بيرة.", "أين يمكنني ركن سيارتي هنا؟", "الأطفال يلعبون في الحديقة."]
  },
  {
    id: 'hindi', name: 'Hindi', aliases: ['hindustani'], family: 'Indo-Aryan', region: 'Asia', tier: 2, script: 'Devanagari',
    clue: 'A continuous horizontal line runs across the top of most words. (Devanagari script).', confusedWith: ['Marathi', 'Nepali', 'Bengali'],
    sentences: ["कृपया रेलवे स्टेशन कहाँ है?", "मुझे सुबह कॉफ़ी बहुत पसंद है।", "आज रात बाहर बहुत ठंड है।", "हम इस सप्ताहांत बाजार जाएंगे।", "आज एक खूबसूरत दिन है।", "अभी क्या समय हुआ है?", "मुझे यह वाक्य समझ नहीं आ रहा है।", "क्या आप मुझे यह समझा सकते हैं?", "खाना सच में बहुत स्वादिष्ट है।", "मेरा भाई दिल्ली में रहता है।", "कुत्ता जंगल में भाग रहा है।", "हमें ट्रेन पकड़नी है।", "यह एक बहुत अच्छा सवाल है।", "वह एक दिलचस्प किताब पढ़ रही है।", "कल मैंने अपनी गाड़ी धोई थी।", "बिल्ली कुर्सी पर सो रही है।", "कल शायद बारिश होगी।", "मैं एक बीयर ऑर्डर करना चाहूंगा।", "मैं यहाँ कहाँ पार्क कर सकता हूँ?", "बच्चे बगीचे में खेल रहे हैं।"]
  },
  {
    id: 'turkish', name: 'Turkish', aliases: ['turkce', 'türkçe'], family: 'Turkic', region: 'Middle East/Europe', tier: 2, script: 'Latin',
    clue: 'Features dotless ı, as well as ç, ş, ğ, ö, ü. Highly agglutinative (long suffixes).', confusedWith: ['Azerbaijani', 'Hungarian'],
    sentences: ["Tren istasyonu nerede acaba?", "Sabahları çok kahve seviyorum.", "Bu gece dışarısı çok soğuk.", "Bu hafta sonu pazara gidiyoruz.", "Bugün güzel bir gün.", "Şu an saat kaç?", "Bu cümleyi anlamıyorum.", "Bunu bana açıklayabilir misin?", "Yemek gerçekten çok lezzetli.", "Erkek kardeşim İstanbul'da yaşıyor.", "Köpek ormanda koşuyor.", "Trene yetişmeliyiz.", "Bu çok iyi bir soru.", "O ilginç bir kitap okuyor.", "Dün arabamı yıkadım.", "Kedi sandalyede uyuyor.", "Yarın büyük ihtimalle yağmur yağacak.", "Bir bira sipariş etmek istiyorum.", "Burada nereye park edebilirim?", "Çocuklar bahçede oynuyor."]
  },
  {
    id: 'swahili', name: 'Swahili', aliases: ['kiswahili'], family: 'Bantu', region: 'Africa', tier: 2, script: 'Latin',
    clue: 'Extensive use of prefixes (ki-, vi-, wa-, m-). No tricky diacritics. Common double vowels are absent.', confusedWith: ['Zulu', 'Hausa'],
    sentences: ["Kituo cha treni kiko wapi tafadhali?", "Ninapenda sana kahawa asubuhi.", "Kuna baridi sana nje usiku wa leo.", "Tutaenda sokoni wikendi hii.", "Ni siku nzuri leo.", "Sasa ni saa ngapi?", "Sielewi sentensi hii.", "Unaweza kunielezea hii?", "Chakula ni kitamu sana.", "Kaka yangu anaishi Nairobi.", "Mbwa anakimbia msituni.", "Tunapaswa kuwahi treni.", "Hilo ni swali zuri sana.", "Anasoma kitabu cha kuvutia.", "Jana niliosha gari langu.", "Paka amelala kwenye kiti.", "Kesho huenda ikanyesha.", "Ningependa kuagiza bia moja.", "Naweza kuegesha wapi hapa?", "Watoto wanacheza bustanini."]
  },
  {
    id: 'thai', name: 'Thai', aliases: ['phasa thai'], family: 'Tai-Kadai', region: 'Asia', tier: 2, script: 'Thai',
    clue: 'Looped, flowing script without spaces between words. Tone marks float above letters.', confusedWith: ['Lao', 'Khmer'],
    sentences: ["สถานีรถไฟอยู่ที่ไหนครับ?", "ฉันชอบกาแฟยามเช้ามาก", "คืนนี้ข้างนอกหนาวมาก", "เราไปตลาดในสุดสัปดาห์นี้", "วันนี้เป็นวันที่สวยงาม", "ตอนนี้กี่โมงแล้ว?", "ฉันไม่เข้าใจประโยคนี้", "คุณช่วยอธิบายให้ฉันฟังได้ไหม?", "อาหารอร่อยมากจริงๆ", "พี่ชายของฉันอาศัยอยู่ในกรุงเทพฯ", "สุนัขกำลังวิ่งอยู่ในป่า", "เราต้องไปให้ทันรถไฟ", "นั่นเป็นคำถามที่ดีมาก", "เธอกำลังอ่านหนังสือที่น่าสนใจ", "เมื่อวานฉันล้างรถของฉัน", "แมวกำลังนอนหลับอยู่บนเก้าอี้", "พรุ่งนี้ฝนน่าจะตก", "ฉันขอสั่งเบียร์หนึ่งแก้ว", "ฉันจอดรถที่ไหนได้บ้าง?", "เด็กๆ กำลังเล่นอยู่ในสวน"]
  },
  {
    id: 'vietnamese', name: 'Vietnamese', aliases: ['tieng viet', 'tiếng việt'], family: 'Austroasiatic', region: 'Asia', tier: 2, script: 'Latin',
    clue: 'Heavy use of multiple diacritics per letter to denote tones (e.g., ệ, ắ, ồ). Mostly single-syllable short words.', confusedWith: ['Hmong', 'Thai (Pinyin)'],
    sentences: ["Xin lỗi, ga tàu ở đâu?", "Tôi rất thích uống cà phê vào buổi sáng.", "Tối nay trời rất lạnh bên ngoài.", "Chúng tôi đến chợ vào cuối tuần này.", "Hôm nay là một ngày đẹp trời.", "Bây giờ là mấy giờ?", "Tôi không hiểu câu này.", "Bạn có thể giải thích cho tôi không?", "Thức ăn thực sự rất ngon.", "Anh trai tôi sống ở Hà Nội.", "Con chó đang chạy trong rừng.", "Chúng ta phải bắt kịp chuyến tàu.", "Đó là một câu hỏi rất hay.", "Cô ấy đang đọc một cuốn sách thú vị.", "Hôm qua tôi đã rửa xe ô tô.", "Con mèo đang ngủ trên ghế.", "Ngày mai có lẽ trời sẽ mưa.", "Tôi muốn gọi một ly bia.", "Tôi có thể đậu xe ở đâu đây?", "Bọn trẻ đang chơi trong vườn."]
  },
  {
    id: 'greek', name: 'Greek', aliases: ['ελληνικά', 'ellinika'], family: 'Hellenic', region: 'Europe', tier: 2, script: 'Greek',
    clue: 'Uses the Greek alphabet (α, β, γ, δ, θ, π, ω). Question mark is a semicolon (;).', confusedWith: ['Cyrillic languages (visually)'],
    sentences: ["Πού είναι ο σταθμός παρακαλώ;", "Πολύ μου αρέσει ο καφές το πρωί.", "Κάνει πολύ κρύο έξω απόψε.", "Πάμε στην αγορά αυτό το Σαββατοκύριακο.", "Είναι μια όμορφη μέρα σήμερα.", "Τι ώρα είναι τώρα;", "Δεν καταλαβαίνω αυτή την πρόταση.", "Μπορείτε να μου το εξηγήσετε;", "Το φαγητό είναι πραγματικά νόστιμο.", "Ο αδερφός μου ζει στην Αθήνα.", "Ο σκύλος τρέχει μέσα στο δάσος.", "Πρέπει να προλάβουμε το τρένο.", "Αυτή είναι μια πολύ καλή ερώτηση.", "Διαβάζει ένα ενδιαφέρον βιβλίο.", "Χθες έπλυνα το αυτοκίνητό μου.", "Η γάτα κοιμάται στην καρέκλα.", "Αύριο μάλλον θα βρέξει.", "Θα ήθελα να παραγγείλω μια μπύρα.", "Πού μπορώ να παρκάρω εδώ;", "Τα παιδιά παίζουν στον κήπο."]
  },
  {
    id: 'hungarian', name: 'Hungarian', aliases: ['magyar'], family: 'Uralic', region: 'Europe', tier: 3, script: 'Latin',
    clue: 'Use of ő and ű (double acute accents), frequent letter combinations: sz, gy, cs. Long agglutinative words.', confusedWith: ['Finnish', 'Turkish'],
    sentences: ["Hol van a vasútállomás, kérem?", "Nagyon szeretem a reggeli kávét.", "Ma este nagyon hideg van kint.", "Ezen a hétvégén piacra megyünk.", "Gyönyörű napunk van ma.", "Mennyi az idő most?", "Nem értem ezt a mondatot.", "Meg tudná ezt magyarázni nekem?", "Az étel nagyon finom.", "A bátyám Budapesten él.", "A kutya az erdőben fut.", "El kell érnünk a vonatot.", "Ez egy nagyon jó kérdés.", "Ő egy érdekes könyvet olvas.", "Tegnap lemostam az autómat.", "A macska a széken alszik.", "Holnap valószínűleg esni fog.", "Szeretnék egy sört kérni.", "Hol tudok itt parkolni?", "A gyerekek a kertben játszanak."]
  },
  {
    id: 'finnish', name: 'Finnish', aliases: ['suomi'], family: 'Uralic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Lots of double vowels (aa, ee, ii) and double consonants (kk, tt). ä and ö are used. No b, c, f, q, w, x, z in native words.", confusedWith: ['Estonian', 'Hungarian'],
    sentences: ["Missä juna-asema on, kiitos?", "Pidän hyvin paljon kahvista aamulla.", "Tänä iltana on todella kylmä ulkona.", "Menemme torille tänä viikonloppuna.", "Tänään on kaunis päivä.", "Paljonko kello on nyt?", "En ymmärrä tätä lausetta.", "Voitko selittää tämän minulle?", "Ruoka on todella herkullista.", "Veljeni asuu Helsingissä.", "Koira juoksee metsässä.", "Meidän täytyy ehtiä junaan.", "Tämä on erittäin hyvä kysymys.", "Hän lukee mielenkiintoista kirjaa.", "Pesin autoni eilen.", "Kissa nukkuu tuolilla.", "Huomenna todennäköisesti sataa.", "Haluaisin tilata yhden oluen.", "Mihin voin pysäköidä täällä?", "Lapset leikkivät puutarhassa."]
  },
  {
    id: 'indonesian', name: 'Indonesian', aliases: ['bahasa indonesia', 'bahasa'], family: 'Austronesian', region: 'Asia', tier: 2, script: 'Latin',
    clue: 'Uses suffixes/prefixes extensively (me-, -kan). Hyphenated duplicated words for plurals (buku-buku). No diacritics.', confusedWith: ['Malay', 'Tagalog'],
    sentences: ["Di mana stasiun kereta api?", "Saya sangat suka kopi di pagi hari.", "Malam ini sangat dingin di luar.", "Kami pergi ke pasar akhir pekan ini.", "Hari ini adalah hari yang indah.", "Jam berapa sekarang?", "Saya tidak mengerti kalimat ini.", "Bisakah Anda menjelaskannya kepada saya?", "Makanannya sangat lezat.", "Kakak saya tinggal di Jakarta.", "Anjing itu berlari melewati hutan.", "Kita harus mengejar kereta.", "Itu pertanyaan yang sangat bagus.", "Dia sedang membaca buku yang menarik.", "Kemarin saya mencuci mobil saya.", "Kucing itu sedang tidur di kursi.", "Besok mungkin akan turun hujan.", "Saya ingin memesan satu bir.", "Di mana saya bisa parkir di sini?", "Anak-anak sedang bermain di taman."]
  },
  {
    id: 'hebrew', name: 'Hebrew', aliases: ['ivrit', 'עברית'], family: 'Semitic', region: 'Middle East', tier: 2, script: 'Hebrew',
    clue: 'Written right-to-left. Blocky characters with sharp square layouts and no cursive line connections (ם, ן, ך, ל, א).', confusedWith: ['Arabic', 'Yiddish'],
    sentences: [
      "איפה תחנת הרכבת בבקשה?", "אני מאוד אוהב קפה בבוקר.", "הלילה קר מאוד בחוץ.", "אנחנו הולכים לשוק בסוף השבוע.", "היום הוא יום יפה.", "מה השעה עכשיו?", "אני לא מבין את המשפט הזה.", "תוכל להסביר לי את זה בבקשה?", "האוכל פה ממש טעים.", "אח שלי גר בתל אביב.", "הכלב רץ בתוך היער.", "אנחנו חייבים לתפוס את הרכבת.", "זו שאלה מצוינת.", "היא קוראת ספר מעניין.", "אתמול שטפתי את המכונית שלי."
    ]
  },
  {
    id: 'persian', name: 'Persian', aliases: ['farsi', 'parsi', 'فارسی'], family: 'Indo-Iranian', region: 'Middle East', tier: 3, script: 'Arabic-Persian',
    clue: 'Written right-to-left. Uses the Arabic alphabet system but adds four distinct letters: چ, پ, گ, ژ.', confusedWith: ['Arabic', 'Urdu'],
    sentences: [
      "ایستگاه قطار کجاست لطفا؟", "من صبح ها قهوه را خیلی دوست دارم.", "امشب بیرون خیلی سرد است.", "ما این آخر هفته به بازار می رویم.", "امروز یک روز زیبا است.", "الان ساعت چند است؟", "من این جمله را نمی فهمم.", "می توانید این را به من توضیح دهید؟", "غذا واقعا لذیذ است.", "برادرم در تهران زندگی می کند.", "سگ در جنگل می‌دود.", "ما باید به قطار برسیم.", "این سوال خیلی خوبی است.", "او در حال خواندن یک کتاب جالب است.", "دیروز ماشینم را شستم."
    ]
  },
  {
    id: 'bengali', name: 'Bengali', aliases: ['bangla', 'বাংলা'], family: 'Indo-Aryan', region: 'Asia', tier: 3, script: 'Bengali-Assamese',
    clue: 'Features a continuous horizontal bar running across the text top, but shapes are more fluid and triangular than Hindi (া, ে, ি, ো).', confusedWith: ['Hindi', 'Assamese'],
    sentences: [
      "রেলওয়ে স্টেশন কোথায়, দয়া করে?", "আমি সকালে কফি খুব পছন্দ করি।", "আজ রাতে বাইরে খুব ঠান্ডা।", "আমরা এই সপ্তাহান্তে বাজারে যাব।", "আজ একটি সুন্দর দিন।", "এখন কয়টা বাজে?", "আমি এই বাক্যটি বুঝতে পারছি না।", "আপনি কি আমাকে এটি বুঝিয়ে বলতে পারবেন?", "খাবারটা সত্যিই খুব সুস্বাদু।", "আমার ভাই কলকাতায় থাকে।", "কুকুরটি বনের মধ্যে দৌড়াচ্ছে।", "আমাদের ট্রেনটি ধরতে হবে।", "এটি একটি খুব ভালো প্রশ্ন।", "সে একটি আকর্ষণীয় বই পড়ছে।", "গতকাল আমি আমার গাড়িটি ধুয়েছি।"
    ]
  },
  {
    id: 'ukrainian', name: 'Ukrainian', aliases: ['ukrainska', 'українська'], family: 'Slavic', region: 'Europe', tier: 2, script: 'Cyrillic',
    clue: 'Uses Cyrillic but is immediately identifiable by unique vowels i, ї, є and apostrophes. Lacks Russian letters ы, э.', confusedWith: ['Russian', 'Belarusian', 'Bulgarian'],
    sentences: [
      "Де знаходиться залізничний вокзал, будь ласка?", "Я дуже люблю каву вранці.", "Сьогодні ввечері на вулиці дуже холодно.", "Ми йдемо на ринок цими вихідними.", "Сьогодні прекрасний день.", "Котра зараз година?", "Я не розумію це речення.", "Чи можете ви мені це пояснити?", "Їжа справді дуже смачна.", "Мій брат живе в Києві.", "Собака біжить через ліс.", "Нам потрібно встигнути на потяг.", "Це дуже гарне питання.", "Вона читає цікаву книжку.", "Вчора я помив свою машину."
    ]
  },
  {
    id: 'georgian', name: 'Georgian', aliases: ['kartuli', 'ქართული'], family: 'Kartvelian', region: 'Europe/Asia', tier: 4, script: 'Mkhedruli',
    clue: 'Extremely distinct, rounded, curly calligraphic script with no capital letters or baseline straight horizontal lines (ა, ბ, გ, დ).', confusedWith: ['Armenian', 'Thai'],
    sentences: [
      "სად არის რკინიგზის სადგური, გთხოვთ?", "მე ძალიან მიყვარს ყავა დილით.", "დღეს საღამოს გარეთ ძალიან ცივა.", "ამ უქმეებზე ბაზარში მივდივართ.", "დღეს მშვენიერი დღეა.", "რომელი საათია ახლა?", "მე არ მესმის ეს წინადადება.", "შეგიძლიათ ეს ამიხსნათ?", "საჭმელი მართლაც ძალიან გემრიელია.", "ჩემი ძმა თბილისში ცხოვრობს.", "ძაღლი ტყეში დარბის.", "ჩვენ მატარებელს უნდა მივუსწროთ.", "ეს ძალიან კარგი კითხვაა.", "ის საინტერესო წიგნს კითხულობს.", "გუშინ ჩემი მანქანა გავრეცხე."
    ]
  },
  {
    id: 'armenian', name: 'Armenian', aliases: ['hayeren', 'հայերեն'], family: 'Indo-European', region: 'Europe/Asia', tier: 4, script: 'Armenian',
    clue: 'Unique tall script featuring vertical, loop-heavy shapes that often look visually similar to repetitions of the letters "u", "n", or "h".', confusedWith: ['Georgian', 'Amharic', 'Greek'],
    sentences: [
      "Որտե՞ղ է գտնվում երկաթուղային կայարանը, խնդրում եմ:", "Ես շատ եմ սիրում սուրճ խմել առավոտյան:", "Այսօր երեկոյան դրսում շատ ցուրտ է:", "Այս հանգստյան օրերին մենք գնում ենք շուկա:", "Այսօր հրաշալի օր է:", "Ժամը քանիսն է հիմա:", "Ես չեմ հասկանում այս նախադասությունը:", "Կարո՞ղ եք սա բացատրել ինձ:", "Ուտելիքը իսկապես շատ համեղ է:", "Եղբայրս ապրում է Երևանում:", "Շունը վազում է անտառով:", "Մենք պետք է հասնենք գնացքին:", "Դա շատ լավ հարց է:", "Նա հետաքրքիր գիրք է կարդում:", "Երեկ ես լվացի իմ մեքենան:"
    ]
  },
  {
    id: 'tamil', name: 'Tamil', aliases: ['thamizh', 'தமிழ்'], family: 'Dravidian', region: 'Asia', tier: 4, script: 'Tamil',
    clue: 'Angled, structural script utilizing clear right-angle profiles and flatter horizontal tops instead of continuous lines (அ, க, த, ப).', confusedWith: ['Malayalam', 'Telugu', 'Kannada'],
    sentences: [
      "ரயில் நிலையம் எங்கே உள்ளது, தயவுசெய்து சொல்லுங்கள்?", "எனக்கு காலையில் காபி குடிப்பது மிகவும் பிடிக்கும்.", "இன்று இரவு வெளியில் மிகவும் குளிராக இருக்கிறது.", "நாங்கள் இந்த வார இறுதியில் சந்தைக்குச் செல்கிறோம்.", "இன்று ஒரு அழகான நாள்.", "இப்போது மணி என்ன?", "எனக்கு இந்த வாக்கியம் புரியவில்லை.", "இதை எனக்கு விளக்க முடியுமா?", "உணவு உண்மையிலேயே மிகவும் சுவையாக இருக்கிறது.", "என் சகோதரன் சென்னையில் வசிக்கிறான்.", "நாய் காட்டிற்குள் ஓடுகிறது.", "நாம் ரயிலைப் பிடிக்க வேண்டும்.", "இது ஒரு மிகச் சிறந்த கேள்வி.", "அவள் ஒரு சுவாரசியமான புத்தகத்தைப் படிக்கிறாள்.", "நேற்று நான் என் காரைக் கழுவினேன்."
    ]
  },
  {
    id: 'amharic', name: 'Amharic', aliases: ['amarigna', 'አማርኛ'], family: 'Semitic', region: 'Africa', tier: 4, script: 'Geʻez',
    clue: 'Uses the Geʻez writing system; blocky characters with distinct little stems, base legs, or side loops extending off lines (ሀ, ለ, መ, ቆ).', confusedWith: ['Armenian', 'Cherokee'],
    sentences: [
      "እባክዎ የባቡር ጣቢያው የት ነው?", "ጠዋት ቡና መጠጣት በጣም እወዳለሁ።", "ዛሬ ማታ ውጭ በጣም ቀዝቃዛ ነው።", "በዚህ ሳምንት መጨረሻ ወደ ገበያ እንሄዳለን።", "ዛሬ ቆንጆ ቀን ነው።", "አሁን ሰዓት ስንት ነው?", "ይህ አረፍተ ነገር አልገባኝም።", "እባክዎን ይህንን ሊያብራሩልኝ ይችላሉ?", "ምግቡ በእውነት በጣም ጣፋጭ ነው።", "ወንድሜ አዲስ አበባ ነው የሚኖረው።", "ውሻው በጫካ ውስጥ እየሮጠ ነው።", "ባቡሩን ማድረስ አለብን።", "ይህ በጣም ጥሩ ጥያቄ ነው።", "እሷ አስደሳች መጽሐፍ እያነበበች ነው።", "ትናንት መኪናዬን አጥቤ ነበር。"
    ]
  },
  {
    id: 'czech', name: 'Czech', aliases: ['cestina', 'čeština'], family: 'Slavic', region: 'Europe', tier: 3, script: 'Latin',
    clue: 'High usage of hook diacritics over consonants called háček (č, š, ž, ř, ť) and circle marks over the letter u (ů).', confusedWith: ['Slovak', 'Polish'],
    sentences: [
      "Kde je prosím vlakové nádraží?", "Mám moc rád kávu po ránu.", "Dnes večer je venku velká zima.", "Tento víkend jdeme na trh.", "Dnes je nádherný den.", "Kolik je teď přesně hodin?", "Této větě vůbec nerozumím.", "Můžete mi to prosím vysvětlit?", "Jídlo je opravdu vynikající.", "Můj bratr žije v Praze.", "Pes běhá lesem.", "Musíme stihnout ten vlak.", "To je velmi dobrá otázka.", "Ona čte zajímavou knihu.", "Včera jsem si umyl auto."
    ]
  },
  {
    id: 'danish', name: 'Danish', aliases: ['dansk'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: 'Utilizes character vowels æ, ø, å. Identical alphabet to Norwegian, but characteristically relies on soft consonant structures (af, og).', confusedWith: ['Norwegian', 'Swedish', 'Dutch'],
    sentences: [
      "Hvor er togstationen, tak?", "Jeg kan rigtig godt lide kaffe om morgenen.", "Det er meget koldt udenfor i aften.", "Vi skal på markedet i denne weekend.", "Det er en dejlig dag i dag.", "Hvad er klokken lige nu?", "Jeg forstår overhovedet ikke denne sætning.", "Kan du forklare det for mig?", "Maten smager virkelig lækkert.", "Min bror bor i København.", "Hunden løber igennem skoven.", "Vi skal nå at fange toget.", "Det er et rigtig godt spørgsmål.", "Hun læser en spændende bog.", "I går vaskede jeg min bil."
    ]
  },
  {
    id: 'norwegian', name: 'Norwegian', aliases: ['norsk'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: 'Utilizes character vowels æ, ø, å. Identical alphabet to Danish but relies heavily on hard consonant endings (-k, -t, -p).', confusedWith: ['Danish', 'Swedish', 'Icelandic'],
    sentences: [
      "Hvor er togstasjonen, er du snill?", "Jeg elsker kaffe på morgenen.", "Det er veldig kaldt ute i kveld.", "Vi skal dra på markedet denne helgen.", "Det er en nydelig dag i dag.", "Hvor mye er klokken nå?", "Jeg skjønner ikke denne setningen.", "Kan du forklare dette for meg?", "Maten smaker virkelig fantastisk.", "Broren min bor i Oslo.", "Hunden løper gjennom skogen.", "Vi må rekke toget vårt.", "Det er et kjempebra spørsmål.", "Hun leser en kjempespennende bok.", "I går vasket jeg bilen min."
    ]
  },
  {
    id: 'romanian', name: 'Romanian', aliases: ['romana', 'română'], family: 'Romance', region: 'Europe', tier: 3, script: 'Latin',
    clue: 'A Romance language profile instantly separated from others by comma-below or circumflex marks (ș, ț, ă, î, â).', confusedWith: ['Italian', 'Spanish', 'Moldovan'],
    sentences: [
      "Unde este gara, vă rog frumos?", "Îmi place foarte mult cafeaua dimineața.", "Este foarte frig afară în această seară.", "Mergem la piață în acest weekend.", "Este o zi minunată astăzi.", "Cât este ceasul acum?", "Nu înțeleg această propoziție.", "Îmi puteți explica acest lucru?", "Mâncarea este cu adevărat delicioasă.", "Fratele meu locuiește la București.", "Câinele aleargă prin pădure.", "Trebuie să prindem trenul.", "Aceasta este o întrebare foarte bună.", "Ea citește o carte interesantă.", "Ieri mi-am spălat mașina."
    ]
  },
  {
    id: 'tagalog', name: 'Tagalog', aliases: ['filipino', 'pinoy'], family: 'Austronesian', region: 'Asia', tier: 3, script: 'Latin',
    clue: 'Frequent structural markers like ang, ng, mga alongside repetitive starting word syllables (magandang, kumakain).', confusedWith: ['Indonesian', 'Malay'],
    sentences: [
      "Nasaan po ang istasyon ng tren?", "Gustung-gusto ko ang kape sa umaga.", "Napakalamig sa labas ngayong gabi.", "Pupunta kami sa palengke ngayong katapusan ng linggo.", "Maganda ang araw na ito ngayon.", "Anong oras na ba ngayon?", "Hindi ko naiintindihan ang pangungusap na ito.", "Maaari mo bang ipaliwanag ito sa akin?", "Masarap talaga ang pagkain dito.", "Nakatira ang kapatid kong lalaki sa Maynila.", "Tumatakbo ang aso sa loob ng gubat.", "Kailangan nating mahabol ang tren.", "Napakagandang tanong niyan.", "Nagbabasa siya ng isang kagiliw-giliw na libro.", "Hinugasan ko ang kotse ko kahapon."
    ]
  },
  {
    id: 'catalan', name: 'Catalan', aliases: ['catala', 'català'], family: 'Romance', region: 'Europe', tier: 3, script: 'Latin',
    clue: 'Linguistic overlap between Spanish and French. Identified by interpunct dots (l·l) and ç alongside terminal consonants.', confusedWith: ['Spanish', 'French', 'Occitan'],
    sentences: [
      "On és l'estació de tren, si us plau?", "M'agrada molt el cafè al matí.", "Fa molt de fred a fora aquesta nit.", "Anem al mercat aquest cap de setmana.", "Avui fa un dia bonic.", "Quina hora és ara mateix?", "No entenc aquesta frase.", "M'ho pots explicar, si us plau?", "El menjar és realment deliciós.", "El meu germà viu a Barcelona.", "El gos corre pel bosc.", "Hem d'agafar el tren.", "Aquesta és una molt bona pregunta.", "Ella llegeix un llibre interessant.", "Ahir vaig rentar el meu cotxe."
    ]
  },
  {
    id: 'welsh', name: 'Welsh', aliases: ['cymraeg'], family: 'Celtic', region: 'Europe', tier: 4, script: 'Latin',
    clue: 'Unusual spelling profiles featuring very frequent uses of w and y acting as standard vowels, alongside dd, ff, ll, ch.', confusedWith: ['Irish', 'Breton'],
    sentences: [
      "Ble mae'r orsaf drenau os gwelwch yn dda?", "Dw i'n mwynhau coffi yn fawr iawn yn y bore.", "Mae hi'n oer iawn y tu allan heno.", "Rydyn ni'n mynd i'r farchnad y penwythnos hwn.", "Mae'n ddiwrnod hyfryd heddiw.", "Faint o'r gloch yw hi nawr?", "Dydw i ddim yn deall y frawddeg hon.", "Allwch chi esbonio hyn i mi?", "Mae'r bwyd yn flasus iawn yma.", "Mae fy mrawd yn byw yng Nghaerdydd.", "Mae'r ci yn rhedeg drwy'r goedwig.", "Mae angen i ni ddal y trên.", "Mae hynny'n gwestiwn da iawn.", "Mae hi'n darllen llyfr diddorol.", "Fe wnes i olchi fy nghar ddoe."
    ]
  },
  {
    id: 'basque', name: 'Basque', aliases: ['euskara'], family: 'Language Isolate', region: 'Europe', tier: 4, script: 'Latin',
    clue: 'High usage density of letters k, x, z, tz, ts. Verbs regularly contain unique helper combinations like du, gu, dugu.', confusedWith: ['Spanish', 'Catalan'],
    sentences: [
      "Non dago tren geltokia, mesedez?", "Goizetan kafea asko gustatzen zait.", "Gaur gauean oso hotz egiten du kanpoan.", "Asteburu honetan merkatura joango gara.", "Gaur egun ederra da benetan.", "Zer ordu da oraintxe bertan?", "Ez dut esaldi hau ulertzen.", "Azaldu diezadakezu hori, mesedez?", "Janaria oso goxoa dago hemen.", "Nire anaia Bilbon bizi da.", "Txakurra basoan zehar korrika ari da.", "Trena hartu behar dugu nekerik gabe.", "Hori oso galdera ona da.", "Liburu interesgarri bat irakurtzen ari da bera.", "Atzo nire autoa garbitu nuen."
    ]
  },
  {
    id: 'icelandic', name: 'Icelandic', aliases: ['islenska', 'íslenska'], family: 'Germanic', region: 'Europe', tier: 4, script: 'Latin',
    clue: 'Preserves archaic Germanic historical letters like thorn (þ) and eth (ð), mixed with heavy vowel accents (á, é, í, ó, ú, ý).', confusedWith: ['Faroese', 'Norwegian'],
    sentences: [
      "Hvar er lestarstöðin, vinsamlegast?", "Ég elska að drekka kaffi á morgnana.", "Það er mjög kalt úti í kvöld.", "Við ætlum á markaðinn um helgina.", "Það er fallegur dagur í dag.", "Hvað er klukkan mikið núna?", "Ég skil ekki þessa setningu.", "Geturðu útskýrt þetta fyrir mér?", "Maturinn er virkilega ljúffengur.", "Bróðir minn býr í Reykjavík.", "Hundurinn hleypur í gegnum skóginn.", "Við verðum að ná lestinni.", "Þetta er mjög góð spurning.", "Hún er að lesa áhugaverða bók.", "Í gær þvoði ég bílinn minn."
    ]
  },
  {
    id: 'zulu', name: 'Zulu', aliases: ['isizulu'], family: 'Bantu', region: 'Africa', tier: 4, script: 'Latin',
    clue: 'Extensive, complex prefixing setups attached to nouns. Clicks are mapped to standard consonants c, q, and x.', confusedWith: ['Xhosa', 'Swahili'],
    sentences: [
      "Sikuphi isiteshi sesitimela ngicela?", "Ngithanda kakhulu ikhofi ekuseni.", "Kubanda kakhulu ngaphandle kulobubusuku.", "Siya emakethe kule mpelasonto.", "Wusuku oluhle kakhulu namuhla.", "Isikhathi sithini manje?", "Angisizwisisi lesi sisho.", "Ungangichazela lokhu ngicela?", "Ukudla kumnandi kakhulu lapha.", "Umfowethu uhlala eGoli.", "Inja igijima ehlathini.", "Kufanele sibambe isitimela.", "Lowo ngumbuzo omuhle kakhulu.", "Ufunda incwadi ethakazelisayo.", "Izolo ngigeze imoto yami."
    ]
  },
  {
    id: 'estonian', name: 'Estonian', aliases: ['eesti', 'eesti keel'], family: 'Uralic', region: 'Europe', tier: 4, script: 'Latin',
    clue: 'Similar look to Finnish but heavily uses the distinctive letter õ alongside ä, ö, ü, without relying on long double consonants.', confusedWith: ['Finnish', 'Hungarian'],
    sentences: [
      "Kus asub rongijaam, palun?", "Mulle meeldib hommikul väga kohvi juua.", "Täna õhtul on väljas väga külm.", "Me läheme sel nädalavahetusel turule.", "Täna on tõeliselt ilus päev.", "Mis kell praegu on?", "Ma ei saa sellest lausest aru.", "Kas sa saaksid seda mulle selgitada?", "Toit on siin tõesti maitsev.", "Minu vend elab Tallinnas.", "Koer jookseb läbi metsa.", "Me peame rongi peale jõudma.", "See on väga hea küsimus.", "Ta loeb huvitavat raamatut.", "Eile pesin ma oma auto puhtaks."
    ]
  },
  {
    id: 'maori', name: 'Maori', aliases: ['te reo', 'te reo maori', 'māori'], family: 'Austronesian', region: 'Oceania', tier: 3, script: 'Latin',
    clue: 'Consistent use of regular vowel macrons (ā, ē, ī, ō, ū) combined with repeated small base particles like te, ngā, e, i.', confusedWith: ['Hawaiian', 'Samoan'],
    sentences: [
      "Kei hea te teihana tereina koa?", "He tino pai ki ahau te kawhe i te ata.", "He tino makariri ki waho i tenei po.", "Ka haere matou ki te maakete i tenei wiki.", "He ra ataahua tenei ra.", "Ko te aha te wa inaianei?", "Kaore au e marama ki tenei rerenga korero.", "Ka taea e koe te whakamārama mai i tenei ki ahau?", "He tino reka te kai nei.", "Kei te noho toku tuakana ki Akarana.", "Kei te oma te kuri i te ngahere.", "Me hopu e tatou te tereina.", "He patai tino pai tena.", "Kei te panui ia i tetahi pukapuka pai.", "Inanahi i horoi ahau i taku motokā."
    ]
  }
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find(l => l.id === id);
}

export function getLanguageIds(): string[] {
  return languages.map(l => l.id);
}

export function getLanguagesByTiers(tiers: number[]): Language[] {
  const tierSet = new Set(tiers);
  return languages.filter(l => tierSet.has(l.tier));
}