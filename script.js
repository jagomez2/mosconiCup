// Translations
const translations = {
    es: {
        team_europe: "TEAM EUROPE",
        team_usa: "TEAM USA",
        days: "DÍAS",
        hours: "HRS",
        minutes: "MIN",
        seconds: "SEG",
        december: "DICIEMBRE",
        view_history: "VER HISTORIAL",
        view_odds: "VER APUESTAS",
        latest_news: "ÚLTIMAS NOTICIAS",
        history_title: "HISTORIAL RECIENTE",
        betting_title: "CUOTAS DE APUESTAS",
        bookmaker: "CASA DE APUESTAS",
        betting_disclaimer: "* Cuotas sujetas a cambios. Juega con responsabilidad.",
        captain: "Capitán",
        player: "Jugador",
        bio_shaw: "El 'Eagle Eye' es múltiple MVP y uno de los jugadores más apasionados. Conocido por su estilo rápido y tiros increíbles.",
        bio_filler: "El 'Killer' es dos veces MVP (2022, 2023) y ex Campeón Mundial. Su intensidad y precisión son formidables.",
        bio_alcaide: "Veterano del equipo, Alcaide aporta calma y experiencia. Su conocimiento táctico ha asegurado muchos puntos vitales.",
        bio_neuhausen: "Debutante en 2025, Neuhausen es uno de los talentos jóvenes más brillantes. Ex Campeón Mundial Junior listo para el gran escenario.",
        bio_labutis: "Otro debutante para 2025, Labutis ha subido en el ranking con consistencia. El primer lituano en representar a Europa.",
        bio_woodward: "Dos veces MVP y el corazón del Team USA. El liderazgo de Woodward lo convierte en la elección natural para capitán.",
        bio_svb: "El 'South Dakota Kid' hace su aparición récord número 19. Una verdadera leyenda del deporte y ex Campeón Mundial.",
        bio_gorst: "Ex Campeón Mundial representando a USA. Considerado uno de los jugadores mecánicamente más perfectos del mundo.",
        bio_styer: "Conocido por su técnica única y enfoque analítico. Styer ha sido clave en equipos recientes de USA.",
        bio_thorpe: "Aporta gran energía y juego agresivo. Thorpe prospera en la atmósfera de la Mosconi Cup."
    },
    en: {
        team_europe: "TEAM EUROPE",
        team_usa: "TEAM USA",
        days: "DAYS",
        hours: "HRS",
        minutes: "MIN",
        seconds: "SEC",
        december: "DECEMBER",
        view_history: "VIEW HISTORY",
        view_odds: "VIEW ODDS",
        latest_news: "LATEST NEWS",
        history_title: "RECENT HISTORY",
        betting_title: "BETTING ODDS",
        bookmaker: "BOOKMAKER",
        betting_disclaimer: "* Odds subject to change. Gamble responsibly.",
        captain: "Captain",
        player: "Player",
        bio_shaw: "The 'Eagle Eye' is a multiple-time MVP and one of the most passionate players. Known for his rapid-fire style and incredible shot-making.",
        bio_filler: "The 'Killer' is a two-time MVP (2022, 2023) and former World Champion. His intensity and precision are formidable.",
        bio_alcaide: "A team veteran, Alcaide brings calmness and experience. His tactical knowledge has secured many vital points.",
        bio_neuhausen: "Making his debut in 2025, Neuhausen is one of the brightest young talents. Former World Junior Champion ready for the big stage.",
        bio_labutis: "Another 2025 debutant, Labutis has climbed the rankings with consistency. The first Lithuanian to represent Team Europe.",
        bio_woodward: "Two-time MVP and the heart of Team USA. Woodward's leadership makes him the natural choice for captain.",
        bio_svb: "The 'South Dakota Kid' makes a record-breaking 19th appearance. A true legend of the sport and former World Champion.",
        bio_gorst: "Former World Champion representing USA. Widely considered one of the most mechanically perfect players in the world.",
        bio_styer: "Known for his unique technique and analytical approach. Styer has been a key part of recent USA teams.",
        bio_thorpe: "Brings high energy and aggressive play. Thorpe thrives in the Mosconi Cup atmosphere."
    }
};

