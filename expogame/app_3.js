// Quiz game data and state
const quizData = {
  "questions": [
    {
      "id": 1,
      "question": "Ile średniowiecznych kodeksów znajduje się w zbiorach Biblioteki Uniwersyteckiej w Toruniu?",
      "options": ["A) 52 kodeksy", "B) 72 kodeksy", "C) 84 kodeksy"],
      "correct": 1,
      "explanation": "W zbiorach Biblioteki Uniwersyteckiej w Toruniu znajdują się 72 średniowieczne kodeksy powstałe od początków XII do początków XVI w. na obszarze Rzeszy Niemieckiej, we Włoszech, w Paryżu, Pradze, w Prusach Krzyżackich oraz w Persji.",
      "collection": "Rękopisy średniowieczne"
    },
    {
      "id": 2,
      "question": "Która kolekcja zawiera grafiki artystów wileńskich okresu międzywojennego?",
      "options": ["A) EODOPEN", "B) Grafika Wileńska 1919-1945", "C) Rękopisy średniowieczne"],
      "correct": 1,
      "explanation": "Kolekcja 'Grafika Wileńska 1919-1945' to największa i najbardziej reprezentatywna kolekcja grafiki wileńskiej okresu międzywojennego w Polsce, zawierająca 746 rycin ponad 60 artystów.",
      "collection": "Grafika Wileńska"
    },
    {
      "id": 3,
      "question": "W którym roku ukazało się pierwsze wydanie 'De revolutionibus' Mikołaja Kopernika?",
      "options": ["A) 1540", "B) 1543", "C) 1566"],
      "correct": 1,
      "explanation": "Pierwsze wydanie 'De revolutionibus orbium coelestium' Mikołaja Kopernika ukazało się w 1543 roku u norymberskiego drukarza Johannesa Petreiusa w nakładzie około 500 egzemplarzy.",
      "collection": "Kopernikana"
    },
    {
      "id": 4,
      "question": "Ile dokumentów planuje zdigitalizować projekt EODOPEN?",
      "options": ["A) 10 000 dokumentów", "B) 15 000 dokumentów", "C) 20 000 dokumentów"],
      "correct": 1,
      "explanation": "Nadrzędnym celem projektu EODOPEN jest digitalizacja i upowszechnienie 15 tysięcy niedostępnych cyfrowo zbiorów pochodzących z XX i XXI wieku.",
      "collection": "EODOPEN"
    },
    {
      "id": 5,
      "question": "Co charakteryzuje rękopis perski Dīvān Hāfiza z kolekcji BU UMK?",
      "options": ["A) Jest jedynym egzemplarzem w Polsce", "B) Zawiera 394 karty z miniaturami", "C) Został napisany w XIII wieku"],
      "correct": 1,
      "explanation": "Rękopis perski Dīvān Hāfiza to wyjątkowy XV-wieczny kodeks liczący 394 karty, bogato zdobiony miniaturami i kaligrafią. Jest jedynym takim rękopisem w polskich zbiorach.",
      "collection": "Rękopisy średniowieczne"
    },
    {
      "id": 6,
      "question": "Które muzeum wirtualne znajduje się w zbiorach cyfrowych BU UMK?",
      "options": ["A) Muzeum Historii Torunia", "B) Muzeum Informatyki", "C) Muzeum Kopernika"],
      "correct": 1,
      "explanation": "Wirtualne Muzeum Informatyki prezentuje kolekcję zabytkowych komputerów i serwerów z Wydziału Matematyki i Informatyki UMK, dokumentując rozwój technologii informatycznych.",
      "collection": "Wirtualne Muzeum Informatyki"
    },
    {
      "id": 7,
      "question": "Jakie wydarzenie dokumentuje kolekcja 'Jubileusze kopernikańskie'?",
      "options": ["A) Urodziny Kopernika", "B) Rocznice śmierci Kopernika", "C) Obchody kolejnych rocznic Kopernika"],
      "correct": 2,
      "explanation": "Kolekcja 'Jubileusze kopernikańskie' dokumentuje obchody kolejnych rocznic związanych z Mikołajem Kopernikiem, gromadząc materiały z różnych okresów historycznych.",
      "collection": "Dokumenty życia społecznego"
    },
    {
      "id": 8,
      "question": "Ilu grafików wileńskich reprezentuje kolekcja 'Grafika Wileńska 1919-1945'?",
      "options": ["A) Około 40 artystów", "B) Ponad 60 artystów", "C) Około 80 artystów"],
      "correct": 1,
      "explanation": "Kolekcja 'Grafika Wileńska 1919-1945' prezentuje twórczość ponad 60 artystów wileńskich, dokumentując bogate życie artystyczne Wilna w okresie międzywojennym.",
      "collection": "Grafika Wileńska"
    },
    {
      "id": 9,
      "question": "Z jakiego okresu pochodzą najstarsze rękopisy w kolekcji BU UMK?",
      "options": ["A) XI wieku", "B) XII wieku", "C) XIII wieku"],
      "correct": 1,
      "explanation": "Najstarsze rękopisy w kolekcji Biblioteki Uniwersyteckiej w Toruniu pochodzą z początków XII wieku, reprezentując najwcześniejsze zachowane średniowieczne kodeksy.",
      "collection": "Rękopisy średniowieczne"
    },
    {
      "id": 10,
      "question": "Co oznacza skrót EODOPEN?",
      "options": ["A) European Open Digital Archives", "B) Eastern Online Document Project", "C) Elektroniczne Otwarte Dziedzictwo"],
      "correct": 2,
      "explanation": "EODOPEN to projekt digitalizacji zbiorów specjalnych wschodniego pogranicza dawnej Rzeczypospolitej, mający na celu udostępnienie cyfrowego dziedzictwa kulturowego.",
      "collection": "EODOPEN"
    }
  ],
  "profiles": [
    {
      "name": "Ekspert Rękopisów Średniowiecznych",
      "description": "Znasz tajemnice starożytnych kodeksów i potrafisz odczytać historię zapisaną na pergaminie."
    },
    {
      "name": "Znawca Grafiki Wileńskiej",
      "description": "Doskonale orientujesz się w sztuce wileńskiej okresu międzywojennego."
    },
    {
      "name": "Badacz Kopernikany",
      "description": "Jesteś ekspertem od spuścizny Mikołaja Kopernika i jego rewolucyjnych odkryć."
    },
    {
      "name": "Specjalista od Digitalizacji",
      "description": "Rozumiesz znaczenie cyfrowego dziedzictwa i nowoczesnych technologii."
    },
    {
      "name": "Kustosz Zbiorów Muzealnych",
      "description": "Potrafisz docenić wartość historycznych eksponatów i ich znaczenie kulturowe."
    }
  ],
  "collections": {
    "Rękopisy średniowieczne": "Ekspert Rękopisów Średniowiecznych",
    "Grafika Wileńska": "Znawca Grafiki Wileńskiej",
    "EODOPEN": "Specjalista od Digitalizacji", 
    "Kopernikana": "Badacz Kopernikany",
    "Dokumenty życia społecznego": "Badacz Kopernikany",
    "Wirtualne Muzeum Informatyki": "Kustosz Zbiorów Muzealnych"
  }
};

