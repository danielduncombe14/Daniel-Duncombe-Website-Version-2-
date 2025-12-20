// Country data with flags (using flag emoji CDN) - All countries in the world
const countries = [
    // Africa
    { country: "Algeria", capital: "Algiers", code: "dz", continent: "Africa", region: "North Africa", tier: "medium" },
    { country: "Angola", capital: "Luanda", code: "ao", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Benin", capital: "Porto-Novo", code: "bj", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Botswana", capital: "Gaborone", code: "bw", continent: "Africa", region: "Southern Africa", tier: "hard" },
    { country: "Burkina Faso", capital: "Ouagadougou", code: "bf", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Burundi", capital: "Gitega", code: "bi", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Cameroon", capital: "Yaoundé", code: "cm", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Cape Verde", capital: "Praia", code: "cv", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Central African Republic", capital: "Bangui", code: "cf", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Chad", capital: "N'Djamena", code: "td", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Comoros", capital: "Moroni", code: "km", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Congo", capital: "Brazzaville", code: "cg", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Democratic Republic of the Congo", capital: "Kinshasa", code: "cd", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Djibouti", capital: "Djibouti", code: "dj", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Egypt", capital: "Cairo", code: "eg", continent: "Africa", region: "North Africa", tier: "easy" },
    { country: "Equatorial Guinea", capital: "Malabo", code: "gq", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Eritrea", capital: "Asmara", code: "er", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Eswatini", capital: "Mbabane", code: "sz", continent: "Africa", region: "Southern Africa", tier: "hard" },
    { country: "Ethiopia", capital: "Addis Ababa", code: "et", continent: "Africa", region: "East Africa", tier: "medium" },
    { country: "Gabon", capital: "Libreville", code: "ga", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Gambia", capital: "Banjul", code: "gm", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Ghana", capital: "Accra", code: "gh", continent: "Africa", region: "West Africa", tier: "medium" },
    { country: "Guinea", capital: "Conakry", code: "gn", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Guinea-Bissau", capital: "Bissau", code: "gw", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Ivory Coast", capital: "Yamoussoukro", code: "ci", continent: "Africa", region: "West Africa", tier: "medium" },
    { country: "Kenya", capital: "Nairobi", code: "ke", continent: "Africa", region: "East Africa", tier: "medium" },
    { country: "Lesotho", capital: "Maseru", code: "ls", continent: "Africa", region: "Southern Africa", tier: "hard" },
    { country: "Liberia", capital: "Monrovia", code: "lr", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Libya", capital: "Tripoli", code: "ly", continent: "Africa", region: "North Africa", tier: "medium" },
    { country: "Madagascar", capital: "Antananarivo", code: "mg", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Malawi", capital: "Lilongwe", code: "mw", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Mali", capital: "Bamako", code: "ml", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Mauritania", capital: "Nouakchott", code: "mr", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Mauritius", capital: "Port Louis", code: "mu", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Morocco", capital: "Rabat", code: "ma", continent: "Africa", region: "North Africa", tier: "medium" },
    { country: "Mozambique", capital: "Maputo", code: "mz", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Namibia", capital: "Windhoek", code: "na", continent: "Africa", region: "Southern Africa", tier: "hard" },
    { country: "Niger", capital: "Niamey", code: "ne", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Nigeria", capital: "Abuja", code: "ng", continent: "Africa", region: "West Africa", tier: "easy" },
    { country: "Rwanda", capital: "Kigali", code: "rw", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "São Tomé and Príncipe", capital: "São Tomé", code: "st", continent: "Africa", region: "Central Africa", tier: "hard" },
    { country: "Senegal", capital: "Dakar", code: "sn", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Seychelles", capital: "Victoria", code: "sc", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Sierra Leone", capital: "Freetown", code: "sl", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Somalia", capital: "Mogadishu", code: "so", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "South Africa", capital: "Pretoria", code: "za", continent: "Africa", region: "Southern Africa", tier: "easy" },
    { country: "South Sudan", capital: "Juba", code: "ss", continent: "Africa", region: "East Africa", tier: "hard" },
    { country: "Sudan", capital: "Khartoum", code: "sd", continent: "Africa", region: "North Africa", tier: "medium" },
    { country: "Tanzania", capital: "Dodoma", code: "tz", continent: "Africa", region: "East Africa", tier: "medium" },
    { country: "Togo", capital: "Lomé", code: "tg", continent: "Africa", region: "West Africa", tier: "hard" },
    { country: "Tunisia", capital: "Tunis", code: "tn", continent: "Africa", region: "North Africa", tier: "medium" },
    { country: "Uganda", capital: "Kampala", code: "ug", continent: "Africa", region: "East Africa", tier: "medium" },
    { country: "Zambia", capital: "Lusaka", code: "zm", continent: "Africa", region: "Southern Africa", tier: "hard" },
    { country: "Zimbabwe", capital: "Harare", code: "zw", continent: "Africa", region: "Southern Africa", tier: "hard" },
    
    // Asia
    { country: "Afghanistan", capital: "Kabul", code: "af", continent: "Asia", region: "South Asia", tier: "medium" },
    { country: "Armenia", capital: "Yerevan", code: "am", continent: "Asia", region: "West Asia", tier: "hard" },
    { country: "Azerbaijan", capital: "Baku", code: "az", continent: "Asia", region: "West Asia", tier: "hard" },
    { country: "Bahrain", capital: "Manama", code: "bh", continent: "Asia", region: "West Asia", tier: "hard" },
    { country: "Bangladesh", capital: "Dhaka", code: "bd", continent: "Asia", region: "South Asia", tier: "medium" },
    { country: "Bhutan", capital: "Thimphu", code: "bt", continent: "Asia", region: "South Asia", tier: "hard" },
    { country: "Brunei", capital: "Bandar Seri Begawan", code: "bn", continent: "Asia", region: "Southeast Asia", tier: "hard" },
    { country: "Cambodia", capital: "Phnom Penh", code: "kh", continent: "Asia", region: "Southeast Asia", tier: "medium" },
    { country: "China", capital: "Beijing", code: "cn", continent: "Asia", region: "East Asia", tier: "easy" },
    { country: "Cyprus", capital: "Nicosia", code: "cy", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Georgia", capital: "Tbilisi", code: "ge", continent: "Asia", region: "West Asia", tier: "hard" },
    { country: "India", capital: "New Delhi", code: "in", continent: "Asia", region: "South Asia", tier: "easy" },
    { country: "Indonesia", capital: "Jakarta", code: "id", continent: "Asia", region: "Southeast Asia", tier: "easy" },
    { country: "Iran", capital: "Tehran", code: "ir", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Iraq", capital: "Baghdad", code: "iq", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Israel", capital: "Jerusalem", code: "il", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Japan", capital: "Tokyo", code: "jp", continent: "Asia", region: "East Asia", tier: "easy" },
    { country: "Jordan", capital: "Amman", code: "jo", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Kazakhstan", capital: "Astana", code: "kz", continent: "Asia", region: "Central Asia", tier: "hard" },
    { country: "Kuwait", capital: "Kuwait City", code: "kw", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Kyrgyzstan", capital: "Bishkek", code: "kg", continent: "Asia", region: "Central Asia", tier: "hard" },
    { country: "Laos", capital: "Vientiane", code: "la", continent: "Asia", region: "Southeast Asia", tier: "medium" },
    { country: "Lebanon", capital: "Beirut", code: "lb", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Malaysia", capital: "Kuala Lumpur", code: "my", continent: "Asia", region: "Southeast Asia", tier: "medium" },
    { country: "Maldives", capital: "Malé", code: "mv", continent: "Asia", region: "South Asia", tier: "hard" },
    { country: "Mongolia", capital: "Ulaanbaatar", code: "mn", continent: "Asia", region: "East Asia", tier: "hard" },
    { country: "Myanmar", capital: "Naypyidaw", code: "mm", continent: "Asia", region: "Southeast Asia", tier: "medium" },
    { country: "Nepal", capital: "Kathmandu", code: "np", continent: "Asia", region: "South Asia", tier: "medium" },
    { country: "North Korea", capital: "Pyongyang", code: "kp", continent: "Asia", region: "East Asia", tier: "medium" },
    { country: "Oman", capital: "Muscat", code: "om", continent: "Asia", region: "West Asia", tier: "hard" },
    { country: "Pakistan", capital: "Islamabad", code: "pk", continent: "Asia", region: "South Asia", tier: "medium" },
    { country: "Palestine", capital: "Ramallah", code: "ps", continent: "Asia", region: "West Asia", tier: "hard" },
    { country: "Philippines", capital: "Manila", code: "ph", continent: "Asia", region: "Southeast Asia", tier: "medium" },
    { country: "Qatar", capital: "Doha", code: "qa", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Saudi Arabia", capital: "Riyadh", code: "sa", continent: "Asia", region: "West Asia", tier: "easy" },
    { country: "Singapore", capital: "Singapore", code: "sg", continent: "Asia", region: "Southeast Asia", tier: "easy" },
    { country: "South Korea", capital: "Seoul", code: "kr", continent: "Asia", region: "East Asia", tier: "easy" },
    { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", code: "lk", continent: "Asia", region: "South Asia", tier: "medium" },
    { country: "Syria", capital: "Damascus", code: "sy", continent: "Asia", region: "West Asia", tier: "medium" },
    { country: "Tajikistan", capital: "Dushanbe", code: "tj", continent: "Asia", region: "Central Asia", tier: "hard" },
    { country: "Thailand", capital: "Bangkok", code: "th", continent: "Asia", region: "Southeast Asia", tier: "easy" },
    { country: "Timor-Leste", capital: "Dili", code: "tl", continent: "Asia", region: "Southeast Asia", tier: "hard" },
    { country: "Turkey", capital: "Ankara", code: "tr", continent: "Asia", region: "West Asia", tier: "easy" },
    { country: "Turkmenistan", capital: "Ashgabat", code: "tm", continent: "Asia", region: "Central Asia", tier: "hard" },
    { country: "United Arab Emirates", capital: "Abu Dhabi", code: "ae", continent: "Asia", region: "West Asia", tier: "easy" },
    { country: "Uzbekistan", capital: "Tashkent", code: "uz", continent: "Asia", region: "Central Asia", tier: "hard" },
    { country: "Vietnam", capital: "Hanoi", code: "vn", continent: "Asia", region: "Southeast Asia", tier: "medium" },
    { country: "Yemen", capital: "Sana'a", code: "ye", continent: "Asia", region: "West Asia", tier: "hard" },
    
    // Europe
    { country: "Albania", capital: "Tirana", code: "al", continent: "Europe", region: "Southern Europe", tier: "medium" },
    { country: "Andorra", capital: "Andorra la Vella", code: "ad", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Austria", capital: "Vienna", code: "at", continent: "Europe", region: "Central Europe", tier: "easy" },
    { country: "Belarus", capital: "Minsk", code: "by", continent: "Europe", region: "Eastern Europe", tier: "medium" },
    { country: "Belgium", capital: "Brussels", code: "be", continent: "Europe", region: "Western Europe", tier: "medium" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo", code: "ba", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Bulgaria", capital: "Sofia", code: "bg", continent: "Europe", region: "Eastern Europe", tier: "medium" },
    { country: "Croatia", capital: "Zagreb", code: "hr", continent: "Europe", region: "Southern Europe", tier: "medium" },
    { country: "Czech Republic", capital: "Prague", code: "cz", continent: "Europe", region: "Central Europe", tier: "medium" },
    { country: "Denmark", capital: "Copenhagen", code: "dk", continent: "Europe", region: "Northern Europe", tier: "medium" },
    { country: "Estonia", capital: "Tallinn", code: "ee", continent: "Europe", region: "Northern Europe", tier: "hard" },
    { country: "Finland", capital: "Helsinki", code: "fi", continent: "Europe", region: "Northern Europe", tier: "medium" },
    { country: "France", capital: "Paris", code: "fr", continent: "Europe", region: "Western Europe", tier: "easy" },
    { country: "Germany", capital: "Berlin", code: "de", continent: "Europe", region: "Central Europe", tier: "easy" },
    { country: "Greece", capital: "Athens", code: "gr", continent: "Europe", region: "Southern Europe", tier: "easy" },
    { country: "Hungary", capital: "Budapest", code: "hu", continent: "Europe", region: "Central Europe", tier: "medium" },
    { country: "Iceland", capital: "Reykjavik", code: "is", continent: "Europe", region: "Northern Europe", tier: "medium" },
    { country: "Ireland", capital: "Dublin", code: "ie", continent: "Europe", region: "Western Europe", tier: "medium" },
    { country: "Italy", capital: "Rome", code: "it", continent: "Europe", region: "Southern Europe", tier: "easy" },
    { country: "Kosovo", capital: "Pristina", code: "xk", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Latvia", capital: "Riga", code: "lv", continent: "Europe", region: "Northern Europe", tier: "hard" },
    { country: "Liechtenstein", capital: "Vaduz", code: "li", continent: "Europe", region: "Central Europe", tier: "hard" },
    { country: "Lithuania", capital: "Vilnius", code: "lt", continent: "Europe", region: "Northern Europe", tier: "hard" },
    { country: "Luxembourg", capital: "Luxembourg", code: "lu", continent: "Europe", region: "Western Europe", tier: "hard" },
    { country: "Malta", capital: "Valletta", code: "mt", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Moldova", capital: "Chișinău", code: "md", continent: "Europe", region: "Eastern Europe", tier: "hard" },
    { country: "Monaco", capital: "Monaco", code: "mc", continent: "Europe", region: "Western Europe", tier: "hard" },
    { country: "Montenegro", capital: "Podgorica", code: "me", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Netherlands", capital: "Amsterdam", code: "nl", continent: "Europe", region: "Western Europe", tier: "easy" },
    { country: "North Macedonia", capital: "Skopje", code: "mk", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Norway", capital: "Oslo", code: "no", continent: "Europe", region: "Northern Europe", tier: "medium" },
    { country: "Poland", capital: "Warsaw", code: "pl", continent: "Europe", region: "Central Europe", tier: "medium" },
    { country: "Portugal", capital: "Lisbon", code: "pt", continent: "Europe", region: "Southern Europe", tier: "easy" },
    { country: "Romania", capital: "Bucharest", code: "ro", continent: "Europe", region: "Eastern Europe", tier: "medium" },
    { country: "Russia", capital: "Moscow", code: "ru", continent: "Europe", region: "Eastern Europe", tier: "easy" },
    { country: "San Marino", capital: "San Marino", code: "sm", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Serbia", capital: "Belgrade", code: "rs", continent: "Europe", region: "Southern Europe", tier: "medium" },
    { country: "Slovakia", capital: "Bratislava", code: "sk", continent: "Europe", region: "Central Europe", tier: "hard" },
    { country: "Slovenia", capital: "Ljubljana", code: "si", continent: "Europe", region: "Southern Europe", tier: "hard" },
    { country: "Spain", capital: "Madrid", code: "es", continent: "Europe", region: "Southern Europe", tier: "easy" },
    { country: "Sweden", capital: "Stockholm", code: "se", continent: "Europe", region: "Northern Europe", tier: "easy" },
    { country: "Switzerland", capital: "Bern", code: "ch", continent: "Europe", region: "Central Europe", tier: "easy" },
    { country: "Ukraine", capital: "Kyiv", code: "ua", continent: "Europe", region: "Eastern Europe", tier: "medium" },
    { country: "United Kingdom", capital: "London", code: "gb", continent: "Europe", region: "Western Europe", tier: "easy" },
    { country: "Vatican City", capital: "Vatican City", code: "va", continent: "Europe", region: "Southern Europe", tier: "hard" },
    
    // North America
    { country: "Antigua and Barbuda", capital: "St. John's", code: "ag", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Bahamas", capital: "Nassau", code: "bs", continent: "North America", region: "Caribbean", tier: "medium" },
    { country: "Barbados", capital: "Bridgetown", code: "bb", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Belize", capital: "Belmopan", code: "bz", continent: "North America", region: "Central America", tier: "hard" },
    { country: "Canada", capital: "Ottawa", code: "ca", continent: "North America", region: "Northern America", tier: "easy" },
    { country: "Costa Rica", capital: "San José", code: "cr", continent: "North America", region: "Central America", tier: "medium" },
    { country: "Cuba", capital: "Havana", code: "cu", continent: "North America", region: "Caribbean", tier: "medium" },
    { country: "Dominica", capital: "Roseau", code: "dm", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Dominican Republic", capital: "Santo Domingo", code: "do", continent: "North America", region: "Caribbean", tier: "medium" },
    { country: "El Salvador", capital: "San Salvador", code: "sv", continent: "North America", region: "Central America", tier: "hard" },
    { country: "Grenada", capital: "St. George's", code: "gd", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Guatemala", capital: "Guatemala City", code: "gt", continent: "North America", region: "Central America", tier: "medium" },
    { country: "Haiti", capital: "Port-au-Prince", code: "ht", continent: "North America", region: "Caribbean", tier: "medium" },
    { country: "Honduras", capital: "Tegucigalpa", code: "hn", continent: "North America", region: "Central America", tier: "hard" },
    { country: "Jamaica", capital: "Kingston", code: "jm", continent: "North America", region: "Caribbean", tier: "medium" },
    { country: "Mexico", capital: "Mexico City", code: "mx", continent: "North America", region: "Central America", tier: "easy" },
    { country: "Nicaragua", capital: "Managua", code: "ni", continent: "North America", region: "Central America", tier: "hard" },
    { country: "Panama", capital: "Panama City", code: "pa", continent: "North America", region: "Central America", tier: "medium" },
    { country: "Saint Kitts and Nevis", capital: "Basseterre", code: "kn", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Saint Lucia", capital: "Castries", code: "lc", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Saint Vincent and the Grenadines", capital: "Kingstown", code: "vc", continent: "North America", region: "Caribbean", tier: "hard" },
    { country: "Trinidad and Tobago", capital: "Port of Spain", code: "tt", continent: "North America", region: "Caribbean", tier: "medium" },
    { country: "United States", capital: "Washington D.C.", code: "us", continent: "North America", region: "Northern America", tier: "easy" },
    
    // South America
    { country: "Argentina", capital: "Buenos Aires", code: "ar", continent: "South America", region: "South America", tier: "easy" },
    { country: "Bolivia", capital: "Sucre", code: "bo", continent: "South America", region: "South America", tier: "medium" },
    { country: "Brazil", capital: "Brasília", code: "br", continent: "South America", region: "South America", tier: "easy" },
    { country: "Chile", capital: "Santiago", code: "cl", continent: "South America", region: "South America", tier: "medium" },
    { country: "Colombia", capital: "Bogotá", code: "co", continent: "South America", region: "South America", tier: "medium" },
    { country: "Ecuador", capital: "Quito", code: "ec", continent: "South America", region: "South America", tier: "medium" },
    { country: "Guyana", capital: "Georgetown", code: "gy", continent: "South America", region: "South America", tier: "hard" },
    { country: "Paraguay", capital: "Asunción", code: "py", continent: "South America", region: "South America", tier: "hard" },
    { country: "Peru", capital: "Lima", code: "pe", continent: "South America", region: "South America", tier: "medium" },
    { country: "Suriname", capital: "Paramaribo", code: "sr", continent: "South America", region: "South America", tier: "hard" },
    { country: "Uruguay", capital: "Montevideo", code: "uy", continent: "South America", region: "South America", tier: "hard" },
    { country: "Venezuela", capital: "Caracas", code: "ve", continent: "South America", region: "South America", tier: "medium" },
    
    // Oceania
    { country: "Australia", capital: "Canberra", code: "au", continent: "Oceania", region: "Oceania", tier: "easy" },
    { country: "Fiji", capital: "Suva", code: "fj", continent: "Oceania", region: "Oceania", tier: "medium" },
    { country: "Kiribati", capital: "Tarawa", code: "ki", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Marshall Islands", capital: "Majuro", code: "mh", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Micronesia", capital: "Palikir", code: "fm", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Nauru", capital: "Yaren", code: "nr", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "New Zealand", capital: "Wellington", code: "nz", continent: "Oceania", region: "Oceania", tier: "easy" },
    { country: "Palau", capital: "Ngerulmud", code: "pw", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Papua New Guinea", capital: "Port Moresby", code: "pg", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Samoa", capital: "Apia", code: "ws", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Solomon Islands", capital: "Honiara", code: "sb", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Tonga", capital: "Nuku'alofa", code: "to", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Tuvalu", capital: "Funafuti", code: "tv", continent: "Oceania", region: "Oceania", tier: "hard" },
    { country: "Vanuatu", capital: "Port Vila", code: "vu", continent: "Oceania", region: "Oceania", tier: "hard" }
];

// Game state
let currentQuestion = 0;
let score = 0;
let streak = 0;
let totalQuestions = 10;
let quizQuestions = [];
let currentAnswer = "";
let questionType = ""; // "guessCapital" or "guessCountry"
let difficulty = "easy"; // "easy", "medium", "hard"
let timer = null;
let timeLeft = 0;

// Performance: Build country indices once at initialization
const countryIndices = {
    byTier: {
        easy: countries.filter(c => c.tier === 'easy'),
        medium: countries.filter(c => c.tier === 'easy' || c.tier === 'medium'),
        hard: countries
    },
    byContinent: {},
    byRegion: {}
};

// Populate continent/region indices for fast lookup
countries.forEach(c => {
    if (!countryIndices.byContinent[c.continent]) {
        countryIndices.byContinent[c.continent] = [];
    }
    countryIndices.byContinent[c.continent].push(c);
    
    if (!countryIndices.byRegion[c.region]) {
        countryIndices.byRegion[c.region] = [];
    }
    countryIndices.byRegion[c.region].push(c);
});

// DOM elements
const flagImg = document.getElementById('flag');
const questionText = document.getElementById('question-text');
const clueText = document.getElementById('clue-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const streakDisplay = document.getElementById('streak');
const streakContainer = document.getElementById('streak-container');
const questionNumber = document.getElementById('question-number');
const totalQuestionsDisplay = document.getElementById('total-questions');
const gameContainer = document.getElementById('game-container');
const resultsContainer = document.getElementById('results-container');
const restartBtn = document.getElementById('restart-btn');
const progressFill = document.getElementById('progress-fill');
const quizSection = document.querySelector('.quiz-section');
const fuelGauge = document.getElementById('fuel-gauge');
const fuelFill = document.getElementById('fuel-fill');
const hintBtn = document.getElementById('hint-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

// Cache DOM elements for results screen (performance)
const domCache = {
    finalScore: document.getElementById('final-score'),
    finalTotal: document.getElementById('final-total'),
    percentage: document.getElementById('percentage')
};

// Performance: Fisher-Yates shuffle (O(n) instead of sort's O(n log n))
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Performance: Preload next flag image
function preloadNextFlag() {
    if (currentQuestion + 1 < totalQuestions) {
        const nextCode = quizQuestions[currentQuestion + 1].code;
        const img = new Image();
        img.src = `https://flagcdn.com/w320/${nextCode}.png`;
    }
}

// Initialize game
function initGame() {
    currentQuestion = 0;
    score = 0;
    streak = 0;
    quizQuestions = generateQuestions();
    scoreDisplay.textContent = score;
    streakDisplay.textContent = streak;
    questionNumber.textContent = 1;
    totalQuestionsDisplay.textContent = totalQuestions;
    gameContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    
    // Show streak counter for all difficulties
    streakContainer.classList.remove('hidden');
    
    loadQuestion();
}

// Event delegation for option buttons (prevents memory leaks)
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn') && !e.target.disabled) {
        selectAnswer(e.target.dataset.answer, e.target);
    }
});

// Difficulty selection
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        difficultyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Set difficulty
        difficulty = btn.dataset.difficulty;
        
        // Restart game with new difficulty
        initGame();
    });
});

// Generate random questions
function generateQuestions() {
    // Use pre-filtered indices instead of filtering on each call
    let filteredCountries = countryIndices.byTier.hard; // Default to all countries
    
    if (difficulty === 'easy') {
        filteredCountries = countryIndices.byTier.easy;
    } else if (difficulty === 'medium') {
        filteredCountries = countryIndices.byTier.medium;
    }
    
    const shuffled = shuffleArray(filteredCountries);
    const selected = shuffled.slice(0, totalQuestions);
    
    return selected.map(country => {
        // For easy and medium: randomly choose question type
        // For hard: always guess country (flag only)
        let type;
        if (difficulty === 'hard') {
            type = 'guessCountry';
        } else {
            type = Math.random() < 0.5 ? 'guessCapital' : 'guessCountry';
        }
        
        return {
            ...country,
            type: type
        };
    });
}

// Load current question
function loadQuestion() {
    if (currentQuestion >= totalQuestions) {
        showResults();
        return;
    }

    const question = quizQuestions[currentQuestion];
    questionType = question.type;
    
    // Clear timer if exists
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    
    // Update progress bar
    const progress = ((currentQuestion) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update flag using flagcdn.com
    flagImg.src = `https://flagcdn.com/w320/${question.code}.png`;
    flagImg.alt = `${question.country} flag`;
    
    // Configure based on difficulty
    if (difficulty === 'easy') {
        // Easy: Show both flag and capital, guess country
        clueText.style.display = 'block';
        questionText.style.display = 'flex';
        clueText.textContent = 'Capital City';
        questionText.textContent = question.capital;
        currentAnswer = question.country;
        hintBtn.classList.add('hidden');
        fuelGauge.classList.add('hidden');
        questionType = 'guessCountry'; // Force country guessing for easy mode with both clues
        generateOptions(question.country, 'country', question.continent);
    } else if (difficulty === 'medium') {
        // Medium: Show flag, hide info unless hint is used
        fuelGauge.classList.remove('hidden');
        hintBtn.classList.remove('hidden');
        hintBtn.classList.remove('used');
        hintBtn.textContent = '💡 Show Hint';
        
        // Show clue text but hide question text initially
        clueText.style.display = 'block';
        questionText.style.display = 'none';
        
        if (questionType === 'guessCapital') {
            clueText.textContent = 'IDENTIFY THE CAPITAL';
            currentAnswer = question.capital;
            generateOptions(question.capital, 'capital', question.region);
        } else {
            clueText.textContent = 'IDENTIFY THE COUNTRY';
            currentAnswer = question.country;
            generateOptions(question.country, 'country', question.region);
        }
        
        // Start timer - fuel gauge
        startTimer(45); // 45 seconds for medium
    } else if (difficulty === 'hard') {
        // Hard: Flag only, no capital shown
        clueText.style.display = 'block';
        questionText.style.display = 'flex';
        clueText.textContent = 'Identify the Country';
        questionText.textContent = '';
        currentAnswer = question.country;
        hintBtn.classList.add('hidden');
        fuelGauge.classList.remove('hidden');
        generateOptions(question.country, 'country', question.continent);
        
        // Start timer - 15 seconds for hard
        startTimer(15);
    }
    
    questionNumber.textContent = currentQuestion + 1;
    nextBtn.classList.add('hidden');
    
    // Preload next flag for smooth transitions
    preloadNextFlag();
}

// Start timer
function startTimer(seconds) {
    // Reset fuel gauge first
    fuelFill.style.transition = 'none';
    fuelFill.style.width = '100%';
    fuelFill.classList.remove('warning');
    
    // Force reflow to apply the reset
    void fuelFill.offsetWidth;
    
    // Then start the countdown animation
    timeLeft = seconds;
    fuelFill.style.transition = `width ${seconds}s linear`;
    
    setTimeout(() => {
        fuelFill.style.width = '0%';
    }, 50);
    
    timer = setInterval(() => {
        timeLeft--;
        
        // Warning when < 5 seconds
        if (timeLeft <= 5 && timeLeft > 0) {
            fuelFill.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            handleTimeout();
        }
    }, 1000);
}

// Handle timeout
function handleTimeout() {
    // Disable all option buttons
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === currentAnswer) {
            btn.classList.add('correct');
        }
    });
    
    // Show Next Question button
    nextBtn.classList.remove('hidden');
    
    // Reset streak for all difficulties
    streak = 0;
    requestAnimationFrame(() => {
        streakDisplay.textContent = streak;
    });
}

// Hint button functionality
hintBtn.addEventListener('click', () => {
    if (difficulty === 'medium' && !hintBtn.classList.contains('used')) {
        const question = quizQuestions[currentQuestion];
        
        // Show clue text and question text
        clueText.style.display = 'block';
        questionText.style.display = 'flex';
        
        if (questionType === 'guessCountry') {
            // Reveal the capital
            questionText.textContent = `Capital: ${question.capital}`;
            clueText.textContent = 'IDENTIFY THE COUNTRY';
        } else if (questionType === 'guessCapital') {
            // Reveal the country
            questionText.textContent = question.country;
            clueText.textContent = 'CAPITAL CITY';
        }
        
        // Hide the hint button
        hintBtn.classList.add('hidden');
        hintBtn.classList.add('used');
    }
});

// Generate answer options
function generateOptions(correctAnswer, type, region) {
    const options = new Set([correctAnswer]); // Use Set for O(1) lookups
    
    // Use pre-indexed data for fast filtering
    let pool = [];
    
    if (difficulty === 'easy') {
        // Easy: Options from different continents
        pool = countries.filter(c => {
            const answer = type === 'capital' ? c.capital : c.country;
            return answer !== correctAnswer;
        });
    } else if (difficulty === 'medium') {
        // Medium: Options from same region (use index)
        const currentCountry = quizQuestions[currentQuestion];
        pool = countryIndices.byRegion[region] ? 
            countryIndices.byRegion[region].filter(c => {
                const answer = type === 'capital' ? c.capital : c.country;
                return answer !== correctAnswer;
            }) : [];
        
        // Fallback to same continent if not enough regional options
        if (pool.length < 3) {
            pool = countryIndices.byContinent[currentCountry.continent].filter(c => {
                const answer = type === 'capital' ? c.capital : c.country;
                return answer !== correctAnswer;
            });
        }
    } else if (difficulty === 'hard') {
        // Hard: Options from same continent (use index)
        const currentCountry = quizQuestions[currentQuestion];
        pool = countryIndices.byContinent[currentCountry.continent].filter(c => {
            const answer = type === 'capital' ? c.capital : c.country;
            return answer !== correctAnswer;
        });
    }
    
    // Add 3 random wrong answers using shuffled pool
    const shuffledPool = shuffleArray(pool);
    for (let i = 0; i < shuffledPool.length && options.size < 4; i++) {
        const wrongAnswer = type === 'capital' ? shuffledPool[i].capital : shuffledPool[i].country;
        options.add(wrongAnswer);
    }
    
    // If still not enough options, add from any country
    if (options.size < 4) {
        const allPool = shuffleArray(countries);
        for (let i = 0; i < allPool.length && options.size < 4; i++) {
            const wrongAnswer = type === 'capital' ? allPool[i].capital : allPool[i].country;
            options.add(wrongAnswer);
        }
    }
    
    // Convert Set to array and shuffle
    const optionsArray = shuffleArray(Array.from(options));
    
    // Create option buttons
    optionsContainer.innerHTML = '';
    optionsArray.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.answer = option; // Store answer in data attribute
        optionsContainer.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(selectedAnswer, button) {
    // Stop timer
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    
    // Disable all option buttons
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === currentAnswer) {
            btn.classList.add('correct');
        }
    });
    
    // Check if answer is correct
    if (selectedAnswer === currentAnswer) {
        button.classList.add('correct');
        score++;
        
        // Batch DOM updates in requestAnimationFrame
        requestAnimationFrame(() => {
            scoreDisplay.textContent = score;
            
            // Update streak for all difficulties
            streak++;
            streakDisplay.textContent = streak;
        });
    } else {
        button.classList.add('incorrect');
        
        // Reset streak for all difficulties
        streak = 0;
        requestAnimationFrame(() => {
            streakDisplay.textContent = streak;
        });
    }
    
    nextBtn.classList.remove('hidden');
}

// Next question
nextBtn.addEventListener('click', () => {
    // Add slide out animation
    quizSection.classList.add('slide-out');
    
    setTimeout(() => {
        currentQuestion++;
        quizSection.classList.remove('slide-out');
        loadQuestion();
    }, 300);
});

// Show results
function showResults() {
    gameContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Complete progress bar
    progressFill.style.width = '100%';
    
    // Use cached DOM references
    domCache.finalScore.textContent = score;
    domCache.finalTotal.textContent = totalQuestions;
    domCache.percentage.textContent = Math.round((score / totalQuestions) * 100);
}

// Restart game
restartBtn.addEventListener('click', initGame);

// Start the game when page loads
initGame();