let currentLang = 'es';

// Player Data with Real Images
const teamEurope = [
    { name: "Jayson Shaw", country: "Scotland", role: "captain", bioKey: "bio_shaw", image: "assets/images/jayson_shaw.png" },
    { name: "Joshua Filler", country: "Germany", role: "player", bioKey: "bio_filler", image: "assets/images/joshua_filler.png" },
    { name: "David Alcaide", country: "Spain", role: "player", bioKey: "bio_alcaide", image: "assets/images/david_alcaide.webp" },
    { name: "Moritz Neuhausen", country: "Germany", role: "player", bioKey: "bio_neuhausen", image: "assets/images/moritz_neuhausen.png" },
    { name: "Pijus Labutis", country: "Lithuania", role: "player", bioKey: "bio_labutis", image: "assets/images/pijus_labutis.png" }
];

const teamUSA = [
    { name: "Skyler Woodward", country: "USA", role: "captain", bioKey: "bio_woodward", image: "assets/images/skyler_woodward.png" },
    { name: "Shane Van Boening", country: "USA", role: "player", bioKey: "bio_svb", image: "assets/images/shane_van_boening.webp" },
    { name: "Fedor Gorst", country: "USA", role: "player", bioKey: "bio_gorst", image: "assets/images/fedor_gorst.webp" },
    { name: "Tyler Styer", country: "USA", role: "player", bioKey: "bio_styer", image: "assets/images/tyler_styer.png" },
    { name: "Billy Thorpe", country: "USA", role: "player", bioKey: "bio_thorpe", image: "assets/images/billy_thorpe.webp" }
];

