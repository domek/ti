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
      "question": "Co można znaleźć w Wirtualnym Muzeum Informatyki UMK?",
      "options": ["A) Tylko książki o informatyce", "B) Kolekcję komputerów i serwerów z Wydziału MatInf", "C) Średniowieczne rękopisy"],
      "correct": 1,
      "explanation": "Wirtualne Muzeum Informatyki UMK prezentuje kolekcję komputerów, serwerów i technologii biurowych zgromadzoną na Wydziale Matematyki i Informatyki, w tym Amigę 500, AlphaServer ES40 czy pamięć ferrytową.",
      "collection": "Informatyka"
    },
    {
      "id": 6,
      "question": "Jak nazywa się perski rękopis z kolekcji średniowiecznej BU UMK?",
      "options": ["A) Kronika Pruska", "B) Dīvān Hāfiza", "C) Modlitewnik niderlandzki"],
      "correct": 1,
      "explanation": "Dīvān Hāfiza to perski rękopis zawierający mistyczne liryki jednego z najsłynniejszych perskich poetów, który znajduje się wśród 14 zdigitalizowanych rękopisów średniowiecznych BU UMK.",
      "collection": "Rękopisy średniowieczne"
    },
    {
      "id": 7,
      "question": "Kto był twórcą kolekcji grafiki wileńskiej w Bibliotece Uniwersyteckiej w Toruniu?",
      "options": ["A) Bronisław Jamontt", "B) Jan Kotłowski", "C) Jerzy Hoppen"],
      "correct": 1,
      "explanation": "Jan Kotłowski - historyk sztuki, muzeolog i bibliotekarz, wieloletni kierownik Gabinetu Sztuki - jest głównym twórcą kolekcji grafiki wileńskiej w BU UMK.",
      "collection": "Grafika Wileńska"
    },
    {
      "id": 8,
      "question": "Które uniwersytety były związane z powstaniem kolekcji grafiki wileńskiej w Toruniu?",
      "options": ["A) UW i UJ", "B) Uniwersytet Stefana Batorego w Wilnie i UMK", "C) UWr i UAM"],
      "correct": 1,
      "explanation": "Kolekcja grafiki wileńskiej powstała dzięki wykładowcom i absolwentom Wydziału Sztuk Pięknych Uniwersytetu Stefana Batorego w Wilnie, którzy po 1945 roku przybyli do tworzącego się Uniwersytetu Mikołaja Kopernika w Toruniu.",
      "collection": "Grafika Wileńska"
    },
    {
      "id": 9,
      "question": "W ramach którego projektu zdigitalizowano rękopisy średniowieczne BU UMK?",
      "options": ["A) EODOPEN", "B) POPC", "C) Kreatywna Europa"],
      "correct": 1,
      "explanation": "Rękopisy średniowieczne Biblioteki Uniwersyteckiej w Toruniu zostały zdigitalizowane w ramach projektu POPC (Program Operacyjny Polska Cyfrowa).",
      "collection": "Rękopisy średniowieczne"
    },
    {
      "id": 10,
      "question": "Ile egzemplarzy pierwszego wydania 'De revolutionibus' zachowało się do dziś?",
      "options": ["A) Około 150", "B) Ponad 270", "C) Około 400"],
      "correct": 1,
      "explanation": "Z około 500 egzemplarzy pierwszego wydania 'De revolutionibus' z 1543 roku do naszych czasów zachowało się ponad 270, w tym 14 w Polsce.",
      "collection": "Kopernikana"
    }
  ],
  "collections": {
    "Rękopisy średniowieczne": "Miłośnik starożytnych ksiąg i średniowiecznych tajemnic",
    "Grafika Wileńska": "Ekspert sztuki wileńskiej i międzywojennej grafiki",
    "EODOPEN": "Badacz literatury XX i XXI wieku",
    "Kopernikana": "Znawca historii astronomii i rewolucji naukowej",
    "Informatyka": "Pasjonat historii komputerów i technologii"
  }
};

// Game state
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let collectionCounts = {};

// Initialize the game
function initializeGame() {
    console.log('Initializing game...');
    showScreen('start-screen');
}

