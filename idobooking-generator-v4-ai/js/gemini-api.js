// ============================================
// GEMINI API INTEGRATION
// ============================================

const GeminiAPI = {
    // Token counter persisted in localStorage
    tokenCount: parseInt(localStorage.getItem('gemini_token_count') || '0'),
    lastResponse: null,

    // Initialize
    init() {
        this.updateTokenCounter();
    },

    // Get API key from input
    getApiKey() {
        return document.getElementById('gemini-api-key')?.value || '';
    },

    // Update token counter UI
    updateTokenCounter() {
        const countEl = document.getElementById('token-count');
        const barEl = document.getElementById('token-bar-fill');

        if (countEl) {
            countEl.textContent = this.tokenCount.toLocaleString('pl-PL');
        }
        if (barEl) {
            const percent = Math.min((this.tokenCount / 1000000) * 100, 100);
            barEl.style.width = `${percent}%`;

            // Change color based on usage
            if (percent > 80) {
                barEl.style.background = 'var(--accent-danger)';
            } else if (percent > 50) {
                barEl.style.background = 'var(--accent-warning)';
            } else {
                barEl.style.background = 'var(--accent-success)';
            }
        }
    },

    // Add tokens to counter
    addTokens(count) {
        this.tokenCount += count;
        localStorage.setItem('gemini_token_count', this.tokenCount.toString());
        this.updateTokenCounter();
    },

    // Reset token counter
    resetTokens() {
        this.tokenCount = 0;
        localStorage.setItem('gemini_token_count', '0');
        this.updateTokenCounter();
    },

    // Build context prompt
    buildContextPrompt(userPrompt) {
        const settings = window.appState?.globalSettings || {};
        const objects = window.appState?.objects || [];
        const sections = window.appState?.enabledSections || [];

        return `Jesteś ekspertem UX i copywriterem dla branży hotelarskiej/noclegowej.

AKTUALNY STAN GENERATORA:
- Nazwa obiektu: ${settings.propertyName || 'Nie ustawiona'}
- Kolory: primary=${settings.colors?.primary}, secondary=${settings.colors?.secondary}, accent=${settings.colors?.accent}
- Fonty: nagłówki=${settings.fonts?.heading}, body=${settings.fonts?.body}
- Włączone sekcje: ${sections.join(', ')}
- Pokoje/Apartamenty: ${objects.map(o => o.name).join(', ')}

PROŚBA UŻYTKOWNIKA:
${userPrompt}

ODPOWIEDZ W FORMACIE JSON (bez bloku markdown):
{
    "action": "modify_settings" | "generate_text" | "suggest_changes",
    "changes": {
        "propertyName": "nowa nazwa (jeśli zmieniasz)",
        "colors": { "primary": "#hex", "secondary": "#hex", "accent": "#hex" },
        "roomDescriptions": { "nazwa_pokoju": "nowy opis" }
    },
    "generatedText": "wygenerowany tekst (jeśli prosili o tekst)",
    "suggestions": "dodatkowe sugestie dla użytkownika",
    "explanation": "krótkie wyjaśnienie co zrobiłeś"
}`;
    },

    // Call Gemini API
    async generate(userPrompt) {
        const apiKey = this.getApiKey();

        if (!apiKey) {
            throw new Error('Brak klucza API. Wklej klucz z Google AI Studio.');
        }

        if (!userPrompt.trim()) {
            throw new Error('Wpisz co chcesz zmienić.');
        }

        const contextPrompt = this.buildContextPrompt(userPrompt);

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: contextPrompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 2048
                    }
                })
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Błąd API Gemini');
        }

        const data = await response.json();

        // Count tokens (approximate)
        const inputTokens = Math.ceil(contextPrompt.length / 4);
        const outputTokens = Math.ceil(JSON.stringify(data).length / 4);
        this.addTokens(inputTokens + outputTokens);

        // Extract text response
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Try to parse as JSON
        try {
            // Remove markdown code blocks if present
            const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            this.lastResponse = JSON.parse(cleanText);
        } catch (e) {
            // If not valid JSON, store as text
            this.lastResponse = {
                action: 'generate_text',
                generatedText: text,
                explanation: 'Odpowiedź tekstowa'
            };
        }

        return this.lastResponse;
    },

    // Apply AI response to settings
    applyResponse() {
        if (!this.lastResponse) return false;

        const response = this.lastResponse;
        const state = window.appState;

        if (response.changes) {
            // Apply property name
            if (response.changes.propertyName) {
                state.globalSettings.propertyName = response.changes.propertyName;
                const nameInput = document.getElementById('property-name');
                if (nameInput) nameInput.value = response.changes.propertyName;
            }

            // Apply colors
            if (response.changes.colors) {
                if (response.changes.colors.primary) {
                    state.globalSettings.colors.primary = response.changes.colors.primary;
                    document.getElementById('color-primary').value = response.changes.colors.primary;
                }
                if (response.changes.colors.secondary) {
                    state.globalSettings.colors.secondary = response.changes.colors.secondary;
                    document.getElementById('color-secondary').value = response.changes.colors.secondary;
                }
                if (response.changes.colors.accent) {
                    state.globalSettings.colors.accent = response.changes.colors.accent;
                    document.getElementById('color-accent').value = response.changes.colors.accent;
                }
            }

            // Apply room descriptions
            if (response.changes.roomDescriptions) {
                Object.entries(response.changes.roomDescriptions).forEach(([roomName, desc]) => {
                    const room = state.objects.find(o => o.name === roomName);
                    if (room) {
                        room.description = desc;
                    }
                });
                window.renderObjectsGrid?.();
            }
        }

        // Refresh preview
        if (window.Preview?.debouncedRender) {
            window.Preview.debouncedRender();
        }

        return true;
    }
};

