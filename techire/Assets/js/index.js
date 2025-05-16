// top notifications

document.addEventListener('DOMContentLoaded', function() {
    const topBar = document.getElementById('top-bar');
    
    // Array of messages to display
    const messages = [
      '25% off on yearly subscription', 
      '10% off on monthly subscription', 
      '5% off on single purchase', 
      'Special discount on next order!',
      'Free trial for 7 days!'
    ];
  
    let currentMessageIndex = 0;
  
    // Function to update the message
    function updateMessage() {
      // Set the message based on the current index
      topBar.textContent = messages[currentMessageIndex];
      
      // Increment the message index and loop back if needed
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }
  
    // Show the first message immediately
    updateMessage();
  
    // Add the 'show' class to trigger the animation
    setTimeout(() => {
      topBar.classList.add('show');
    }, 100);
  
    // Change the message every 10 seconds
    setInterval(updateMessage, 10000); // 10000 ms = 10 seconds
  
    // Optionally, hide the top bar after a few seconds (e.g., 5 seconds)
    setTimeout(() => {
      topBar.classList.remove('show');
    }, 5000); // Hide the message after 5 seconds (adjust as needed)
  });
  


// Search functionality
function toggleSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.search');

    if (searchContainer.style.transform === 'translateX(0px)') {
        searchContainer.style.transform = 'translateX(100%)';
    } else {
        searchContainer.style.transform = 'translateX(0)';
    }
}

function closeSearch() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.transform = 'translateX(100%)';
}

 // Notification Functionality
 function toggleNotification() {
    const notificationContainer = document.querySelector('.notification-container');
    if (notificationContainer.style.transform === 'translateX(0px)') {
        notificationContainer.style.transform = 'translateX(100%)';
    } else {
        notificationContainer.style.transform = 'translateX(0)';
    }
}

function closeNotification() {
    const notificationContainer = document.querySelector('.notification-container');
    notificationContainer.style.transform = 'translateX(100%)';
}

function setActiveLink(page) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav a[href="#${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// reach count
function animateCounters() {
    const counters = document.querySelectorAll('.counter-box');
    const section = document.getElementById('counter-section');
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        counters.forEach(counter => {
            let start = 0;
            const target = +counter.getAttribute('data-target');
            const increment = target / 100;
            
            const updateCounter = () => {
                if (start < target) {
                    start += increment;
                    counter.innerHTML = Math.ceil(start) + (target > 2 ? '+' : '') + " " + counter.textContent.split(' ').slice(1).join(' ');
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerHTML = target + (target > 2 ? '+' : '') + " " + counter.textContent.split(' ').slice(1).join(' ');
                }
            };
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);
// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     const overlay = document.getElementById('overlay');

//     if (sidebar.classList.contains('open')) {
//         sidebar.classList.remove('open');
//         overlay.classList.remove('show');
//     } else {
//         sidebar.classList.add('open');
//         overlay.classList.add('show');
//     }
// }



// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}
function toggleNotification() {
    const sidebar = document.getElementById('notification-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Toggle sub-menu visibility
const mainLinks = document.querySelectorAll('.main-link');

mainLinks.forEach(link => {
    link.addEventListener('click', function() {
        const subMenu = this.nextElementSibling; // Get the sub-menu
        const icon = this.querySelector('i'); // Get the icon

        // Toggle the sub-menu visibility
        subMenu.classList.toggle('open');
        
        // Change the icon to chevron-down when sub-menu is open
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-right');
    });
});
