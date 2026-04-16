// script.js
(function() {
    // 实现液态玻璃核心交互: 鼠标移动时产生流动高光，模拟液态表面折射
    const card = document.getElementById('glassCard');
    const spot = document.getElementById('highlightSpot');
    if (!card || !spot) return;

    // 更新高光位置
    function updateSpotPosition(e) {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        let relX = e.clientX - rect.left;
        let relY = e.clientY - rect.top;
        
        // 边界钳制
        relX = Math.min(Math.max(relX, 0), rect.width);
        relY = Math.min(Math.max(relY, 0), rect.height);
        
        spot.style.left = relX + 'px';
        spot.style.top = relY + 'px';
    }
    
    function onMouseEnter(e) {
        spot.style.opacity = '0.65';
        updateSpotPosition(e);
    }
    
    function onMouseMove(e) {
        if (spot.style.opacity === '0' || spot.style.opacity === '0') {
            spot.style.opacity = '0.65';
        }
        updateSpotPosition(e);
    }
    
    function onMouseLeave() {
        spot.style.opacity = '0';
        spot.style.left = '-100px';
        spot.style.top = '-100px';
    }
    
    // 检测触摸设备
    function isTouchDevice() {
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }
    
    if (!isTouchDevice()) {
        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
    } else {
        // 移动端静态光晕
        spot.style.opacity = '0.25';
        spot.style.left = '50%';
        spot.style.top = '50%';
        spot.style.transform = 'translate(-50%, -50%)';
        spot.style.filter = 'blur(30px)';
        spot.style.width = '300px';
        spot.style.height = '300px';
    }
    
    // 周期性微呼吸光效 (增强液态生命力)
    function subtleBreathing() {
        if (!card) return;
        const delta = Math.sin(Date.now() * 0.0015) * 0.04;
        card.style.boxShadow = `0 25px 45px rgba(0, 0, 0, 0.3), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset, 0 0 20px rgba(0, 200, 255, ${0.08 + delta * 0.3})`;
        requestAnimationFrame(subtleBreathing);
    }
    subtleBreathing();
    
    // 创建涟漪效果 (液态水滴点击反馈)
    const createRipple = (e, element) => {
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        let clientX, clientY;
        if (e.touches) {
            // 触摸事件
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const x = clientX - rect.left - size / 2;
        const y = clientY - rect.top - size / 2;
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        ripple.style.transition = 'transform 0.5s ease, opacity 0.6s ease';
        ripple.style.opacity = '1';
        ripple.style.zIndex = '20';
        
        const originalPosition = getComputedStyle(element).position;
        if (originalPosition !== 'relative') element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        requestAnimationFrame(() => {
            ripple.style.transform = 'scale(4)';
            ripple.style.opacity = '0';
        });
        
        setTimeout(() => {
            if (ripple.parentNode) ripple.remove();
        }, 600);
    };
    
    // 为所有社交按钮绑定涟漪事件
    const socialBtns = document.querySelectorAll('.social-icon');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            createRipple(e, btn);
            // 如果链接为 # 则阻止跳转 (演示环境)
            if (btn.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
        btn.addEventListener('touchstart', (e) => {
            createRipple(e, btn);
        });
    });
    
    // 可选: 为邮箱按钮添加反馈 (不破坏默认邮件跳转)
    const emailLink = document.querySelector('.contact-email');
    if (emailLink && emailLink.getAttribute('href') === '#') {
        emailLink.addEventListener('click', (e) => e.preventDefault());
    }
})();