// Game state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let collectionCounts = {};

// Get random questions from the pool
function getRandomQuestions(count) {
    const shuffled = [...quizData.questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Show specific screen
function showScreen(screenId) {
    console.log('Showing screen:', screenId);
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        return true;
    }
    return false;
}

// Start the quiz
function startQuiz() {
    console.log('Starting quiz...');
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    collectionCounts = {};
    
    // Select random questions
    currentQuestions = getRandomQuestions(5);
    
    // Show quiz screen and first question
    showScreen('quiz-screen');
    showQuestion();
}

// Display current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    if (!question) return;
    
    // Update progress
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const progress = (currentQuestionIndex / currentQuestions.length) * 100;
        progressFill.style.width = progress + '%';
    }
    
    // Update counter
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    if (currentQuestionEl) currentQuestionEl.textContent = currentQuestionIndex + 1;
    if (totalQuestionsEl) totalQuestionsEl.textContent = currentQuestions.length;
    
    // Update question text
    const questionTextEl = document.getElementById('question-text');
    if (questionTextEl) questionTextEl.textContent = question.question;
    
    // Create answer options
    const answersContainer = document.getElementById('answers-container');
    if (answersContainer) {
        answersContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-option';
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index));
            answersContainer.appendChild(button);
        });
    }
    
    // Hide explanation
    const explanationScreen = document.getElementById('explanation-screen');
    if (explanationScreen) {
        explanationScreen.classList.add('hidden');
    }
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Update score
    if (isCorrect) score++;
    
    // Count collection
    const collection = question.collection;
    collectionCounts[collection] = (collectionCounts[collection] || 0) + 1;
    
    // Show feedback on buttons
    const answerButtons = document.querySelectorAll('.answer-option');
    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correct) {
            button.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    // Show explanation
    showExplanation(isCorrect, question.explanation);
}

// Show explanation
function showExplanation(isCorrect, explanationText) {
    const explanationScreen = document.getElementById('explanation-screen');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const explanationContent = document.getElementById('explanation-content');
    const nextButton = document.getElementById('next-button');
    
    if (feedbackIcon) {
        feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    }
    if (feedbackTitle) {
        feedbackTitle.textContent = isCorrect ? 'Brawo! Prawidłowa odpowiedź!' : 'Nieprawidłowa odpowiedź';
        feedbackTitle.style.color = isCorrect ? 'var(--color-success)' : 'var(--color-error)';
    }
    if (explanationContent) {
        explanationContent.textContent = explanationText;
    }
    if (nextButton) {
        nextButton.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Zobacz wyniki' : 'Następne pytanie';
    }
    if (explanationScreen) {
        explanationScreen.classList.remove('hidden');
    }
}

// Move to next question or show results
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    showScreen('results-screen');
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    
    const scoreTextEl = document.getElementById('score-text');
    const percentageTextEl = document.getElementById('percentage-text');
    
    if (scoreTextEl) scoreTextEl.textContent = score;
    if (percentageTextEl) percentageTextEl.textContent = percentage;
    
    // Determine profile
    let maxCount = 0;
    let bestCollection = '';
    
    for (const [collection, count] of Object.entries(collectionCounts)) {
        if (count > maxCount) {
            maxCount = count;
            bestCollection = collection;
        }
    }
    
    let profileName = quizData.collections[bestCollection];
    if (!profileName) {
        profileName = quizData.profiles[Math.floor(Math.random() * quizData.profiles.length)].name;
    }
    
    const assignedCollectionEl = document.getElementById('assigned-collection');
    if (assignedCollectionEl) {
        assignedCollectionEl.textContent = profileName;
    }
}

// Restart quiz
function restartQuiz() {
    startQuiz();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Show start screen
    showScreen('start-screen');
    
    // Add event listeners
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }
    
    const nextBtn = document.getElementById('next-button');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }
    
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }
});