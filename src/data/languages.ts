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
    id: 'french', name: 'French', aliases: ['francais', 'français'], family: 'Romance', region: 'Europe', tier: 1, script: 'Latin',
    clue: "Frequent apostrophes (l', j', d', qu'), words ending in -eau/-eux/-tion, accents (é, è, ê, ç), silent final consonants.",
    confusedWith: ['Italian', 'Spanish'],
    sentences: [
      // === Category A: Template sentences (shared topics, feature-rich) ===
      "À quelle heure est-ce que le marché ferme aujourd'hui?",
      "Ma grand-mère habite dans un petit village près de Lyon.",
      "Le temps a été vraiment froid toute la semaine.",
      "Je voudrais acheter trois livres s'il vous plaît.",
      "Les enfants jouent dehors parce qu'il fait beau.",
      "Où est-ce qu'on peut trouver un bon restaurant par ici?",
      "Elle m'a dit qu'elle ne comprenait pas le problème.",
      "Ce vieil immeuble a été construit il y a deux cents ans.",
      // === Category B: Script-showcase (apostrophes, accents, -eau/-eux) ===
      "L'électricité n'est pas chère, mais l'eau coûte de plus en plus cher.",
      "Il s'est présenté à l'entrée du château avec beaucoup d'élégance.",
      "C'est l'été, je m'ennuie un peu, j'aimerais qu'on aille à la pêche.",
      "Qu'est-ce que c'est que cette drôle d'idée?",
      "Les gâteaux qu'elle prépare sont toujours délicieux et très généreux.",
      // === Category C: Cultural-distinctive (French daily life, not stereotypes) ===
      "On se retrouve à la terrasse vers dix-huit heures pour l'apéro?",
      "La grève des transports a encore perturbé mon trajet ce matin.",
      "Il faut qu'on fasse la queue à la préfecture pour le renouvellement.",
      "Le pont de l'Ascension tombe bien cette année, on part quatre jours.",
      "J'ai trouvé une super boulangerie qui fait des pains au levain.",
      "Tu as vu les résultats du bac? Apparemment c'était difficile cette année.",
      "Le propriétaire a augmenté le loyer sans prévenir, c'est pas normal.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Aujourd'hui, j'ai beaucoup de choses à faire avant ce soir.",
      "L'anniversaire de mon neveu est le vingt-quatre décembre.",
      "Je ne sais pas si c'est une bonne idée.",
      "Il a pris le train ce matin.",
      "Ma sœur est partie en vacances."
    ]
  },
  {
    id: 'spanish', name: 'Spanish', aliases: ['espanol', 'español'], family: 'Romance', region: 'Europe/Americas', tier: 1, script: 'Latin',
    clue: "Inverted punctuation (¿, ¡), tilde over n (ñ), frequent endings in -ción/-dad/-mente, accent on final syllable stress (café, también).",
    confusedWith: ['Portuguese', 'Italian'],
    sentences: [
      // === Category A: Template sentences ===
      "¿A qué hora cierra el mercado hoy?",
      "Mi abuela vive en un pequeño pueblo cerca de Sevilla.",
      "El tiempo ha sido bastante frío toda la semana.",
      "Me gustaría comprar tres libros, por favor.",
      "Los niños juegan afuera porque hace buen tiempo.",
      "¿Dónde se puede encontrar un buen restaurante por aquí?",
      "Ella me dijo que no entendía el problema.",
      "Este viejo edificio fue construido hace doscientos años.",
      // === Category B: Script-showcase (¿¡, ñ, -ción, accents) ===
      "¿Cuántos años llevas estudiando esta especialización?",
      "¡Qué maravillosa actuación la del músico español!",
      "La señora Muñoz enseña comunicación en la universidad.",
      "¿No crees que deberíamos añadir más información?",
      "¡Felicidades! Tu presentación fue una inspiración para todos.",
      // === Category C: Cultural-distinctive (Spanish daily life) ===
      "Quedamos a las diez de la noche para cenar, ¿te parece bien?",
      "La siesta no es solo dormir, es parar un rato después de comer.",
      "Este fin de semana hay una verbena en la plaza del pueblo.",
      "El horario partido me deja poco tiempo entre la mañana y la tarde.",
      "Hemos reservado una casa rural en Asturias para el puente de mayo.",
      "¿Has probado las croquetas que prepara mi madre? Son increíbles.",
      "El bar de abajo pone unas tapas buenísimas con cada caña.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "¿Cuándo empieza la próxima reunión de la organización?",
      "El niño pequeño juega con su muñeca favorita.",
      "No me parece una buena idea salir tan tarde.",
      "Tiene que ir a la oficina antes de las nueve.",
      "El tren sale a las ocho de la mañana."
    ]
  },
  {
    id: 'german', name: 'German', aliases: ['deutsch'], family: 'Germanic', region: 'Europe', tier: 1, script: 'Latin',
    clue: "Capitalised nouns (Haus, Straße), umlauts (ä, ö, ü), eszett (ß), long compound words (Krankenhaus, Straßenbahn).",
    confusedWith: ['Dutch', 'Swedish'],
    sentences: [
      // === Category A: Template sentences ===
      "Um wie viel Uhr macht der Markt heute zu?",
      "Meine Großmutter wohnt in einem kleinen Dorf in der Nähe von München.",
      "Das Wetter war die ganze Woche ziemlich kalt.",
      "Ich möchte gerne drei Bücher kaufen, bitte.",
      "Die Kinder spielen draußen, weil das Wetter schön ist.",
      "Wo kann man hier in der Nähe ein gutes Restaurant finden?",
      "Sie hat mir gesagt, dass sie das Problem nicht versteht.",
      "Dieses alte Gebäude wurde vor zweihundert Jahren gebaut.",
      // === Category B: Script-showcase (capitals, ß, umlauts, compounds) ===
      "Der Straßenbahnfahrplan hängt am Hauptbahnhof neben dem Ausgang.",
      "Die Geschäftsführerin der Großbäckerei eröffnete eine Außenstelle.",
      "Über fünfhundert Fußgänger überquerten gestern die Brücke.",
      "Das Frühstück im Straßencafé war überraschend günstig.",
      "Die Schlüsselübergabe für die Wohnung findet übermorgen statt.",
      // === Category C: Cultural-distinctive (German daily life) ===
      "Der Vermieter hat die Nebenkostenabrechnung schon wieder falsch berechnet.",
      "Am Sonntag haben alle Geschäfte zu, das vergesse ich jedes Mal.",
      "Hast du deine Steuererklärung schon beim Finanzamt abgegeben?",
      "Wir müssen unbedingt rechtzeitig den Termin bei der Ausländerbehörde machen.",
      "Die Bahn hatte heute wieder zwanzig Minuten Verspätung.",
      "Am Wochenende machen wir eine Wanderung im Schwarzwald.",
      "Ich muss noch Pfand zurückbringen, die Flaschen stapeln sich schon.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Die Straßenkreuzung vor dem Rathaus wird nächste Woche gesperrt.",
      "Mein Großvater hat früher in einer Bäckerei gearbeitet.",
      "Ich bin nicht sicher, ob das eine gute Idee ist.",
      "Er hat den Zug heute Morgen genommen.",
      "Mein Bruder ist in der Stadt."
    ]
  },
  {
    id: 'italian', name: 'Italian', aliases: ['italiano'], family: 'Romance', region: 'Europe', tier: 1, script: 'Latin',
    clue: "Nearly all words end in a vowel (-a, -o, -e, -i), double consonants (tt, ll, nn, zz), terminal accents (è, à, ù, ò).",
    confusedWith: ['Spanish', 'French'],
    sentences: [
      // === Category A: Template sentences ===
      "A che ora chiude il mercato oggi?",
      "Mia nonna vive in un piccolo paese vicino a Firenze.",
      "Il tempo è stato abbastanza freddo tutta la settimana.",
      "Vorrei comprare tre libri, per favore.",
      "I bambini giocano fuori perché fa bel tempo.",
      "Dove si può trovare un buon ristorante qui vicino?",
      "Mi ha detto che non capiva il problema.",
      "Questo vecchio palazzo è stato costruito duecento anni fa.",
      // === Category B: Script-showcase (vowel endings, double consonants, accents) ===
      "La ragazza attraversò velocemente la piazza sotto la pioggia battente.",
      "Quell'appartamento bellissimo è disponibile dall'otto settembre.",
      "Il programma dell'università prevede quattordici settimane di lezione.",
      "La mozzarella e la bruschetta sono le specialità della trattoria.",
      "L'appuntamento è stato annullato perché il dottore è ammalato.",
      // === Category C: Cultural-distinctive (Italian daily life) ===
      "Prendiamo un caffè al bar prima di andare in ufficio?",
      "Stasera facciamo la passeggiata sul lungomare dopo cena.",
      "Il motorino è l'unico modo per muoversi nel centro storico.",
      "Mia madre prepara il sugo da zero ogni domenica mattina.",
      "Quest'anno il Ferragosto cade di venerdì, facciamo il ponte.",
      "Il condominio ha votato contro il rifacimento della facciata.",
      "Ho preso un cornetto e un cappuccino al bar sotto casa.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "L'alluvione ha distrutto completamente il bellissimo villaggio medievale.",
      "Mio zio lavora in una pizzeria nel centro della città.",
      "Non sono sicuro che sia una buona idea.",
      "Ha preso il treno stamattina presto.",
      "Mio fratello è partito ieri sera."
    ]
  },
  {
    id: 'portuguese', name: 'Portuguese', aliases: ['portugues', 'português'], family: 'Romance', region: 'Europe/Americas', tier: 1, script: 'Latin',
    clue: "Nasal vowels (ã, õ), cedilla (ç), endings in -ão/-ões/-mente, circumflex (ê, ô). No inverted punctuation (unlike Spanish).",
    confusedWith: ['Spanish', 'Galician'],
    sentences: [
      // === Category A: Template sentences ===
      "A que horas é que o mercado fecha hoje?",
      "A minha avó mora numa pequena aldeia perto de Coimbra.",
      "O tempo tem estado bastante frio a semana toda.",
      "Gostaria de comprar três livros, por favor.",
      "As crianças brincam lá fora porque está bom tempo.",
      "Onde é que se pode encontrar um bom restaurante aqui perto?",
      "Ela disse-me que não compreendia o problema.",
      "Este edifício antigo foi construído há duzentos anos.",
      // === Category B: Script-showcase (ã, õ, ç, -ão, ê, ô) ===
      "A informação sobre a situação dos cidadãos está disponível na estação.",
      "Os irmãos compraram pão e melão no supermercado de manhã.",
      "A organização das eleições correu sem complicações.",
      "O coração da avó ficou cheio de emoção com a canção.",
      "As condições de habitação nesta região são preocupantes.",
      // === Category C: Cultural-distinctive (Portuguese daily life) ===
      "Vamos tomar uma bica antes de ir para o escritório?",
      "A tasca ali ao lado tem uns petiscos espetaculares.",
      "O bacalhau da minha mãe é sempre o melhor prato da consoada.",
      "Apanhei o comboio das sete e meia em Cais do Sodré.",
      "Aos domingos vamos sempre passear junto ao rio com o cão.",
      "A senhora da padaria já me conhece e guarda-me sempre o pão.",
      "O meu senhorio aumentou a renda e agora não sei o que fazer.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "A população desta região não concorda com a decisão do governo.",
      "O meu irmão trabalha numa farmácia perto da estação.",
      "Não tenho a certeza de que seja boa ideia.",
      "Ele apanhou o comboio esta manhã.",
      "A minha irmã foi de férias."
    ]
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
    clue: "Cyrillic alphabet with distinctive letters: я, ж, щ, ы, э. Soft sign ь and hard sign ъ. No Latin letters.", confusedWith: ['Ukrainian', 'Bulgarian'],
    sentences: [
      // === Category A: Template sentences ===
      "Во сколько сегодня закрывается рынок?",
      "Моя бабушка живёт в маленькой деревне недалеко от Казани.",
      "Погода всю неделю была довольно холодной.",
      "Я хотел бы купить три книги, пожалуйста.",
      "Дети играют на улице, потому что тепло.",
      "Где поблизости можно найти хороший ресторан?",
      "Она сказала мне, что не понимает проблему.",
      "Это старое здание было построено двести лет назад.",
      // === Category B: Script-showcase (ж, щ, ы, ь, ъ, я) ===
      "Жизнь в большом городе требует большого терпения и выдержки.",
      "Мужчина в жёлтой куртке перешёл площадь на красный свет.",
      "Мощёные дорожки в старом центре выглядят очень живописно.",
      "Он подъехал к подъезду и вышел из машины.",
      "Учёные обнаружили новый вид бабочек в дальневосточных лесах.",
      // === Category C: Cultural-distinctive (Russian daily life) ===
      "Давай встретимся у выхода из метро через полчаса.",
      "В этом году дачный сезон начался раньше обычного.",
      "На Новый год мы всей семьёй смотрели обращение президента.",
      "Очередь в поликлинику заняла почти два часа.",
      "Мы собрали грибы в лесу и сварили из них суп.",
      "После бани мы пили чай с вареньем из малины.",
      "Маршрутка пришла полупустой, что бывает очень редко.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Вчера мы ходили в театр на новый спектакль.",
      "Бабушка приготовила щи с квашеной капустой.",
      "Я не уверен, что это хорошая мысль.",
      "Он сел на поезд сегодня утром.",
      "Мой брат уехал вчера."
    ]
  },
  {
    id: 'japanese', name: 'Japanese', aliases: ['nihongo', '日本語'], family: 'Japonic', region: 'Asia', tier: 1, script: 'Kanji / Kana',
    clue: "Mixes complex Chinese characters (Kanji) with simple curved Hiragana (の, は, を) and angular Katakana (ア, カ). Three scripts visible simultaneously.", confusedWith: ['Mandarin', 'Korean'],
    sentences: [
      // === Category A: Template sentences ===
      "今日は市場が何時に閉まりますか？",
      "祖母は京都の近くの小さな村に住んでいます。",
      "今週はずっと天気が寒かったです。",
      "本を三冊買いたいのですが。",
      "天気がいいので子供たちは外で遊んでいます。",
      "この近くにおいしいレストランはありますか？",
      "彼女は問題が分からないと言いました。",
      "この古い建物は二百年前に建てられました。",
      // === Category B: Script-showcase (Kanji + Hiragana + Katakana mix) ===
      "コンビニでアイスコーヒーとサンドイッチを買いました。",
      "東京スカイツリーの展望デッキからの眺めは最高でした。",
      "スマートフォンのバッテリーがすぐなくなってしまいます。",
      "テレビのニュースで地震のことを知りました。",
      "パスポートをホテルのフロントに預けてあります。",
      // === Category C: Cultural-distinctive (Japanese daily life) ===
      "終電に間に合わないかもしれない。",
      "満員電車で毎朝一時間立ちっぱなしです。",
      "花見の場所取りを朝の六時からやりました。",
      "この居酒屋は飲み放題で三千円だそうです。",
      "来月の連休に温泉旅行を計画しています。",
      "コンビニの肉まんが冬になると恋しくなります。",
      "引っ越しの挨拶に隣の人へお菓子を持って行きました。",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "レストランでカレーライスを注文しました。",
      "駅前の本屋で漫画を買いました。",
      "今日は忙しい一日でした。",
      "朝早く電車に乗りました。",
      "姉は旅行に行きました。"
    ]
  },
  {
    id: 'korean', name: 'Korean', aliases: ['hangul', '한국어'], family: 'Koreanic', region: 'Asia', tier: 1, script: 'Hangul',
    clue: "Blocky, geometric syllable blocks made of circles (ㅇ), straight lines (ㅣ,ㅡ), and squares (ㅁ,ㅂ). Spaces between words (unlike Japanese/Chinese).", confusedWith: ['Japanese', 'Mandarin'],
    sentences: [
      // === Category A: Template sentences ===
      "오늘 시장이 몇 시에 문을 닫나요?",
      "할머니는 부산 근처 작은 마을에 살고 계세요.",
      "이번 주 내내 날씨가 꽤 추웠어요.",
      "책 세 권을 사고 싶습니다.",
      "날씨가 좋아서 아이들이 밖에서 놀고 있어요.",
      "이 근처에 맛있는 식당이 어디 있을까요?",
      "그녀는 문제를 이해하지 못한다고 말했어요.",
      "이 오래된 건물은 이백 년 전에 지어졌어요.",
      // === Category B: Script-showcase (geometric blocks, spacing) ===
      "쌍쌀한 바람이 불어서 따뜻한 옷을 껴입었습니다.",
      "서울특별시 강남구 역삼동에서 만나기로 했습니다.",
      "떡볶이랑 김밥이랑 순대를 포장해 주세요.",
      "짧은 시간 안에 많은 것을 배울 수 있었습니다.",
      "형은 쌍둥이 동생과 함께 학교에 다닙니다.",
      // === Category C: Cultural-distinctive (Korean daily life) ===
      "퇴근 후에 삼겹살 먹으러 갈까요?",
      "카카오톡으로 사진 보내 줄 수 있어요?",
      "오늘 야근해서 집에 늦게 갈 것 같아요.",
      "편의점에서 삼각김밥이랑 바나나우유 샀어요.",
      "이번 설날에 고향에 내려갈 계획이에요.",
      "지하철 환승하는 데 한참 걸렸어요.",
      "주말에 한강공원에서 치킨 시켜 먹었어요.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "동대문시장에서 겨울옷을 싸게 샀습니다.",
      "주말에 가족들과 등산을 갔어요.",
      "오늘은 정말 바쁜 하루였어요.",
      "아침에 일찍 버스를 탔어요.",
      "언니가 여행을 갔어요."
    ]
  },
  {
    id: 'mandarin', name: 'Mandarin', aliases: ['chinese', 'zhongwen', '中文', 'hanyu'], family: 'Sinitic', region: 'Asia', tier: 1, script: 'Han Characters',
    clue: "Dense logographic characters with no spaces between words. No phonetic alphabet mixed in (unlike Japanese). Characters are square-shaped and evenly spaced.", confusedWith: ['Japanese (Kanji)', 'Cantonese'],
    sentences: [
      // === Category A: Template sentences ===
      "今天市场几点关门？",
      "我奶奶住在杭州附近的一个小村子里。",
      "这个星期天气一直都很冷。",
      "我想买三本书。",
      "天气好，孩子们在外面玩。",
      "这附近哪里有好吃的餐厅？",
      "她跟我说她不明白这个问题。",
      "这栋老建筑是两百年前建的。",
      // === Category B: Script-showcase (dense characters, no spaces, no kana) ===
      "中国的高速铁路网络覆盖了全国大部分主要城市。",
      "昨天下午我在图书馆里看了三个小时的历史书。",
      "这家饭店的红烧肉做得特别地道。",
      "街道两旁种满了梧桐树，秋天的时候特别漂亮。",
      "他每天早上六点钟起床跑步锻炼身体。",
      // === Category C: Cultural-distinctive (Chinese daily life) ===
      "早上在小区门口买了两个包子和一杯豆浆。",
      "春节快到了，我还没买到回家的火车票。",
      "今天加班到九点，外卖都凉了。",
      "手机没流量了，得去充话费。",
      "广场舞的音乐每天晚上七点准时响起。",
      "快递放在楼下的快递柜里了，记得去取。",
      "周末去了趟宜家，人多得根本走不动。",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "故宫博物院每天限制八万人参观。",
      "我每天坐地铁上下班。",
      "这不是一个好主意。",
      "他今天早上坐火车走了。",
      "我姐姐去旅行了。"
    ]
  },
  {
    id: 'arabic', name: 'Arabic', aliases: ['arabiyyah', 'العربية'], family: 'Semitic', region: 'Middle East/Africa', tier: 1, script: 'Arabic',
    clue: "Written right-to-left. Flowing cursive script with dots above/below letters (ب,ت,ث,ن). Letters change shape depending on position in word.", confusedWith: ['Persian', 'Urdu'],
    sentences: [
      // === Category A: Template sentences ===
      "متى يغلق السوق اليوم؟",
      "جدتي تعيش في قرية صغيرة بالقرب من دمشق.",
      "كان الطقس بارداً طوال هذا الأسبوع.",
      "أريد أن أشتري ثلاثة كتب من فضلك.",
      "الأطفال يلعبون في الخارج لأن الجو جميل.",
      "أين يمكن أن أجد مطعماً جيداً هنا؟",
      "قالت لي إنها لا تفهم المشكلة.",
      "هذا المبنى القديم بُني قبل مئتي عام.",
      // === Category B: Script-showcase (dot patterns, connected letters, shapes) ===
      "المكتبة العامة تستقبل الزوار يومياً من التاسعة صباحاً حتى الثامنة مساءً.",
      "الطبيب نصحني بالمشي ثلاثين دقيقة يومياً للحفاظ على صحتي.",
      "اشتريت بطاقة للحافلة من محطة النقل العام.",
      "الحديقة العامة مليئة بالأشجار والزهور في فصل الربيع.",
      "تعلّمت الطبخ من جدتي عندما كنت صغيراً.",
      // === Category C: Cultural-distinctive (Arabic daily life) ===
      "هل تريد أن تشرب قهوة عربية مع الهيل؟",
      "الأذان يُسمع من المسجد خمس مرات في اليوم.",
      "في رمضان نجتمع العائلة كلها على الإفطار.",
      "الحر شديد اليوم، درجة الحرارة تجاوزت الأربعين.",
      "أمي تحضّر المنسف في كل مناسبة عائلية.",
      "السوق القديم مليء بالبهارات والعطور والأقمشة.",
      "نشرب الشاي بالنعناع بعد كل وجبة غداء.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "الجامعة تقع في وسط المدينة بجانب المستشفى الكبير.",
      "أخي يعمل في مكتب قريب من البيت.",
      "لا أعتقد أن هذه فكرة جيدة.",
      "ركب القطار هذا الصباح.",
      "أختي سافرت أمس."
    ]
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