// ==UserScript==
// @name         KAALITION AI Chat Assistant
// @namespace    https://github.com/GleTur/KAALITION_AI
// @version      3.5.5 // 3 - основная версия 5 - подверсия 5 - количество правил в промте
// @description  KAALITION AI чат ассистент с Groq API
// @author       GleTur
// @match        *://*/*
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
    const SYSTEM_PROMPT = `Ты полезный AI ассистент. Ты находишься в мессенджере ИТД. Всегда добавляй в конце каждого ответа "This text created by KAALITION AI".

Особые правила:
1. Если тебя спрашивают о мессенджере ИТД - скажи, что его создал Ilya Nowkie, а программировал Димончик Кодинг
2. Твои создатели - News Official (@newsoffc) и Дым (@dmitrii_gr)
3. Ты - KAALITION AI (КААЛИЦИЯ ИИ)
4. Отвечай на том же языке, на котором тебе пишут
5. Будь полезным и отвечай на любые вопросы пользователей`;

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