// ============================================
// UI FUNCTIONS
// ============================================

function toggleApiKeyVisibility() {
    const input = document.getElementById('gemini-api-key');
    const icon = document.getElementById('api-key-toggle-icon');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function showAIHelp() {
    document.getElementById('ai-help-modal')?.classList.remove('hidden');
}

function hideAIHelp() {
    document.getElementById('ai-help-modal')?.classList.add('hidden');
}

async function generateWithGemini() {
    const prompt = document.getElementById('ai-prompt')?.value || '';
    const loadingEl = document.getElementById('ai-loading');
    const responseWrapper = document.getElementById('ai-response-wrapper');
    const responseEl = document.getElementById('ai-response');

    // Show loading
    loadingEl?.classList.remove('hidden');
    responseWrapper?.classList.add('hidden');

    try {
        const result = await GeminiAPI.generate(prompt);

        // Format response for display
        let html = '';

        if (result.explanation) {
            html += `<div class="ai-explanation"><strong>AI:</strong> ${result.explanation}</div>`;
        }

        if (result.generatedText) {
            html += `<div class="ai-generated-text">${result.generatedText}</div>`;
        }

        if (result.suggestions) {
            html += `<div class="ai-suggestions"><i class="fas fa-lightbulb"></i> ${result.suggestions}</div>`;
        }

        if (result.changes) {
            html += `<div class="ai-changes"><strong>Proponowane zmiany:</strong><pre>${JSON.stringify(result.changes, null, 2)}</pre></div>`;
        }

        responseEl.innerHTML = html || '<em>Brak odpowiedzi</em>';
        responseWrapper?.classList.remove('hidden');

    } catch (error) {
        responseEl.innerHTML = `<div class="ai-error"><i class="fas fa-exclamation-triangle"></i> ${error.message}</div>`;
        responseWrapper?.classList.remove('hidden');
    } finally {
        loadingEl?.classList.add('hidden');
    }
}

function applyAIResponse() {
    const success = GeminiAPI.applyResponse();

    if (success) {
        // Show feedback
        const responseWrapper = document.getElementById('ai-response-wrapper');
        const feedback = document.createElement('div');
        feedback.className = 'ai-applied-feedback';
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> Zastosowano zmiany!';
        responseWrapper?.appendChild(feedback);

        setTimeout(() => feedback.remove(), 2000);
    }
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    GeminiAPI.init();
});

// Expose to window
window.GeminiAPI = GeminiAPI;
window.toggleApiKeyVisibility = toggleApiKeyVisibility;
window.showAIHelp = showAIHelp;
window.hideAIHelp = hideAIHelp;
window.generateWithGemini = generateWithGemini;
window.applyAIResponse = applyAIResponse;
