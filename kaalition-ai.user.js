// ==UserScript==
// @name         KAALITION AI Chat Assistant
// @namespace    https://github.com/GleTur/kaalition-ai
// @version      3.2.7 // 3 - версия 2 - под версия 7 - количество правил в промте
// @description  KAALITION AI чат ассистент с Groq API
// @author       News Official и Дым
// @icon         data:image/png;base64,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
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @updateURL    https://raw.githubusercontent.com/GleTur/kaalition-ai/main/kaalition-ai.user.js
// @downloadURL  https://raw.githubusercontent.com/GleTur/kaalition-ai/main/kaalition-ai.user.js
// @supportURL   https://github.com/GleTur/kaalition-ai/issues
// @homepageURL  https://github.com/GleTur/kaalition-ai
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    console.log('🚀 KAALITION AI запускается...');

    // Конфигурация
    const CONFIG = {
        API_URL: 'https://api.groq.com/openai/v1/chat/completions',
        API_KEY: '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',
        MODEL: 'llama-3.3-70b-versatile',
        MAX_TOKENS: 2000,
        TEMPERATURE: 0.7
    };

    // Переменные
    let conversationHistory = [];
    let isProcessing = false;

    // Создаем стили
    const style = document.createElement('style');
    style.textContent = `
        #kaalition-btn {
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

        #kaalition-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(29, 155, 240, 0.5);
        }

        #kaalition-panel {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 400px;
            max-width: 90vw;
            height: 500px;
            max-height: 80vh;
            background: #000;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.5);
            z-index: 9999;
            display: none;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid #333;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        #kaalition-header {
            padding: 15px;
            background: #1d9bf0;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #kaalition-title {
            font-weight: 700;
            font-size: 16px;
        }

        #kaalition-chat {
            flex: 1;
            overflow-y: auto;
            padding: 15px;
            background: #000;
        }

        .kaalition-msg {
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

        .user-msg {
            margin-left: auto;
            background: #1d9bf0;
            color: white;
            border-bottom-right-radius: 5px;
        }

        .ai-msg {
            background: #1a1a1a;
            border: 1px solid #333;
            color: #e0e0e0;
            border-bottom-left-radius: 5px;
        }

        .kaalition-footer {
            margin-top: 5px;
            font-size: 11px;
            color: #1d9bf0;
            text-align: right;
            opacity: 0.8;
        }

        #kaalition-input-area {
            padding: 15px;
            border-top: 1px solid #333;
            background: #000;
        }

        #kaalition-input {
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

        #kaalition-input:focus {
            outline: none;
            border-color: #1d9bf0;
        }

        #kaalition-controls {
            display: flex;
            gap: 8px;
        }

        .kaalition-btn {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
        }

        #kaalition-send {
            background: #1d9bf0;
            color: white;
        }

        #kaalition-clear {
            background: #222;
            color: #e0e0e0;
            border: 1px solid #333;
        }

        .typing {
            display: inline-flex;
            gap: 4px;
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

        .version-info {
            font-size: 10px;
            color: #666;
            text-align: center;
            margin-top: 5px;
        }
    `;
    document.head.appendChild(style);

    // Создаем UI
    const button = document.createElement('button');
    button.id = 'kaalition-btn';
    button.innerHTML = '🤖';

    const panel = document.createElement('div');
    panel.id = 'kaalition-panel';
    panel.innerHTML = `
        <div id="kaalition-header">
            <div id="kaalition-title">KAALITION AI v1.0.0</div>
            <button id="kaalition-close" style="background:none;border:none;color:white;cursor:pointer;font-size:18px;">✕</button>
        </div>
        <div id="kaalition-chat">
            <div class="ai-msg kaalition-msg">
                Привет! Я KAALITION AI. Чем могу помочь?<br>
                <div class="kaalition-footer">This text created by KAALITION AI</div>
            </div>
        </div>
        <div id="kaalition-input-area">
            <textarea id="kaalition-input" placeholder="Введите сообщение..." rows="2"></textarea>
            <div id="kaalition-controls">
                <button class="kaalition-btn" id="kaalition-clear">Очистить</button>
                <button class="kaalition-btn" id="kaalition-send">Отправить</button>
            </div>
            <div class="version-info">GitHub Auto-Update | v1.0.0</div>
        </div>
    `;

    document.body.appendChild(button);
    document.body.appendChild(panel);

    // Получаем элементы
    const chatArea = document.getElementById('kaalition-chat');
    const input = document.getElementById('kaalition-input');
    const sendBtn = document.getElementById('kaalition-send');
    const clearBtn = document.getElementById('kaalition-clear');
    const closeBtn = document.getElementById('kaalition-close');

    // Функции
    function addMessage(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `${role}-msg kaalition-msg`;

        if (role === 'ai') {
            msgDiv.innerHTML = text + '<div class="kaalition-footer">This text created by KAALITION AI</div>';
        } else {
            msgDiv.textContent = text;
        }

        chatArea.appendChild(msgDiv);
        chatArea.scrollTop = chatArea.scrollHeight;

        // Сохраняем в историю
        conversationHistory.push({ role, content: text });
        if (conversationHistory.length > 15) {
            conversationHistory = conversationHistory.slice(-15);
        }
    }

    async function sendMessage() {
        if (isProcessing) return;

        const message = input.value.trim();
        if (!message) return;

        isProcessing = true;
        sendBtn.textContent = '...';
        sendBtn.disabled = true;

        addMessage('user', message);
        input.value = '';

        // Показываем индикатор
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-msg kaalition-msg';
        typingDiv.innerHTML = '<div class="typing"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
        chatArea.appendChild(typingDiv);
        chatArea.scrollTop = chatArea.scrollHeight;

        try {
            const response = await fetch(CONFIG.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CONFIG.API_KEY}`
                },
                body: JSON.stringify({
                    model: CONFIG.MODEL,
                    messages: [{ role: 'user', content: message }],
                    max_tokens: CONFIG.MAX_TOKENS,
                    temperature: CONFIG.TEMPERATURE
                })
            });

            typingDiv.remove();

            if (response.ok) {
                const data = await response.json();
                addMessage('ai', data.choices[0].message.content);
            } else {
                addMessage('ai', `Ошибка: ${response.status}`);
            }
        } catch (error) {
            typingDiv.remove();
            addMessage('ai', `Ошибка сети: ${error.message}`);
        } finally {
            isProcessing = false;
            sendBtn.textContent = 'Отправить';
            sendBtn.disabled = false;
            input.focus();
        }
    }

    // Обработчики событий
    button.addEventListener('click', () => {
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
        button.textContent = panel.style.display === 'flex' ? '✕' : '🤖';
        if (panel.style.display === 'flex') input.focus();
    });

    closeBtn.addEventListener('click', () => {
        panel.style.display = 'none';
        button.innerHTML = '🤖';
    });

    sendBtn.addEventListener('click', sendMessage);

    clearBtn.addEventListener('click', () => {
        chatArea.innerHTML = '';
        conversationHistory = [];
        addMessage('ai', 'Чат очищен. Чем могу помочь?');
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Проверка обновлений (опционально)
    console.log('✅ KAALITION AI загружен! Версия 1.0.0');

})();
