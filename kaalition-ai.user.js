// ==UserScript==
// @name         KAALITION AI Chat Assistant
// @icon         data:image/png;base64,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
// @namespace    https://github.com/GleTur/KAALITION_AI
// @update       Обновление промта
// @version      3.6.6
// @description  KAALITION AI чат ассистент с Groq API
// @author       GleTur
// @match        https://xn--d1ah4a.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @updateURL    https://raw.githubusercontent.com/GleTur/KAALITION_AI/main/kaalition-ai.user.js
// @downloadURL  https://raw.githubusercontent.com/GleTur/KAALITION_AI/main/kaalition-ai.user.js
// @supportURL   https://github.com/GleTur/KAALITION_AI/issues
// @homepageURL  https://github.com/GleTur/KAALITION_AI
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    console.log('🤖 KAALITION AI запускается...');

    // Конфигурация Groq
    const CONFIG = {
        API_URL: 'https://api.groq.com/openai/v1/chat/completions',
        API_KEY: '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',
        MODEL: 'llama-3.3-70b-versatile',
        MAX_TOKENS: 8192,
        TEMPERATURE: 1.0,
        TOP_P: 1
    };

    // Системный промпт KAALITION AI
    const SYSTEM_PROMPT = `Ты полезный AI ассистент. Ты находишься в мессенджере ИТД.

Особые правила:
1. Если тебя спрашивают о мессенджере ИТД - скажи, что его создал Ilya Nowkie, а программировал Димончик Кодинг
2. Твои создатели - News Official (@newsoffc) и Дым (@dmitrii_gr)
3. Ты - KAALITION AI (КААЛИЦИЯ ИИ)
4. Отвечай на том же языке, на котором тебе пишут
5. Будь полезным и отвечай на любые вопросы пользователей
6. Не пиши "Это текст создано KAALITION AI" в тексте`;

    // Переменные
    let conversationHistory = [];
    let isProcessing = false;

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
            <div id="ai-title">KAALITION AI</div>
            <button id="ai-close" style="background:none;border:none;color:white;cursor:pointer;font-size:18px;">✕</button>
        </div>
        <div id="ai-conversation">
            <div class="system-message">
                🚀 KAALITION AI готов к работе!<br>
                <small>GitHub: GleTur/KAALITION_AI</small>
            </div>
        </div>
        <div id="ai-input-area">
            <div class="kaalition-info">КААЛИЦИЯ ИИ • Димончик Кодинг • ИТД</div>
            <textarea id="ai-input" placeholder="Введите любой вопрос или сообщение..." rows="2"></textarea>
            <div id="ai-controls">
                <button class="ai-btn" id="ai-clear">Очистить</button>
                <button class="ai-btn" id="ai-send">Отправить</button>
            </div>
            <div class="github-link">
                <a href="https://github.com/GleTur/KAALITION_AI" target="_blank">
                    GitHub: GleTur/KAALITION_AI
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(button);
    document.body.appendChild(panel);

    // Получаем элементы DOM
    const conversation = document.getElementById('ai-conversation');
    const input = document.getElementById('ai-input');
    const sendBtn = document.getElementById('ai-send');
    const clearBtn = document.getElementById('ai-clear');
    const closeBtn = document.getElementById('ai-close');

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
                formattedText = text + '\n\n<small class="kaalition-footer">This text created by KAALITION AI</small>';
            }
            
            messageDiv.innerHTML = formattedText.replace(/\n/g, '<br>');

            // Сохраняем в историю
            if (role !== 'system') {
                conversationHistory.push({ role, content: text });

                // Ограничиваем историю
                if (conversationHistory.length > 20) {
                    conversationHistory = conversationHistory.slice(-20);
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

    // Функция вызова Groq API
    function callGroqAPI(messages) {
        return new Promise((resolve, reject) => {
            // Проверяем API ключ
            if (!CONFIG.API_KEY || CONFIG.API_KEY.length < 10) {
                reject(new Error('API ключ Groq не настроен'));
                return;
            }

            console.log(`📤 Отправка запроса к Groq API...`);

            // Всегда добавляем системный промпт первым сообщением
            const fullMessages = [
                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },
                ...messages
            ];

            // Формируем запрос
            const requestData = {
                model: CONFIG.MODEL,
                messages: fullMessages,
                temperature: CONFIG.TEMPERATURE,
                max_tokens: CONFIG.MAX_TOKENS,
                top_p: CONFIG.TOP_P,
                stream: false
            };

            GM_xmlhttpRequest({
                method: 'POST',
                url: CONFIG.API_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CONFIG.API_KEY}`,
                    'Accept': 'application/json'
                },
                data: JSON.stringify(requestData),
                timeout: 60000,
                onload: function(response) {
                    console.log(`📥 Groq API ответ: ${response.status}`);

                    if (response.status === 200) {
                        try {
                            const data = JSON.parse(response.responseText);
                            
                            if (data.choices && data.choices[0] && data.choices[0].message) {
                                const content = data.choices[0].message.content;
                                console.log(`📄 Длина ответа: ${content.length} символов`);
                                resolve(content);
                            } else {
                                console.error('❌ Некорректная структура ответа:', data);
                                reject(new Error('Некорректный ответ от Groq API'));
                            }
                        } catch (e) {
                            console.error('❌ Ошибка разбора JSON:', e);
                            reject(new Error('Ошибка разбора JSON ответа'));
                        }
                    } else {
                        let errorMsg = `Ошибка ${response.status}`;
                        try {
                            const errorData = JSON.parse(response.responseText);
                            errorMsg = errorData.error?.message || errorMsg;
                            
                            if (response.status === 429) {
                                errorMsg = '⚠️ Лимит запросов исчерпан. Попробуйте позже.';
                            } else if (response.status === 401) {
                                errorMsg = '🔑 Неверный API ключ. Получите новый ключ на console.groq.com';
                            }
                        } catch (e) {
                            console.error('❌ Ошибка разбора ошибки:', e);
                        }

                        reject(new Error(errorMsg));
                    }
                },
                onerror: function(error) {
                    console.error('🌐 Сетевая ошибка:', error);
                    reject(new Error('Сетевая ошибка при подключении к Groq API'));
                },
                ontimeout: function() {
                    reject(new Error('⏰ Таймаут запроса к Groq (60 секунд)'));
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

        // Добавляем сообщение пользователя
        addMessage('user', message);
        input.value = '';
        input.style.height = 'auto';

        // Показываем индикатор
        const typingIndicator = showTypingIndicator();

        try {
            // Формируем историю сообщений для API
            const messages = [];
            
            // Добавляем только пользовательские и AI сообщения
            conversationHistory.forEach(msg => {
                if (msg.role === 'user' || msg.role === 'ai') {
                    messages.push({
                        role: msg.role === 'user' ? 'user' : 'assistant',
                        content: msg.content
                    });
                }
            });
            
            // Добавляем текущее сообщение пользователя
            messages.push({
                role: "user",
                content: message
            });

            // Ограничиваем историю для API
            const limitedMessages = messages.slice(-8);

            console.log(`💬 Отправка сообщения: "${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"`);
            
            // Отправляем запрос к Groq
            const response = await callGroqAPI(limitedMessages);

            // Удаляем индикатор
            typingIndicator.remove();

            // Добавляем ответ
            addMessage('ai', response);

            console.log(`✅ KAALITION AI ответил успешно`);

        } catch (error) {
            console.error('❌ Ошибка Groq:', error.message);

            // Удаляем индикатор
            typingIndicator.remove();

            // Показываем ошибку
            let errorMsg = error.message;

            if (error.message.includes('404')) {
                errorMsg = '🌐 Groq API временно недоступен.';
            } else if (error.message.includes('401')) {
                errorMsg = '🔑 Неверный API ключ. Получите новый ключ на console.groq.com';
            } else if (error.message.includes('429')) {
                errorMsg = '⚠️ Лимит бесплатных запросов исчерпан. Попробуйте позже.';
            } else if (error.message.includes('таймаут')) {
                errorMsg = '⏰ Groq не ответил вовремя. Попробуйте еще раз.';
            }

            addMessage('system', `❌ ${errorMsg}`);

        } finally {
            isProcessing = false;
            sendBtn.textContent = 'Отправить';
            sendBtn.disabled = false;
            input.disabled = false;
            setTimeout(() => input.focus(), 100);
        }
    }

    // Функция очистки чата
    function clearChat() {
        conversation.innerHTML = '';
        conversationHistory = [];
        addMessage('system', `🧹 Чат очищен. Можете задавать любые вопросы!`, true);
    }

    // Открытие/закрытие панели
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

    // Закрытие при клике вне панели
    document.addEventListener('click', function(e) {
        if (!panel.contains(e.target) && e.target !== button && panel.style.display === 'flex') {
            panel.style.display = 'none';
            button.innerHTML = '🤖';
        }
    });

    // Горячие клавиши
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'a' && !isProcessing) {
            e.preventDefault();
            togglePanel();
        }
        
        // Alt+C для очистки чата
        if (e.altKey && e.key === 'c' && !isProcessing && panel.style.display === 'flex') {
            e.preventDefault();
            clearChat();
        }
    });

    // Уведомление о загрузке
    console.log('✅ KAALITION AI Chat Assistant готов к работе!');
    setTimeout(() => {
        GM_notification({
            title: 'KAALITION AI',
            text: 'Нажмите 🤖 для общения',
            timeout: 2000
        });
    }, 1000);

})();