// Historical Data with Detailed Matches
const historyData = [
    {
        year: 2024,
        winner: "TEAM EUROPE",
        score: "11 - 6",
        venue: "Orlando, USA",
        mvp: "Jayson Shaw",
        matches: [
            { type: "Team Match", teamEUR: "Team Europe", teamUSA: "Team USA", result: "5-1", winner: "EUR" },
            { type: "Doubles", teamEUR: "D. Alcaide / J. Shaw", teamUSA: "S. Woodward / B. Thorpe", result: "5-2", winner: "EUR" },
            { type: "Singles", teamEUR: "M. Krause", teamUSA: "T. Styer", result: "3-5", winner: "USA" },
            { type: "Doubles", teamEUR: "F. Sanchez Ruiz / E. Kaçi", teamUSA: "F. Gorst / S. Van Boening", result: "5-2", winner: "EUR" },
            { type: "Singles", teamEUR: "E. Kaçi", teamUSA: "S. Woodward", result: "2-5", winner: "USA" },
            { type: "Team Match", teamEUR: "Team Europe", teamUSA: "Team USA", result: "2-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "F. Gorst", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "M. Krause / J. Shaw", teamUSA: "T. Styer / B. Thorpe", result: "4-5", winner: "USA" },
            { type: "Singles", teamEUR: "F. Sanchez Ruiz", teamUSA: "S. Van Boening", result: "5-1", winner: "EUR" },
            { type: "Doubles", teamEUR: "D. Alcaide / E. Kaçi", teamUSA: "S. Woodward / F. Gorst", result: "5-4", winner: "EUR" },
            { type: "Team Match", teamEUR: "Team Europe", teamUSA: "Team USA", result: "3-5", winner: "USA" },
            { type: "Doubles", teamEUR: "F. Sanchez Ruiz / M. Krause", teamUSA: "S. Van Boening / S. Woodward", result: "5-1", winner: "EUR" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "B. Thorpe", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "E. Kaçi / J. Shaw", teamUSA: "F. Gorst / T. Styer", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Woodward", result: "5-0", winner: "EUR" },
            { type: "Singles", teamEUR: "M. Krause", teamUSA: "F. Gorst", result: "4-5", winner: "USA" },
            { type: "Singles", teamEUR: "F. Sanchez Ruiz", teamUSA: "S. Woodward", result: "5-4", winner: "EUR" }
        ]
    },
    {
        year: 2023,
        winner: "TEAM EUROPE",
        score: "11 - 3",
        venue: "London, UK",
        mvp: "Joshua Filler",
        matches: [
            { type: "Doubles", teamEUR: "J. Shaw / A. Ouschan", teamUSA: "S. Van Boening / T. Styer", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Woodward", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "D. Alcaide / F. Sanchez Ruiz", teamUSA: "F. Gorst / S. Wolford", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "F. Sanchez Ruiz", teamUSA: "F. Gorst", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "F. Gorst", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "A. Ouschan / J. Filler", teamUSA: "T. Styer / S. Woodward", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "S. Woodward", result: "5-4", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Woodward", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "F. Sanchez Ruiz", teamUSA: "J. Shaw", result: "3-5", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Van Boening", result: "2-5", winner: "USA" },
            { type: "Doubles", teamEUR: "J. Filler / A. Ouschan", teamUSA: "S. Woodward / T. Styer", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "S. Wolford", result: "5-4", winner: "EUR" }
        ]
    },
    {
        year: 2022,
        winner: "TEAM EUROPE",
        score: "11 - 7",
        venue: "Las Vegas, USA",
        mvp: "Joshua Filler",
        matches: [
            { type: "Team Match", teamEUR: "Team Europe", teamUSA: "Team USA", result: "3-5", winner: "USA" },
            { type: "Doubles", teamEUR: "D. Alcaide / F. Sanchez Ruiz", teamUSA: "O. Dominguez / E. Strickland", result: "5-1", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Woodward", result: "4-5", winner: "USA" },
            { type: "Doubles", teamEUR: "J. Shaw / A. Ouschan", teamUSA: "S. Van Boening / T. Styer", result: "4-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "E. Strickland", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "A. Ouschan / J. Filler", teamUSA: "T. Styer / O. Dominguez", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "F. Sanchez Ruiz", teamUSA: "S. Woodward", result: "2-5", winner: "USA" },
            { type: "Doubles", teamEUR: "D. Alcaide / J. Shaw", teamUSA: "E. Strickland / S. Van Boening", result: "4-5", winner: "USA" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "T. Styer", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Filler / F. Sanchez Ruiz", teamUSA: "S. Woodward / E. Strickland", result: "5-2", winner: "EUR" },
            { type: "Singles", teamEUR: "A. Ouschan", teamUSA: "E. Strickland", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Filler / J. Shaw", teamUSA: "S. Van Boening / S. Woodward", result: "0-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "O. Dominguez", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "D. Alcaide / F. Sanchez Ruiz", teamUSA: "S. Woodward / S. Van Boening", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "S. Woodward", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "T. Styer", result: "5-3", winner: "EUR" }
        ]
    },
    {
        year: 2021,
        winner: "TEAM EUROPE",
        score: "11 - 6",
        venue: "London, UK",
        mvp: "Jayson Shaw",
        matches: [
            { type: "Doubles", teamEUR: "E. Kaçi / A. Ouschan", teamUSA: "T. Styer / C. Reinhold", result: "5-2", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Shaw / D. Alcaide", teamUSA: "S. Woodward / J. Jones", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Van Boening", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "A. Ouschan / J. Shaw", teamUSA: "S. Woodward / S. Van Boening", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "T. Styer", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "E. Kaçi / D. Alcaide", teamUSA: "C. Reinhold / J. Jones", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "C. Reinhold", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Filler / J. Shaw", teamUSA: "S. Woodward / T. Styer", result: "5-2", winner: "EUR" },
            { type: "Singles", teamEUR: "E. Kaçi", teamUSA: "S. Van Boening", result: "5-4", winner: "EUR" },
            { type: "Doubles", teamEUR: "D. Alcaide / A. Ouschan", teamUSA: "T. Styer / S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "J. Jones", result: "5-4", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Filler / J. Shaw", teamUSA: "S. Van Boening / S. Woodward", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Woodward", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Van Boening", result: "5-3", winner: "EUR" }
        ]
    },
    {
        year: 2020,
        winner: "TEAM EUROPE",
        score: "11 - 3",
        venue: "Coventry, UK",
        mvp: "Jayson Shaw",
        matches: [
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "C. Robinson", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "N. Feijen / J. Filler", teamUSA: "S. Woodward / T. Styer", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "B. Thorpe", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Shaw / D. Alcaide", teamUSA: "C. Robinson / S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "S. Woodward", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Van Boening", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Filler / N. Feijen", teamUSA: "B. Thorpe / T. Styer", result: "5-1", winner: "EUR" },
            { type: "Singles", teamEUR: "N. Feijen", teamUSA: "C. Robinson", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Shaw / D. Alcaide", teamUSA: "S. Woodward / S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Van Boening", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "D. Alcaide", teamUSA: "B. Thorpe", result: "5-4", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "T. Styer", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "N. Feijen", teamUSA: "S. Woodward", result: "5-4", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "C. Robinson", result: "3-5", winner: "USA" }
        ]
    },
    {
        year: 2019,
        winner: "TEAM USA",
        score: "13 - 11",
        venue: "Las Vegas, USA",
        mvp: "Skyler Woodward",
        matches: [
            { type: "Doubles", teamEUR: "N. Feijen / E. Kaçi", teamUSA: "S. Van Boening / T. Styer", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "B. Thorpe", result: "5-2", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Shaw / A. Kazakis", teamUSA: "J. Bergman / S. Woodward", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "S. Van Boening", result: "2-5", winner: "USA" },
            { type: "Doubles", teamEUR: "J. Filler / J. Shaw", teamUSA: "S. Van Boening / J. Bergman", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "E. Kaçi", teamUSA: "T. Styer", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "N. Feijen / A. Kazakis", teamUSA: "S. Woodward / B. Thorpe", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "A. Kazakis", teamUSA: "S. Van Boening", result: "2-5", winner: "USA" },
            { type: "Doubles", teamEUR: "E. Kaçi / J. Filler", teamUSA: "S. Woodward / S. Van Boening", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "N. Feijen", teamUSA: "S. Woodward", result: "4-5", winner: "USA" },
            { type: "Doubles", teamEUR: "A. Kazakis / E. Kaçi", teamUSA: "T. Styer / S. Woodward", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Van Boening", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "J. Shaw / N. Feijen", teamUSA: "J. Bergman / B. Thorpe", result: "5-3", winner: "EUR" },
            { type: "Singles", teamEUR: "J. Shaw", teamUSA: "B. Thorpe", result: "5-3", winner: "EUR" },
            { type: "Doubles", teamEUR: "E. Kaçi / A. Kazakis", teamUSA: "T. Styer / S. Van Boening", result: "3-5", winner: "USA" },
            { type: "Singles", teamEUR: "J. Filler", teamUSA: "S. Woodward", result: "3-5", winner: "USA" }
        ]
    },
    {
        year: 2019,
        winner: "TEAM USA",
        score: "13 - 11",
        venue: "Las Vegas, USA",
        mvp: "Skyler Woodward",
        matches: [
            { match: "Overall", result: "Team USA wins 13-11" },
            { match: "MVP", result: "Skyler Woodward (USA)" }
        ]
    },
    {
        year: 2018,
        winner: "TEAM USA",
        score: "11 - 9",
        venue: "London, UK",
        mvp: "Skyler Woodward",
        matches: [
            { match: "Overall", result: "Team USA wins 11-9" },
            { match: "MVP", result: "Skyler Woodward (USA)" }
        ]
    },
    {
        year: 2017,
        winner: "TEAM EUROPE",
        score: "11 - 9",
        venue: "Las Vegas, USA",
        mvp: "Joshua Filler",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-9" },
            { match: "MVP", result: "Joshua Filler (EUR)" }
        ]
    },
    {
        year: 2016,
        winner: "TEAM EUROPE",
        score: "11 - 5",
        venue: "Las Vegas, USA",
        mvp: "Albin Ouschan",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-5" },
            { match: "MVP", result: "Albin Ouschan (EUR)" }
        ]
    },
    {
        year: 2015,
        winner: "TEAM EUROPE",
        score: "11 - 7",
        venue: "Las Vegas, USA",
        mvp: "Niels Feijen",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-7" },
            { match: "MVP", result: "Niels Feijen (EUR)" }
        ]
    },
    {
        year: 2014,
        winner: "TEAM EUROPE",
        score: "11 - 7",
        venue: "London, UK",
        mvp: "Niels Feijen",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-7" },
            { match: "MVP", result: "Niels Feijen (EUR)" }
        ]
    },
    {
        year: 2013,
        winner: "TEAM EUROPE",
        score: "11 - 7",
        venue: "Las Vegas, USA",
        mvp: "Niels Feijen",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-7" },
            { match: "MVP", result: "Niels Feijen (EUR)" }
        ]
    },
    {
        year: 2012,
        winner: "TEAM EUROPE",
        score: "11 - 7",
        venue: "Las Vegas, USA",
        mvp: "Chris Melling",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-7" },
            { match: "MVP", result: "Chris Melling (EUR)" }
        ]
    },
    {
        year: 2011,
        winner: "TEAM EUROPE",
        score: "11 - 8",
        venue: "Las Vegas, USA",
        mvp: "Niels Feijen",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-8" },
            { match: "MVP", result: "Niels Feijen (EUR)" }
        ]
    },
    {
        year: 2010,
        winner: "TEAM EUROPE",
        score: "11 - 9",
        venue: "Las Vegas, USA",
        mvp: "Darren Appleton",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-9" },
            { match: "MVP", result: "Darren Appleton (EUR)" }
        ]
    },
    {
        year: 2009,
        winner: "TEAM USA",
        score: "11 - 7",
        venue: "Las Vegas, USA",
        mvp: "Dennis Hatch",
        matches: [
            { match: "Overall", result: "Team USA wins 11-7" },
            { match: "MVP", result: "Dennis Hatch (USA)" }
        ]
    },
    {
        year: 2008,
        winner: "TEAM EUROPE",
        score: "11 - 7",
        venue: "Portomaso, Malta",
        mvp: "Mika Immonen",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-7" },
            { match: "MVP", result: "Mika Immonen (EUR)" }
        ]
    },
    {
        year: 2007,
        winner: "TEAM EUROPE",
        score: "11 - 6",
        venue: "Las Vegas, USA",
        mvp: "Tony Drago",
        matches: [
            { match: "Overall", result: "Team Europe wins 11-6" },
            { match: "MVP", result: "Tony Drago (EUR)" }
        ]
    },
    {
        year: 2006,
        winner: "TEAM USA",
        score: "12 - 7",
        venue: "Rotterdam, Netherlands",
        mvp: "Corey Deuel",
        matches: [
            { match: "Overall", result: "Team USA wins 12-7" },
            { match: "MVP", result: "Corey Deuel (USA)" }
        ]
    },
    {
        year: 2005,
        winner: "TEAM USA",
        score: "11 - 7",
        venue: "Las Vegas, USA",
        mvp: "Earl Strickland",
        matches: [
            { match: "Overall", result: "Team USA wins 11-7" },
            { match: "MVP", result: "Earl Strickland (USA)" }
        ]
    },
    {
        year: 2004,
        winner: "TEAM EUROPE",
        score: "12 - 10",
        venue: "Rotterdam, Netherlands",
        mvp: "Rodney Morris",
        matches: [
            { match: "Overall", result: "Team Europe wins 12-10" },
            { match: "MVP", result: "Rodney Morris (USA)" }
        ]
    },
    {
        year: 2003,
        winner: "TEAM EUROPE",
        score: "12 - 7",
        venue: "Las Vegas, USA",
        mvp: "Mika Immonen",
        matches: [
            { match: "Overall", result: "Team Europe wins 12-7" },
            { match: "MVP", result: "Mika Immonen (EUR)" }
        ]
    },
    {
        year: 2002,
        winner: "TEAM USA",
        score: "12 - 11",
        venue: "Rotterdam, Netherlands",
        mvp: "Earl Strickland",
        matches: [
            { match: "Overall", result: "Team USA wins 12-11" },
            { match: "MVP", result: "Earl Strickland (USA)" }
        ]
    },
    {
        year: 2001,
        winner: "TEAM USA",
        score: "12 - 11",
        venue: "Las Vegas, USA",
        mvp: "Mika Immonen",
        matches: [
            { match: "Overall", result: "Team USA wins 12-11" },
            { match: "MVP", result: "Mika Immonen (EUR)" }
        ]
    },
    {
        year: 2000,
        winner: "TEAM EUROPE",
        score: "12 - 8",
        venue: "Rotterdam, Netherlands",
        mvp: "Ralf Souquet",
        matches: [
            { match: "Overall", result: "Team Europe wins 12-8" },
            { match: "MVP", result: "Ralf Souquet (EUR)" }
        ]
    },
    {
        year: 1999,
        winner: "TEAM EUROPE",
        score: "12 - 8",
        venue: "Las Vegas, USA",
        mvp: "Oliver Ortmann",
        matches: [
            { match: "Overall", result: "Team Europe wins 12-8" },
            { match: "MVP", result: "Oliver Ortmann (EUR)" }
        ]
    },
    {
        year: 1998,
        winner: "TEAM USA",
        score: "12 - 7",
        venue: "Rotterdam, Netherlands",
        mvp: "Johnny Archer",
        matches: [
            { match: "Overall", result: "Team USA wins 12-7" },
            { match: "MVP", result: "Johnny Archer (USA)" }
        ]
    },
    {
        year: 1997,
        winner: "TEAM USA",
        score: "12 - 7",
        venue: "Las Vegas, USA",
        mvp: "Johnny Archer",
        matches: [
            { match: "Overall", result: "Team USA wins 12-7" },
            { match: "MVP", result: "Johnny Archer (USA)" }
        ]
    },
    {
        year: 1996,
        winner: "TEAM USA",
        score: "12 - 9",
        venue: "York, UK",
        mvp: "Earl Strickland",
        matches: [
            { match: "Overall", result: "Team USA wins 12-9" },
            { match: "MVP", result: "Earl Strickland (USA)" }
        ]
    },
    {
        year: 1995,
        winner: "TEAM EUROPE",
        score: "12 - 11",
        venue: "Las Vegas, USA",
        mvp: "Oliver Ortmann",
        matches: [
            { match: "Overall", result: "Team Europe wins 12-11" },
            { match: "MVP", result: "Oliver Ortmann (EUR)" }
        ]
    },
    {
        year: 1994,
        winner: "TEAM USA",
        score: "13 - 12",
        venue: "Romford, UK",
        mvp: "Mike Sigel",
        matches: [
            { match: "Overall", result: "Team USA wins 13-12" },
            { match: "MVP", result: "Mike Sigel (USA)" }
        ]
    }
];

