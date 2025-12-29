document.addEventListener('DOMContentLoaded', () => {
    
    // --- I18N CONFIGURATION ---
    const translations = {
        zh: {
            nav_features: "特性", nav_integration: "工作流", nav_download: "免费下载",
            hero_label: "AI-NATIVE CODE EDITOR",
            hero_title_1: "Connect AI", hero_title_2: "To Your Code",
            hero_desc_1: "Adnify 不只是编辑器。", hero_desc_2: "它是你的 AI 编程伙伴。",
            scroll_tip: "向下探索",
            ph_code: "[截图] Monaco 编辑器 + LSP 智能补全", ph_chat: "[截图] AI Agent 对话面板", analysis_done: "启动 <400ms",
            feat_1_title: "AI Agent 深度集成", feat_1_desc: "三种工作模式：Chat 对话、Agent 执行、Plan 规划。22 个内置工具，从文件操作到终端执行，AI 全权掌控。",
            feat_2_title: "秒级启动", feat_2_desc: "深度优化的 Electron + React 架构，冷启动 <400ms。Monaco 编辑器内核，VS Code 同款体验。",
            feat_3_title: "本地优先 · 隐私安全", feat_3_desc: "代码索引本地存储，支持 Ollama 本地模型。工作区隔离、敏感路径保护、命令白名单、审计日志。",
            ph_full_title: "[截图] 主界面全貌", ph_full_desc: "文件树 + Monaco 编辑器 + AI 对话面板 + 终端",
            ph_graph_title: "[截图] AI 工具调用",
            cta_ready: "开源免费，立即体验",
            tape_content: "开源免费 &bull; 22个AI工具 &bull; 多模型支持 &bull; 本地优先 &bull; 检查点回滚 &bull; "
        },
        en: {
            nav_features: "FEATURES", nav_integration: "WORKFLOW", nav_download: "DOWNLOAD FREE",
            hero_label: "AI-NATIVE CODE EDITOR",
            hero_title_1: "Connect AI", hero_title_2: "To Your Code",
            hero_desc_1: "Adnify is more than an editor.", hero_desc_2: "It's your AI coding companion.",
            scroll_tip: "SCROLL TO EXPLORE",
            ph_code: "[SCREENSHOT] Monaco Editor + LSP", ph_chat: "[SCREENSHOT] AI Agent Panel", analysis_done: "Startup <400ms",
            feat_1_title: "Deep AI Agent Integration", feat_1_desc: "Three modes: Chat, Agent, Plan. 22 built-in tools from file ops to terminal execution. AI takes full control.",
            feat_2_title: "Instant Startup", feat_2_desc: "Optimized Electron + React architecture. Cold start <400ms. Monaco Editor core, VS Code-like experience.",
            feat_3_title: "Local First · Privacy Safe", feat_3_desc: "Local code indexing, Ollama support. Workspace isolation, path protection, command whitelist, audit logs.",
            ph_full_title: "[SCREENSHOT] Main Interface", ph_full_desc: "File tree + Monaco Editor + AI Panel + Terminal",
            ph_graph_title: "[SCREENSHOT] AI Tool Calls",
            cta_ready: "Open Source & Free",
            tape_content: "OPEN SOURCE &bull; 22 AI TOOLS &bull; MULTI-MODEL &bull; LOCAL FIRST &bull; CHECKPOINT ROLLBACK &bull; "
        }
    };

    let currentLang = 'zh';
    const langBtn = document.getElementById('lang-btn');

    // --- ANIMATION CONTROLLER ---
    function triggerEntranceAnimations() {
        const tl = gsap.timeline();
        
        // 1. Reveal Nav
        tl.to('.dock-nav', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.2);

        // 2. Reveal Label
        tl.to('.hero-label', { opacity: 1, duration: 0.5 }, 0.4);

        // 3. Reveal Title (Block Reveal)
        tl.fromTo('.hero-glitch', 
            { y: "110%" },
            { y: "0%", duration: 1.2, ease: "power4.out", stagger: 0.15 },
            0.5
        );

        // 4. Reveal Description
        tl.to('.hero-desc',
            { opacity: 1, duration: 0.8, ease: "power2.out" },
            1.0
        );
        
        // 5. Reveal Visuals
        tl.to('.visual-container',
            { opacity: 1, duration: 1, ease: "power2.out" },
            1.2
        );

        // 6. Reveal Scroll Indicator
        tl.to('.scroll-indicator', { opacity: 1, duration: 0.5 }, 1.5);
    }

    function switchLanguage() {
        // Animate Out
        const tl = gsap.timeline({
            onComplete: () => {
                updateContent();
                triggerEntranceAnimations(); // Animate In
            }
        });
        tl.to('.hero-glitch', { y: "110%", duration: 0.5, ease: "power2.in", stagger: 0.05 });
        tl.to('.hero-desc', { opacity: 0, duration: 0.3 }, 0);
    }

    function updateContent() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        langBtn.textContent = currentLang === 'zh' ? 'EN' : '中';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });

        const t1 = document.querySelector('[data-i18n="hero_title_1"]');
        const t2 = document.querySelector('[data-i18n="hero_title_2"]');
        if(t1) t1.setAttribute('data-text', translations[currentLang].hero_title_1);
        if(t2) t2.setAttribute('data-text', translations[currentLang].hero_title_2);
        
        const tape = document.getElementById('marquee-tape');
        const content = translations[currentLang].tape_content;
        tape.innerHTML = `<span>${content}</span><span>${content}</span><span>${content}</span>`;
    }

    langBtn.addEventListener('click', switchLanguage);

    // --- INITIALIZATION ---
    setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
        triggerEntranceAnimations();
        initTypewriter();
    }, 1500);

    // --- CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursorCircle.style.left = `${cursorX}px`;
        cursorCircle.style.top = `${cursorY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('[data-magnetic]').forEach(item => {
        item.addEventListener('mouseenter', () => cursorCircle.classList.add('hovered'));
        item.addEventListener('mouseleave', () => cursorCircle.classList.remove('hovered'));
    });

    // --- 3D PARALLAX ---
    const hero = document.querySelector('.hero');
    const slices = document.querySelectorAll('.code-slice');

    if(hero && slices.length > 0) {
        hero.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; 
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            slices.forEach((slice, index) => {
                const depth = (index + 1) * 20;
                slice.style.transform = `translateZ(${depth}px) rotateY(${x}deg) rotateX(${-y}deg) translateX(${x * 2}px)`;
            });
        });
    }

    // --- TYPEWRITER ---
    function initTypewriter() {
        const activeLine = document.querySelector('.active-line');
        const text = "Launch sequence initiated...";
        let i = 0;
        if(activeLine) {
            activeLine.innerHTML = ''; 
            const type = () => {
                if (i < text.length) {
                    activeLine.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 50);
                } else {
                    activeLine.innerHTML += '<span class="blink">_</span>';
                }
            };
            type();
        }
    }
});