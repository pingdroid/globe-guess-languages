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
    sentences: ["Dov'è la stazione per favore?", "Mi piace molto il caffè la mattina.", "Fa freddo fuori stasera.", "Andiamo al mercato questo fine settimana.", "È una bellissima giornata oggi.", "Come ti chiami, ragazzo?", "Non parlo bene questa lingua.", "Voglio mangiare una pizza Margherita.", "Il museo è chiuso il lunedì.", "Devo andare a lavorare presto.", "I miei genitori vivono in città.", "Il cielo è molto limpido oggi.", "Ho bisogno di comprare i biglietti.", "A che ora inizia il film?", "Lei ha un cane piccolo.", "Noi studiamo tutti i giorni.", "Il libro è sul tavolo.", "Mi fa molto male la testa.", "Andiamo in spiaggia a nuotare.", "Che bella sorpresa vederti qui!"]
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
    sentences: ["Gdzie jest dworzec kolejowy?", "Bardzo lubię kawę rano.", "Dziś wieczór jest bardzo zimno na zewnątrz.", "Idziemy na targ w ten weekend.", "To piękny dzień dzisiaj.", "Która jest teraz godzina?", "Nie rozumiem tego zdania.", "Czy możesz mi to wytłumaczyć?", "Jedzenie smakuje wspaniale.", "Mój brat mieszka w Warszawie.", "Pies biegnie przez las.", "Musimy zdążyć na pociąg.", "To jest bardzo dobre pytanie.", "Ona czyta ciekawą książkę.", "Wczoraj umyłem swój samochód.", "Kot śpi na krześle.", "Jutro prawdopodobnie będzie padać.", "Chciałbym zamówić jedno piwo.", "Gdzie mogę tutaj zaparkować?", "Dzieci bawią się w ogrodzie."]
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
    sentences: ["Hol van a vasútállomás, kérem?", "Nagyon szeretem a reggeli kávét.", "Ma este nagyon hideg van kint.", "Ezen a hétvégén piacon vásárolunk.", "Gyönyörű napunk van ma.", "Mennyi az idő most?", "Nem értem ezt a mondatot.", "Meg tudná ezt magyarázni nekem?", "Az étel nagyon finom.", "A bátyám Budapesten él.", "A kutya az erdőben fut.", "El kell érnünk a vonatot.", "Ez egy nagyon jó kérdés.", "Ő egy érdekes könyvet olvas.", "Tegnap lemostam az autómat.", "A macska a széken alszik.", "Holnap valószínűleg esni fog.", "Szeretnék egy sört kérni.", "Hol tudok itt parkolni?", "A gyerekek a kertben játszanak."]
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
