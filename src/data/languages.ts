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
    clue: "Vowel macrons (ā, ē, ī, ō, ū) for long vowels. Small function words: te, ngā, e, i, ki, ko, he, a. Only 15 consonant letters used.",
    confusedWith: ['Hawaiian', 'Samoan'],
    sentences: ["Ka kati te mākete ā te aha karaka i tēnei rā?", "Kei te noho tōku kuia i tētahi kāinga iti i te taha o Rotorua.", "He makariri te rangi mō te wiki katoa.", "E hiahia ana ahau ki te hoko i ētahi pukapuka e toru.", "Kei te tākaro ngā tamariki i waho nā te mea he pai te rangi.", "Kei hea tētahi wharekai pai i tēnei takiwā?", "I kī mai ia ki ahau kāore ia i te mārama ki te raruraru.", "I hangaia tēnei whare tawhito e rua rau tau ki muri.", "Ko te reo Māori tētahi o ngā reo ōkawa o Aotearoa.", "I haere mātou ki te hui ā-iwi i te marae i te Rāhoroi.", "Kei te whakaako ngā kaiako i te reo Māori ki ngā ākonga.", "Ko te kapa haka tētahi āhuatanga motuhake o te ahurea Māori.", "He nui ngā tāngata i tae mai ki te tangihanga.", "I te ata ka hīkoi mātou ki te moana ki te hī ika.", "Ko te hāngi te kai tino pai mō ngā hui nunui.", "I Matariki ka huihui te whānau ki te whakanui i te tau hou.", "Ka haere mātou ki te ngahere ki te kohikohi kai māra.", "I te ahiahi ka noho mātou ki te whare tīpuna ki te kōrero.", "He waiata ātaahua tā rātou i waiatatia i te pō nei.", "Ko te manaakitanga tētahi tikanga nui i roto i te ao Māori.", "Kei te kati te whare rongoā i te taha o te tari mēra.", "I mahi tōku koroua i te toa i te tāone.", "Kāore au i te tino mōhio mēnā he whakaaro pai tēnā.", "I eke ia ki te tereina i tēnei ata.", "Kua haere tōku tuahine ki te hararei."]
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