

document.querySelectorAll('.content-section').forEach((section, index) => {
        section.style.opacity = 0;
        section.style.animation = 'slideIn 0.6s ease-out forwards';
        section.style.animationDelay = `${index * 0.2}s`;
    });

    // 页面切换动画函数
    function handleHomeClick() {
        // 创建过渡元素并激活动画
        const transition = document.querySelector('.page-transition');
        transition.classList.add('active');
        
        // 给当前页面添加退出动画
        document.body.classList.add('page-exit');
        
        // 延迟后跳转到首页
        setTimeout(() => {
            // 设置一个标记，让首页知道需要执行进入动画
            sessionStorage.setItem('homeAnimation', 'true');
            window.location.href = '../index.html';
        }, 500); // 等待动画完成后再跳转
    }

    
    // 确保DOM完全加载后再执行代码
    document.addEventListener('DOMContentLoaded', function() {
        // 只在页面中有modal元素时才执行相关代码
        const modal = document.querySelector('.modal');
        if (modal) {
            const modalImg = document.querySelector('.modal-content');
            const closeBtn = document.querySelector('.close');
            
            // 为图片添加点击事件
            document.querySelectorAll('.chart-placeholder img').forEach(img => {
                img.onclick = function() {
                    if (modalImg) {
                        modal.style.display = "flex";
                        modalImg.src = this.src;
                    }
                };
            });
            
            // 为关闭按钮添加点击事件
            if (closeBtn) {
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                };
            }
            
            // 点击模态框背景关闭
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            };
            
            // ESC键关闭
            window.onkeydown = function(event) {
                if (event.key === "Escape") {
                    modal.style.display = "none";
                }
            };
        }
    });
