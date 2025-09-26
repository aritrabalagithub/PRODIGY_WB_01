 const navbar = document.getElementById('navbar');
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');

       
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });

        
        const menuItems = document.querySelectorAll('.menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        });