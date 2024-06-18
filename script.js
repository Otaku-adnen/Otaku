 function toggleSidebar(event) {
            event.stopPropagation(); 
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
        }

