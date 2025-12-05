// WIZARD UI LOGIC - Obsługa interfejsu kreatora

let currentQuestionIndex = 0;
let wizardAnswers = {};

// Inicjalizacja wizarda
function initWizard() {
    currentQuestionIndex = 0;
    wizardAnswers = {};
    renderQuestion();
    updateProgress();
    updateNavigation();
}

// Renderowanie pytania
function renderQuestion() {
    const question = wizardQuestions[currentQuestionIndex];
    const container = document.getElementById('wizardContent');

    let html = `
        <div class="question-card" data-question-id="${question.id}">
            <h2 class="question-title">${question.question}</h2>
            <div class="question-options">
    `;

    if (question.type === 'select') {
        // Radio buttons
        html += '<div class="options-grid">';
        question.options.forEach(option => {
            const isChecked = wizardAnswers[question.id] === option.value ? 'checked' : '';
            html += `
                <label class="option-card ${isChecked ? 'selected' : ''}">
                    <input type="radio"
                           name="${question.id}"
                           value="${option.value}"
                           ${isChecked}
                           onchange="handleAnswer('${question.id}', '${option.value}', 'single')">
                    <div class="option-content">
                        <span class="option-label">${option.label}</span>
                    </div>
                </label>
            `;
        });
        html += '</div>';

    } else if (question.type === 'multi') {
        // Checkboxes
        html += '<div class="options-grid multi">';
        const currentAnswers = wizardAnswers[question.id] || [];
        question.options.forEach(option => {
            const isChecked = currentAnswers.includes(option.value);
            html += `
                <label class="option-card ${isChecked ? 'selected' : ''}">
                    <input type="checkbox"
                           name="${question.id}"
                           value="${option.value}"
                           ${isChecked ? 'checked' : ''}
                           onchange="handleAnswer('${question.id}', '${option.value}', 'multi')">
                    <div class="option-content">
                        <span class="option-label">${option.label}</span>
                    </div>
                </label>
            `;
        });
        html += '</div>';

        if (question.maxSelections) {
            html += `<p class="hint">Wybierz maksymalnie ${question.maxSelections} opcje</p>`;
        }

    } else if (question.type === 'image-select') {
        // Image cards with preview
        html += '<div class="style-grid">';
        question.options.forEach(option => {
            const isChecked = wizardAnswers[question.id] === option.value ? 'checked' : '';
            html += `
                <label class="style-card ${isChecked ? 'selected' : ''}">
                    <input type="radio"
                           name="${question.id}"
                           value="${option.value}"
                           ${isChecked}
                           onchange="handleAnswer('${question.id}', '${option.value}', 'single')">
                    <div class="style-preview">
                        <div class="style-colors">
                            ${option.colors.map(color => `<div class="color-dot" style="background: ${color}"></div>`).join('')}
                        </div>
                        <h4>${option.label}</h4>
                        <p>${option.preview}</p>
                    </div>
                </label>
            `;
        });
        html += '</div>';
    }

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// Obsługa odpowiedzi
function handleAnswer(questionId, value, type) {
    const question = wizardQuestions.find(q => q.id === questionId);

    if (type === 'single') {
        wizardAnswers[questionId] = value;

        // Visual feedback
        document.querySelectorAll(`input[name="${questionId}"]`).forEach(input => {
            const card = input.closest('.option-card, .style-card');
            if (input.checked) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });

    } else if (type === 'multi') {
        if (!wizardAnswers[questionId]) {
            wizardAnswers[questionId] = [];
        }

        const checkbox = event.target;
        const card = checkbox.closest('.option-card');

        if (checkbox.checked) {
            // Check max selections
            if (question.maxSelections && wizardAnswers[questionId].length >= question.maxSelections) {
                checkbox.checked = false;
                alert(`Możesz wybrać maksymalnie ${question.maxSelections} opcje`);
                return;
            }
            wizardAnswers[questionId].push(value);
            card.classList.add('selected');
        } else {
            wizardAnswers[questionId] = wizardAnswers[questionId].filter(v => v !== value);
            card.classList.remove('selected');
        }
    }

    updateNavigation();
}

// Nawigacja - dalej
function nextQuestion() {
    const question = wizardQuestions[currentQuestionIndex];

    // Walidacja
    if (!wizardAnswers[question.id] ||
        (Array.isArray(wizardAnswers[question.id]) && wizardAnswers[question.id].length === 0)) {
        alert('Proszę wybrać przynajmniej jedną opcję');
        return;
    }

    if (currentQuestionIndex < wizardQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgress();
        updateNavigation();

        // Scroll to top
        document.getElementById('wizardContent').scrollTop = 0;
    } else {
        // Koniec wizarda - przechodzimy do buildera
        finishWizard();
    }
}

// Nawigacja - wstecz
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgress();
        updateNavigation();

        document.getElementById('wizardContent').scrollTop = 0;
    }
}