// News Data (Fetched dynamically)
let newsData = [];

// Betting Data (Fetched dynamically)
let bettingData = [];

let currentNewsIndex = 0;

// Fetch Data
async function fetchData() {
    try {
        // Fetch News
        const newsResponse = await fetch('data/news.json');
        if (newsResponse.ok) {
            newsData = await newsResponse.json();
            updateNews();
        }

        // Fetch Betting Odds
        const bettingResponse = await fetch('data/betting.json');
        if (bettingResponse.ok) {
            bettingData = await bettingResponse.json();
            renderBetting();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Functions
function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Re-render dynamic content
    renderPlayers(teamEurope, 'europe-players', '003399');
    renderPlayers(teamUSA, 'usa-players', 'B22234');
    updateNews();
}

// Country flag mapping
const countryFlags = {
    'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'Germany': '🇩🇪',
    'Spain': '🇪🇸',
    'Lithuania': '🇱🇹',
    'USA': '🇺🇸'
};

function renderPlayers(players, containerId, teamColor) {
    const container = document.getElementById(containerId);
    container.innerHTML = players.map(player => `
        <div class="player-card">
            <img src="${player.image}" 
                 alt="${player.name}" 
                 class="player-img"
                 onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=${teamColor}&color=fff&size=200&font-size=0.33'">
            <div class="player-info">
                <h3>
                    ${player.name}
                    ${player.role === 'captain' ? `<span class="captain-badge">C</span>` : ''}
                </h3>
                <p style="color: #aaa; font-size: 0.8rem; margin-bottom: 5px;">
                    <span style="font-size: 1.2em; margin-right: 5px;">${countryFlags[player.country] || '🏳️'}</span>
                    ${player.country}
                </p>
                <p>${translations[currentLang][player.bioKey]}</p>
            </div>
        </div>
    `).join('');
}

function renderHistory() {
    const container = document.getElementById('history-list');
    container.innerHTML = historyData.map((item, index) => `
        <div class="history-item" onclick="toggleHistory(${index})">
            <div class="history-summary">
                <span class="year">${item.year}</span>
                <span class="winner">${item.winner}</span>
                <span class="score">${item.score}</span>
                <span class="venue">${item.venue}</span>
            </div>
            <div class="history-details" id="history-details-${index}">
                ${item.matches[0].type ? `
                    <table class="matches-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Team Europe</th>
                                <th>Team USA</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${item.matches.map(m => `
                                <tr class="${m.winner === 'EUR' ? 'eur-win' : m.winner === 'USA' ? 'usa-win' : ''}">
                                    <td class="match-type" data-label="Type">${m.type}</td>
                                    <td class="team-eur" data-label="Team Europe">${m.teamEUR}</td>
                                    <td class="team-usa" data-label="Team USA">${m.teamUSA}</td>
                                    <td class="match-result" data-label="Result">${m.result}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                ` : `
                    ${item.matches.map(m => `
                        <div class="match-row">
                            <span>${m.match}</span>
                            <span class="match-winner">${m.result}</span>
                        </div>
                    `).join('')}
                `}
            </div>
        </div>
    `).join('');
}

function renderBetting() {
    const container = document.getElementById('betting-list');
    if (bettingData.length === 0) return;

    container.innerHTML = bettingData.map(item => `
        <tr>
            <td class="bookmaker-logo">${item.bookmaker}</td>
            <td><span class="odds-value">${item.odds ? item.odds.europe : item.europe}</span></td>
            <td><span class="odds-value">${item.odds ? item.odds.usa : item.usa}</span></td>
        </tr>
    `).join('');
}

function toggleHistory(index) {
    const items = document.querySelectorAll('.history-item');
    items[index].classList.toggle('active');
}

function updateNews() {
    const container = document.getElementById('news-ticker');
    if (newsData.length === 0) return;

    const news = newsData[currentNewsIndex];
    // Handle both old format (text_es/en) and new format (title)
    let text = news.title;
    if (news.text_es && currentLang === 'es') text = news.text_es;
    if (news.text_en && currentLang === 'en') text = news.text_en;

    container.innerHTML = `
        <div class="news-item">
            <div class="news-date">${news.date}</div>
            <div class="news-text">
                <a href="${news.link || news.url}" target="_blank" rel="noopener noreferrer">${text}</a>
            </div>
        </div>
    `;
}

// Countdown
function updateCountdown() {
    const eventDate = new Date("December 3, 2025 00:00:00 UTC").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.querySelector(".countdown-container").innerHTML = "<h2>EVENT STARTED</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers(teamEurope, 'europe-players', '003399');
    renderPlayers(teamUSA, 'usa-players', 'B22234');
    renderHistory();

    // Fetch initial data
    fetchData();

    // Poll for updates every minute (optional, to keep frontend in sync if backend updates)
    setInterval(fetchData, 60000);

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Language Toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => updateLanguage(e.target.getAttribute('data-lang')));
    });

    // News Controls
    document.getElementById('prev-news').addEventListener('click', () => {
        currentNewsIndex = (currentNewsIndex - 1 + newsData.length) % newsData.length;
        updateNews();
    });
    document.getElementById('next-news').addEventListener('click', () => {
        currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
        updateNews();
    });

    // News Drawer Toggle
    document.getElementById('news-toggle').addEventListener('click', () => {
        const drawer = document.getElementById('news-drawer');
        drawer.classList.toggle('collapsed');
    });

    // Modals
    const historyModal = document.getElementById("history-modal");
    const bettingModal = document.getElementById("betting-modal");

    document.getElementById("view-history").onclick = () => historyModal.style.display = "flex";
    document.getElementById("close-history").onclick = () => historyModal.style.display = "none";

    document.getElementById("view-odds").onclick = () => bettingModal.style.display = "flex";
    document.getElementById("close-betting").onclick = () => bettingModal.style.display = "none";

    window.onclick = (e) => {
        if (e.target == historyModal) historyModal.style.display = "none";
        if (e.target == bettingModal) bettingModal.style.display = "none";
    };
});
