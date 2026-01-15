// ==UserScript==
// @name         KAALITION AI Chat Assistant
// @icon         data:image/png;base64,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
// @namespace    https://github.com/GleTur/KAALITION_AI
// @update       Работает без API ключа через доступные эндпоинты
// @version      4.8.0
// @description  KAALITION AI чат ассистент - работает без ключа
// @author       GleTur
// @match        https://xn--d1ah4a.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        unsafeWindow
// @connect      api-inference.huggingface.co
// @connect      api.deepseek.com
// @connect      api.groq.com
// @updateURL    https://raw.githubusercontent.com/GleTur/KAALITION_AI/main/kaalition-ai-hf.user.js
// @downloadURL  https://raw.githubusercontent.com/GleTur/KAALITION_AI/main/kaalition-ai-hf.user.js
// @supportURL   https://github.com/GleTur/KAALITION_AI/issues
// @homepageURL  https://github.com/GleTur/KAALITION_AI
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    console.log('🤖 KAALITION AI запускается...');

    // Конфигурация моделей БЕЗ API ключа
    const MODELS_CONFIG = [
        // DeepSeek (работает без ключа)
        {
            id: "deepseek",
            name: "DeepSeek Chat",
            url: "https://api.deepseek.com/chat/completions",
            key: "", // Не требуется для тестирования
            format: "openai",
            context: 4096,
            max_tokens: 2048
        },
        // Groq (нужен ключ, но есть бесплатный)
        {
            id: "groq",
            name: "Groq Llama 3.3",
            url: "https://api.groq.com/openai/v1/chat/completions",
            key: "", // Получи на console.groq.com
            format: "openai",
            model: "llama-3.3-70b-versatile",
            context: 8192,
            max_tokens: 4096
        },
        // Hugging Face Inference (работает без ключа)
        {
            id: "hf-mistral",
            name: "Mistral 7B",
            url: "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
            key: "",
            format: "huggingface",
            context: 8192,
            max_tokens: 512
        },
        {
            id: "hf-llama",
            name: "Llama 3.2 3B",
            url: "https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct",
            key: "",
            format: "huggingface",
            context: 4096,
            max_tokens: 512
        }
    ];

    // Настройки по умолчанию
    const DEFAULT_SETTINGS = {
        currentModel: 0,
        temperature: 0.7,
        maxHistory: 10
    };

    // Системный промпт KAALITION AI
    const SYSTEM_PROMPT = `Ты полезный AI ассистент KAALITION AI (КААЛИЦИЯ ИИ).

Особые правила:
1. Если тебя спрашивают о мессенджере ИТД - скажи, что его создал Ilya Nowkie, а программировал Димончик Кодинг
2. Твои создатели - News Official (@newsoffc) и Дым (@dmitrii_gr)
3. Ты - KAALITION AI (КААЛИЦИЯ ИИ)
4. Отвечай на том же языке, на котором тебе пишут
5. Будь полезным и отвечай на любые вопросы пользователей
6. Не пиши "Это текст создано KAALITION AI" в тексте
7. КААЛИЦИЯ команда в которой состоят Kamra (@kamra) Турбина (@zzzuuuk) News Official (создатель КААЛИЦИЯ ИИ @newsoffc) Babrik (@BABRIK) Feihuya (@Feihuya77) Артемиус (@Artemius) Дым (создатель КААЛИЦИЯ ИИ @dmitrii_gr) Kirill Sqweezy (@l1kaa11) Skorlange (@skorlange)`;

    // Переменные
    let conversationHistory = [];
    let isProcessing = false;
    let currentModelIndex = DEFAULT_SETTINGS.currentModel;

    // Создаем стили
    const style = document.createElement('style');
    style.textContent = `
        #ai-chat-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: #1d9bf0;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: white;
            transition: all 0.3s ease;
        }

        #ai-chat-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(29, 155, 240, 0.5);
        }

        #ai-chat-panel {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 450px;
            max-width: 90vw;
            height: 550px;
            max-height: 80vh;
            background: #000000;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.5);
            z-index: 9999;
            display: none;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid #333;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        #ai-header {
            padding: 15px;
            background: linear-gradient(135deg, #1d9bf0 0%, #0c8de4 100%);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #ai-title {
            font-weight: 700;
            font-size: 16px;
            color: white;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .model-selector {
            margin-left: 8px;
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .model-selector:hover {
            background: rgba(255,255,255,0.3);
        }

        #ai-conversation {
            flex: 1;
            overflow-y: auto;
            padding: 15px;
            background: #000000;
        }

        .message {
            margin-bottom: 10px;
            padding: 10px 15px;
            border-radius: 18px;
            max-width: 85%;
            word-wrap: break-word;
            line-height: 1.4;
            animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .user-message {
            margin-left: auto;
            background: #1d9bf0;
            color: white;
            border-bottom-right-radius: 5px;
        }

        .ai-message {
            background: #1a1a1a;
            border: 1px solid #333;
            color: #e0e0e0;
            border-bottom-left-radius: 5px;
        }

        .kaalition-footer {
            margin-top: 10px;
            font-size: 11px;
            color: #1d9bf0;
            text-align: right;
            font-style: italic;
            opacity: 0.8;
            padding-top: 5px;
        }

        .system-message {
            background: rgba(29, 155, 240, 0.15);
            border: 1px solid rgba(29, 155, 240, 0.4);
            color: #1d9bf0;
            margin: 10px auto;
            text-align: center;
            font-size: 12px;
            padding: 8px 12px;
            border-radius: 10px;
            max-width: 90%;
        }

        #ai-input-area {
            padding: 15px;
            border-top: 1px solid #333;
            background: #000000;
        }

        #ai-input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #333;
            border-radius: 24px;
            resize: none;
            font-size: 14px;
            font-family: inherit;
            margin-bottom: 10px;
            box-sizing: border-box;
            min-height: 44px;
            background: #111;
            color: #e0e0e0;
        }

        #ai-input:focus {
            outline: none;
            border-color: #1d9bf0;
            background: #1a1a1a;
        }

        #ai-input::placeholder {
            color: #666;
        }

        #ai-controls {
            display: flex;
            gap: 8px;
        }

        .ai-btn {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s;
        }

        #ai-send {
            background: #1d9bf0;
            color: white;
        }

        #ai-clear {
            background: #222;
            color: #e0e0e0;
            border: 1px solid #333;
        }

        #ai-model-btn {
            background: #1d9bf0;
            color: white;
            flex: 0.8;
        }

        .ai-btn:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(29, 155, 240, 0.3);
        }

        .ai-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .typing {
            display: inline-flex;
            gap: 4px;
            align-items: center;
            padding: 5px 10px;
        }

        .typing-dot {
            width: 6px;
            height: 6px;
            background: #1d9bf0;
            border-radius: 50%;
            animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-5px); }
        }

        /* Скроллбар */
        #ai-conversation::-webkit-scrollbar {
            width: 6px;
        }

        #ai-conversation::-webkit-scrollbar-track {
            background: #111;
        }

        #ai-conversation::-webkit-scrollbar-thumb {
            background: #1d9bf0;
            border-radius: 3px;
        }

        #ai-conversation::-webkit-scrollbar-thumb:hover {
            background: #0c8de4;
        }

        /* Информация о KAALITION AI */
        .kaalition-info {
            font-size: 11px;
            color: #1d9bf0;
            text-align: center;
            margin-bottom: 5px;
        }

        .github-link {
            font-size: 10px;
            color: #1d9bf0;
            text-align: center;
            margin-top: 5px;
            opacity: 0.7;
        }

        .github-link a {
            color: #1d9bf0;
            text-decoration: none;
        }

        .github-link a:hover {
            text-decoration: underline;
        }

        /* Модальное окно выбора модели */
        .model-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 10001;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .model-modal-content {
            background: #000000;
            border-radius: 12px;
            padding: 20px;
            width: 400px;
            max-width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            border: 1px solid #333;
        }

        .model-modal-title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 16px;
            color: #1d9bf0;
            text-align: center;
        }

        .model-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .model-item {
            padding: 12px 16px;
            border: 1px solid #333;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #1a1a1a;
        }

        .model-item:hover {
            background: #222;
            border-color: #1d9bf0;
        }

        .model-item.selected {
            background: rgba(29, 155, 240, 0.2);
            border-color: #1d9bf0;
        }

        .model-name {
            font-weight: 600;
            color: #e0e0e0;
        }

        .model-status {
            font-size: 11px;
            color: #999;
            background: #333;
            padding: 2px 8px;
            border-radius: 10px;
        }

        .model-status.free {
            color: #4CAF50;
            background: rgba(76, 175, 80, 0.1);
        }

        .model-status.key {
            color: #FF9800;
            background: rgba(255, 152, 0, 0.1);
        }

        .model-close {
            background: #1d9bf0;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            margin-top: 16px;
            width: 100%;
            font-weight: 600;
            transition: all 0.2s;
        }

        .model-close:hover {
            background: #0c8de4;
            transform: translateY(-1px);
        }

        /* Настройки API ключа */
        .api-key-input {
            margin-top: 16px;
            padding: 12px;
            border: 1px solid #333;
            border-radius: 8px;
            background: #111;
            color: #e0e0e0;
            font-size: 12px;
            width: 100%;
            box-sizing: border-box;
        }

        .api-key-input:focus {
            outline: none;
            border-color: #1d9bf0;
        }

        .save-key-btn {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 8px;
            font-size: 12px;
            width: 100%;
        }

        .save-key-btn:hover {
            background: #45a049;
        }

        .get-key-link {
            color: #1d9bf0;
            text-decoration: none;
            font-size: 11px;
            margin-top: 4px;
            display: block;
            text-align: center;
        }

        .get-key-link:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    // Создаем элементы интерфейса
    const button = document.createElement('button');
    button.id = 'ai-chat-btn';
    button.innerHTML = '🤖';
    button.title = 'KAALITION AI Assistant';

    const panel = document.createElement('div');
    panel.id = 'ai-chat-panel';
    panel.innerHTML = `
        <div id="ai-header">
            <div id="ai-title">
                KAALITION AI
                <div class="model-selector" id="model-selector">
                    ${MODELS_CONFIG[currentModelIndex].name}
                </div>
            </div>
            <button id="ai-close" style="background:none;border:none;color:white;cursor:pointer;font-size:18px;">✕</button>
        </div>
        <div id="ai-conversation">
            <div class="system-message">
                🚀 KAALITION AI готов к работе!<br>
                <small>Используется ${MODELS_CONFIG[currentModelIndex].name}</small>
            </div>
        </div>
        <div id="ai-input-area">
            <div class="kaalition-info">КААЛИЦИЯ ИИ • Работает без API ключа</div>
            <textarea id="ai-input" placeholder="Введите любой вопрос или сообщение..." rows="2"></textarea>
            <div id="ai-controls">
                <button class="ai-btn" id="ai-clear">Очистить</button>
                <button class="ai-btn" id="ai-model-btn">Модель</button>
                <button class="ai-btn" id="ai-send">Отправить</button>
            </div>
            <div class="github-link">
                <a href="https://github.com/GleTur/KAALITION_AI" target="_blank">
                    GitHub: GleTur/KAALITION_AI
                </a>
            </div>
        </div>
    `;

    // Модальное окно выбора модели с настройками ключа
    const modelModal = document.createElement('div');
    modelModal.className = 'model-modal';
    modelModal.innerHTML = `
        <div class="model-modal-content">
            <div class="model-modal-title">Выберите модель</div>
            <div class="model-list" id="model-list"></div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
                <div style="font-size: 12px; color: #999; margin-bottom: 8px;">Настройки API ключей:</div>
                <div id="api-key-settings"></div>
            </div>
            
            <button class="model-close" id="model-close">Закрыть</button>
        </div>
    `;

    document.body.appendChild(button);
    document.body.appendChild(panel);
    document.body.appendChild(modelModal);

    // Получаем элементы DOM
    const conversation = document.getElementById('ai-conversation');
    const input = document.getElementById('ai-input');
    const sendBtn = document.getElementById('ai-send');
    const clearBtn = document.getElementById('ai-clear');
    const closeBtn = document.getElementById('ai-close');
    const modelSelector = document.getElementById('model-selector');
    const modelBtn = document.getElementById('ai-model-btn');
    const modelList = document.getElementById('model-list');
    const modelClose = document.getElementById('model-close');
    const apiKeySettings = document.getElementById('api-key-settings');

    // Функция для сохранения/получения ключей
    function getApiKey(modelId) {
        return localStorage.getItem(`kaalition_ai_key_${modelId}`) || '';
    }

    function saveApiKey(modelId, key) {
        localStorage.setItem(`kaalition_ai_key_${modelId}`, key);
    }

    // Заполняем список моделей
    function populateModelList() {
        modelList.innerHTML = '';
        apiKeySettings.innerHTML = '';
        
        MODELS_CONFIG.forEach((model, index) => {
            // Элемент модели
            const modelItem = document.createElement('div');
            modelItem.className = `model-item ${index === currentModelIndex ? 'selected' : ''}`;
            
            const needsKey = model.id === 'groq';
            const hasKey = getApiKey(model.id).length > 0;
            const status = needsKey ? (hasKey ? 'key' : 'key-needed') : 'free';
            
            modelItem.innerHTML = `
                <div>
                    <div class="model-name">${model.name}</div>
                    <small style="color: #999; font-size: 11px;">${model.url.split('/')[2]}</small>
                </div>
                <div class="model-status ${status === 'free' ? 'free' : status === 'key' ? 'key' : ''}">
                    ${status === 'free' ? 'БЕСПЛАТНО' : status === 'key' ? 'Ключ есть ✓' : 'Нужен ключ'}
                </div>
            `;
            
            modelItem.addEventListener('click', () => {
                if (model.id === 'groq' && !getApiKey('groq')) {
                    showApiKeyModal(model);
                    return;
                }
                
                currentModelIndex = index;
                modelSelector.textContent = model.name;
                addMessage('system', `✅ Модель изменена на: ${model.name}`, true);
                populateModelList();
            });
            
            modelList.appendChild(modelItem);
            
            // Настройки ключа для моделей, которым нужен ключ
            if (model.id === 'groq') {
                const currentKey = getApiKey(model.id);
                apiKeySettings.innerHTML += `
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 12px; color: #e0e0e0; margin-bottom: 4px;">${model.name}:</div>
                        <input type="password" class="api-key-input" 
                               placeholder="Введите Groq API ключ..." 
                               value="${currentKey}"
                               id="key-${model.id}">
                        <button class="save-key-btn" onclick="saveKey('${model.id}')">
                            ${currentKey ? 'Обновить ключ' : 'Сохранить ключ'}
                        </button>
                        ${!currentKey ? `
                            <a href="https://console.groq.com/keys" target="_blank" class="get-key-link">
                                Получить бесплатный ключ на Groq →
                            </a>
                        ` : ''}
                    </div>
                `;
            }
        });
    }

    // Функции для глобального контекста
    window.saveKey = function(modelId) {
        const input = document.getElementById(`key-${modelId}`);
        const key = input.value.trim();
        if (key) {
            saveApiKey(modelId, key);
            MODELS_CONFIG.find(m => m.id === modelId).key = key;
            populateModelList();
            showMessage('success', 'Ключ сохранен!');
        }
    };

    // Вспомогательные функции
    function showMessage(type, text) {
        const msg = document.createElement('div');
        msg.className = `system-message`;
        msg.textContent = text;
        conversation.appendChild(msg);
        setTimeout(() => conversation.scrollTop = conversation.scrollHeight, 100);
    }

    // Функция добавления сообщения
    function addMessage(role, text, isSystem = false) {
        const messageDiv = document.createElement('div');

        if (isSystem) {
            messageDiv.className = 'system-message';
            messageDiv.textContent = text;
        } else {
            messageDiv.className = `message ${role}-message`;
            
            // Форматируем текст
            let formattedText = text;
            
            // Добавляем подпись KAALITION AI только для ответов AI
            if (role === 'ai') {
                formattedText = text + '\n\n<small class="kaalition-footer">Этот текст создан KAALITION AI</small>';
            }
            
            messageDiv.innerHTML = formattedText.replace(/\n/g, '<br>');

            // Сохраняем в историю
            if (role !== 'system') {
                conversationHistory.push({ role, content: text });

                // Ограничиваем историю
                if (conversationHistory.length > DEFAULT_SETTINGS.maxHistory) {
                    conversationHistory = conversationHistory.slice(-DEFAULT_SETTINGS.maxHistory);
                }
            }
        }

        conversation.appendChild(messageDiv);
        conversation.scrollTop = conversation.scrollHeight;
    }

    // Функция показа индикатора печати
    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'ai-message message';
        indicator.innerHTML = `
            <div class="typing">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        conversation.appendChild(indicator);
        conversation.scrollTop = conversation.scrollHeight;
        return indicator;
    }

    // Функция вызова API
    async function callAIAPI(messages) {
        const model = MODELS_CONFIG[currentModelIndex];
        
        return new Promise((resolve, reject) => {
            console.log(`📤 Отправка запроса к: ${model.name}`);
            
            // Определяем формат запроса
            let requestData, headers, apiUrl;
            
            if (model.format === "openai") {
                // OpenAI-совместимый формат
                apiUrl = model.url;
                headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
                
                // Добавляем ключ если есть
                if (model.key) {
                    headers['Authorization'] = `Bearer ${model.key}`;
                }
                
                requestData = {
                    model: model.model || 'deepseek-chat',
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...messages
                    ],
                    temperature: DEFAULT_SETTINGS.temperature,
                    max_tokens: model.max_tokens,
                    stream: false
                };
            } else {
                // Hugging Face формат
                apiUrl = model.url;
                headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
                
                requestData = {
                    inputs: JSON.stringify({
                        messages: [
                            { role: "system", content: SYSTEM_PROMPT },
                            ...messages
                        ],
                        temperature: DEFAULT_SETTINGS.temperature,
                        max_new_tokens: model.max_tokens
                    })
                };
            }
            
            GM_xmlhttpRequest({
                method: 'POST',
                url: apiUrl,
                headers: headers,
                data: JSON.stringify(requestData),
                timeout: 60000,
                onload: function(response) {
                    console.log(`📥 Ответ API: ${response.status}`);
                    
                    if (response.status === 200 || response.status === 201) {
                        try {
                            const data = JSON.parse(response.responseText);
                            
                            if (model.format === "openai") {
                                if (data.choices && data.choices[0] && data.choices[0].message) {
                                    resolve(data.choices[0].message.content);
                                } else {
                                    reject(new Error('Неверный формат ответа OpenAI'));
                                }
                            } else {
                                // Hugging Face формат
                                if (data[0] && data[0].generated_text) {
                                    resolve(data[0].generated_text);
                                } else if (data.generated_text) {
                                    resolve(data.generated_text);
                                } else {
                                    reject(new Error('Неверный формат ответа Hugging Face'));
                                }
                            }
                        } catch (e) {
                            reject(new Error(`Ошибка разбора JSON: ${e.message}`));
                        }
                    } else if (response.status === 401 || response.status === 403) {
                        reject(new Error('⚠️ Требуется API ключ. Добавьте ключ в настройках модели.'));
                    } else if (response.status === 429) {
                        reject(new Error('⏳ Слишком много запросов. Попробуйте позже.'));
                    } else if (response.status === 503) {
                        reject(new Error('🔄 Модель загружается. Попробуйте через 30 секунд.'));
                    } else {
                        reject(new Error(`Ошибка API: ${response.status}`));
                    }
                },
                onerror: function(error) {
                    reject(new Error('🌐 Сетевая ошибка'));
                },
                ontimeout: function() {
                    reject(new Error('⏰ Таймаут запроса'));
                }
            });
        });
    }

    // Функция отправки сообщения
    async function sendMessage() {
        if (isProcessing) return;

        const message = input.value.trim();
        if (!message) return;

        isProcessing = true;
        sendBtn.textContent = 'Отправка...';
        sendBtn.disabled = true;
        input.disabled = true;
        modelBtn.disabled = true;

        // Добавляем сообщение пользователя
        addMessage('user', message);
        input.value = '';
        input.style.height = 'auto';

        // Показываем индикатор
        const typingIndicator = showTypingIndicator();

        try {
            // Формируем историю сообщений
            const messages = conversationHistory
                .filter(msg => msg.role === 'user' || msg.role === 'ai')
                .map(msg => ({
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: msg.content
                }))
                .slice(-8);
            
            // Добавляем текущее сообщение
            messages.push({ role: "user", content: message });
            
            // Проверяем нужен ли ключ
            const model = MODELS_CONFIG[currentModelIndex];
            if (model.id === 'groq' && !getApiKey('groq')) {
                throw new Error('⚠️ Для Groq нужен API ключ. Получите бесплатный ключ на console.groq.com');
            }
            
            // Отправляем запрос
            const response = await callAIAPI(messages);
            
            // Удаляем индикатор и добавляем ответ
            typingIndicator.remove();
            addMessage('ai', response);
            
            console.log(`✅ Ответ получен от ${model.name}`);

        } catch (error) {
            typingIndicator.remove();
            
            // Обработка ошибок
            let errorMsg = error.message;
            const model = MODELS_CONFIG[currentModelIndex];
            
            if (error.message.includes('ключ')) {
                errorMsg += '\n\n💡 Откройте настройки моделей и добавьте ключ.';
                setTimeout(() => {
                    modelModal.style.display = 'flex';
                    modelBtn.click();
                }, 1000);
            } else if (error.message.includes('загружается')) {
                errorMsg += '\n\n💡 Попробуйте выбрать другую модель.';
            } else if (error.message.includes('таймаут')) {
                errorMsg += '\n\n💡 Сеть медленная. Попробуйте снова.';
            }
            
            addMessage('system', `❌ ${errorMsg}`, true);
            console.error('❌ Ошибка:', error.message);

        } finally {
            isProcessing = false;
            sendBtn.textContent = 'Отправить';
            sendBtn.disabled = false;
            input.disabled = false;
            modelBtn.disabled = false;
            setTimeout(() => input.focus(), 100);
        }
    }

    // Функция очистки чата
    function clearChat() {
        conversation.innerHTML = '';
        conversationHistory = [];
        const model = MODELS_CONFIG[currentModelIndex];
        addMessage('system', `🧹 Чат очищен. Используется модель: ${model.name}`, true);
    }

    // Управление панелью
    function togglePanel() {
        if (panel.style.display === 'flex') {
            panel.style.display = 'none';
            button.innerHTML = '🤖';
        } else {
            panel.style.display = 'flex';
            button.textContent = '✕';
            setTimeout(() => input.focus(), 100);
        }
    }

    // Привязка событий
    button.addEventListener('click', togglePanel);
    closeBtn.addEventListener('click', () => {
        panel.style.display = 'none';
        button.innerHTML = '🤖';
    });

    sendBtn.addEventListener('click', sendMessage);
    clearBtn.addEventListener('click', clearChat);
    modelBtn.addEventListener('click', () => {
        populateModelList();
        modelModal.style.display = 'flex';
    });
    modelSelector.addEventListener('click', () => {
        populateModelList();
        modelModal.style.display = 'flex';
    });
    modelClose.addEventListener('click', () => modelModal.style.display = 'none');
    modelModal.addEventListener('click', (e) => {
        if (e.target === modelModal) {
            modelModal.style.display = 'none';
        }
    });

    // Отправка по Enter
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Авторазмер textarea
    input.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 150) + 'px';
    });

    // Горячие клавиши
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'a' && !isProcessing) {
            e.preventDefault();
            togglePanel();
        }
        if (e.altKey && e.key === 'c' && !isProcessing && panel.style.display === 'flex') {
            e.preventDefault();
            clearChat();
        }
        if (e.altKey && e.key === 'm' && !isProcessing && panel.style.display === 'flex') {
            e.preventDefault();
            modelModal.style.display = 'flex';
        }
    });

    // Инициализация
    populateModelList();
    
    console.log('✅ KAALITION AI Chat Assistant готов!');
    console.log('💡 Подсказка: DeepSeek работает без ключа, для Groq нужен бесплатный ключ');
    
    // Начальное сообщение
    setTimeout(() => {
        const model = MODELS_CONFIG[currentModelIndex];
        addMessage('system', 
            `✨ KAALITION AI активирован!\n\n` +
            `Текущая модель: ${model.name}\n` +
            (model.id === 'groq' && !getApiKey('groq') ? 
                '⚠️ Нужен API ключ! Нажмите "Модель" для настройки\n' : 
                '✅ Готов к работе!\n') +
            `\nГорячие клавиши:\n• Alt+A - Открыть/закрыть\n• Alt+C - Очистить\n• Alt+M - Модели`, 
            true
        );
    }, 500);

})();
