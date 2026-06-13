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
    clue: "Double vowels (aa, ee, oo, uu), ij digraph (vrij, kijken), diminutive -je endings (huisje, boekje), words ending in -en.",
    confusedWith: ['German', 'Afrikaans'],
    sentences: [
      // === Category A: Template sentences ===
      "Hoe laat gaat de markt vandaag dicht?",
      "Mijn oma woont in een klein dorpje vlakbij Utrecht.",
      "Het weer is de hele week behoorlijk koud geweest.",
      "Ik zou graag drie boeken willen kopen, alstublieft.",
      "De kinderen spelen buiten omdat het lekker weer is.",
      "Waar kan ik hier in de buurt een goed restaurant vinden?",
      "Ze vertelde me dat ze het probleem niet begreep.",
      "Dit oude gebouw is tweehonderd jaar geleden gebouwd.",
      // === Category B: Script-showcase (ij, double vowels, -je, -en) ===
      "Mijn vriendin heeft een prachtig boekje over Nederlandse straatjes geschreven.",
      "We moeten vanavond nog boodschappen doen bij de Albert Heijn.",
      "Het scheepvaartmuseum aan het IJ is vrijdag geopend.",
      "Zij kijken altijd samen naar de zonsondergang bij het IJsselmeer.",
      "De gezelligheid in dit eetcafeëtje is echt onbetaalbaar.",
      // === Category C: Cultural-distinctive (Dutch daily life) ===
      "Ik ga met de fiets naar mijn werk, het is maar tien minuutjes.",
      "Vanavond heb ik een verjaardag, dus ik neem een taart mee.",
      "Het is alweer tijd voor Sinterklaas, de winkels zijn al versierd.",
      "De agenda zit helemaal vol, laten we een borrel inplannen.",
      "Ik heb een afspraak bij de huisarts gemaakt voor volgende week.",
      "We gaan dit weekend naar de kringloopwinkel voor meubels.",
      "De buren kwamen langs met een bosje bloemen toen we verhuisden.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Het warenhuis tegenover het postkantoor is vandaag gesloten.",
      "Mijn opa werkte vroeger op een boerderij buiten de stad.",
      "Ik weet niet zeker of dat een goed idee is.",
      "Hij nam de trein vanmorgen vroeg.",
      "Mijn zus is op vakantie."
    ]
  },
  {
    id: 'swedish', name: 'Swedish', aliases: ['svenska'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: "Unique vowels å, ä, ö. Definite articles suffixed to nouns (-en, -et, -n). Present tense verbs end in -r (äter, springer).",
    confusedWith: ['Danish', 'Norwegian'],
    sentences: [
      // === Category A: Template sentences ===
      "Vilken tid stänger marknaden idag?",
      "Min mormor bor i en liten by nära Göteborg.",
      "Vädret har varit ganska kallt hela veckan.",
      "Jag skulle vilja köpa tre böcker, tack.",
      "Barnen leker utomhus för att vädret är fint.",
      "Var kan man hitta en bra restaurang här i närheten?",
      "Hon sa till mig att hon inte förstod problemet.",
      "Den här gamla byggnaden byggdes för tvåhundra år sedan.",
      // === Category B: Script-showcase (å, ä, ö, suffixed articles, -r) ===
      "Köttbullarna på julbordet är alltid populärast bland gästerna.",
      "Vårdcentralen på Drottninggatan öppnar klockan åtta varje morgon.",
      "Midsommarafton firar vi alltid vid stugan nära sjön.",
      "Bäckströms föräldrars sommarhus ligger vid Östersjön.",
      "Förskolebarnen åker buss till naturreservatet varje torsdag.",
      // === Category C: Cultural-distinctive (Swedish daily life) ===
      "Ska vi ta en fika på det nya kaféet vid torget?",
      "Allemansrätten gör att man kan plocka bär överallt i skogen.",
      "Det är mörkt redan klockan tre, jag längtar efter våren.",
      "Vi har fredagsmys ikväll med chips och en bra film.",
      "Systembolaget stänger tidigt på lördagar, vi måste skynda oss.",
      "Barnbidraget kommer den tjugonde varje månad.",
      "Jag tar semester hela vecka tjugofem i år.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Köpcentralens öppettider ändrades förra månaden.",
      "Min farfar jobbade i en fabrik utanför staden.",
      "Jag vet inte om det är en bra idé.",
      "Han tog tåget tidigt i morse.",
      "Min syster reste bort igår."
    ]
  },
  {
    id: 'polish', name: 'Polish', aliases: ['polski'], family: 'Slavic', region: 'Europe', tier: 2, script: 'Latin',
    clue: "Dense consonant clusters: cz, sz, rz, dz, szcz, prz. Unique diacritics: ą, ę, ł, ś, ć, ź, ż, ó.", confusedWith: ['Czech', 'Slovak'],
    sentences: [
      // === Category A: Template sentences ===
      "O której godzinie zamyka się dzisiaj rynek?",
      "Moja babcia mieszka w małej wsi niedaleko Krakowa.",
      "Pogoda była dość zimna przez cały tydzień.",
      "Chciałbym kupić trzy książki, proszę.",
      "Dzieci bawią się na dworze, bo jest ładna pogoda.",
      "Gdzie w pobliżu można znaleźć dobrą restaurację?",
      "Powiedziała mi, że nie rozumie problemu.",
      "Ten stary budynek został zbudowany dwieście lat temu.",
      // === Category B: Script-showcase (cz, sz, szcz, ą, ę, ł, ż) ===
      "Szczęśliwy człowiek przeszedł przez ruchliwe skrzyżowanie.",
      "W środę będziemy się przeczesywać przez wszystkie księgarnie.",
      "Trzydzieści trzy trzciny rosły nad brzegiem rzeki.",
      "Pszczoły brzęczały wśród kwitnących krzewów w ogrodzie.",
      "Gość wszedł do łazienki i zaczął myć ręce.",
      // === Category C: Cultural-distinctive (Polish daily life) ===
      "W niedzielę sklepy są zamknięte, trzeba zrobić zakupy wcześniej.",
      "Na imieniny dostałem kwiaty i czekoladki od sąsiadów.",
      "Kolejka do lekarza pierwszego kontaktu trwała prawie dwie godziny.",
      "W Wigilię zawsze zostawiamy jedno wolne miejsce przy stole.",
      "Babcia zrobiła pierogi ruskie i barszcz czerwony na obiad.",
      "Muszę jeszcze odebrać paczkę z paczkomatu przed szóstą.",
      "Na działce sadziliśmy pomidory i ogórki w sobotę rano.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Skrzyżowanie przed urzędem miasta będzie zamknięte przez tydzień.",
      "Mój dziadek pracował kiedyś w piekarni na przedmieściach.",
      "Nie jestem pewien, czy to dobry pomysł.",
      "Wsiadł do pociągu dziś rano.",
      "Moja siostra pojechała na urlop."
    ]
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
    id: 'hindi', name: 'Hindi', aliases: ['hindustani', 'हिन्दी'], family: 'Indo-Aryan', region: 'Asia', tier: 2, script: 'Devanagari',
    clue: "Continuous horizontal headline (shirorekha) connecting letters across each word. Curved vertical strokes hanging below the line. Devanagari script.",
    confusedWith: ['Marathi', 'Nepali', 'Bengali'],
    sentences: [
      // === Category A: Template sentences ===
      "आज बाज़ार कितने बजे बंद होता है?",
      "मेरी दादी लखनऊ के पास एक छोटे से गाँव में रहती हैं।",
      "इस पूरे हफ़्ते मौसम काफ़ी ठंडा रहा है।",
      "मुझे तीन किताबें ख़रीदनी हैं, कृपया।",
      "बच्चे बाहर खेल रहे हैं क्योंकि मौसम अच्छा है।",
      "यहाँ आसपास कोई अच्छा रेस्तरां कहाँ मिलेगा?",
      "उसने मुझसे कहा कि उसे समस्या समझ नहीं आ रही।",
      "यह पुरानी इमारत दो सौ साल पहले बनाई गई थी।",
      // === Category B: Script-showcase (shirorekha, conjuncts, matras) ===
      "विद्यार्थियों को परीक्षा की तैयारी के लिए पुस्तकालय जाना चाहिए।",
      "सरकार ने नई शिक्षा नीति के बारे में घोषणा की।",
      "दिल्ली की सड़कों पर भीड़भाड़ हमेशा बनी रहती है।",
      "कृपया अपना पंजीकरण प्रपत्र यहाँ जमा कीजिए।",
      "बुधवार को सार्वजनिक अवकाश घोषित किया गया है।",
      // === Category C: Cultural-distinctive (Indian daily life) ===
      "चाय वाले ने कुल्हड़ में अदरक वाली चाय दी।",
      "दीवाली पर पूरा मोहल्ला रोशनी से जगमगा उठता है।",
      "सब्ज़ी मंडी में आज भिंडी और करेले बहुत सस्ते मिले।",
      "ऑटो वाले ने मीटर से जाने से मना कर दिया।",
      "गर्मियों में छत पर सोना और आम खाना सबसे अच्छा लगता है।",
      "शादी में बारात ढोल-नगाड़ों के साथ आई।",
      "बिजली कट गई है, इन्वर्टर भी बंद हो गया।",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "रेलवे स्टेशन के सामने नया शॉपिंग कॉम्प्लेक्स बन रहा है।",
      "मेरे चाचा पुराने शहर में एक दुकान चलाते हैं।",
      "मुझे नहीं लगता कि यह अच्छा विचार है।",
      "वह आज सुबह ट्रेन से गया।",
      "मेरी बहन छुट्टी पर गई है।"
    ]
  },
  {
    id: 'turkish', name: 'Turkish', aliases: ['turkce', 'türkçe'], family: 'Turkic', region: 'Middle East/Europe', tier: 2, script: 'Latin',
    clue: "Dotless ı (distinct from i), plus ç, ş, ğ, ö, ü. Highly agglutinative — long suffixed words (yapamayacaklarından). Vowel harmony.",
    confusedWith: ['Azerbaijani', 'Hungarian'],
    sentences: [
      // === Category A: Template sentences ===
      "Bugün pazar kaçta kapanıyor?",
      "Büyükannem İzmir yakınlarında küçük bir köyde yaşıyor.",
      "Hava bütün hafta oldukça soğuk oldu.",
      "Üç kitap satın almak istiyorum, lütfen.",
      "Hava güzel olduğu için çocuklar dışarıda oynuyor.",
      "Buralarda iyi bir restoran nerede bulabilirim?",
      "Bana sorunu anlamadığını söyledi.",
      "Bu eski bina iki yüz yıl önce inşa edilmiş.",
      // === Category B: Script-showcase (ı, ş, ç, ğ, ö, ü, agglutination) ===
      "Arkadaşlarımızla buluşamayacağımızı öğrendiğimizde çok üzüldük.",
      "İstanbul'daki müşterilerimizin şikâyetlerini değerlendiriyoruz.",
      "Başöğretmenimiz öğrencilerin başarılarını ödüllendirdi.",
      "Güneşli havalarda sahildeki çay bahçesinde oturuyoruz.",
      "Türkiye'nin güneydoğusundaki şehirleri gezmek istiyorum.",
      // === Category C: Cultural-distinctive (Turkish daily life) ===
      "Çay içmeden sabah toplantısına başlamak olmaz.",
      "Komşu teyze kapıyı çaldı, elimde taze börek getirmiş.",
      "Bayramda büyüklerin elini öpüp harçlık almak güzel gelenektir.",
      "Dolmuş geçmedi, yirmi dakikadır güzergâhta bekliyorum.",
      "Akşam mahalledeki bakkaldan ekmek ve ayran aldım.",
      "Pazar günü kahvaltısı hazırlamak bizde aile geleneğidir.",
      "Simit sarayında bir çay bir simit on beş liraya.",
      // === Category D: Difficulty-graded (D1=obvious → D5=confusable) ===
      "Yetkililerden şikâyetlerimizle ilgili açıklama bekliyoruz.",
      "Dedem gençliğinde kasabada fırıncılık yaparmış.",
      "Bunun iyi bir fikir olduğundan emin değilim.",
      "Bu sabah otobüse bindi.",
      "Kız kardeşim tatile gitti."
    ]
  },
  {
    id: 'swahili', name: 'Swahili', aliases: ['kiswahili'], family: 'Bantu', region: 'Africa', tier: 2, script: 'Latin',
    clue: "Noun class prefixes (m-/wa- people, ki-/vi- things, u-/n- abstract). Words like na, ya, wa, kwa appear frequently. No diacritics.",
    confusedWith: ['Zulu', 'Hausa'],
    sentences: ["Soko linafungwa saa ngapi leo?", "Bibi yangu anaishi katika kijiji kidogo karibu na Mombasa.", "Hali ya hewa imekuwa baridi wiki nzima.", "Ninataka kununua vitabu vitatu, tafadhali.", "Watoto wanacheza nje kwa sababu hali ya hewa ni nzuri.", "Naweza kupata mkahawa mzuri wapi hapa karibu?", "Aliniambia kwamba haelewi tatizo hilo.", "Jengo hili la zamani lilijengwa miaka mia mbili iliyopita.", "Walimu wanafundisha wanafunzi wao masomo mbalimbali kila siku.", "Vikombe vya kahawa viliwekwa vizuri juu ya meza kubwa.", "Mkulima alikuwa akilima shamba lake tangu alfajiri.", "Watoto wadogo walikuwa wakicheza michezo ya kufurahisha uwanjani.", "Kiongozi wa kijiji aliwakaribisha wageni kwa furaha kubwa.", "Mama amepika ugali na mchicha kwa chakula cha jioni.", "Dala dala ilikuwa imejaa watu, hatukupata nafasi ya kukaa.", "Mvua za masika zimechelewa mwaka huu na wakulima wana wasiwasi.", "Soko la Kariakoo linafunguka mapema sana, kabla ya saa kumi na mbili.", "Baada ya kazi tunaenda kucheza bao kwenye kibanda cha chai.", "Harusi ilikuwa kubwa sana, wageni zaidi ya mia tatu walikuja.", "Umeme umekatika tena, lazima tutumie mshumaa usiku wa leo.", "Wanafunzi waliokuwa wakisoma maktabani walikuwa wengi sana.", "Kaka yangu anafanya kazi katika duka la dawa mjini.", "Sijui kama hiyo ni wazo zuri.", "Alipanda basi asubuhi leo.", "Dada yangu amesafiri."]
  },
  {
    id: 'thai', name: 'Thai', aliases: ['phasa thai', 'ภาษาไทย'], family: 'Tai-Kadai', region: 'Asia', tier: 2, script: 'Thai',
    clue: "Rounded, looped script with no spaces between words. Tone marks (่, ้, ๊, ๋) and vowel marks float above/below/around consonants.",
    confusedWith: ['Lao', 'Khmer'],
    sentences: ["วันนี้ตลาดปิดกี่โมงคะ?", "คุณยายอาศัยอยู่ในหมู่บ้านเล็กๆ ใกล้เชียงใหม่", "อากาศหนาวมาตลอดทั้งสัปดาห์", "อยากซื้อหนังสือสามเล่มค่ะ", "เด็กๆ เล่นกันอยู่ข้างนอกเพราะอากาศดี", "แถวนี้มีร้านอาหารอร่อยที่ไหนบ้างคะ?", "เธอบอกว่าไม่เข้าใจปัญหานี้", "อาคารเก่าแห่งนี้สร้างมาสองร้อยปีแล้ว", "กรุงเทพมหานครเป็นเมืองหลวงที่มีผู้คนพลุกพล่านตลอดเวลา", "น้ำท่วมถนนหลายสายทำให้การเดินทางลำบากมาก", "โรงพยาบาลแห่งนี้เปิดให้บริการตลอดยี่สิบสี่ชั่วโมง", "ลูกสาวกำลังเรียนภาษาอังกฤษที่โรงเรียนกวดวิชา", "พระอาทิตย์ตกที่ริมแม่น้ำสวยงามมากในช่วงเย็น", "ไปกินส้มตำที่ร้านริมทางกันไหม?", "รถติดมากเลยช่วงเย็น นั่งบีทีเอสดีกว่า", "วันนี้ทำบุญตักบาตรตอนเช้าที่หน้าบ้าน", "เซเว่นใกล้บ้านเปิดยี่สิบสี่ชั่วโมง สะดวกมาก", "สงกรานต์ปีนี้กลับต่างจังหวัดไปเยี่ยมพ่อแม่", "ข้าวเหนียวมะม่วงที่ร้านนี้อร่อยที่สุดในซอย", "หมอดูบอกว่าปีนี้ดวงดี ต้องทำบุญเยอะๆ", "ห้างสรรพสินค้าเปิดให้บริการตั้งแต่สิบโมงเช้า", "ลุงขายผลไม้อยู่ตรงหัวมุมถนน", "ไม่แน่ใจว่าเป็นความคิดที่ดี", "เขานั่งรถไฟไปเมื่อเช้า", "พี่สาวไปเที่ยวแล้ว"]
  },
  {
    id: 'vietnamese', name: 'Vietnamese', aliases: ['tieng viet', 'tiếng việt'], family: 'Austroasiatic', region: 'Asia', tier: 2, script: 'Latin',
    clue: "Extreme diacritics: multiple marks per letter stacked (ệ, ắ, ồ, ử, ỡ). Nearly all words are single syllable. đ (crossed d) is unique.",
    confusedWith: ['Hmong', 'Romanized Thai'],
    sentences: ["Hôm nay chợ mấy giờ đóng cửa?", "Bà ngoại tôi sống ở một ngôi làng nhỏ gần Huế.", "Thời tiết lạnh suốt cả tuần rồi.", "Tôi muốn mua ba quyển sách.", "Trời đẹp nên bọn trẻ chơi ngoài sân.", "Gần đây có nhà hàng nào ngon không?", "Cô ấy nói rằng không hiểu vấn đề.", "Toà nhà cũ này được xây từ hai trăm năm trước.", "Đường phố đông đúc khiến việc đi lại trở nên khó khăn.", "Chị ấy đã đỗ kỳ thi đại học với điểm rất cao.", "Mưa lớn đổ xuống bất ngờ làm ướt hết quần áo phơi ngoài.", "Ông nội thường kể chuyện cổ tích mỗi tối trước khi ngủ.", "Bệnh viện ở đầu đường mở cửa từ sáu giờ sáng.", "Sáng nào cũng ăn phở ở quán đầu hẻm.", "Đi xe máy ở Sài Gòn phải cẩn thận lắm, xe đông kinh khủng.", "Tết năm nay về quê sớm để phụ mẹ gói bánh chưng.", "Cà phê sữa đá ở đây pha ngon lắm, đậm vừa.", "Chiều nào bà cũng ra công viên tập thể dục với mấy bà hàng xóm.", "Mùa mưa năm nay ngập nhiều quá, đường nào cũng ngập.", "Chợ đêm bán đủ thứ, từ quần áo đến đồ ăn vặt.", "Trường đại học ở giữa thành phố, đối diện bệnh viện lớn.", "Anh trai tôi làm việc ở một hiệu thuốc gần nhà.", "Tôi không chắc đó là ý hay.", "Anh ấy đi tàu sáng nay.", "Chị tôi đi du lịch rồi."]
  },
  {
    id: 'greek', name: 'Greek', aliases: ['ελληνικά', 'ellinika'], family: 'Hellenic', region: 'Europe', tier: 2, script: 'Greek',
    clue: "Uses the Greek alphabet (α, β, γ, δ, θ, π, ω, φ, ψ). The question mark is a semicolon (;). Single accent mark (΄) on stressed vowels.",
    confusedWith: ['Cyrillic languages (visually)'],
    sentences: ["Τι ώρα κλείνει η αγορά σήμερα;", "Η γιαγιά μου μένει σε ένα μικρό χωριό κοντά στη Θεσσαλονίκη.", "Ο καιρός ήταν αρκετά κρύος όλη την εβδομάδα.", "Θα ήθελα να αγοράσω τρία βιβλία, παρακαλώ.", "Τα παιδιά παίζουν έξω γιατί ο καιρός είναι καλός.", "Πού μπορώ να βρω ένα καλό εστιατόριο εδώ κοντά;", "Μου είπε ότι δεν καταλαβαίνει το πρόβλημα.", "Αυτό το παλιό κτίριο χτίστηκε πριν από διακόσια χρόνια.", "Ο φιλόσοφος αφιέρωσε ολόκληρη τη ζωή του στη θεωρητική φυσική.", "Η ψυχολόγος εξέτασε τη σχέση μεταξύ θυμού και ανθεκτικότητας.", "Ξεκινήσαμε το ταξίδι μας στο αρχιπέλαγος νωρίς το πρωί.", "Ο αρχαιολόγος ανακάλυψε θαυμάσια ψηφιδωτά στην ανασκαφή.", "Η θερμοκρασία ξεπέρασε τους σαράντα βαθμούς τον Αύγουστο.", "Πάμε για καφέ στην πλατεία μετά τη δουλειά;", "Η γιαγιά ετοίμασε παστίτσιο και χωριάτικη σαλάτα για το μεσημεριανό.", "Τον Δεκαπενταύγουστο κλείνουν τα πάντα, όλοι πάνε στα νησιά.", "Ο ήλιος βασιλεύει αργά το καλοκαίρι, τρώμε στις δέκα το βράδυ.", "Η ταβέρνα στο λιμάνι σερβίρει φρέσκο ψάρι κάθε μέρα.", "Το ΚΤΕΛ έφυγε χωρίς εμένα, θα πάρω το επόμενο σε μία ώρα.", "Στην ονομαστική μου εορτή μαζεύτηκαν όλοι οι συγγενείς.", "Το φαρμακείο απέναντι από το ταχυδρομείο είναι κλειστό σήμερα.", "Ο παππούς μου δούλευε σε ένα αρτοποιείο στο κέντρο.", "Δεν είμαι σίγουρος ότι είναι καλή ιδέα.", "Πήρε το τρένο σήμερα το πρωί.", "Η αδερφή μου έφυγε για διακοπές."]
  },
  {
    id: 'hungarian', name: 'Hungarian', aliases: ['magyar'], family: 'Uralic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Double acute accents ő and ű (unique to Hungarian). Letter combos: sz, gy, cs, zs, ny, ly. Highly agglutinative — very long words.",
    confusedWith: ['Finnish', 'Turkish'],
    sentences: ["A piac hány órakor zár ma?", "A nagymamám egy kis faluban él Pécs közelében.", "Az időjárás egész héten eléggé hideg volt.", "Három könyvet szeretnék vásárolni, kérem.", "A gyerekek kint játszanak, mert szép az idő.", "Hol találhatok egy jó éttermet a közelben?", "Azt mondta, hogy nem érti a problémát.", "Ezt a régi épületet kétszáz évvel ezelőtt építették.", "A közlekedési csomópontnál mindig óriási a forgalom csúcsidőben.", "A szomszédunk megkérdezte, hogy részt veszünk-e a házibuliban.", "Megszentségteleníthetetlenségeskedéseitekért nem fogunk haragudni.", "A fürdőszobában elromlott a csap, szerelőt kell hívnunk.", "Győrben született, de Budapesten élt egész életében.", "A lángos és a kürtőskalács nélkül nem igazi a Balaton.", "Minden vasárnap a nagyi gulyáslevest főz és rétest süt.", "A gyógyfürdőben töltöttük az egész délutánt a család.", "A BKV-bérlet megint drágult, már alig éri meg.", "A szüret után házi pálinkát főzünk a kertben.", "Hétvégén kirándulni mentünk a Bükkbe gombát szedni.", "A Nemzeti Múzeum előtt gyülekezett a tömeg ünnepnapon.", "A gyógyszertár a postahivatal mellett ma zárva van.", "A nagyapám fiatalkorában egy pékségben dolgozott.", "Nem vagyok benne biztos, hogy ez jó ötlet.", "Felszállt a vonatra ma reggel.", "A húgom elutazott nyaralni."]
  },
  {
    id: 'finnish', name: 'Finnish', aliases: ['suomi'], family: 'Uralic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Extreme double vowels (aa, ee, ii, oo, uu, yy, ää, öö) and double consonants (kk, tt, pp). Letters b, c, f, g, w, x, z absent in native words.",
    confusedWith: ['Estonian', 'Hungarian'],
    sentences: ["Mihin aikaan tori sulkeutuu tänään?", "Isoäitini asuu pienessä kylässä lähellä Tamperetta.", "Sää on ollut melko kylmä koko viikon.", "Haluaisin ostaa kolme kirjaa, kiitos.", "Lapset leikkivät ulkona, koska sää on kaunis.", "Mistä täältä läheltä löytää hyvän ravintolan?", "Hän sanoi minulle, ettei ymmärrä ongelmaa.", "Tämä vanha rakennus rakennettiin kaksisataa vuotta sitten.", "Kauppahallin juustotiskillä on aina pitkä jono lauantaiaamuisin.", "Talonyhtiön hallituksen kokous pidetään ensi tiistaina.", "Yöpakkasella järven jää vahvistuu nopeasti marraskuussa.", "Kirjastokortilla voi lainata myös äänikirjoja verkkopalvelusta.", "Kesämökin saunassa löylyä heittäessä kuulee vain lintujen laulun.", "Saunan jälkeen hypätään järveen, vaikka vesi on kylmää.", "Jouluaattona syödään kinkkua, laatikoita ja riisipuuroa.", "Juhannuksena poltetaan kokko ja valvotaan koko yö.", "Talvella aurinko ei nouse ollenkaan Lapissa kahteen kuukauteen.", "Kerrostalossa naapurit valittavat helposti melusta ilta-aikaan.", "Marjastaminen syksyllä on parasta, mustikkaa ja puolukkaa riittää.", "Autoilu talvella vaatii nastarenkaat ja jääraapan.", "Apteekki postin vastapäätä on tänään kiinni.", "Isoisäni työskenteli nuorena leipomossa kaupungin laidalla.", "En ole varma, onko se hyvä idea.", "Hän nousi junaan aikaisin tänä aamuna.", "Siskoni lähti lomalle."]
  },
  {
    id: 'indonesian', name: 'Indonesian', aliases: ['bahasa indonesia', 'bahasa'], family: 'Austronesian', region: 'Asia', tier: 2, script: 'Latin',
    clue: "Prefixes (me-, ber-, pe-, ke-) and suffixes (-kan, -an, -i). Reduplicated plurals (anak-anak, buku-buku). No diacritics, simple spelling.",
    confusedWith: ['Malay', 'Tagalog'],
    sentences: ["Jam berapa pasar tutup hari ini?", "Nenek saya tinggal di sebuah desa kecil dekat Yogyakarta.", "Cuaca sudah cukup dingin sepanjang minggu ini.", "Saya ingin membeli tiga buku.", "Anak-anak bermain di luar karena cuacanya bagus.", "Di mana bisa menemukan restoran yang enak di sekitar sini?", "Dia bilang tidak mengerti masalahnya.", "Bangunan tua ini dibangun dua ratus tahun yang lalu.", "Pemerintah mengumumkan peraturan-peraturan baru tentang pendidikan.", "Anak-anak bermain-main di halaman rumah sepulang sekolah.", "Pekerja-pekerja sedang membangun jembatan penyeberangan yang baru.", "Buku-buku perpustakaan harus dikembalikan sebelum tanggal lima belas.", "Permasalahan kemacetan di perkotaan memerlukan penanganan serius.", "Hari ini makan siang nasi goreng di warung depan kantor.", "Macet lagi di jalan tol, sudah satu jam tidak bergerak.", "Lebaran tahun ini mudik ke kampung halaman naik kereta.", "Ojek online sudah datang, tinggal turun dari lantai tiga.", "Warung kopi di gang sebelah buka sampai tengah malam.", "Hujan deras setiap sore bikin jalanan banjir di mana-mana.", "Tetangga baru pindah dan bawa makanan sebagai salam perkenalan.", "Perpustakaan kota memberikan pelayanan peminjaman buku-buku gratis.", "Paman saya bekerja di sebuah toko obat dekat stasiun.", "Saya tidak yakin itu ide yang bagus.", "Dia naik bus pagi ini.", "Kakak saya pergi berlibur."]
  },
  {
    id: 'hebrew', name: 'Hebrew', aliases: ['ivrit', 'עברית'], family: 'Semitic', region: 'Middle East', tier: 2, script: 'Hebrew',
    clue: "Written right-to-left. Blocky, square-shaped characters with no cursive connections (unlike Arabic). Distinctive letters: ש, מ, ם, ן, ך.",
    confusedWith: ['Arabic', 'Yiddish'],
    sentences: ["מתי השוק נסגר היום?", "סבתא שלי גרה בכפר קטן ליד חיפה.", "מזג האוויר היה קר למדי כל השבוע.", "הייתי רוצה לקנות שלושה ספרים, בבקשה.", "הילדים משחקים בחוץ כי מזג האוויר נעים.", "איפה אפשר למצוא מסעדה טובה כאן בסביבה?", "היא אמרה לי שהיא לא מבינה את הבעיה.", "הבניין הישן הזה נבנה לפני מאתיים שנה.", "המשרד הממשלתי פתוח לקהל בימים ראשון עד חמישי בלבד.", "התלמידים והתלמידות השתתפו בטקס סיום השנה בבית הספר.", "הספרייה העירונית מציעה השאלת ספרים ללא תשלום.", "המכתב שקיבלתי מהמשפחה שלי הפתיע אותי מאוד.", "השכנים החדשים הזמינו אותנו לארוחת ערב ביום שישי.", "ביום שישי אנחנו הולכים לשוק הכרמל לקנות ירקות טריים.", "אחרי הצבא רוב החברים שלי טסו לטיול בדרום אמריקה.", "בשבת הכל סגור, אז צריך לקנות הכל מראש.", "החמסין הזה נורא, ארבעים מעלות בצל.", "תמיד שותים קפה הפוך אחרי ארוחת הצהריים.", "בערב חג אנחנו מדליקים נרות ואוכלים ביחד.", "הבירוקרטיה פה מטורפת, חיכיתי שעתיים בתור.", "האוניברסיטה נמצאת במרכז העיר ליד בית החולים הגדול.", "אחי עובד בבית מרקחת ליד התחנה.", "אני לא בטוח שזה רעיון טוב.", "הוא עלה על הרכבת הבוקר.", "אחותי נסעה לחופשה."]
  },
  {
    id: 'persian', name: 'Persian', aliases: ['farsi', 'parsi', 'فارسی'], family: 'Indo-Iranian', region: 'Middle East', tier: 3, script: 'Arabic-Persian',
    clue: "Arabic script but with 4 extra letters: پ (pe), چ (che), ژ (zhe), گ (gaf). These letters do NOT exist in Arabic.",
    confusedWith: ['Arabic', 'Urdu'],
    sentences: ["بازار امروز ساعت چند تعطیل می‌شود؟", "مادربزرگم در یک روستای کوچک نزدیک اصفهان زندگی می‌کند.", "هوا تمام هفته نسبتاً سرد بوده است.", "می‌خواهم سه کتاب بخرم، لطفاً.", "بچه‌ها بیرون بازی می‌کنند چون هوا خوب است.", "اینجا نزدیکی کجا یک رستوران خوب پیدا می‌شود؟", "به من گفت که مشکل را نمی‌فهمد.", "این ساختمان قدیمی دویست سال پیش ساخته شده است.", "دانشگاه تهران یکی از بزرگ‌ترین دانشگاه‌های کشور است.", "پنجشنبه‌ها بعد از کار با دوستانم چای می‌خوریم.", "چهارشنبه‌سوری امسال خیلی شلوغ‌تر از پارسال بود.", "کتابخانه‌ی ملی هر روز از ساعت هشت صبح باز است.", "گربه‌ی همسایه هر شب روی پشت‌بام ما می‌آید.", "عصرها با خانواده چای و شیرینی می‌خوریم.", "نوروز امسال مسافرت نرفتیم و خانه ماندیم.", "ترافیک تهران هر روز بدتر می‌شود، مترو بهتر است.", "تابستان‌ها به شمال می‌رویم و کنار دریا استراحت می‌کنیم.", "نانوایی سر کوچه از صبح زود باز است.", "قیمت میوه‌ها در بازار بسیار بالا رفته است.", "مادرم همیشه برای مهمان‌ها قورمه‌سبزی درست می‌کند.", "داروخانه روبروی اداره‌ی پست امروز تعطیل است.", "برادرم در یک داروخانه نزدیک ایستگاه کار می‌کند.", "مطمئن نیستم که این فکر خوبی باشد.", "صبح سوار قطار شد.", "خواهرم به مسافرت رفته است."]
  },
  {
    id: 'bengali', name: 'Bengali', aliases: ['bangla', 'বাংলা'], family: 'Indo-Aryan', region: 'Asia', tier: 3, script: 'Bengali-Assamese',
    clue: "Horizontal headline like Hindi but letter shapes are more curvy and triangular (ক, খ, গ, ঘ). Distinctive vowel marks hang below or curve around letters.",
    confusedWith: ['Hindi', 'Assamese'],
    sentences: ["আজ বাজার কটায় বন্ধ হয়?", "আমার ঠাকুমা কলকাতার কাছে একটি ছোট গ্রামে থাকেন।", "সারা সপ্তাহ আবহাওয়া বেশ ঠান্ডা ছিল।", "আমি তিনটে বই কিনতে চাই।", "বাচ্চারা বাইরে খেলছে কারণ আবহাওয়া ভালো।", "এখানে কাছাকাছি কোথায় ভালো রেস্তোরাঁ পাওয়া যাবে?", "সে আমাকে বলল যে সমস্যাটা বুঝতে পারছে না।", "এই পুরনো বাড়িটি দুশো বছর আগে তৈরি হয়েছিল।", "বিশ্ববিদ্যালয়ের গ্রন্থাগারে পরীক্ষার আগে সবাই পড়াশোনা করে।", "সরকারি অফিসে কাজ করাতে গেলে অনেকক্ষণ অপেক্ষা করতে হয়।", "দুর্গাপূজার সময় পাড়ায় পাড়ায় প্যান্ডেল সাজানো হয়।", "বাংলাদেশে বর্ষাকালে নদীর জল বেড়ে বন্যা হয়।", "পাড়ার চায়ের দোকানে আড্ডা দেওয়া আমাদের অভ্যাস।", "সন্ধ্যেবেলায় মাঠে ফুটবল খেলা পাড়ার ছেলেদের রোজকার কাজ।", "মা প্রতি রবিবার মাছের ঝোল আর ভাত রান্না করেন।", "পয়লা বৈশাখে সবাই নতুন জামা পরে বেড়াতে যায়।", "ট্রেনে লোকাল কম্পার্টমেন্টে জায়গা পাওয়া খুবই কঠিন।", "শীতকালে পিঠেপুলি বানানো বাঙালির ঐতিহ্য।", "বইমেলায় এবার প্রচুর নতুন বই এসেছে।", "লোডশেডিং আবার শুরু হয়েছে, মোমবাতি জ্বালাতে হবে।", "বিশ্ববিদ্যালয়টি শহরের মাঝখানে বড় হাসপাতালের পাশে।", "আমার ভাই একটি ওষুধের দোকানে কাজ করে।", "আমি নিশ্চিত নই যে এটা ভালো ধারণা।", "সে আজ সকালে ট্রেনে উঠল।", "আমার বোন বেড়াতে গেছে।"]
  },
  {
    id: 'ukrainian', name: 'Ukrainian', aliases: ['ukrainska', 'українська'], family: 'Slavic', region: 'Europe', tier: 2, script: 'Cyrillic',
    clue: "Cyrillic with unique letters і, ї, є and frequent apostrophes (м'який). Lacks Russian letters ы and э.",
    confusedWith: ['Russian', 'Belarusian', 'Bulgarian'],
    sentences: ["О котрій годині сьогодні закривається ринок?", "Моя бабуся живе в маленькому селі неподалік від Львова.", "Погода була досить холодною протягом усього тижня.", "Я хотів би купити три книжки, будь ласка.", "Діти граються надворі, бо погода гарна.", "Де поблизу можна знайти хороший ресторан?", "Вона сказала мені, що не розуміє проблему.", "Ця стара будівля була збудована двісті років тому.", "З'їзд представників відбудеться п'ятнадцятого січня у Києві.", "Сім'я мого сусіда переїхала до нової квартири торік.", "Комп'ютерні курси починаються з наступного понеділка.", "Моя подруга п'є каву з молоком щоранку перед роботою.", "Хлопці грали у футбол на майданчику біля школи.", "Вареники з картоплею і сметаною — це моя улюблена страва.", "Маршрутка знову була переповнена, довелося чекати наступну.", "На Великдень ми фарбуємо писанки і печемо паску.", "Бабуся завжди готує борщ із пампушками на неділю.", "Черга в поліклініку зайняла майже дві години.", "Влітку їздимо на дачу збирати полуниці та вишні.", "Електроенергія знову подорожчала з першого числа.", "Університет знаходиться в центрі міста біля великої лікарні.", "Мій брат працює в аптеці недалеко від станції.", "Я не впевнений, що це гарна ідея.", "Він сів на потяг сьогодні вранці.", "Моя сестра поїхала у відпустку."]
  },
  {
    id: 'georgian', name: 'Georgian', aliases: ['kartuli', 'ქართული'], family: 'Kartvelian', region: 'Europe/Asia', tier: 4, script: 'Mkhedruli',
    clue: "Extremely rounded, curly script with no straight lines or sharp angles. No uppercase letters. Unique among world scripts (ა, ბ, გ, დ, ე).",
    confusedWith: ['Armenian', 'Thai'],
    sentences: ["დღეს ბაზარი რომელ საათზე იკეტება?", "ჩემი ბებია პატარა სოფელში ცხოვრობს ქუთაისთან ახლოს.", "ამინდი მთელი კვირა საკმაოდ ცივი იყო.", "სამი წიგნის ყიდვა მინდა, თუ შეიძლება.", "ბავშვები გარეთ თამაშობენ, რადგან ამინდი კარგია.", "სადმე ახლოს კარგი რესტორანი სად შემიძლია ვიპოვო?", "მან მითხრა, რომ პრობლემა არ ესმის.", "ეს ძველი შენობა ორასი წლის წინ აშენდა.", "თბილისის ძველ ქალაქში ვიწრო ქუჩები და ლამაზი აივნებია.", "ხინკალი და ხაჭაპური ქართული სამზარეულოს ყველაზე ცნობილი კერძებია.", "საქართველოს მთებში ზამთარში თოვლი ძალიან ბევრია.", "მარანში ღვინის ქვევრებს მიწაში ინახავენ ათასობით წლის განმავლობაში.", "სუფრაზე ტამადა სადღეგრძელოებს ამბობს და ყველა ერთად სვამს.", "სუპრის გარეშე არცერთი ოჯახური შეკრება არ ჩაივლის.", "ბაზრობაზე ხილი და ბოსტნეული ძალიან იაფი და ახალია.", "მარშრუტკა ისევ სავსე იყო და ფეხზე მივედი სამსახურში.", "ბებიამ ჩურჩხელა და გოზინაყი გაგვიმზადა ახალ წელს.", "ყურძნის კრეფის სეზონზე კახეთში ყველა ოჯახი დაკავებულია.", "ძველი თბილისის გოგირდის აბანოებში მოსახლეობა საუკუნეებია დადის.", "ქუჩაში მოხუცი კაცი ნარდს თამაშობდა მეზობელთან ერთად.", "აფთიაქი ფოსტის პირდაპირ დღეს დაკეტილია.", "ჩემი ბაბუა ახალგაზრდობაში საცხობში მუშაობდა.", "არ ვარ დარწმუნებული, რომ ეს კარგი იდეაა.", "დილით მატარებელს ჩაჯდა.", "ჩემი და შვებულებაში წავიდა."]
  },
  {
    id: 'armenian', name: 'Armenian', aliases: ['hayeren', 'հայերdelays'], family: 'Indo-European', region: 'Europe/Asia', tier: 4, script: 'Armenian',
    clue: "Unique alphabet with tall, vertical letter shapes resembling loops of 'u', 'n', 'h'. Distinctive letters: Ա, Բ, Գ, Դ, ն, մ, ր.",
    confusedWith: ['Georgian', 'Amharic', 'Greek'],
    sentences: ["Այսdelays շուկusage ժam քaniso ?", "Տatik iny aprum ek Gyumri qic gyu.", "Yeghanaky amboy shabbat sart ekavy.", "Yes kuzei yerek girk gnel.", "Yerexanery durs xaghum en, vorovhetev yeghanakin lavn e.", "Vortegh karely lav restoran gtnel ays motakayknerum?", "Na inj aatsy vor chi haskanum khnidiry.", "Ays hin shenky erkuhas tari arraj e karutsvel.", "Հայաstandy barcr lavagnuny amboy orin tsrtsverumy arevelyan komsum e.", "Yerevany mej metro karg gnerum e, bayts mardy shatshata e.", "Babikys amey tarov lavash e thkhum toniry mej.", "Amanory tanterikn u ynkernery havatsvum en u nvor unein.", "Lavashov y nrdangov y panrov nerkhov armadra kuzein.", "Tonakan oreriy misht khorovats enk anum partezy mej.", "Tsnundy November e, misht tsurt e u dzvyuny galis e.", "Marshrutkayin shatshata e, yereky rope chi galis.", "Bazarum mrgeri y banjaregheniy giney shat lavn e.", "Teghakany handesy amey shabbat irishiky bats e linum.", "Tsnoghy hin khanakanery gortsumn e gisherov.", "Bakumy krkesy vortegh taramnerkin avelatsun en.", "Deghatun shiltan y post-oficin dimats akysa paku e.", "Papikys yeritasart tsamy firmayu mej ashkhatsy.", "Vsdah chem vor lav gaghaphar e.", "Arankajn gnatskin gidiel.", "Kuyriky artsankh gnats."]
  },
  {
    id: 'tamil', name: 'Tamil', aliases: ['thamizh', 'தமிழ்'], family: 'Dravidian', region: 'Asia', tier: 4, script: 'Tamil',
    clue: "Rounded, curvy script with distinctive loop shapes (க, த, ப, ம). No horizontal top line (unlike Hindi). Characters have flat tops and curled bottoms.",
    confusedWith: ['Malayalam', 'Telugu', 'Kannada'],
    sentences: ["இன்று கடை எத்தனை மணிக்கு மூடும்?", "என் பாட்டி சென்னைக்கு அருகில் ஒரு சிறிய கிராமத்தில் வசிக்கிறாள்.", "வாரம் முழுவதும் வானிலை மிகவும் குளிராக இருந்தது.", "மூன்று புத்தகங்கள் வாங்க விரும்புகிறேன்.", "வானிலை நன்றாக இருப்பதால் குழந்தைகள் வெளியே விளையாடுகிறார்கள்.", "இங்கே அருகில் நல்ல உணவகம் எங்கே இருக்கிறது?", "பிரச்சனை புரியவில்லை என்று அவள் சொன்னாள்.", "இந்தப் பழைய கட்டிடம் இருநூறு ஆண்டுகளுக்கு முன்பு கட்டப்பட்டது.", "திருவள்ளுவர் எழுதிய திருக்குறள் தமிழ் இலக்கியத்தின் பெருமை.", "கோயிலில் பொங்கல் திருவிழாவுக்கு ஆயிரக்கணக்கான பக்தர்கள் வருவார்கள்.", "சென்னையில் மழைக்காலத்தில் சாலைகளில் வெள்ளம் பெருகும்.", "அரசு பேருந்தில் நிற்கவே இடமில்லாமல் பயணம் செய்தோம்.", "கடற்கரையில் மாலையில் நடைப்பயிற்சி செல்வது வழக்கம்.", "அம்மா தினமும் காலையில் இட்லியும் சாம்பாரும் செய்வாள்.", "பொங்கல் பண்டிகையில் புது அரிசியில் பொங்கல் வைப்போம்.", "ஆட்டோ ஓட்டுநர் மீட்டர் போடாமல் அதிக கட்டணம் கேட்டார்.", "மாலையில் தேநீர் கடையில் வடை மற்றும் காபி சாப்பிடுவோம்.", "கோடையில் மாங்காய் பருவம் வரும்போது எல்லோரும் மகிழ்ச்சியாக இருப்போம்.", "திரையரங்கில் தமிழ்ப்படம் பார்க்க நீண்ட வரிசையில் நின்றோம்.", "மின்வெட்டு மீண்டும் வந்துவிட்டது, மெழுகுவர்த்தி ஏற்ற வேண்டும்.", "மருந்தகம் அஞ்சல் அலுவலகத்திற்கு எதிரில் இன்று மூடியிருக்கிறது.", "என் அண்ணன் நிலையத்திற்கு அருகில் ஒரு மருந்தகத்தில் வேலை செய்கிறான்.", "இது நல்ல யோசனையா என்று எனக்கு உறுதியாகத் தெரியவில்லை.", "அவன் இன்று காலை ரயிலில் ஏறினான்.", "என் அக்கா விடுமுறைக்குச் சென்றாள்."]
  },
  {
    id: 'amharic', name: 'Amharic', aliases: ['amarigna', 'አማርኛ'], family: 'Semitic', region: 'Africa', tier: 4, script: 'Geʻez',
    clue: "Ge'ez (Ethiopic) script: blocky characters with small stems, circles, or loops extending from a central body (ሀ, ለ, መ, ሰ, ቀ). Not connected like Arabic.",
    confusedWith: ['Tigrinya', 'Cherokee'],
    sentences: ["ዛሬ ገበያው ስንት ሰዓት ይዘጋል?", "አያቴ ከአዲስ አበባ ብዙም ሳትርቅ በአንድ ትንሽ መንደር ትኖራለች።", "የአየር ሁኔታው ሳምንቱን ሙሉ በጣም ቀዝቃዛ ነበር።", "ሦስት መጻሕፍት መግዛት እፈልጋለሁ።", "ልጆቹ ውጭ ይጫወታሉ ምክንያቱም የአየር ሁኔታው ጥሩ ነው።", "እዚህ አካባቢ ጥሩ ምግብ ቤት የት ማግኘት ይቻላል?", "ችግሩን አልገባኝም ብላ ነገረችኝ።", "ይህ ጥንታዊ ሕንፃ ከሁለት መቶ ዓመት በፊት ተሠራ።", "አዲስ አበባ ውስጥ ትራፊኩ በጣም ከባድ ነው በተለይ ጠዋት ላይ።", "መስቀል በዓል ሲደርስ ሰዎች ደመራ ያቃጥላሉ በአደባባይ።", "የቡና ሥነ ሥርዓት ለእንግዶች ማዘጋጀት የተለመደ ነው።", "ታክሲ ለመያዝ ረጅም ጊዜ ጠበቅን ከዚያ ሚኒባስ ያዝን።", "ገበያ ውስጥ ቅመማ ቅመም እና ጥራጥሬ በብዛት ይሸጣል።", "እናቴ ሁልጊዜ ዶሮ ወጥ ትሠራለች ለበዓላት።", "ጥምቀት ላይ ሁሉም ሰው ወደ ውኃው ይወርዳል።", "ኢንጀራ ከወጥ ጋር ማዕድ ላይ ሁልጊዜ ይቀርባል።", "ዝናብ ጀመረ ስለዚህ ገበሬዎቹ ዘር መዝራት ጀመሩ።", "ሰፈራችን ውስጥ አዲስ ትምህርት ቤት ተከፈተ ባለፈው ወር።", "ቤተ መጻሕፍት ውስጥ ተማሪዎች እየተጫኑ ነበር ፈተና ስላለ።", "መብራት ጠፋ ስለዚህ ሻማ አበራን ማታ ላይ።", "ፋርማሲው ከፖስታ ቤት ፊት ለፊት ዛሬ ዝግ ነው።", "ወንድሜ ከጣቢያው አጠገብ ባለ መድኃኒት ቤት ይሠራል።", "ይህ ጥሩ ሐሳብ እንደሆነ እርግጠኛ አይደለሁም።", "ጠዋት ባቡር ተሳፈረ።", "እህቴ ለእረፍት ሄዳለች።"]
  },
  {
    id: 'czech', name: 'Czech', aliases: ['cestina', 'čeština'], family: 'Slavic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Háček diacritics over consonants: č, š, ž, ř (unique to Czech!), ť, ď, ň. Also ů (ring above u).",
    confusedWith: ['Slovak', 'Polish'],
    sentences: ["V kolik hodin dnes zavírá trh?", "Moje babička bydlí v malé vesnici nedaleko Brna.", "Počasí bylo celý týden dost chladné.", "Rád bych koupil tři knihy, prosím.", "Děti si hrají venku, protože je hezky.", "Kde tady poblíž najdu dobrou restauraci?", "Řekla mi, že nerozumí tomu problému.", "Tato stará budova byla postavena před dvěma sty lety.", "Řeřicha roste na zahrádce vedle řepy a řípy.", "Třicet tři stříbrných stříkaček stříkalo přes tři sta střech.", "Při průjezdu Prahou jsme navštívili Pražský hrad.", "Nejčerstvější pečivo prodávají v pekařství na rohu Příční ulice.", "Středeční schůze zastupitelstva proběhla bez větších problémů.", "V hospodě u nádraží mají výborné svíčkovou na smetaně.", "Trdelník a svařené víno patří k vánočním trhům.", "Na chalupě jsme o víkendu sekali dříví a topili v kamnech.", "V pátek jsme šli na pivo do naší oblíbené pivnice.", "Řidičský průkaz se musí vyměnit každých deset let.", "Tramvaj číslo dvacet dva jezdí přímo do centra města.", "Na houby chodíme do lesa každý podzim hned po ránu.", "Lékárna naproti poště je dnes zavřená.", "Můj dědeček pracoval v pekárně na předměstí.", "Nejsem si jistý, že je to dobrý nápad.", "Ráno nasedl na vlak.", "Moje sestra odjela na dovolenou."]
  },
  {
    id: 'danish', name: 'Danish', aliases: ['dansk'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: "Vowels æ, ø, å. Soft consonant clusters (af, og, med). Double-d pronounced as soft 'th'. Words like og, det, ikke, ikke, har appear often.",
    confusedWith: ['Norwegian', 'Swedish'],
    sentences: ["Hvad tid lukker markedet i dag?", "Min bedstemor bor i en lille landsby tæt på Aarhus.", "Vejret har været ret koldt hele ugen.", "Jeg vil gerne købe tre bøger, tak.", "Børnene leger udenfor, fordi vejret er godt.", "Hvor kan man finde en god restaurant her i nærheden?", "Hun fortalte mig, at hun ikke forstod problemet.", "Denne gamle bygning blev bygget for to hundrede år siden.", "Nørrebrogade er en af de mest trafikerede gader i København.", "Min datter går i børnehave tæt på søen i nærheden.", "Fødevarebutikken på hjørnet sælger økologiske grøntsager.", "Blæsten fra Øresund gør det ekstra koldt om vinteren.", "Størstedelen af møblerne er købt brugt på loppemarkeder.", "Hygge er noget vi dyrker med stearinlys og varme tæpper.", "Cykelstierne i København gør det nemt at komme rundt.", "Det er mørkt allerede klokken tre om vinteren, det er hårdt.", "I fredags havde vi fællesspisning i opgangen med naboerne.", "Mor laver altid flæskesteg med rødkål og kartofler til jul.", "Fritidshuset på Bornholm bruger vi mest om sommeren.", "SU-en dækker lige netop huslejen, men ikke meget mere.", "Posthuset overfor biblioteket er lukket i dag.", "Min bedstefar arbejdede tidligere på et mejeri udenfor byen.", "Jeg er ikke sikker på, at det er en god idé.", "Han tog toget tidligt i morges.", "Min søster er taget på ferie."]
  },
  {
    id: 'norwegian', name: 'Norwegian', aliases: ['norsk'], family: 'Germanic', region: 'Europe', tier: 2, script: 'Latin',
    clue: "Vowels æ, ø, å (same as Danish). Harder consonant endings (-k, -t, -g). Common words: ikke, jeg, det, og, har, kan.",
    confusedWith: ['Danish', 'Swedish', 'Icelandic'],
    sentences: ["Når stenger markedet i dag?", "Bestemoren min bor i en liten landsby i nærheten av Bergen.", "Været har vært ganske kaldt hele uken.", "Jeg vil gjerne kjøpe tre bøker, takk.", "Barna leker ute fordi været er fint.", "Hvor kan man finne en god restaurant her i nærheten?", "Hun fortalte meg at hun ikke forsto problemet.", "Denne gamle bygningen ble bygget for to hundre år siden.", "Fjellvandringen tok oss seks timer fra hytten til toppen.", "Nordmenn bruker ofte uttrykket kos når de snakker om hygge.", "Hurtigruten seiler langs hele kysten fra Bergen til Kirkenes.", "Vinteren i Nord-Norge er mørk, men nordlyset gjør opp for det.", "Barnehagen ligger rett ved siden av matbutikken i sentrum.", "Vi tar gjerne med matpakke til lunsj på jobben hver dag.", "Skiløypene i Nordmarka åpner så snart det kommer nok snø.", "Hyttetur i påsken er en tradisjon nesten alle nordmenn har.", "Bunaden bruker vi på syttende mai og andre festdager.", "Vi handler på Rema eller Kiwi fordi det er billigst der.", "Strømprisen har gått opp igjen, det merkes på regningen.", "Feriekabinen vår ligger ved en fjord i Vestland.", "Apoteket overfor postkontoret er stengt i dag.", "Bestefaren min jobbet tidligere i en bakeri utenfor byen.", "Jeg er ikke sikker på at det er en god idé.", "Han tok toget tidlig i morges.", "Søsteren min dro på ferie."]
  },
  {
    id: 'romanian', name: 'Romanian', aliases: ['romana', 'română'], family: 'Romance', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Comma-below diacritics ș and ț (unique among Romance languages). Also ă, î, â. Articles suffixed to nouns (-ul, -a).",
    confusedWith: ['Italian', 'Spanish', 'Moldovan'],
    sentences: ["La ce oră se închide piața azi?", "Bunica mea locuiește într-un sat mic lângă Cluj-Napoca.", "Vremea a fost destul de rece toată săptămâna.", "Aș vrea să cumpăr trei cărți, vă rog.", "Copiii se joacă afară pentru că e vreme frumoasă.", "Unde pot găsi un restaurant bun pe aici?", "Mi-a spus că nu înțelege problema.", "Această clădire veche a fost construită acum două sute de ani.", "Municipalitatea a anunțat restricții de circulație în centrul orașului.", "Învățătoarea le-a explicat lecția cu răbdare elevilor din clasa întâi.", "Președintele a susținut o conferință de presă la Palatul Cotroceni.", "Transportul în comun din București este aglomerat în orele de vârf.", "Facultatea de Științe Economice organizează un simpozion săptămâna viitoare.", "Cozonacul și sarmale sunt nelipsite de pe masa de Crăciun.", "Duminica mergem la piață să cumpărăm brânză proaspătă și ouă.", "La țară bunicii mai cresc găini și au o grădină mare.", "Mamaliga cu brânză și smântână este mâncarea copilăriei mele.", "Trenul de la Brașov întârzie mereu cel puțin o jumătate de oră.", "În Maramureș casele tradiționale au porți din lemn sculptat.", "Facturile la întreținere au crescut foarte mult iarna aceasta.", "Farmacia de vizavi de oficiul poștal este închisă azi.", "Bunicul meu a lucrat la o brutărie în centrul orașului.", "Nu sunt sigur că e o idee bună.", "A luat trenul în dimineața asta.", "Sora mea a plecat în vacanță."]
  },
  {
    id: 'tagalog', name: 'Tagalog', aliases: ['filipino', 'pinoy'], family: 'Austronesian', region: 'Asia', tier: 3, script: 'Latin',
    clue: "Frequent markers: ang, ng, mga, sa, na, nang. Words starting with ma- (maganda, masaya). No diacritics in standard writing.",
    confusedWith: ['Indonesian', 'Malay'],
    sentences: ["Anong oras nagsasara ang palengke ngayon?", "Ang lola ko ay nakatira sa isang maliit na baryo malapit sa Batangas.", "Malamig ang panahon buong linggo.", "Gusto kong bumili ng tatlong libro.", "Naglalaro ang mga bata sa labas kasi maganda ang panahon.", "Saan may magandang restaurant dito sa malapit?", "Sinabi niya sa akin na hindi niya naiintindihan ang problema.", "Ang lumang gusali na ito ay itinayo dalawang daang taon na ang nakalipas.", "Ang mga mag-aaral ay naghahanda para sa pagsusulit bukas.", "Kumakain ang mga empleyado ng tanghalian sa karinderya malapit sa opisina.", "Nagsisimba ang pamilya namin tuwing Linggo sa simbahan sa kanto.", "Nagmamadali ang mga pasahero sa jeepney dahil malapit nang umalis.", "Pumipila ang mga tao sa palengke para bumili ng isda.", "Nag-aalmusal kami ng pandesal at kape tuwing umaga.", "Traffic na naman sa EDSA, isang oras na akong nakasakay.", "Nagpapadala ng balikbayan box ang tita ko galing abroad.", "Fiesta sa barangay namin, may lechon at karaoke buong gabi.", "Brownout nanaman, kailangan nating gumamit ng kandila.", "Meryenda tayo ng halo-halo pagkatapos ng klase.", "Umuulan ng malakas tuwing hapon sa tag-ulan.", "Ang botika sa tapat ng munisipyo ay sarado ngayon.", "Ang tito ko ay nagtatrabaho sa isang tindahan malapit sa istasyon.", "Hindi ako sigurado kung magandang ideya iyan.", "Sumakay siya ng bus kanina.", "Umalis ang ate ko para mag-bakasyon."]
  },
  {
    id: 'catalan', name: 'Catalan', aliases: ['catala', 'català'], family: 'Romance', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Interpunct dot between double l (l·l): col·legi, paral·lel. Also ç, ü, and terminal consonants (-nt, -ts, -ns) unlike Spanish/Italian.",
    confusedWith: ['Spanish', 'French', 'Occitan'],
    sentences: ["A quina hora tanca el mercat avui?", "La meva àvia viu en un petit poble a prop de Girona.", "El temps ha estat força fred tota la setmana.", "Voldria comprar tres llibres, si us plau.", "Els nens juguen a fora perquè fa bon temps.", "On puc trobar un bon restaurant per aquí a prop?", "Em va dir que no entenia el problema.", "Aquest edifici antic va ser construït fa dos-cents anys.", "La col·laboració entre les institucions ha millorat notablement.", "L'il·luminació del carrer principal es va instal·lar la setmana passada.", "El col·lectiu d'intel·lectuals va publicar un comunicat al diari.", "Les paral·leles del gimnàs estan ocupades fins a les vuit.", "Molts col·legis públics ofereixen activitats extraescolars gratuïtes.", "Per esmorzar sempre prenc un tallat i una coca de forner.", "La castanyada és una festa molt esperada per tots els infants.", "Els castellers fan torres humanes impressionants a les festes majors.", "El primer de gener ens banyem al mar a la Costa Brava.", "La botiga de queviures del barri tanca els diumenges a migdia.", "El cava i els calçots són dos símbols de la gastronomia catalana.", "La Diada és el dia més important del calendari cívic.", "La farmàcia del davant de correus avui és tancada.", "El meu avi treballava en una fleca al centre del poble.", "No estic segur que sigui una bona idea.", "Va agafar el tren aquest matí.", "La meva germana ha marxat de vacances."]
  },
  {
    id: 'welsh', name: 'Welsh', aliases: ['cymraeg'], family: 'Celtic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Letters w and y function as vowels (cwm, dŵr, gwyn). Digraphs: dd, ff, ll, ch, ng, rh. No j, k, q, v, x, z.",
    confusedWith: ['Irish', 'Breton'],
    sentences: ["Pryd mae'r farchnad yn cau heddiw?", "Mae fy mam-gu yn byw mewn pentref bach ger Aberystwyth.", "Mae'r tywydd wedi bod yn eithaf oer drwy'r wythnos.", "Hoffwn i brynu tri llyfr, os gwelwch yn dda.", "Mae'r plant yn chwarae tu allan achos mae'r tywydd yn braf.", "Ble alla i ddod o hyd i fwyta da yn agos fan hyn?", "Dywedodd wrthyf nad oedd hi'n deall y broblem.", "Adeiladwyd yr hen adeilad hwn ddau gant o flynyddoedd yn ôl.", "Byddwn yn mynd i'r llyfrgell bob dydd Llun ar ôl ysgol.", "Mae'r Eisteddfod yn ddigwyddiad pwysig iawn yn y calendr Cymreig.", "Roedd y cwm yn llawn niwl y bore yma wrth i mi fynd i'r gwaith.", "Mae dysgu Cymraeg yn bwysig i lawer o deuluoedd ifanc heddiw.", "Mae'r capel bach yn dal i gynnal gwasanaethau bob bore Sul.", "Dw i'n hoffi cerdded ar hyd y llwybr arfordirol ar benwythnosau.", "Mae cawl cennin a bara brith yn fwydydd traddodiadol Cymreig.", "Noson lawen yn y neuadd bentref oedd y digwyddiad gorau eleni.", "Mae'r glaw yn disgyn yn drwm yn y cymoedd drwy'r hydref.", "Ar ddydd Gŵyl Dewi mae pawb yn gwisgo cenhinen neu gennin Pedr.", "Mae'r tîm rygbi yn ymarfer ar y cae bob nos Fawrth.", "Mae siop y pentref yn gwerthu bara ffres bob bore.", "Mae'r fferyllfa gyferbyn â'r swyddfa bost ar gau heddiw.", "Roedd fy nhad-cu yn gweithio mewn becws yn y dref.", "Dw i ddim yn siŵr bod hynny'n syniad da.", "Aeth e ar y trên y bore yma.", "Mae fy chwaer wedi mynd ar wyliau."]
  },
  {
    id: 'basque', name: 'Basque', aliases: ['euskara'], family: 'Language Isolate', region: 'Europe', tier: 4, script: 'Latin',
    clue: "High density of k, x, z, tz, ts, tx. Unique verb auxiliaries: du, da, dugu, dira. Words ending in -ak, -ek, -aren.",
    confusedWith: ['Spanish', 'Catalan'],
    sentences: ["Gaur noiz ixten da merkatua?", "Nire amona Donostiako herrixka txiki batean bizi da.", "Eguraldia nahiko hotza izan da aste osoan.", "Hiru liburu erosi nahi nituzke, mesedez.", "Haurrak kanpoan jolasten ari dira eguraldia ona delako.", "Non aurki dezaket jatetxe on bat hemen inguruan?", "Esan zidan ez zuela ulertzen arazoa.", "Eraikin zahar hau duela berrehun urte eraiki zuten.", "Euskal Herriko mendiak edertasun handikoak dira udazkenean.", "Aste bukaeran sagardotegira joaten gara txuleta eta sagardo ona hartzera.", "Euskara munduko hizkuntza zaharrenetako bat da, familia linguistikorik gabekoa.", "Pilota partida ikustera joan ginen frontoi zaharrera larunbatean.", "Auzoko jaietako sokamuturra ekainaren hamabostean izango da.", "Amak talo eta txorizoa prestatu digu afaltzeko gaur.", "Gabonetako Olentzero etxerik etxe ibiltzen da opariak banatzen.", "Herriko tabernako pintxoak onenak dira inguru osoan.", "Autobusak ordu erdiko atzerapena zeukan euria zela eta.", "Ikastolan haurrek euskaraz ikasten dute lehen hizkuntzatzat.", "Itsasoan arrantzale zaharrak goizean goiz ateratzen dira kaira.", "Korrikako lekukoa herriak eskuz esku pasatzen du astebetean.", "Farmaziako dendak postako bulegoa aurrean gaur itxita dago.", "Nire aitonak gaztetako okindegi batean lan egiten zuen.", "Ez nago ziur ideia ona den.", "Goizean trenera igo zen.", "Nire ahizpa oporretara joan da."]
  },
  {
    id: 'icelandic', name: 'Icelandic', aliases: ['islenska', 'íslenska'], family: 'Germanic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Archaic letters thorn (þ) and eth (ð) — unique among modern languages. Heavy vowel accents (á, é, í, ó, ú, ý). Long compound words.",
    confusedWith: ['Faroese', 'Norwegian'],
    sentences: ["Hvenær lokar markaðurinn í dag?", "Amma mín býr í litlu þorpi nálægt Akureyri.", "Veðrið hefur verið ansi kalt alla vikuna.", "Ég myndi vilja kaupa þrjár bækur, takk.", "Börnin leika sér úti vegna þess að veðrið er gott.", "Hvar get ég fundið góðan veitingastað hér í nágrenninu?", "Hún sagði mér að hún skildi ekki vandamálið.", "Þessi gamla bygging var byggð fyrir tvö hundruð árum.", "Þjóðvegurinn liggur meðfram sjávarsíðunni allt frá Reykjavík til Akureyrar.", "Á þorláksmessu fara allir í búðir að kaupa síðustu gjafirnar.", "Bókasöfnin bjóða upp á ókeypis aðgang að tölvum og nettengingu.", "Útivistarfólk þarf að gæta sín í óveðri á hálendinu.", "Sundlaugarhefð er mikilvægur hluti af íslenskri menningu og samfélagslífi.", "Á sumrin förum við í fjallgöngur og tíndum berjum.", "Þorrablót er haldið á miðjum vetri með hefðbundnum mat.", "Geysisgosið laðar að sér þúsundir ferðamanna á hverju ári.", "Brennivín og harðfiskur eru einkennandi fyrir íslenskan matararf.", "Jólasveinarnir þrettán koma einn í senn dagana fyrir jól.", "Veðrið getur breyst á svipstundu, alltaf þarf regnjakka.", "Náttúrulaugin var fullbókuð og við þurftum að bíða í röð.", "Apótek andspænis pósthúsinu er lokað í dag.", "Afi minn vann í bakaríi í bænum þegar hann var ungur.", "Ég er ekki viss um að þetta sé góð hugmynd.", "Hann fór í lestina snemma í morgun.", "Systir mín fór í frí."]
  },
  {
    id: 'zulu', name: 'Zulu', aliases: ['isizulu'], family: 'Bantu', region: 'Africa', tier: 4, script: 'Latin',
    clue: "Complex noun class prefixes (umu-/aba-, isi-/izi-, ulu-/izin-). Click consonants spelled as c, q, x. Words often start with vowels (u-, i-, a-).",
    confusedWith: ['Xhosa', 'Swahili'],
    sentences: ["Isitolo sivala nini namuhla?", "Ugogo wami uhlala emzaneni omncane eduze neTheku.", "Isimo sezulu besibanda sonke isonto.", "Ngifuna ukuthenga izincwadi ezintathu.", "Abantwana badlala phandle ngoba izulu lihle.", "Ngingalithola kuphi irestorenti elihle lapha eduze?", "Uthe kimi akaqondi inkinga.", "Lesi sakhiwo esidala sakhiwa eminyakeni engamakhulu amabili edlule.", "Umama upheka uphutu kanye nenyama ukudla kwakusihlwa.", "Itheku lidume ngokuba nabantu abaningi abavela kuwo wonke amazwe.", "Abantwana basesikoleni bafunda isiZulu njengolimi lokuqala.", "Izimoto ziningi kakhulu emgwaqweni ngesikhathi sasekuseni.", "Ugogo uxoxa izindaba zakudala njalo ebusuku ngaphambi kokulala.", "Umcimbi womshado ubukhulu kakhulu, kwafika izihlobo eziningi.", "UShaka Day ungumkhosi obalulekile eSouth Africa.", "Inyama yenhloko ngokudla okuthandwa kakhulu emakhaya.", "Izinkomo zibaluleke kakhulu esikweni lakwaZulu.", "Amanzi acishile futhi, kumele sisebenzise amakhandlela.", "Emakethe bathengisa imifino namazambane amaningi.", "Amantombazane aculela ibhola likanobhutshuzwayo entambama.", "Ikhemisi elingaphesheya kweposi livaliwe namuhla.", "Ubaba omkhulu wayesebenza esitolo somuthi eduze nesiteshi.", "Angiqiniseki ukuthi lowo ngumqondo omuhle.", "Ugibele isitimela ekuseni namhlanje.", "Udadewethu uhambe eholidini."]
  },
  {
    id: 'estonian', name: 'Estonian', aliases: ['eesti', 'eesti keel'], family: 'Uralic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Distinctive letter õ (unique to Estonian — not in Finnish). Also ä, ö, ü. Double vowels (aa, oo) but shorter words than Finnish.",
    confusedWith: ['Finnish', 'Hungarian'],
    sentences: ["Mis kell turg täna sulgub?", "Mu vanaema elab väikeses külas Tartu lähedal.", "Ilm on olnud terve nädala üsna külm.", "Ma tahaksin osta kolm raamatut, palun.", "Lapsed mängivad õues, sest ilm on ilus.", "Kus ma siit lähedalt hea restorani leian?", "Ta ütles mulle, et ei saa probleemist aru.", "See vana hoone ehitati kakssada aastat tagasi.", "Tallinna vanalinn on üks kõige paremini säilinud keskaegseid linnasid.", "Laulupeol kogunevad kümned tuhanded inimesed üheskoos laulma.", "Sõnajalgade ja mustikatega mets on sügisel eriti kaunis.", "Bussijaam asub raudteejaama kõrval kesklinna servas.", "Võileivad ja kohv on tavaline hommikusöök paljudele eestlastele.", "Jaanipäeval süüdatakse lõke ja lauldakse kogu öö.", "Talvel läheb juba kell kolm pimedaks ja lumi sajab.", "Saunas käimine on eestlastele sama oluline kui soomlastelegi.", "Toidupoes on õlle ja leiva hinnad jälle tõusnud.", "Koorilaul on Eesti kultuuris väga oluline traditsioon.", "Saaremaal on ilusad tuulikud ja vaikne loodus.", "Haigekassa tõend on vajalik arstile minekuks.", "Apteek postikontori vastas on täna suletud.", "Mu vanaisa töötas noorena pagaritöökojas linnaservas.", "Ma ei ole kindel, kas see on hea mõte.", "Ta istus hommikul rongile.", "Mu õde läks puhkusele."]
  },
  {
    id: 'maori', name: 'Maori', aliases: ['te reo', 'te reo maori', 'māori'], family: 'Austronesian', region: 'Oceania', tier: 3, script: 'Latin',
    clue: "Vowel macrons (ā, ē, ī, ō, ū) for long vowels. Small function words: te, ngā, e, i, ki, ko, he, a. Only 15 consonant letters used.",
    confusedWith: ['Hawaiian', 'Samoan'],
    sentences: ["Ka kati te mākete ā te aha karaka i tēnei rā?", "Kei te noho tōku kuia i tētahi kāinga iti i te taha o Rotorua.", "He makariri te rangi mō te wiki katoa.", "E hiahia ana ahau ki te hoko i ētahi pukapuka e toru.", "Kei te tākaro ngā tamariki i waho nā te mea he pai te rangi.", "Kei hea tētahi wharekai pai i tēnei takiwā?", "I kī mai ia ki ahau kāore ia i te mārama ki te raruraru.", "I hangaia tēnei whare tawhito e rua rau tau ki muri.", "Ko te reo Māori tētahi o ngā reo ōkawa o Aotearoa.", "I haere mātou ki te hui ā-iwi i te marae i te Rāhoroi.", "Kei te whakaako ngā kaiako i te reo Māori ki ngā ākonga.", "Ko te kapa haka tētahi āhuatanga motuhake o te ahurea Māori.", "He nui ngā tāngata i tae mai ki te tangihanga.", "I te ata ka hīkoi mātou ki te moana ki te hī ika.", "Ko te hāngi te kai tino pai mō ngā hui nunui.", "I Matariki ka huihui te whānau ki te whakanui i te tau hou.", "Ka haere mātou ki te ngahere ki te kohikohi kai māra.", "I te ahiahi ka noho mātou ki te whare tīpuna ki te kōrero.", "He waiata ātaahua tā rātou i waiatatia i te pō nei.", "Ko te manaakitanga tētahi tikanga nui i roto i te ao Māori.", "Kei te kati te whare rongoā i te taha o te tari mēra.", "I mahi tōku koroua i te toa i te tāone.", "Kāore au i te tino mōhio mēnā he whakaaro pai tēnā.", "I eke ia ki te tereina i tēnei ata.", "Kua haere tōku tuahine ki te hararei."]
  }
  {
    id: 'serbian', name: 'Serbian', aliases: ['srpski', 'српски'], family: 'Slavic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Can be written in both Latin AND Cyrillic. Latin version uses: č, ć, š, ž, đ (with stroke). The đ is unique among Slavic languages.",
    confusedWith: ['Croatian', 'Bosnian', 'Montenegrin'],
    sentences: ["U koliko sati se danas zatvara pijaca?", "Moja baka živi u malom selu blizu Novog Sada.", "Vreme je bilo prilično hladno cele nedelje.", "Želeo bih da kupim tri knjige, molim vas.", "Deca se igraju napolju jer je lepo vreme.", "Gde u blizini mogu da nađem dobar restoran?", "Rekla mi je da ne razume problem.", "Ova stara zgrada je izgrađena pre dvesta godina.", "Beogradska tvrđava pruža prelep pogled na ušće Save i Dunava.", "Ćevapi sa kajmakom i lepinjom su naša omiljena hrana.", "Đurđevdan je jedan od najvažnijih praznika u Srbiji.", "Trolejbus kasni dvadeset minuta zbog radova u centru grada.", "U kafani sviraju trubači i svi pevaju do kasno uveče.", "Na slavi se okuplja cela porodica i prijatelji dolaze u goste.", "Bakina šljivovica je najbolja u celom kraju.", "Pijaca na Zelenom Vencu ima najsvežije voće i povrće.", "Petak uveče idemo na utakmicu Crvene Zvezde.", "Zimnica se sprema svake jeseni, ajvar i kiseli kupus.", "Na Adi Ciganliji se leti kupamo i igramo odbojku na pesku.", "Struja je poskupela opet od prvog u mesecu.", "Apoteka preko puta pošte je danas zatvorena.", "Moj deda je radio u pekari na periferiji grada.", "Nisam siguran da je to dobra ideja.", "Ujutru je seo u voz.", "Moja sestra je otišla na odmor."]
  },
  {
    id: 'afrikaans', name: 'Afrikaans', aliases: ['afrikaans'], family: 'Germanic', region: 'Africa', tier: 3, script: 'Latin',
    clue: "Looks like simplified Dutch. Double negation (nie...nie). No verb conjugation (ek is, jy is, hy is). Words: baie, maar, ook, wat, dit.",
    confusedWith: ['Dutch', 'German'],
    sentences: ["Hoe laat maak die mark vandag toe?", "My ouma woon in 'n klein dorpie naby Kaapstad.", "Die weer was die hele week nogal koud.", "Ek wil graag drie boeke koop, asseblief.", "Die kinders speel buite want die weer is lekker.", "Waar kan ek hier naby 'n goeie restaurant kry?", "Sy het vir my gesê sy verstaan nie die probleem nie.", "Hierdie ou gebou is twee honderd jaar gelede gebou.", "Tafelberg is een van die mooiste plekke in die hele wêreld.", "Ons braai elke Saterdagmiddag met die bure in die agterplaas.", "Die loadshedding het weer begin, ons moet kerse gebruik.", "Biltong en droëwors is die beste peuselhappies vir rugby kyk.", "Die taxi's ry baie vinnig en stop oral op die pad.", "Ons drink rooibostee sonder melk elke aand na ete.", "In die winter reën dit baie in die Kaap.", "Die boer het mielies en sonneblomme op sy plaas.", "Ons gaan Desember see toe vir vakansie by die strand.", "Koeksisters en melktert is my gunsteling lekkernye.", "Die krag het afgegaan en ons yskas se kos word warm.", "Sondae gaan ons kerk toe en daarna kuier by familie.", "Die apteek oorkant die poskantoor is vandag toe.", "My oupa het in 'n bakery gewerk toe hy jonk was.", "Ek is nie seker dit is 'n goeie idee nie.", "Hy het vanoggend vroeg die trein gevat.", "My suster het op vakansie gegaan."]
  },
  {
    id: 'hausa', name: 'Hausa', aliases: ['hausa'], family: 'Chadic', region: 'Africa', tier: 3, script: 'Latin',
    clue: "Hooked letters: ɓ, ɗ, ƙ (implosive consonants unique to Hausa). Frequent use of 'ya' as pronoun. No complex diacritics.",
    confusedWith: ['Swahili', 'Yoruba'],
    sentences: ["Yaushe kasuwa za ta rufe yau?", "Kakkata tana zaune a wani ƙaramin ƙauye kusa da Kano.", "Yanayin ya yi sanyi sosai duk makon nan.", "Ina so in sayi littattafai uku, don Allah.", "Yara suna wasa a waje domin yanayi ya yi kyau.", "Ina zan iya samun kyakkyawan gidan abinci a nan kusa?", "Ta ce mini ba ta fahimtar matsalar ba.", "An gina wannan tsohon gini shekaru ɗari biyu da suka wuce.", "Kasuwar Kurmi a Kano tana ɗaya daga cikin mafi tsufan kasuwanni.", "Muna cin tuwo da miyan kuka a duk dare.", "Sallah ce babbar biki, ana yanka rago kuma ana cin abinci tare.", "Motar haya ta cika makil, ba mu sami wurin zama ba.", "Damina ta fara kuma manoma sun fara shuka hatsi.", "Safe safe, muna shan koko da kosai a gefen hanya.", "Wutar lantarki ta sake mutuwa, dole mu yi amfani da kyandir.", "A kasuwa akwai kayan miya iri-iri da hatsi masu yawa.", "Jama'a sun taru a filin wasa don kallon ƙwallon ƙafa.", "Mahaifiyata tana dafa dan wake da shinkafa kowace Lahadi.", "Abin hawa yana da wuya a lokacin cunkoson ababen hanya.", "Sanyi ya yi tsanani a wannan shekara fiye da bara.", "Kantin magani da ke gaban gidan waya a yau a rufe yake.", "Kakana ya yi aiki a kantin burodi tun yana saurayi.", "Ban da tabbas ko wannan kyakkyawan tunani ne ba.", "Ya hau jirgin ƙasa da safe.", "Yar uwata ta tafi hutu."]
  },
  {
    id: 'somali', name: 'Somali', aliases: ['soomaali', 'af soomaali'], family: 'Cushitic', region: 'Africa', tier: 3, script: 'Latin',
    clue: "Heavy use of double vowels (aa, ee, ii, oo, uu) and x as a pharyngeal sound. Words often end in -o, -a, or double vowels. No diacritics.",
    confusedWith: ['Swahili', 'Hausa'],
    sentences: ["Suuqa meeqa ayuu maanta xirmi?", "Ayeeyaddey waxay ku nooshahay tuulo yar oo u dhow Hargeysa.", "Cimilada usbuuca oo dhan aad bay u qabowday.", "Waxaan jeclaan lahaa inaan iibsado sadex buug, fadlan.", "Caruurtu waxay ku ciyaaraysaa dibadda maxaa yeelay cimiladu waa fiican.", "Halkee ayaan ka heli karaa maqaaxi wanaagsan halkan agtiisa?", "Waxay ii sheegtay inaysan fahmin dhibaatada.", "Dhismahan hore waxaa la dhisay laba boqol oo sano ka hor.", "Muqdisho waa magaalada ugu weyn dalka Soomaaliya.", "Subaxda waxaanu cabno shaah iyo canjeero inta aanaan shaqo tegin.", "Bisha Ramadaan waa wakhtiga cibaadada iyo midnimada qoyska.", "Baska ayaa buuxa, waa inaan sugnaa ilaa ixtiraadka xiga.", "Xoolaha ayaa muhiim u ah dhaqanka reer miyiga Soomaaliyeed.", "Habeenkii waxaanu ku wada cuntaynaa suxuur ka hor inta aanaan soonin.", "Duufaantu waxay keentay daad weyn oo burburiyey waddooyinka.", "Suuqa xoolaha ayaa maalinta Jimcaha aad u buuxa.", "Gabdhaha ayaa lagu caansan yahay suugaanta iyo heesaha.", "Gaariga wuxuu ku jiray saxaafadda sagaashan daqiiqo.", "Dugsiyadda ayaa bilaabaya bisha Sebtembar sannad kasta.", "Cimiladda kulul waxay gaartaa afartamaad darajada.", "Farmashiyaha ka soo horjeeda boostada maanta waa xiran.", "Awoowgey markuu yaraa wuxuu ka shaqeeyey makhbarad magaalada.", "Ma hubo inay tahay fikrad wanaagsan.", "Subaxdii wuxuu fuulay tareenka.", "Walaashey waxay tagtay fasax."]
  },
  {
    id: 'urdu', name: 'Urdu', aliases: ['اردو'], family: 'Indo-Aryan', region: 'Asia', tier: 3, script: 'Arabic-Urdu',
    clue: "Nastaliq script — Arabic letters but written in a flowing, hanging diagonal style (slants down-left). More curved than Arabic. Uses ہ, ے, ڈ, ٹ, ں.",
    confusedWith: ['Arabic', 'Persian'],
    sentences: ["آج بازار کتنے بجے بند ہوتا ہے؟", "میری دادی لاہور کے قریب ایک چھوٹے سے گاؤں میں رہتی ہیں۔", "اس پورے ہفتے موسم کافی سرد رہا ہے۔", "مجھے تین کتابیں خریدنی ہیں۔", "بچے باہر کھیل رہے ہیں کیونکہ موسم اچھا ہے۔", "یہاں آس پاس کوئی اچھا ریستوران کہاں ملے گا؟", "اس نے مجھ سے کہا کہ اسے مسئلہ سمجھ نہیں آ رہا۔", "یہ پرانی عمارت دو سو سال پہلے بنائی گئی تھی۔", "اردو بازار میں کتابوں کی بہت ساری دکانیں ہیں۔", "رمضان میں سحری اور افطاری کا خاص اہتمام ہوتا ہے۔", "چائے والے نے ادرک والی چائے پیالی میں دی۔", "بارش کی وجہ سے سڑکوں پر پانی جمع ہو گیا۔", "عید پر سب لوگ نئے کپڑے پہنتے ہیں۔", "بجلی پھر سے چلی گئی ہے، یو پی ایس بھی بند ہو گیا۔", "گرمیوں میں آم کا موسم سب سے اچھا لگتا ہے۔", "محلے کی مسجد سے اذان کی آواز آ رہی ہے۔", "ریکشے والے نے زیادہ کرایہ مانگا تو ہم نے پیدل جانا طے کیا۔", "امی ہمیشہ بریانی بہت اچھی بناتی ہیں۔", "شادی میں بہت سارے مہمان آئے تھے اور کھانا لاجواب تھا۔", "سردیوں میں دھوپ سیکنا بہت اچھا لگتا ہے۔", "دوائی کی دکان ڈاک خانے کے سامنے آج بند ہے۔", "میرے دادا جوانی میں ایک بیکری میں کام کرتے تھے۔", "مجھے یقین نہیں کہ یہ اچھا خیال ہے۔", "وہ صبح ٹرین میں بیٹھ گیا۔", "میری بہن چھٹی پر گئی ہے۔"]
  },
  {
    id: 'cantonese', name: 'Cantonese', aliases: ['yue', '粵語', '广东话'], family: 'Sinitic', region: 'Asia', tier: 3, script: 'Traditional Han',
    clue: "Traditional Chinese characters (more strokes than Mandarin simplified). Unique particles: 嘅, 咗, 喺, 嚟, 噉, 啲. Characters exclusive to Cantonese writing.",
    confusedWith: ['Mandarin', 'Japanese (Kanji)'],
    sentences: ["今日街市幾點收？", "我嫲嫲住喺香港附近一條細村入面。", "呢個禮拜天氣都幾凍。", "我想買三本書。", "啲細路喺出面玩緊因為天氣好。", "呢度附近邊度有好嘢食？", "佢話佢唔明白個問題。", "呢座舊樓兩百年前起嘅。", "搭港鐵返工每日都好迫人。", "今晚食乜好？不如叫外賣啦。", "茶餐廳嘅菠蘿油同奶茶係我最鍾意嘅。", "颱風嚟緊，聽日可能要掛八號風球。", "星期日去飲茶係我哋一家人嘅習慣。", "行年宵市場買桃花同風車好開心。", "巴士等咗成半個鐘都未嚟。", "屋企嘅冷氣壞咗，熱到瞓唔著。", "去離島行山呼吸吓新鮮空氣。", "阿媽煲咗老火湯等我返到屋企飲。", "中秋節我哋喺維港睇煙花食月餅。", "樓價太貴，後生仔好難買到樓。", "藥房喺郵局對面今日休息。", "我阿爺後生嗰陣喺麵包舖做嘢。", "我唔肯定呢個係咪好主意。", "佢朝早搭咗火車走。", "我家姐去咗旅行。"]
  },
  {
    id: 'yoruba', name: 'Yoruba', aliases: ['èdè yorùbá'], family: 'Niger-Congo', region: 'Africa', tier: 4, script: 'Latin',
    clue: "Subdots below vowels and consonants: ẹ, ọ, ṣ. Tone marks (à, á, ā) on almost every vowel. Very short words, mostly 2-3 letters.",
    confusedWith: ['Igbo', 'Hausa'],
    sentences: ["Kí ni àkókò tí ọjà máa pa lónìí?", "Ìyá àgbà mi ń gbé ní àdúgbò kékeré kan lẹ́gbẹ̀ẹ́ Ìbàdàn.", "Ojú ọjọ́ ti tutù gan fún gbogbo ọ̀sẹ̀ yìí.", "Mo fẹ́ ra ìwé mẹ́ta, ẹ jọ̀wọ́.", "Àwọn ọmọdé ń ṣeré ní ìta nítorí pé ojú ọjọ́ dára.", "Níbo ni mo ti lè rí ilé oúnjẹ tó dára ní àdúgbò yìí?", "Ó sọ fún mi pé kò lóye ìṣòro náà.", "Ilé àtijọ́ yìí ni a ti kọ́ ní igba ọdún sẹ́yìn.", "Ọjà Ọ̀jà ni a ti ń lọ ní àárọ̀ kùtùkùtù ọjọ́ ìsinmi.", "Ẹ̀gúsí àti àmàlà jẹ́ oúnjẹ tí à ń jẹ ní ọ̀pọ̀lọpọ̀ ìgbà.", "Ìdílé mi máa ń kó jọ ní àsìkò Odún Ọdún.", "Ọkọ̀ ará ìlú ti kún, a dúró fún ẹ̀yìn tó kàn.", "Ojú ọjọ́ ti gbóná gan ní oṣù yìí, afẹ́fẹ́ kò sí rárá.", "Ìyá mi máa ń ṣe àmàlà àti ewédú lójúmọ́.", "Oúnjẹ ajẹ́fẹ́lẹ́ ní pàápàá àti ọ̀gẹ̀dẹ̀ dídín.", "Àwọn ará àdúgbò máa ń ṣe àrìyá lóṣooṣù.", "Iná mànàmáná ti lọ, a ní láti lo àtùpà.", "Ìwé ìròyìn ní alẹ́ máa ń gbé ìròyìn tuntun wá.", "Ọjà ẹlẹ́dẹ̀ ní Ọ̀yọ́ máa ń kún fún àwọn aláfin.", "Ilẹ̀ àgbẹ̀ wa ni a ti ń gbin èso àti ẹ̀fọ́.", "Ilé ìtajà oògùn tí ó wà lẹ́gbẹ̀ẹ́ ilé iṣẹ́ méèlì ti pa lónìí.", "Bàbá àgbà mi ṣe iṣẹ́ ní ilé búrẹ́dì nígbà tó wà lọ́mọdé.", "Mi ò dá mi lójú pé ó jẹ́ èrò tó dára.", "Ó gun ọkọ̀ ojú irin ní àárọ̀ yìí.", "Àbúrò mi obìnrin ti lọ sí ìsinmi."]
  },
  {
    id: 'albanian', name: 'Albanian', aliases: ['shqip'], family: 'Indo-European', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Unique digraphs: dh, gj, ll, nj, rr, sh, th, xh, zh. Letter ë (schwa) is very frequent. Definite articles suffixed (-i, -u, -a).",
    confusedWith: ['Romanian', 'Turkish'],
    sentences: ["Në çfarë ore mbyllet tregu sot?", "Gjyshja ime jeton në një fshat të vogël pranë Tiranës.", "Moti ka qenë mjaft i ftohtë gjithë javën.", "Do të doja të blija tre libra, ju lutem.", "Fëmijët luajnë jashtë sepse moti është i mirë.", "Ku mund të gjej një restorant të mirë këtu afër?", "Ajo më tha se nuk e kuptonte problemin.", "Kjo ndërtesë e vjetër u ndërtua dyqind vjet më parë.", "Sheshi Skënderbej në Tiranë është zemra e qytetit.", "Byrek me djathë dhe spinaq është ushqimi ynë i preferuar.", "Në verë shkojmë në bregdet në Sarandë ose Vlorë.", "Autobusi urban vonohet gjithmonë njëzet minuta në mëngjes.", "Kafja turke pihet pas çdo vakti në shumicën e shtëpive.", "Kur vjen dimri, ngrohja qendrore nuk punon mirë.", "Ditën e Flamurit kremtojmë pavarësinë e Shqipërisë.", "Fqinjët na sollën bakllava kur u kthyëm nga pushimet.", "Pazari i Korçës ka produkte artizanale shumë të bukura.", "Energjia elektrike shkon dhe vjen, duhet gjenerator në shtëpi.", "Nëna gatuan tavë kosi me mish qingji për darkë.", "Në fshat ende bëjnë raki shtëpie nga rrushi i tyre.", "Farmacia përballë postës është e mbyllur sot.", "Gjyshi im punonte në një furrë buke në qytet kur ishte i ri.", "Nuk jam i sigurt që kjo është një ide e mirë.", "Ai hipi në tren herët në mëngjes.", "Motra ime shkoi me pushime."]
  },
  {
    id: 'lao', name: 'Lao', aliases: ['phasa lao'], family: 'Tai-Kadai', region: 'Asia', tier: 4, script: 'Lao',
    clue: "Similar to Thai but simpler — fewer loops, more angular strokes. No tone marks floating above (tones built into consonant choice). No spaces between words.",
    confusedWith: ['Thai', 'Khmer'],
    sentences: ["ຕະຫຼາດປິດຈັກໂມງມື້ນີ້?", "ແມ່ເຖົ້າຂ້ອຍອາໄສຢູ່ບ້ານນ້ອຍໃກ້ຫຼວງພະບາງ.", "ອາກາດໜາວຕະຫຼອດອາທິດ.", "ຂ້ອຍຢາກຊື້ປຶ້ມສາມຫົວ.", "ເດັກນ້ອຍຫຼິ້ນຢູ່ນອກເພາະອາກາດດີ.", "ຮ້ານອາຫານດີຢູ່ໃສແຖວນີ້?", "ລາວບອກວ່າບໍ່ເຂົ້າໃຈບັນຫາ.", "ຕຶກເກົ່ານີ້ສ້າງມາສອງຮ້ອຍປີແລ້ວ.", "ນະຄອນຫຼວງວຽງຈັນເປັນເມືອງທີ່ງຽບສະຫງົບ.", "ເຂົ້າໜຽວກິນກັບສົ້ມຕຳແມ່ນອາຫານປະຈຳວັນ.", "ບຸນບັ້ງໄຟເປັນປະເພນີທີ່ສຳຄັນໃນລາວ.", "ລົດຕູ້ເຕັມແລ້ວ ຕ້ອງລໍຖ້າຄັນຕໍ່ໄປ.", "ແມ່ນ້ຳຂອງໄຫຼຜ່ານກາງເມືອງຫຼວງພະບາງ.", "ຕອນແລງໄປຕະຫຼາດມືດຊື້ເຂົ້າປຽກ.", "ລະດູຝົນປີນີ້ນ້ຳຖ້ວມຫຼາຍບ່ອນ.", "ເຮັດບຸນຕັກບາດທຸກເຊົ້າຢູ່ໜ້າບ້ານ.", "ໄຟຟ້າດັບອີກແລ້ວ ຕ້ອງໃຊ້ທຽນ.", "ປີໃໝ່ລາວຫຼິ້ນນ້ຳກັນມ່ວນຫຼາຍ.", "ກາເຟລາວລົດຊາດເຂັ້ມແລະຫອມ.", "ວັດຢູ່ທົ່ວທຸກບ້ານໃນລາວ.", "ຮ້ານຂາຍຢາກົງກັນຂ້າມໄປສະນີມື້ນີ້ປິດ.", "ປູ່ຂ້ອຍເຮັດວຽກຢູ່ຮ້ານເຂົ້າຈີ່ຕອນໜຸ່ມ.", "ບໍ່ແນ່ໃຈວ່າແມ່ນຄວາມຄິດທີ່ດີ.", "ລາວຂຶ້ນລົດໄຟຕອນເຊົ້າ.", "ເອື້ອຍຂ້ອຍໄປພັກຜ່ອນ."]
  },
  {
    id: 'maltese', name: 'Maltese', aliases: ['malti'], family: 'Semitic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Arabic-origin language written in Latin script. Unique letters: ħ (voiceless pharyngeal), għ (silent lengthener), ċ (ch), ġ (soft g), ż (z). Mix of Arabic roots + Italian/English loans.",
    confusedWith: ['Arabic', 'Italian', 'Turkish'],
    sentences: ["X'ħin jagħlaq is-suq illum?", "In-nanna tiegħi tgħix f'raħal żgħir qrib Għawdex.", "It-temp kien kiesaħ ħafna l-ġimgħa kollha.", "Nixtieq nixtri tliet kotba, jekk jogħġbok.", "It-tfal qed jilgħabu barra għax-xemx ħierġa.", "Fejn nista' nsib restorant tajjeb hawn qrib?", "Qaltli li ma fehmitx il-problema.", "Din il-binja l-antika nbniet mitejn sena ilu.", "Il-belt Valletta hija waħda mill-iżgħar bliet kapitali fid-dinja.", "Il-pastizzi u l-ħobż biż-żejt huma l-ikla tagħna ta' kuljum.", "Il-festa tar-raħal għandha mużika, logħob tan-nar u purċissjoni.", "Il-karozza tal-linja ttardjat għoxrin minuta minħabba t-traffiku.", "Fix-xitwa l-baħar ikun imqalleb u ma nistgħux nirkbu d-dgħajsa.", "Nhar ta' Ħadd il-familja kollha tmur il-knisja u wara nieklu flimkien.", "Il-lampuki jibdew jinqabdu f'Settembru u kulħadd jifraħ bihom.", "L-għasel Malti huwa magħruf mad-dinja kollha għall-kwalita' tiegħu.", "Fil-Karnival kulħadd jilbes il-kostumi u joħroġ fit-toroq.", "Is-sajf f'Malta jaħraq, it-temperatura tilħaq il-erbgħin grad.", "Ġirien ġodda tawna ġew u ġabu magħhom il-ħelu.", "Il-Milied f'Malta huwa żmien il-familja u l-ikel bnin.", "L-ispiżerija faċċata tal-posta magħluqa llum.", "In-nannu tiegħi kien jaħdem f'forn tal-ħobż meta kien żagħżugħ.", "M'iniex ċert li din hija idea tajba.", "Rikeb it-tren filgħodu kmieni.", "Oħti marret vaganza."]
  },
  {
    id: 'samoan', name: 'Samoan', aliases: ['gagana samoa'], family: 'Austronesian', region: 'Oceania', tier: 3, script: 'Latin',
    clue: "Frequent use of glottal stop written as apostrophe (fa'afetai, Samoa'i). Long vowels with macrons (ā, ē, ī, ō, ū). Very few consonants (no b, c, d, z).",
    confusedWith: ['Maori', 'Hawaiian', 'Tongan'],
    sentences: ["O le a le taimi e tapuni ai le maketi i le aso nei?", "O lo'u tina matua e nofo i se nu'u la'ititi e lata ane i Apia.", "Sa malulu le tau i le vaiaso atoa.", "Ou te fia fa'atau ni tusi e tolu.", "O tamaiti o lo'o ta'alo i fafo ona o le tau lelei.", "O fea e maua ai se faleaiga lelei i autafa nei?", "Sa ia ta'u mai ia te a'u e le'i malamalama o ia i le fa'afitauli.", "O lenei fale tuai na fausia i le lua selau tausaga talu ai.", "O le fale Sa e tutotonu i le nu'u ma e ta'ita'i ai le lotu.", "O le umu e tatau ona saunia mo aso fa'aipoipoga ma fa'alavelave.", "O le kirikiti o se ta'aloga e sili ona ta'uta'ua i Samoa.", "O le pasi sa tumu ma sa tatou tu i le auala e fa'atali.", "O le lotu i le Aso Sa o se tu ma aga masani a tagata Samoa.", "O le ava o se meainu sa'o lea e fa'aaogaina i sauniga fa'aleaganu'u.", "I le taimi o timu tetele e afaina ai togalaau ma auala.", "O le to'ona'i i le Aso Sa e aofia ai le aiga atoa.", "O le palolo e sau i le masina o Novema ma e manaia lava.", "O le fiafia a le nu'u e faia i le po o le Kerisimasi.", "O le malaga i le vaa i le va o Upolu ma Savai'i e manaia.", "O le fa'alavelave a le aiga e maua ai le fesoasoani a le nu'u.", "O le faleoloa o lo'o i luma o le fale meli ua tapuni i le aso nei.", "O lo'u tama matua sa galue i le fale falaoamata.", "Ou te le mautinoa o se manatu lelei lena.", "Sa ia tietie i le nofoaafi i le taeao nei.", "Ua alu lo'u tuafafine i malaga."]
  },
  {
    id: 'punjabi', name: 'Punjabi', aliases: ['panjabi'], family: 'Indo-Aryan', region: 'Asia', tier: 4, script: 'Gurmukhi',
    clue: "Gurmukhi script: distinctive horizontal top line (like Hindi) but rounder, simpler shapes with a characteristic 'hook' on many letters (ਕ, ਖ, ਗ, ਘ). Addak (ੱ) doubles consonants.",
    confusedWith: ['Hindi', 'Bengali'],
    sentences: ["ਅੱਜ ਬਾਜ਼ਾਰ ਕਿੰਨੇ ਵਜੇ ਬੰਦ ਹੁੰਦਾ ਹੈ?", "ਮੇਰੀ ਦਾਦੀ ਅੰਮ੍ਰਿਤਸਰ ਨੇੜੇ ਇੱਕ ਛੋਟੇ ਜਿਹੇ ਪਿੰਡ ਵਿੱਚ ਰਹਿੰਦੀ ਹੈ।", "ਸਾਰੇ ਹਫ਼ਤੇ ਮੌਸਮ ਕਾਫ਼ੀ ਠੰਢਾ ਰਿਹਾ ਹੈ।", "ਮੈਂ ਤਿੰਨ ਕਿਤਾਬਾਂ ਖਰੀਦਣੀਆਂ ਚਾਹੁੰਦਾ ਹਾਂ।", "ਬੱਚੇ ਬਾਹਰ ਖੇਡ ਰਹੇ ਹਨ ਕਿਉਂਕਿ ਮੌਸਮ ਚੰਗਾ ਹੈ।", "ਇੱਥੇ ਨੇੜੇ ਕੋਈ ਚੰਗਾ ਰੈਸਟੋਰੈਂਟ ਕਿੱਥੇ ਮਿਲੇਗਾ?", "ਉਸਨੇ ਮੈਨੂੰ ਕਿਹਾ ਕਿ ਉਸਨੂੰ ਮਸਲਾ ਸਮਝ ਨਹੀਂ ਆ ਰਿਹਾ।", "ਇਹ ਪੁਰਾਣੀ ਇਮਾਰਤ ਦੋ ਸੌ ਸਾਲ ਪਹਿਲਾਂ ਬਣਾਈ ਗਈ ਸੀ।", "ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਸਿੱਖਾਂ ਦਾ ਸਭ ਤੋਂ ਪਵਿੱਤਰ ਅਸਥਾਨ ਹੈ।", "ਲੰਗਰ ਵਿੱਚ ਸਭ ਨੂੰ ਮੁਫ਼ਤ ਖਾਣਾ ਮਿਲਦਾ ਹੈ।", "ਵਿਸਾਖੀ ਦੇ ਦਿਨ ਭੰਗੜਾ ਪਾਉਂਦੇ ਹਨ ਸਾਰੇ।", "ਬੱਸ ਭਰੀ ਹੋਈ ਸੀ ਤੇ ਸਾਨੂੰ ਖੜ੍ਹੇ ਹੋ ਕੇ ਜਾਣਾ ਪਿਆ।", "ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਤੇ ਮੱਕੀ ਦੀ ਰੋਟੀ ਸਭ ਤੋਂ ਸੁਆਦੀ ਹੈ।", "ਚਾਹ ਵਾਲੇ ਨੇ ਅਦਰਕ ਵਾਲੀ ਚਾਹ ਬਣਾ ਕੇ ਦਿੱਤੀ।", "ਲੋਹੜੀ ਤੇ ਅੱਗ ਬਾਲ ਕੇ ਮੂੰਗਫਲੀ ਖਾਂਦੇ ਹਾਂ।", "ਕਣਕ ਦੀ ਵਾਢੀ ਦਾ ਮੌਸਮ ਆ ਗਿਆ ਹੈ।", "ਬਿਜਲੀ ਫਿਰ ਚਲੀ ਗਈ, ਜਨਰੇਟਰ ਚਲਾਉਣਾ ਪਵੇਗਾ।", "ਪਿੰਡ ਵਿੱਚ ਹਰ ਘਰ ਵਿੱਚ ਮੱਝ ਹੈ ਦੁੱਧ ਲਈ।", "ਸ਼ਾਮ ਨੂੰ ਖੇਤਾਂ ਵਿੱਚ ਸੈਰ ਕਰਨਾ ਬਹੁਤ ਚੰਗਾ ਲੱਗਦਾ ਹੈ।", "ਸ਼ਾਦੀ ਵਿੱਚ ਢੋਲ ਵੱਜਦਾ ਹੈ ਤੇ ਸਾਰੇ ਨੱਚਦੇ ਹਨ।", "ਦਵਾਈ ਦੀ ਦੁਕਾਨ ਡਾਕਘਰ ਦੇ ਸਾਹਮਣੇ ਅੱਜ ਬੰਦ ਹੈ।", "ਮੇਰੇ ਦਾਦਾ ਜੀ ਜਵਾਨੀ ਵਿੱਚ ਬੇਕਰੀ ਵਿੱਚ ਕੰਮ ਕਰਦੇ ਸਨ।", "ਮੈਨੂੰ ਯਕੀਨ ਨਹੀਂ ਕਿ ਇਹ ਚੰਗਾ ਵਿਚਾਰ ਹੈ।", "ਉਹ ਸਵੇਰੇ ਟ੍ਰੇਨ ਵਿੱਚ ਬੈਠ ਗਿਆ।", "ਮੇਰੀ ਭੈਣ ਛੁੱਟੀ ਤੇ ਗਈ ਹੈ।"]
  },
  {
    id: 'burmese', name: 'Burmese', aliases: ['myanmar', 'bamar'], family: 'Sino-Tibetan', region: 'Asia', tier: 4, script: 'Myanmar',
    clue: "Circular script — nearly all characters are based on circles and curves (က, ခ, ဂ, ဃ, င). Very round appearance, distinct from all other Asian scripts.",
    confusedWith: ['Thai', 'Khmer', 'Sinhala'],
    sentences: ["ဒီနေ့ဈေးဘယ်နှစ်နာရီပိတ်လဲ?", "အဖွားက မန္တလေးနားမှာ ရွာငယ်လေးတစ်ရွာမှာနေတယ်။", "တစ်ပတ်လုံး ရာသီဥတုအေးတယ်။", "စာအုပ်သုံးအုပ်ဝယ်ချင်ပါတယ်။", "ကလေးတွေ အပြင်မှာကစားနေတယ် ရာသီဥတုကောင်းလို့။", "ဒီနားမှာ စားသောက်ဆိုင်ကောင်းကောင်းရှိလား?", "သူမက ပြဿနာကိုနားမလည်ဘူးလို့ ပြောတယ်။", "ဒီအဆောက်အအုံဟောင်းကို နှစ်ရာနှစ်အရင်ကဆောက်ခဲ့တယ်။", "ရွှေတိဂုံဘုရားကို နေ့တိုင်းလူထောင်ချီလာဖူးကြတယ်။", "မုန့်ဟင်းခါးနဲ့ ထမင်းကြော်ဟာ မနက်စာအတွက်အကောင်းဆုံးပဲ။", "သင်္ကြန်ရောက်ရင် လူတိုင်းရေပက်ကြတယ်။", "ဘတ်စ်ကားက လူပြည့်နေလို့ ထိုင်စရာမရှိဘူး။", "ညဈေးမှာ အစားအစာအမျိုးမျိုးရှိတယ်။", "အမေကနေ့တိုင်း ဟင်းချက်ပေးတယ်။", "ဓာတ်မီးပြန်ပျက်သွားပြီ ဖယောင်းတိုင်ထွန်းရမယ်။", "မိုးရာသီမှာ လမ်းတွေရေကြီးတယ်။", "ဘုန်းကြီးကျောင်းက ရပ်ကွက်အလယ်မှာရှိတယ်။", "ရေနံ့သာဆပ်ပြာနဲ့ ထနက်ကာ လိမ်းတာ အလှအပအတွက်ပဲ။", "လက်ဖက်ရည်ဆိုင်မှာ ညနေတိုင်းသူငယ်ချင်းတွေနဲ့တွေ့ကြတယ်။", "ဒေါင်းလုံးကျပွဲတော်ကို နှစ်တိုင်းကျင်းပတယ်။", "ဆေးဆိုင်က စာတိုက်ရှေ့မှာ ဒီနေ့ပိတ်ထားတယ်။", "အဖိုးကငယ်ငယ်တုန်းက မုန့်ဖိုမှာအလုပ်လုပ်ခဲ့တယ်။", "ဒါကောင်းတဲ့အကြံဖြစ်မဖြစ် မသေချာဘူး။", "သူမနက်ရထားစီးသွားတယ်။", "အစ်မအပန်းဖြေထွက်သွားတယ်။"]
  },
  {
    id: 'hawaiian', name: 'Hawaiian', aliases: ['olelo hawaii'], family: 'Austronesian', region: 'Oceania', tier: 4, script: 'Latin',
    clue: "Only 13 letters (a, e, i, o, u, h, k, l, m, n, p, w + okina ʻ). Heavy use of okina (glottal stop ʻ) and macrons (ā, ē, ī, ō, ū). Very long vowel-heavy words.",
    confusedWith: ['Maori', 'Samoan'],
    sentences: ["Ehia ka hola e pani ai ka mākeke i kēia lā?", "Noho koʻu tūtū wahine ma kahi kauhale liʻiliʻi kokoke i Hilo.", "Ua anuanu ka lā i kēia pule holoʻokoʻa.", "Makemake au e kūʻai i ʻekolu puke.", "Ke pāʻani nei nā keiki ma waho no ka mea maikaʻi ka lā.", "Ma hea e loaʻa ai kahi hale ʻaina maikaʻi ma kēia wahi?", "Haʻi mai ʻo ia iaʻu ʻaʻole ʻo ia i hoʻomaopopo i ka pilikia.", "Ua kūkulu ʻia kēia hale kahiko i ʻelua haneli makahiki aku nei.", "ʻO ka hula kahi hana noʻeau koʻikoʻi loa o ka poʻe Hawaiʻi.", "I ke kakahiaka nui e ʻai ai mākou i ka poi me ka lomi lomi.", "Ka Makahiki he wā hoʻomaha a me ka hauʻoli i ka wā kahiko.", "Nui nā malihini e hele mai ana i Hawaiʻi i kēlā me kēia makahiki.", "He mea nui ka ʻohana i ka noho ʻana ma Hawaiʻi nei.", "Hele mākou i ke kahakai i kēlā me kēia lā Pō ʻaono.", "Ka lūʻau he ʻahaʻaina nui me ka puaʻa kālua a me ka poi.", "ʻO ka ukulele kahi mea hoʻokani pila kaulana o Hawaiʻi.", "I ka wā hoʻoilo ua nui ka ua ma ka ʻaoʻao windward.", "He aloha ʻāina ko mākou no kēia ʻāina nani.", "Hele mākou i ka hālāwai makua ma ka hale kula.", "Ka lei he mea hāʻawi aloha i nā manawa like ʻole.", "Ua pani ka hale lapaʻau ma mua o ka hale leka i kēia lā.", "Hana koʻu tūtū kāne ma ka hale palaoa i kona wā ʻōpio.", "ʻAʻole au i maopopo inā he manaʻo maikaʻi kēlā.", "Ua piʻi ʻo ia i ka kaʻaahi i ke kakahiaka nei.", "Ua hele koʻu kaikuaʻana i ka hoʻomaha."]
  },
  {
    id: 'scots-gaelic', name: 'Scots Gaelic', aliases: ['gaidhlig', 'scottish gaelic'], family: 'Celtic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Like Irish but uses grave accents (à, è, ì, ò, ù) instead of acute. Lenition with h: bh, ch, dh, fh, gh, mh, ph, sh, th. Frequent 'mh' and 'bh' = v sound.",
    confusedWith: ['Irish', 'Welsh'],
    sentences: ["Dè an uair a tha am margadh a' dùnadh an-diugh?", "Tha mo sheanmhair a' fuireach ann am baile beag faisg air Inbhir Nis.", "Bha an aimsir fuar fad na seachdain.", "Bu mhath leam trì leabhraichean a cheannach, ma 's e do thoil e.", "Tha a' chlann a' cluich a-muigh oir tha an aimsir brèagha.", "Càit am faigh mi taigh-bìdh math faisg air làimh?", "Thuirt i rium nach robh i a' tuigsinn na trioblaid.", "Chaidh an togalach seo a thogail dà cheud bliadhna air ais.", "Tha a' Ghàidhlig na pàirt chudromach de chultar na h-Alba.", "Bidh sinn a' dol dhan chèilidh a h-uile oidhche Haoine.", "Tha am buntàta agus an sgadan a' còrdadh rium gu mòr.", "Bha an t-uisge ann fad an latha agus cha robh sinn a' dol a-mach.", "Tha a' mhòinteach àlainn anns an fhoghar le dathan buidhe agus dearg.", "Bidh sinn ag iasgach anns an loch gach madainn Disathairne.", "Aig àm na Nollaige bidh sinn a' seinn òran Gàidhlig.", "Tha am bàta-aiseig a' falbh à Ùig gu Tairbeart gach latha.", "Chaidh sinn gu mòd ionadail agus bhuannaich an nighean againn duais.", "Tha an taigh-seinnse làn a h-uile oidhche Shathairne sa bhaile.", "Bidh an crodh a' tighinn dhachaigh bhon mhonadh aig deireadh an t-samhraidh.", "Tha sinn ag òl tì le ìm agus aran-coirce feasgar.", "Tha am bùth-cungaidh mu choinneimh oifis a' phuist dùinte an-diugh.", "Bha mo sheanair ag obair ann am bùth-arain nuair a bha e òg.", "Chan eil mi cinnteach gur e deagh bheachd a th' ann.", "Chaidh e air an trèana sa mhadainn.", "Dh'fhalbh mo phiuthar air saor-làithean."]
  },
  {
    id: 'croatian', name: 'Croatian', aliases: ['hrvatski'], family: 'Slavic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Nearly identical to Serbian Latin but uses ije/je reflex (mlijeko vs mleko, bijelo vs belo). Diacritics: č, ć, š, ž, đ. No Cyrillic option.",
    confusedWith: ['Serbian', 'Bosnian', 'Slovenian'],
    sentences: ["U koliko sati se danas zatvara tržnica?", "Moja baka živi u malom selu blizu Splita.", "Vrijeme je bilo prilično hladno cijeli tjedan.", "Želio bih kupiti tri knjige, molim vas.", "Djeca se igraju vani jer je lijepo vrijeme.", "Gdje u blizini mogu naći dobar restoran?", "Rekla mi je da ne razumije problem.", "Ova stara zgrada izgrađena je prije dvjesto godina.", "Dubrovačke zidine privlače tisuće turista svake godine.", "Peka ispod čripnje je naš najdraži način pripreme mesa.", "More je prekrasno ljeti, kupamo se svaki dan do listopada.", "Trajekt za otoke kasni pola sata zbog jakog juga.", "Nedjeljom uvijek idemo na ručak kod bake na janjetinu.", "Advent u Zagrebu je jedan od najljepših u Europi.", "Fjaka nas uhvati svako popodne kad sunce jako grije.", "Konoba na rivi ima svježu ribu i domaće vino.", "Dalmacija je poznata po maslinovom ulju i lavandi.", "Kava se pije na terasi i razgovara se satima.", "Škola počinje prvog rujna i djeca nose nove torbe.", "Tramvaj u Zagrebu vozi od ranog jutra do ponoći.", "Ljekarna nasuprot pošte je danas zatvorena.", "Moj djed je radio u pekarnici na periferiji grada.", "Nisam siguran da je to dobra ideja.", "Ujutro je sjeo u vlak.", "Moja sestra je otišla na godišnji odmor."]
  },
  {
    id: 'azerbaijani', name: 'Azerbaijani', aliases: ['azeri', 'azerbaycanca'], family: 'Turkic', region: 'Asia/Europe', tier: 3, script: 'Latin',
    clue: "Very similar to Turkish but uses ə (schwa — unique identifier!). Also has q and x which Turkish doesn't use. Same agglutinative structure.",
    confusedWith: ['Turkish', 'Uzbek', 'Kazakh'],
    sentences: ["Bu gün bazar neçədə bağlanır?", "Nənəm Bakının yaxınlığında kiçik bir kənddə yaşayır.", "Bütün həftə hava kifayət qədər soyuq olub.", "Üç kitab almaq istərdim, zəhmət olmasa.", "Uşaqlar bayırda oynayır, çünki hava yaxşıdır.", "Bu yaxınlıqda yaxşı restoran harada tapa bilərəm?", "O mənə dedi ki, problemi başa düşmür.", "Bu köhnə bina iki yüz il əvvəl tikilib.", "İçərişəhər Bakının ən qədim və gözəl hissəsidir.", "Novruz bayramında tonqal qalanır və səməni cücərdilir.", "Neft Daşlarında insanlar dənizin üstündə yaşayıb işləyirlər.", "Avtobus iyirmi dəqiqə gecikdi, tıxacda qaldı.", "Nənəm hər bazar günü dolma bişirir, ən sevdiyim yeməkdir.", "Xəzər dənizi sahilində gəzmək axşamüstü çox xoşdur.", "Çay içmədən heç bir söhbət başlamaz bizdə.", "Muğam musiqisi Azərbaycanın mədəni irsidir.", "Bazarda təzə meyvə və tərəvəz almaq çox ucuzdur.", "Yağış yağdı və küçələr su altında qaldı.", "Qış aylarında Şəkidə qar yağır və çox gözəl olur.", "Metro Bakıda ən sürətli nəqliyyat vasitəsidir.", "Aptek poçtun qarşısında bu gün bağlıdır.", "Babam gəncliyində çörək sexində işləyib.", "Bunun yaxşı fikir olduğuna əmin deyiləm.", "Səhər qatara mindi.", "Bacım məzuniyyətə getdi."]
  },
  {
    id: 'slovenian', name: 'Slovenian', aliases: ['slovenscina', 'slovenščina'], family: 'Slavic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Uses č, š, ž (like other South Slavic) but has DUAL grammatical number (midva, naju — forms for exactly two). Shorter words than Croatian/Serbian.",
    confusedWith: ['Croatian', 'Slovak', 'Czech'],
    sentences: ["Ob kateri uri se danes zapre tržnica?", "Moja babica živi v majhni vasi blizu Ljubljane.", "Vreme je bilo precej hladno ves teden.", "Rad bi kupil tri knjige, prosim.", "Otroci se igrajo zunaj, ker je lepo vreme.", "Kje v bližini lahko najdem dobro restavracijo?", "Povedala mi je, da ne razume problema.", "Ta stara stavba je bila zgrajena pred dvesto leti.", "Blejsko jezero z otočkom je ena najlepših znamenitosti.", "Potica in žlikrofi sta naši najbolj znani jedi.", "Midva greva na sprehod ob Ljubljanici vsako popoldne.", "Avtobus zamuja dvajset minut zaradi del v centru.", "Ob nedeljah hodimo na kosilo k starim staršem.", "Pustovanje v Ptuju je eno najstarejših v Evropi.", "Na planini sva s prijateljem nabrala gobe in borovnice.", "Kava v Ljubljani se pije počasi, ob dolgem klepetu.", "Martinovo je praznik, ko mošt postane vino.", "V hribih pozimi smučamo, poleti pa hodimo.", "Čebelarstvo je del slovenske tradicije že stoletja.", "Sosedje so nam prinesli šopek rož, ko smo se vselili.", "Lekarna nasproti pošte je danes zaprta.", "Moj dedek je v mladosti delal v pekarni na obrobju.", "Nisem prepričan, da je to dobra zamisel.", "Zjutraj je stopil na vlak.", "Moja sestra je šla na dopust."]
  },
  {
    id: 'xhosa', name: 'Xhosa', aliases: ['isixhosa'], family: 'Bantu', region: 'Africa', tier: 4, script: 'Latin',
    clue: "Click consonants: c (dental click), q (palatal click), x (lateral click). Complex noun prefixes like Zulu (umu-/aba-, isi-/izi-). Frequent 'ng' combinations.",
    confusedWith: ['Zulu', 'Swahili'],
    sentences: ["Ivaliwe nini ivenkile namhlanje?", "Umakhulu wam uhlala kwidolophana encinane ekufutshane naseMonti.", "Imozulu ibiyibanda yonke le veki.", "Ndifuna ukuthenga iincwadi ezintathu.", "Abantwana badlala phandle kuba imozulu intle.", "Ndingayifumana phi irestyu entle apha kufutshane?", "Undixelele ukuba akayiqondi ingxaki.", "Esi sakhiwo sidala sakhiwe kwiminyaka engamakhulu amabini eyadlulayo.", "UMandela wazalelwa eMthatha kwiphondo leMpuma Koloni.", "Umxhosa sidla ngokutya isitampu kunye nenyama.", "Abantu abaninzi baya ecaweni nge-Cawa kusasa.", "Ibhasi igcwele kakhulu akukho ndawo yokuhlala.", "Inkqubo yolwaluko ibalulekile kwinkcubeko yamaXhosa.", "Amakhosikazi adlala ingoma yesiXhosa emtshatweni.", "Imvula ine kakhulu kweli xesha lonyaka.", "Abantwana bafunda isiXhosa esikolweni njengolwimi lokuqala.", "Umbona nempuphu yinto edliwa yonke imihla.", "Umcimbi womgidi unabantu abaninzi abeza kuzonwabisa.", "Ixesha lobusika liyabanda kakhulu eKapa.", "Isitishi sikaloliwe sikufutshane nekhaya lethu.", "Ikhemisti ekwicala elifanelekileyo yepositi ivaliwe namhlanje.", "Utatomkhulu wam wayesebenza kwindawo yokubhaka xa wayemncinci.", "Andiqinisekanga ukuba yingcinga elungileyo leyo.", "Ukhwele uloliwe ekuseni namhlanje.", "Udadewethu uhambile eya eholideyini."]
  },
  {
    id: 'nepali', name: 'Nepali', aliases: ['nepali', 'नेपाली'], family: 'Indo-Aryan', region: 'Asia', tier: 3, script: 'Devanagari',
    clue: "Devanagari script (same as Hindi) with headline bar across top. Distinguished from Hindi by frequent use of छ, -(h)aru plural, and postpositions like -मा, -को, -ले.",
    confusedWith: ['Hindi', 'Marathi'],
    sentences: ["आज बजार कति बजे बन्द हुन्छ?", "मेरी हजुरआमा काठमाडौं नजिकको सानो गाउँमा बस्नुहुन्छ।", "यो हप्ता भरि मौसम निकै चिसो भएको छ।", "मलाई तीनवटा किताब किन्नु छ।", "बच्चाहरू बाहिर खेलिरहेका छन् किनभने मौसम राम्रो छ।", "यहाँ नजिकमा राम्रो खानेकुरा कहाँ पाइन्छ?", "उनले मलाई भनिन् कि उनलाई समस्या बुझिएन।", "यो पुरानो भवन दुई सय वर्ष अघि बनेको हो।", "हिमालको दृश्य नेपालको सबभन्दा ठूलो आकर्षण हो।", "दाल भात तरकारी नेपालीको दैनिक भोजन हो।", "दशैंमा सबै परिवार जम्मा हुन्छन् र टीका लगाउँछन्।", "माइक्रोबस भरिएको थियो, उभिएर जानुपर्यो।", "काठमाडौंको ट्राफिक दिनहुँ झन्-झन् बढ्दै गइरहेको छ।", "आमाले हरेक शनिबार मोमो बनाउनुहुन्छ।", "तिहारमा दीप बालेर घर सजाउने चलन छ।", "बिजुली फेरि गइ, इन्भर्टर पनि बन्द भयो।", "हिउँदमा पोखरामा धुँवारो हुन्छ र चिसो बढ्छ।", "गाउँमा खेतमा धान रोप्ने बेला आयो।", "चिया पसलमा बसेर गफ गर्ने बानी छ।", "जाडोमा धारामा पानी नआउँदा सकस हुन्छ।", "औषधि पसल हुलाक कार्यालयको अगाडि आज बन्द छ।", "मेरा हजुरबा जवानीमा पसलमा काम गर्नुहुन्थ्यो।", "मलाई यकिन छैन कि यो राम्रो विचार हो।", "ऊ बिहान ट्रेनमा चढ्यो।", "मेरी दिदी बिदामा गइन्।"]
  },
  {
    id: 'macedonian', name: 'Macedonian', aliases: ['makedonski', 'македонски'], family: 'Slavic', region: 'Europe', tier: 3, script: 'Cyrillic',
    clue: "Cyrillic with unique letters ќ and ѓ (not found in any other Slavic language). Also uses ј, љ, њ, џ. No case system (unlike Russian).",
    confusedWith: ['Bulgarian', 'Serbian', 'Russian'],
    sentences: ["Во колку часот се затвора пазарот денес?", "Мојата баба живее во мало село блиску до Охрид.", "Времето беше прилично ладно цела недела.", "Би сакал да купам три книги, ве молам.", "Децата играат надвор зошто времето е убаво.", "Каде во близина можам да најдам добар ресторан?", "Ми рече дека не го разбира проблемот.", "Оваа стара зграда е изградена пред двесте години.", "Охридското Езеро е едно од најстарите езера во светот.", "Тавче гравче е нашето национално јадење и е многу вкусно.", "На Бадник палиме бадникова огнена и јадеме постна храна.", "Автобусот задоцни дваесет минути поради сообраќајот.", "Секоја недела бабата прави пита со сирење и зелник.", "На Водици луѓето скокаат во ладната вода за крстот.", "Чаршијата во Скопје е полна со занаетчиски дуќани.", "Ајварот го правиме секоја есен од црвени пиперки.", "Кафето се пие бавно и со долг разговор на тераса.", "Струмица е позната по карневалот и маските.", "Манастирите низ Македонија се стари со векови.", "Сметките за струја пораснаа многу оваа зима.", "Аптеката спроти поштата е затворена денес.", "Дедо ми работел во пекара кога бил млад.", "Не сум сигурен дека тоа е добра идеја.", "Утрото се качи на возот.", "Мојата сестра замина на одмор."]
  },
  {
    id: 'mongolian', name: 'Mongolian', aliases: ['mongol', 'монгол'], family: 'Mongolic', region: 'Asia', tier: 4, script: 'Cyrillic',
    clue: "Cyrillic alphabet with two unique letters: Ө (barred o) and Ү (hooked u) — not found in Russian. Very long vowel harmony words. Frequent double vowels (аа, оо, ээ, үү).",
    confusedWith: ['Russian', 'Kazakh', 'Kyrgyz'],
    sentences: ["Өнөөдөр зах хэдэн цагт хаадаг вэ?", "Минийemee Улаанбаатарын ойролцоох жижиг тосгонд амьдардаг.", "Энэ долоо хоног бүхэлдээ цаг агаар нэлээд хүйтэн байлаа.", "Гурван ном худалдаж авмаар байна.", "Хүүхдүүд гадаа тоглож байна учир нь цаг агаар сайхан.", "Энд ойролцоо сайн ресторан хаанаас олох вэ?", "Тэр надад асуудлыг ойлгохгүй байгаагаа хэлсэн.", "Энэ хуучин барилгыг хоёр зуун жилийн өмнө барьсан.", "Чингис хааны талбай Улаанбаатарын төв хэсэгт оршдог.", "Бууз бол монголчуудын хамгийн дуртай хоол юм.", "Цагаан сарын баяраар бүх гэр бүл цугларч хуримтлана.", "Автобус хорин минут хоцорсон замын түгжрэлийн улмаас.", "Нүүдэлчин амьдрал монголын уламжлалын нэг хэсэг юм.", "Айраг бол адууны сүүнээс хийсэн уламжлалт ундаа.", "Говьд зуны улиралд халуун их байдаг дөчин градус хүртэл.", "Наадамд бөх барилдаан морин уралдаан сур харвааг үздэг.", "Гэрт амьдрах нь хөдөө нутагт түгээмэл хэвээр.", "Өвлийн улиралд хорин таваас доош хэм болдог.", "Хонины мах бол монголчуудын гол хоолны зүйл.", "Малчид хавар ихэвчлэн нүүдэллэдэг бэлчээр солихоор.", "Эмийн сан шуудангийн газрын урд талд өнөөдөр хаалттай.", "Өвөө залуу насандаа гурилын үйлдвэрт ажилладаг байсан.", "Энэ бол сайн санаа мөн эсэхэд итгэлгүй байна.", "Тэр өглөө галт тэрэгнд суусан.", "Эгч минь амралтаар явсан."]
  },
  {
    id: 'marathi', name: 'Marathi', aliases: ['marathi', 'मराठी'], family: 'Indo-Aryan', region: 'Asia', tier: 3, script: 'Devanagari',
    clue: "Devanagari script like Hindi. Distinguishable by unique words: आहे (is), नाही (no/not), आणि (and), मला (to me), तुम्ही (you-formal). Verb at sentence end.",
    confusedWith: ['Hindi', 'Nepali', 'Sanskrit'],
    sentences: ["आज बाजार किती वाजता बंद होतो?", "माझी आजी पुण्याजवळच्या एका छोट्या गावात राहते.", "आठवडाभर हवामान खूपच थंड होतं.", "मला तीन पुस्तकं विकत घ्यायची आहेत.", "मुलं बाहेर खेळत आहेत कारण हवामान छान आहे.", "इथे जवळपास चांगलं रेस्टॉरंट कुठे मिळेल?", "तिने मला सांगितलं की तिला समस्या समजत नाही.", "ही जुनी इमारत दोनशे वर्षांपूर्वी बांधली गेली.", "शिवाजी महाराजांचा गड सह्याद्रीच्या डोंगरांमध्ये आहे.", "पुरणपोळी आणि श्रीखंड हे आमचे आवडते पदार्थ आहेत.", "गणपती बाप्पा मोरया म्हणत सगळे मिरवणुकीत नाचतात.", "एसटी बस पूर्ण भरली होती, उभं राहून जावं लागलं.", "मुंबईच्या लोकलमध्ये रोज लाखो लोक प्रवास करतात.", "आई रविवारी मिसळ पाव बनवते सगळ्यांसाठी.", "दिवाळीला फराळ बनवणं आणि किल्ला बांधणं आमची परंपरा आहे.", "वाडा पाव खाल्ल्याशिवाय मुंबईची भेट पूर्ण होत नाही.", "पावसाळ्यात सह्याद्रीच्या डोंगरांवर फिरायला जातो.", "विजेचं बिल दरमहा वाढतच चाललंय.", "सणासुदीला सगळे नातेवाईक एकत्र जमतात.", "चहा पिता पिता गप्पा मारणं हा आमचा छंद आहे.", "औषधांचं दुकान टपालकार्यालयासमोर आज बंद आहे.", "माझे आजोबा तरुणपणी बेकरीत काम करायचे.", "मला खात्री नाही की हा चांगला विचार आहे.", "तो सकाळी ट्रेनमध्ये बसला.", "माझी बहीण सुट्टीवर गेली आहे."]
  },
  {
    id: 'wolof', name: 'Wolof', aliases: ['wolof'], family: 'Atlantic', region: 'Africa', tier: 4, script: 'Latin',
    clue: "Frequent use of doubled consonants (bb, cc, dd, gg, jj, kk, ll, pp, tt). Words often end in vowels. Common particles: la, laa, naa, dafa, dinaa.",
    confusedWith: ['Hausa', 'Swahili', 'Bambara'],
    sentences: ["Ban waxtu la marché bi tëdd tey?", "Sama maam ju jigéen dëkk na ci dëkk bu ndaw bu jëgë Thiès.", "Tey-tey ba noppi, température bi sedd na lool.", "Dama bëgg jënd ñetti téere.", "Xalé yi di nob ci biti ndax na ngi tang.", "Fan la man a gis restoraa bu baax ci sëtu biir?", "Wax na ma ne xamul li tax jafe-jafe bi.", "Kër googu mag la te ñu ko tabax ñaari téeméer at ci ginaaw.", "Dakar mooy réewu Senegaal di dëkk bu mag.", "Ceebu jën mooy lekk bi gëna rafet ci Senegaal.", "Tabaski la nëbb ak mbàkk ak njaboot.", "Car rapide bi fees na, dunu man a toog.", "Ndogou Koor, ñépp dajoo ci kër gi.", "Naan attaya moo gëna neex ci ngoon si.", "Nawet ngi nëww, tàll yi ngi ne seŋ.", "Jàmm ci jamano ji, àdduna bi dafa metti.", "Sabar bi amoon na ci week-end bi, ñépp fecc.", "Njaay yi ci marché bi jënd nañu dugub ak maalo.", "Teranga mooy cosaan bu baax bu Senegaal.", "Muus gi ngi nelaw ci kaw lal bi.", "Farmasien bi kanam poste bi tëdd na tey.", "Sama baay ju mag liggéey na ci bulanseeri bi.", "Xamuma ndax ab xalaat bu baax la.", "Joge na ci train bi ci suba.", "Sama rakk bu jigéen demm na ci vacances."]
  },
  {
    id: 'igbo', name: 'Igbo', aliases: ['igbo', 'asụsụ igbo'], family: 'Niger-Congo', region: 'Africa', tier: 4, script: 'Latin',
    clue: "Subdots on vowels: ị, ọ, ụ (like Yoruba but different set). Tone marks less common in writing. Nasal n before consonants (nk, ng, nw). Digraphs: ch, gh, gw, kw, nw, sh.",
    confusedWith: ['Yoruba', 'Hausa'],
    sentences: ["Kedu mgbe ahịa ga-emechi taa?", "Nne nne m bi n'obodo nta dị nso na Ọnịcha.", "Ihu igirigi dị ọkụ ụbọchị niile n'izu a.", "Achọrọ m ịzụ akwụkwọ atọ.", "Ụmụaka nọ n'èzí na-egwu egwu n'ihi na chi dị mma.", "Ebee ka m ga-ahụ ụlọ oriri na ọṅụṅụ dị mma n'ebe a?", "Ọ gwara m na ọ ghọtaghị nsogbu ahụ.", "E wuru ụlọ ochie a narị afọ abụọ gara aga.", "Ahịa Ọnịcha bụ otu n'ime ahịa kachasị ukwuu na Naịjirịa.", "Jọlọf raịs na fried plantain bụ nri anyị kacha amasị anyị.", "N'oge Emume Christmas, ezinụlọ niile na-ezukọ ọnụ.", "Ọkpọrọ ụgbọ ala juru eju, o nweghị ebe ịnọ ala.", "Mmiri ozuzo malitere ida, ụzọ niile jupụtara na mmiri.", "Nne m na-esi ofe nsala kwa ụbọchị Sọndee.", "N'oge ọkọchị, anyanwụ na-ekpo ọkụ nke ukwuu.", "Masquerade na-apụta n'oge emume, ndị mmadụ na-agba ọsọ.", "Ugwu ji bụ otu n'ime emume ndị Igbo kachasị mkpa.", "Okporoko na ụgba bụ nri oge ụtụtụ dị mma.", "Ọrụ ugbo bụ ọrụ kachasị mkpa n'ime obodo ndị Igbo.", "Ọkụ eletrik mechiri ọzọ, anyị ga-eji kandụl.", "Ụlọ ọgwụ dị n'ihu ụlọ ozi mechiri taa.", "Nna nna m rụrụ ọrụ n'ụlọ achịcha mgbe ọ bụ nwaokorobịa.", "Amaghị m ma ọ bụ echiche ọma.", "Ọ banyere n'ụgbọ oloko n'ụtụtụ.", "Nwanne m nwanyị gara njem."]
  },
  {
    id: 'kazakh', name: 'Kazakh', aliases: ['qazaq', 'қазақ'], family: 'Turkic', region: 'Asia', tier: 4, script: 'Cyrillic',
    clue: "Cyrillic with unique letters: Қ, Ғ, Ң, Ү, Ұ, Һ, Ә, Ө, І (9 extra letters not in Russian). Agglutinative like Turkish.",
    confusedWith: ['Russian', 'Uzbek', 'Kyrgyz'],
    sentences: ["Бүгін базар нешеде жабылады?", "Менің әжем Алматыға жақын шағын ауылда тұрады.", "Апта бойы ауа райы біршама суық болды.", "Үш кітап сатып алғым келеді.", "Балалар сыртта ойнап жүр, өйткені ауа райы жақсы.", "Осы жерден жақсы мейрамхана қайдан табуға болады?", "Ол маған мәселені түсінбейтінін айтты.", "Бұл ескі ғимарат екі жүз жыл бұрын салынған.", "Астана қаласы Қазақстанның астанасы болып табылады.", "Бешбармақ қазақтардың ең сүйікті тағамы.", "Наурыз мейрамында бүкіл отбасы жиналып наурыз көже ішеді.", "Автобус жиырма минут кешікті, тығын болды.", "Дала мен далаға шығып кішкене жылқымен серуендедік.", "Қымыз бие сүтінен жасалатын дәстүрлі сусын.", "Қыста отыз градус аяздан кейін де мектепке барамыз.", "Домбыра күйі қазақ мәдениетінің ажырамас бөлігі.", "Базарда жемістер мен көкөністер өте арзан.", "Жаңбыр жауып, көшелерді су басты.", "Жазда Балқаш көліне демалуға барамыз.", "Мал шаруашылығы ауылдық жерлерде әлі де маңызды.", "Дәріхана пошта алдында бүгін жабық.", "Атам жас кезінде нан зауытында жұмыс істеген.", "Бұл жақсы идея екеніне сенімді емеспін.", "Ол таңертең пойызға мінді.", "Әпкем демалысқа кетті."]
  },
  {
    id: 'uzbek', name: 'Uzbek', aliases: ['ozbek', "o'zbek"], family: 'Turkic', region: 'Asia', tier: 4, script: 'Latin',
    clue: "Latin script Turkic language with apostrophe-modified vowels: o' and g' (oʻ, gʻ unique to Uzbek). Also uses sh, ch. No ö or ü (unlike Turkish).",
    confusedWith: ['Turkish', 'Azerbaijani', 'Kazakh'],
    sentences: ["Bugun bozor soat nechada yopiladi?", "Buvim Samarqand yaqinidagi kichik qishloqda yashaydi.", "Havo butun hafta davomida ancha sovuq bo'ldi.", "Uchta kitob sotib olmoqchiman.", "Bolalar tashqarida o'ynayapti chunki havo yaxshi.", "Bu yaqin atrofda yaxshi restoran qayerda topsa bo'ladi?", "U menga muammoni tushunmasligini aytdi.", "Bu eski bino ikki yuz yil oldin qurilgan.", "Registon maydoni Samarqandning eng mashhur joyi.", "Palov o'zbek oshxonasining eng sevimli taomi.", "Navro'z bayramida sumalak pishiriladi va hamma birga bayram qiladi.", "Avtobus yigirma daqiqa kechikdi tirbandlik tufayli.", "Bozorda meva va sabzavotlar juda arzon va yangi.", "Onam har yakshanba kuni manti tayyorlaydi.", "Choyxonada choy ichib o'tirib suhbatlashish bizning an'anamiz.", "Yozda Chimyonga chiqib salqin havoda dam olamiz.", "Qo'shnilar yangi ko'chib kelganlarida non olib kelishdi.", "Non yopish har bir o'zbek oilasining kundalik ishi.", "Elektr energiyasi yana o'chdi, sham yoqishga to'g'ri keldi.", "Paxta terimi vaqtida hamma dalaga chiqadi.", "Dorixona pochta binosi ro'parasida bugun yopiq.", "Bobom yoshligida novvoyxonada ishlagan.", "Bu yaxshi fikr ekaniga ishonchim komil emas.", "U ertalab poyezdga o'tirdi.", "Opam ta'tilga ketdi."]
  },
  {
    id: 'tigrinya', name: 'Tigrinya', aliases: ['tigrigna'], family: 'Semitic', region: 'Africa', tier: 4, script: 'Geez',
    clue: "Same Ge'ez/Ethiopic script as Amharic (blocky characters with stems and loops). Distinguished by different word patterns and verb conjugations.",
    confusedWith: ['Amharic', 'Tigre'],
    sentences: ["ሎሚ ዕዳጋ ክንደይ ሰዓት ይዕጾ?", "ዓባየይ ኣብ ንእሽቶ ዓዲ ጥቓ ኣስመራ ትነብር።", "ኣየር ኩነታት ብምሉእ ሰሙን ዝሑል ነይሩ።", "ሰለስተ መጽሓፍቲ ክገዝእ ይደሊ።", "ቈልዑ ኣብ ግዳም ይጻወቱ ኣለው ኣየር ኩነታት ጽቡቕ ስለ ዝኾነ።", "ኣብዚ ከባቢ ጽቡቕ ቤት መግቢ ኣበይ ይርከብ?", "ንሳ ጸገም ከም ዘይተረድኣ ነጊራትኒ።", "እዚ ኣረጊት ህንጻ ቅድሚ ክልተ ሚእቲ ዓመት ተሃኒጹ።", "ኣስመራ ብኣርክቴክቸር ኢጣልያ ዝፍለጥ ከተማ እያ።", "ኢንጀራ ምስ ጽብሒ ዝውቱር ናይ ትግርኛ ምግቢ እዩ።", "ኣብ ብዓል ጥምቀት ኩሉ ሰብ ናብ ማይ ይወርድ።", "ኣውቶቡስ መሊኡ ነይሩ ኮፍ ዝበሃለሉ ቦታ ኣይነበረን።", "ቡን ምስታይ ኣብ ባህልና ኣዝዩ ኣገዳሲ እዩ።", "ኣደይ ኩሉ ግዜ ሽሮ ትሰርሕ ንምሳሕ።", "ኣብ ዋዜማ ልደት ቤተ ክርስትያን ንኸይድ።", "ማይ ቆሪጹ ስለ ዝኾነ ብባልዲ ክንስሕብ ኣለና።", "ኣብ ሓጋይ ጸሓይ ሓያል ስለ ዝኾነ ኣብ ገዛ ንጸንሕ።", "ከረን ብቕድሚት ባዛር ይፍለጥ ።", "ሕብረት ስድራ ቤት ኣብ ባህልና ኣዝዩ ኣገዳሲ እዩ።", "ናይ ሓዳር ስነ ስርዓት ንሰለስተ መዓልቲ ይቕጽል።", "ፋርማሲ ኣብ ቅድሚ ፖስጣ ሎሚ ዕጹው እዩ።", "ኣቦ ሓጎይ ኣብ ቤት ሓብሒብ ይሰርሕ ነይሩ ንእሽቶ ከሎ።", "ጽቡቕ ሓሳብ ምዃኑ ርግጸኛ ኣይኮንኩን።", "ንሱ ብጊሓ ባቡር ሰፊሩ።", "ሓፍተይ ንዕረፍቲ ከይዳ።"]
  },
  {
    id: 'esperanto', name: 'Esperanto', aliases: ['esperanto'], family: 'Constructed', region: 'Global', tier: 4, script: 'Latin',
    clue: "All nouns end in -o, adjectives in -a, adverbs in -e, verbs in -as/-is/-os (present/past/future). Circumflex diacritics: ĉ, ĝ, ĥ, ĵ, ŝ, ŭ.",
    confusedWith: ['Italian', 'Spanish', 'Portuguese'],
    sentences: ["Je kioma horo fermiĝas la bazaro hodiaŭ?", "Mia avino loĝas en malgranda vilaĝo proksime de Varsovio.", "La vetero estis sufiĉe malvarma dum la tuta semajno.", "Mi ŝatus aĉeti tri librojn, bonvolu.", "La infanoj ludas ekstere ĉar la vetero estas bela.", "Kie mi povas trovi bonan restoracion ĉi-proksime?", "Ŝi diris al mi ke ŝi ne komprenas la problemon.", "Ĉi tiu malnova konstruaĵo estis konstruita antaŭ ducent jaroj.", "Esperanto estas la plej sukcesa internacia planlingvo en la mondo.", "La Universala Kongreso okazas en malsama lando ĉiujare.", "Zamenhof kreis Esperanton por faciligi internacian komunikadon.", "La buso malfruis dudek minutojn pro trafika ŝtopiĝo.", "En la esperanta movado oni renkontas homojn el ĉiuj kontinentoj.", "Ĉiu verbo estas regula, ne ekzistas esceptoj en Esperanto.", "La akuzativo finiĝas per -n kaj montras la rektan objekton.", "Pasintan semajnon ni vizitis la lokan esperantan klubon.", "La vortaro de Esperanto estas facile lernebla por ĉiuj.", "Bonvolu sendi al mi la informojn per retpoŝto.", "La internacia vespero havis kantojn kaj dancadon ĝis noktomezo.", "Lernu-punkto-neto estas la plej populara retejo por lerni Esperanton.", "La apoteko kontraŭ la poŝtoficejo estas fermita hodiaŭ.", "Mia avo laboris en bakejo kiam li estis juna.", "Mi ne certas ĉu tio estas bona ideo.", "Li eniris la trajnon matene.", "Mia fratino foriris por ferioj."]
  },
  {
    id: 'guarani', name: 'Guarani', aliases: ["avañe'ẽ"], family: 'Tupian', region: 'South America', tier: 3, script: 'Latin',
    clue: "Nasal vowels marked with tilde: ã, ẽ, ĩ, õ, ũ, ỹ. Glottal stop (puso/ʼ) is common. Unique letter ỹ. Frequent use of apostrophes in words.",
    confusedWith: ['Portuguese', 'Spanish'],
    sentences: ["Mba'e aravo ojepe'a mba'erepy ko ára?", "Che jarýi oiko peteĩ táva'imi Asunción rovake.", "Ára ro'ysã opavave semana.", "Aheka aigotyo mbohapy aranduka.", "Mitãnguéra oñembosarái okápe ikatuhápe ára porã.", "Moõpa aikuaa peteĩ hembi'urenda porã ko'ápe.", "He'i chéve ndaikatúiha oikuaa mba'épa iñapañuãi.", "Ko óga tuicha oñemopu'ã mokõi siento ary mboyve.", "Guarani ha castellano ha'e mokõi ñe'ẽ teete Paraguáipe.", "Tereré ha'e ñane rembipiru opaite árape.", "Ñandutí ha'e peteĩ ao'apoka iporãva opavave Paraguáipe.", "Ómnibus henyhẽ heta, ndaipóri tenda oguapyha.", "Tata ypykue oñembyaty opaite ñembyatyha.", "Che sy ojapo so'o apu'a ha chipa guasu.", "Ko'ẽ pyhareve oĩ kuarahy hatã ha haku eterei.", "Arasa ha pakova iñasãi ko ára ha ára.", "Yvytu guasu ou ha omopotĩ tape.", "Mitãnguéra oho escuela pe ñandejára árape.", "Oguereko mba'asy la tape opaite tavaguasu.", "Ka'aguy ha ysyry ha'e tembiasakue.", "Botica correo rovái oĩ oñemboty ko ára.", "Che taita imbaretépe omba'apo panadería-pe.", "Ndaikuaái haguépe iporã upéva.", "Kuehe pyhareve oho tren-pe.", "Che reindy oho paseo."]
  },
  {
    id: 'quechua', name: 'Quechua', aliases: ['runasimi', 'kichwa'], family: 'Quechuan', region: 'South America', tier: 4, script: 'Latin',
    clue: "Agglutinative with long suffixed words. No b, d, g, f in native words. Frequent q (uvular, not followed by u). Ejective consonants written as p', t', ch', k', q'.",
    confusedWith: ['Aymara', 'Spanish'],
    sentences: ["Hayk'a horaspi wisq'akunqa qhatun kay p'unchaw?", "Hatun mamayka huch'uy llaqtapi Cuscumanta qayllapiqa tiyakun.", "Kay simanaqa ancha chiriwan karqa.", "Kinsa qillqasqa rantikuyta munani.", "Wawakuna hawapi pukllanku imaraykuchus p'unchaw sumaq.", "Maypicha allin mikhuna wasita tarisaq kaypi?", "Pay niwarqa mana sasachakuyta hamut'asqantachu.", "Kay machu wasi iskay pachak watañaq ruwasqa karqa.", "Machu Picchu Tawantinsuyuq aswan reqsisqa llaqtan.", "Pachamankaqa ñuqaykuq aswan munasqa mikhunayku.", "Inti Raymi hatun raymi killa huniypi.", "Carruqa hunt'asqa karqa, mana tiyakunachu karqa.", "Chakrapi llamk'ayqa runakunaq kawsaynin.", "Mamaqa lawa mikhunata wayk'un sapa killa quillapi.", "Paraqa sinchita hamushan kay killapi.", "Llama alpacawan purichikunankama sumaq.", "Takiy tusuywan raymi p'unchawkunapi.", "Quechuaqa Tawantinsuyuq simín karqa ñawpa pachakunapi.", "Urqukunapi purispa sumaq wayra samani.", "Llank'ay allpapi runakunaq kawsaynin.", "Hampiq wasi correo chimpanpi wichq'asqa kay p'unchaw.", "Hatun tataymi wayna kashaspa t'anta waspi llamk'arqa.", "Mana yachanichu allinchus chay yuyay.", "Pay tren-pi lloqsirqa tutamanta.", "Ñañayqa samarikuq rirqa."]
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
  {
    id: 'irish', name: 'Irish', aliases: ['gaeilge', 'irish gaelic'], family: 'Celtic', region: 'Europe', tier: 4, script: 'Latin',
    clue: "Séimhiú (lenition) adds h after consonants: bh, ch, dh, fh, gh, mh, ph, sh, th. Accent only on vowels (á, é, í, ó, ú). No j, k, q, w, x, y, z.",
    confusedWith: ['Welsh', 'Scots Gaelic'],
    sentences: ["Cén t-am a dhúnann an margadh inniu?", "Tá mo mhamó ina cónaí i sráidbhaile beag in aice le Gaillimh.", "Bhí an aimsir fuar go leor an tseachtain ar fad.", "Ba mhaith liom trí leabhar a cheannach, le do thoil.", "Tá na páistí ag súgradh amuigh mar go bhfuil an aimsir go breá.", "Cá háit ar féidir liom bialann mhaith a fháil anseo?", "Dúirt sí liom nach raibh sí ag tuiscint na faidhbe.", "Tógadh an seanfhoirgneamh seo dhá chéad bliain ó shin.", "Tá an Ghaeltacht ina háit speisialta do phobal na Gaeilge.", "Bhíomar ag siúl ar an gcosán cois farraige tar éis na scoile.", "Is breá liom cupán tae agus arán donn tar éis an lóin.", "Bíonn an teach tábhairne plódaithe gach oíche Aoine sa bhaile.", "Bhí ceol agus craic againn ag an gceolchoirm aréir.", "Chuaigh muid go dtí an Gaeltacht le haghaidh cúrsa samhraidh.", "Tá an lá fliuch arís, caithfidh mé mo chóta báistí a thabhairt liom.", "Imríonn siad peil Ghaelach ar an bpáirc gach Satharn.", "Tá Lá Fhéile Pádraig ar an seachtú lá déag de Mhárta.", "Bhí an bus déanach mar bhí an trácht go dona ar maidin.", "Fuair mé litir ón gcomhairle contae faoin gcáin mhaoine.", "Tá an ghrian ag dul faoi go luath anois san fhómhar.", "Tá an chógaslann os comhair an phoist dúnta inniu.", "Bhí mo sheanathair ag obair i mbácús sa bhaile mór.", "Nílim cinnte gur smaoineamh maith é sin.", "Chuaigh sé ar an traein ar maidin.", "D'imigh mo dheirfiúr ar saoire."]
  },
  {
    id: 'slovak', name: 'Slovak', aliases: ['slovencina', 'slovenčina'], family: 'Slavic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Háček diacritics like Czech (č, š, ž, ň) but uses ľ, ŕ, ĺ (soft/long consonants unique to Slovak). Dĺžeň accent (á, é, í, ó, ú, ý).",
    confusedWith: ['Czech', 'Polish', 'Slovenian'],
    sentences: ["O koľkej zatvára trh dnes?", "Moja babička žije v malej dedine neďaleko Bratislavy.", "Počasie bolo celý týždeň dosť chladné.", "Rád by som kúpil tri knihy, prosím.", "Deti sa hrajú vonku, lebo je pekné počasie.", "Kde tu niekde nájdem dobrú reštauráciu?", "Povedala mi, že nerozumie tomu problému.", "Táto stará budova bola postavená pred dvesto rokmi.", "Vysoké Tatry sú najkrajšie pohorie na Slovensku.", "Bryndzové halušky sú naše národné jedlo a chutia výborne.", "V sobotu ráno chodíme na trhovisko po čerstvé ovocie.", "Vláčik na Štrbské Pleso jazdí každú hodinu aj v zime.", "Na Vianoce varíme kapustnicu a jeme rybu so šalátom.", "Sused nám priniesol domácu slivovicu z vlastného sadu.", "Električka mešká dvadsať minút kvôli výluke na Obchodnej.", "Na chate sme si v sobotu večer opekali špekačky pri ohni.", "Cyklotrasa vedie pozdĺž Dunaja až do Komárna.", "Na Silvestra sme boli na námestí a počúvali ohňostroj.", "Pošta je otvorená len do obeda a potom má zatvorené.", "Lekáreň oproti pošte je dnes zatvorená.", "Môj dedko pracoval v pekárni na predmestí.", "Nie som si istý, či je to dobrý nápad.", "Ráno nastúpil na vlak.", "Moja sestra odišla na dovolenku.", "V lete chodíme na kúpalisko a grilovačku k Dunaju."]
  },
  {
    id: 'latvian', name: 'Latvian', aliases: ['latviesu', 'latviešu'], family: 'Baltic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Macrons on vowels (ā, ē, ī, ū) for length. Cedilla/comma below consonants: ķ, ģ, ļ, ņ. Almost all words stressed on first syllable.",
    confusedWith: ['Lithuanian', 'Estonian'],
    sentences: ["Cikos tirgus šodien aizver?", "Mana vecmāmiņa dzīvo nelielā ciematā netālu no Rīgas.", "Laiks visu nedēļu ir bijis diezgan auksts.", "Es gribētu nopirkt trīs grāmatas, lūdzu.", "Bērni spēlējas ārā, jo laiks ir jauks.", "Kur šeit tuvumā var atrast labu restorānu?", "Viņa man teica, ka nesaprot problēmu.", "Šī vecā ēka tika uzcelta pirms divsimt gadiem.", "Rīgas vecpilsēta ir iekļauta UNESCO pasaules mantojuma sarakstā.", "Jāņu naktī kurām ugunskuru un dziedām tautasdziesmas.", "Centrāltirgus paviljonos var nopirkt svaigu maizi un sieru.", "Ziemā dienas ir ļoti īsas, jau pulksten četros ir tumšs.", "Dziesmu svētki pulcē simtiem tūkstošu dziedātāju no visas Latvijas.", "Vasarā braucam uz laukiem un sēņojam mežā.", "Māmiņa katru svētdienu cep pīrāgus ar speķi un sīpoliem.", "Tramvajs brauc pa Brīvības ielu līdz pat Mežaparkam.", "Aptiekā pretī pastam šodien ir slēgts.", "Mans vectēvs jaunībā strādāja maizīniecībā pilsētas nomalē.", "Es neesmu pārliecināts, ka tā ir laba doma.", "Viņš iekāpa vilcienā šorīt agri.", "Mana māsa aizbrauca atvaļinājumā.", "Mana māsa aizbrauca atvaļinājumā.", "Vasarā mēs braucam uz jūru un peldamies Baltijas viļņos.", "Rudenī parkos lapas kļūst sarkanas un dzeltenas.", "Ziemas svētkos visi ģimenes locekļi pulcējas kopā pie galda."]
  },
  {
    id: 'lithuanian', name: 'Lithuanian', aliases: ['lietuviu', 'lietuvių'], family: 'Baltic', region: 'Europe', tier: 3, script: 'Latin',
    clue: "Ogonek diacritics: ą, ę, į, ų (hook below vowels). Also č, š, ž, ė, ū. Words often end in -as, -is, -us (masculine) or -a, -ė (feminine).",
    confusedWith: ['Latvian', 'Polish'],
    sentences: ["Kelintą valandą šiandien užsidaro turgus?", "Mano močiutė gyvena nedideliame kaimelyje netoli Kauno.", "Oras visą savaitę buvo gana šaltas.", "Norėčiau nusipirkti tris knygas, prašau.", "Vaikai žaidžia lauke, nes oras gražus.", "Kur čia netoliese galima rasti gerą restoraną?", "Ji man pasakė, kad nesupranta problemos.", "Šis senas pastatas buvo pastatytas prieš du šimtus metų.", "Vilniaus senamiestis yra vienas gražiausių Europoje.", "Joninių naktį kuriame laužą ir ieškome paparčio žiedo.", "Cepelinai su mėsa ir grietine yra mūsų nacionalinis patiekalas.", "Krepšinis Lietuvoje yra daugiau nei sportas, tai religija.", "Kalėdų išvakarėse valgome dvylika patiekalų prie bendro stalo.", "Sekmadieniais seneliai kepa šakotį ir kviečia visą šeimą.", "Autobusas vėlavo dvidešimt minučių dėl spūsčių centre.", "Vasarą važiuojame prie Kuršių marių ir renkame gintarą.", "Grybavimas rudenį yra viena mėgstamiausių lietuvių pramogų.", "Šaltibarščiai su bulvėmis yra geriausias patiekalas karštą vasaros dieną.", "Turguje parduoda šviežią duoną ir naminį sūrį kiekvieną rytą.", "Vaistinė priešais paštą šiandien uždaryta.", "Mano senelis jaunystėje dirbo kepykloje miesto pakraštyje.", "Nesu tikras, ar tai gera mintis.", "Jis ryte įlipo į traukinį.", "Mano sesuo išvyko atostogauti.", "Rugpjūtį vyksta Kauno miesto šventė su muzika ir fejerverkais."]
  },
}