// Start the quiz
function startQuiz() {
    console.log('Starting quiz...');
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    collectionCounts = {};
    
    // Randomly select 5 questions
    selectedQuestions = getRandomQuestions(5);
    currentQuestions = selectedQuestions;
    
    console.log('Selected questions:', currentQuestions);
    
    // Show quiz screen and first question
    showScreen('quiz-screen');
    showQuestion();
}

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
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.classList.add('fade-in');
        console.log('Screen shown successfully:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Display current question
function showQuestion() {
    console.log('Showing question:', currentQuestionIndex);
    
    const question = currentQuestions[currentQuestionIndex];
    if (!question) {
        console.error('No question found at index:', currentQuestionIndex);
        return;
    }
    
    // Update progress
    updateProgress();
    
    // Update question counter
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    
    if (currentQuestionEl) currentQuestionEl.textContent = currentQuestionIndex + 1;
    if (totalQuestionsEl) totalQuestionsEl.textContent = currentQuestions.length;
    
    // Update question text
    const questionTextEl = document.getElementById('question-text');
    if (questionTextEl) {
        questionTextEl.textContent = question.question;
    }
    
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
    console.log('Answer selected:', selectedIndex);
    
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Update score
    if (isCorrect) {
        score++;
    }
    
    // Count collection for final assignment
    const collection = question.collection;
    collectionCounts[collection] = (collectionCounts[collection] || 0) + 1;
    
    // Show visual feedback
    showAnswerFeedback(selectedIndex, question.correct, isCorrect);
    
    // Show explanation
    showExplanation(isCorrect, question.explanation);
}

// Show answer feedback
function showAnswerFeedback(selectedIndex, correctIndex, isCorrect) {
    const answerButtons = document.querySelectorAll('.answer-option');
    
    // Disable all buttons
    answerButtons.forEach(button => {
        button.classList.add('disabled');
        button.style.pointerEvents = 'none';
    });
    
    // Highlight correct answer
    if (answerButtons[correctIndex]) {
        answerButtons[correctIndex].classList.add('correct');
    }
    
    // Highlight selected answer if incorrect
    if (!isCorrect && answerButtons[selectedIndex]) {
        answerButtons[selectedIndex].classList.add('incorrect');
    }
}

// Show explanation screen
function showExplanation(isCorrect, explanationText) {
    const explanationScreen = document.getElementById('explanation-screen');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const explanationContent = document.getElementById('explanation-content');
    const nextButton = document.getElementById('next-button');
    
    if (!explanationScreen || !feedbackIcon || !feedbackTitle || !explanationContent || !nextButton) {
        console.error('Missing explanation screen elements');
        return;
    }
    
    // Set feedback based on correctness
    if (isCorrect) {
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = 'Brawo! Prawidłowa odpowiedź!';
        feedbackTitle.style.color = 'var(--color-success)';
    } else {
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Nieprawidłowa odpowiedź';
        feedbackTitle.style.color = 'var(--color-error)';
    }
    
    // Set explanation text
    explanationContent.textContent = explanationText;
    
    // Update next button text
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextButton.textContent = 'Zobacz wyniki';
    } else {
        nextButton.textContent = 'Następne pytanie';
    }
    
    // Show explanation
    explanationScreen.classList.remove('hidden');
}

// Move to next question or show results
function nextQuestion() {
    console.log('Moving to next question or results');
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results screen
function showResults() {
    console.log('Showing results');
    
    showScreen('results-screen');
    
    // Calculate percentage
    const percentage = Math.round((score / currentQuestions.length) * 100);
    
    // Update score display
    const scoreTextEl = document.getElementById('score-text');
    const percentageTextEl = document.getElementById('percentage-text');
    
    if (scoreTextEl) scoreTextEl.textContent = score;
    if (percentageTextEl) percentageTextEl.textContent = percentage;
    
    // Determine assigned collection
    const assignedCollection = determineCollection();
    const assignedCollectionEl = document.getElementById('assigned-collection');
    if (assignedCollectionEl) {
        assignedCollectionEl.textContent = assignedCollection;
    }
}

// Determine which collection the user fits best
function determineCollection() {
    // Find the collection with the most questions answered
    let maxCount = 0;
    let bestCollection = '';
    
    for (const [collection, count] of Object.entries(collectionCounts)) {
        if (count > maxCount) {
            maxCount = count;
            bestCollection = collection;
        }
    }
    
    // If no clear winner, pick a random collection
    if (!bestCollection || maxCount === 0) {
        const collections = Object.keys(quizData.collections);
        bestCollection = collections[Math.floor(Math.random() * collections.length)];
    }
    
    return quizData.collections[bestCollection];
}

// Update progress bar
function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

// Restart the quiz
function restartQuiz() {
    console.log('Restarting quiz');
    startQuiz();
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing game');
    initializeGame();
});