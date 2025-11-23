

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

    
    document.querySelectorAll('.chart-placeholder img').forEach(img => {
        img.onclick = function() {
            const modal = document.querySelector('.modal');
            const modalImg = document.querySelector('.modal-content');
            modal.style.display = "flex";
            modalImg.src = this.src;
        }
    });

    document.querySelector('.close').onclick = function() {
        document.querySelector('.modal').style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target.className === 'modal') {
            document.querySelector('.modal').style.display = "none";
        }
    }

    window.onkeydown = function(event) {
        if (event.key === "Escape") {
            document.querySelector('.modal').style.display = "none";
        }
    }