// Aktualizacja paska postępu
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / wizardQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentStep').textContent = currentQuestionIndex + 1;
    document.getElementById('totalSteps').textContent = wizardQuestions.length;
}

// Aktualizacja przycisków nawigacji
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const question = wizardQuestions[currentQuestionIndex];

    // Prev button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Next button text
    if (currentQuestionIndex === wizardQuestions.length - 1) {
        nextBtn.textContent = 'Zakończ i przejdź do budowy →';
    } else {
        nextBtn.textContent = 'Dalej →';
    }

    // Next button state
    const hasAnswer = wizardAnswers[question.id] &&
                      (!Array.isArray(wizardAnswers[question.id]) || wizardAnswers[question.id].length > 0);
    nextBtn.disabled = !hasAnswer;
}

// Zakończenie wizarda
function finishWizard() {
    // Oblicz najlepszy motyw
    const suggestedTheme = calculateThemeScore(wizardAnswers);
    const themeData = themeScoring[suggestedTheme];

    console.log('Wizard completed!');
    console.log('Answers:', wizardAnswers);
    console.log('Suggested theme:', suggestedTheme);

    // Przełącz na builder mode
    document.getElementById('wizardMode').classList.remove('active');
    document.getElementById('builderMode').classList.add('active');

    // Wypełnij builder sugerowanymi wartościami
    applyThemeToBuilder(suggestedTheme, themeData);

    // Pokaż sugerowany motyw
    showSuggestedTheme(suggestedTheme, themeData);
}

// Zastosowanie motywu w builderze
function applyThemeToBuilder(themeName, themeData) {
    // Kolory
    document.getElementById('colorPrimary').value = themeData.colors.primary;
    document.getElementById('colorSecondary').value = themeData.colors.secondary;
    document.getElementById('colorAccent').value = themeData.colors.accent;

    // Fonty
    document.getElementById('fontHeading').value = themeData.fonts.heading;
    document.getElementById('fontBody').value = themeData.fonts.body;

    // Zapisz dane motywu do globalnej zmiennej
    window.selectedTheme = {
        name: themeName,
        data: themeData,
        answers: wizardAnswers
    };
}

// Wyświetlenie sugerowanego motywu
function showSuggestedTheme(themeName, themeData) {
    const container = document.getElementById('suggestedTheme');

    const themeNames = {
        'luxury-mountain': '⛰️ Luksus Alpejski',
        'coastal-resort': '🏖️ Resort Nadmorski',
        'urban-boutique': '🏙️ Miejski Butik',
        'family-countryside': '🌲 Rodzinna Wieś',
        'wellness-sanctuary': '🧘 Sanctuarium Wellness',
        'budget-hostel': '🎒 Miejski Hostel'
    };

    container.innerHTML = `
        <div class="theme-suggestion">
            <div class="theme-badge">
                <strong>Sugerowany motyw:</strong>
                <span class="theme-name">${themeNames[themeName] || themeName}</span>
            </div>
            <p class="theme-description">${themeData.description}</p>
            <div class="theme-colors">
                <div class="color-preview" style="background: ${themeData.colors.primary}" title="Primary"></div>
                <div class="color-preview" style="background: ${themeData.colors.secondary}" title="Secondary"></div>
                <div class="color-preview" style="background: ${themeData.colors.accent}" title="Accent"></div>
            </div>
            <button class="btn-link" onclick="backToWizard()">🔄 Zmień odpowiedzi</button>
        </div>
    `;
}

// Powrót do wizarda
function backToWizard() {
    if (confirm('Czy na pewno chcesz wrócić do kreatora? Twoje ustawienia zostaną zachowane.')) {
        document.getElementById('builderMode').classList.remove('active');
        document.getElementById('wizardMode').classList.add('active');

        // Wróć do ostatniego pytania
        currentQuestionIndex = wizardQuestions.length - 1;
        renderQuestion();
        updateProgress();
        updateNavigation();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicjalizacja wizarda
    initWizard();

    // Przyciski nawigacji
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('wizardMode').classList.contains('active')) {
            if (e.key === 'Enter' && !document.getElementById('nextBtn').disabled) {
                nextQuestion();
            } else if (e.key === 'ArrowLeft' && !document.getElementById('prevBtn').disabled) {
                prevQuestion();
            } else if (e.key === 'ArrowRight' && !document.getElementById('nextBtn').disabled) {
                nextQuestion();
            }
        }
    });
});
