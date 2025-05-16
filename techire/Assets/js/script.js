// Set initial color to orange for both buttons
document.getElementById('profiles').style.backgroundColor = 'orange';
document.getElementById('resumes').style.backgroundColor = 'orange';

// Event listener for Profile button click
document.getElementById('profiles').addEventListener('click', function() {
  // Change the color of the Profile button
  document.getElementById('profiles').style.backgroundColor = 'darkorange';

  // Reset the color of the Resume button to orange
  document.getElementById('resumes').style.backgroundColor = 'orange';

  // Show Profile section and hide other sections
  showProfile();
});

// Event listener for Resume button click
document.getElementById('resumes').addEventListener('click', function() {
  // Change the color of the Resume button
  document.getElementById('resumes').style.backgroundColor = 'darkorange';

  // Reset the color of the Profile button to orange
  document.getElementById('profiles').style.backgroundColor = 'orange';

  // Show Resume section and hide other sections
  showResumeOptions();
});

function showProfile() {
    document.getElementById('profile-section').style.display = 'block';
    document.getElementById('resume-options').style.display = 'none';
    document.getElementById('additional-resume-options').style.display = 'none';
    
    // Show the "Edit Profile" button when viewing the profile
    document.getElementById('edit-profile-btn').style.display = 'block';
    // Ensure the save button is hidden until edit mode is enabled
    document.getElementById('save-profile-btn').style.display = 'none';
}

        function hideProfile() {
            document.getElementById('profile-section').style.display = 'none';
            document.getElementById('resume-options').style.display = 'none';
            document.getElementById('additional-resume-options').style.display = 'none';
        }
        function showLogoutPopup() {
            document.getElementById('logout-popup').style.display = 'block';
        }

        function closeLogoutPopup() {
            document.getElementById('logout-popup').style.display = 'none';
        }

        function confirmLogout() {
            let confirmAction = confirm("Are you sure you want to log out?");
            if (confirmAction) {
                document.getElementById('logout-popup').style.display = 'none';
                document.getElementById('success-popup').style.display = 'block';
            }
        }

        function closeSuccessPopup() {
            document.getElementById('success-popup').style.display = 'none';
        }
        function showResumeOptions() {
            document.getElementById('resume-options').style.display = 'block';
            document.getElementById('profile-section').style.display = 'none';
            document.getElementById('additional-resume-options').style.display = 'none';
        }
        function showAdditionalResumeOptions() {
            document.getElementById('additional-resume-options').style.display = 'block';
        }
        function checkAtsScore() {
            alert("Checking ATS Score...");
        }
        function downloadResume() {
            alert("Downloading Resume...");
        }
        function viewResume() {
            alert("Viewing Resume...");
        }



function addInput(id) {
    let container = document.getElementById(id);
    let div = document.createElement("div");
    div.classList.add("input-container");
    div.innerHTML = `
        <input type="text" placeholder="${id.replace('-input', '').replace('-', ' ')} Name">
        <input type="text" placeholder="Marks/percentage">
        <input type="text" placeholder="Location">
        <button onclick="this.parentElement.remove()">Clear</button>
    `;
    container.appendChild(div);
}

function addExperience() {
    let container = document.getElementById("experience-input");
    let div = document.createElement("div");
    div.classList.add("input-container");
    div.innerHTML = `
        <input type="text" placeholder="Company Name">
        <input type="text" placeholder="Role">
        <input type="text" placeholder="Location">
        
        <p>Date of Joining</p>
        <input type="date">
        <p>Date of Resignation</p>
        <input type="date">
        <input type="text" placeholder="Years of Experience">
        
        <textarea placeholder="Roles and Responsibilities"></textarea>
        <button onclick="this.parentElement.remove()">Clear</button>
    `;
    container.appendChild(div);
}


function addSkillInput() {
let container = document.getElementById("skills-input");
container.innerHTML = `
<input type="text" id="skill-search" placeholder="Enter a skill">
<button onclick="addSkill()">OK</button>
`;

// Hide the clear button initially
document.getElementById("clear-skill-btn").style.display = "none";
}

function addSkill() {
let skillInput = document.getElementById("skill-search");
let skillValue = skillInput.value.trim();
if (skillValue) {
let skillList = document.getElementById("skills-list");
let div = document.createElement("div");
div.classList.add("skill-item");
div.innerText = skillValue;
skillList.appendChild(div);
skillInput.value = "";

// Show the clear button after adding a skill
document.getElementById("clear-skill-btn").style.display = "inline-block";
}
}

function clearLastSkill() {
let skillList = document.getElementById("skills-list");
if (skillList.lastChild) {
skillList.removeChild(skillList.lastChild);

// Hide the clear button if no skills are left
if (!skillList.hasChildNodes()) {
    document.getElementById("clear-skill-btn").style.display = "none";
}
}
}


function toggleSkillInput() {
let container = document.getElementById("skills-input");
let icon = document.getElementById("skill-toggle-icon");

if (container.innerHTML === "") {
// Show input box and change icon to "×"
container.innerHTML = `
    <input type="text" id="skill-search" placeholder="Enter a skill">
    <button onclick="addSkill()">OK</button>
`;
icon.classList.remove("fa-plus");
icon.classList.add("fa-times");
} else {
// Hide input box and change icon back to "+"
container.innerHTML = "";
icon.classList.remove("fa-times");
icon.classList.add("fa-plus");
}
}

function addCertification() {
    let container = document.getElementById("certifications-input");
    let div = document.createElement("div");
    div.classList.add("certification-container");

    div.innerHTML = `
        <input type="text" placeholder="Certification Title" class="cert-input">
        <input type="text" placeholder="Obtained From" class="cert-input">
        <p>Duration From </p>
        <input type="date" class="cert-input">
        <p>Compleated In</p>
        <input type="date" class="cert-input">
        <input type="url" placeholder="Certificate URL" class="cert-input">
        <button class="cert-clear-btn" onclick="this.parentElement.remove()">Clear</button>
    `;

    container.appendChild(div);
}

function addProject() {
let container = document.getElementById("projects-input");
let div = document.createElement("div");
div.classList.add("project-container");

div.innerHTML = `
<input type="text" placeholder="Project Title" class="project-input">
<input type="text" placeholder="GitHub/Hosted URL" class="project-input">
<textarea placeholder="Describe your project..." class="project-textarea"></textarea>
<button class="project-clear-btn" onclick="this.parentElement.remove()">Clear</button>
`;

container.appendChild(div);
}


function togglePortfolioInput() {
let container = document.getElementById("portfolio-input");
let icon = document.getElementById("portfolio-toggle-icon");

if (container.innerHTML === "") {
// Show input with animation
container.innerHTML = `
    <input type="text" id="portfolio-link" class="portfolio-input" placeholder="Enter Portfolio Link">
`;
container.classList.add("fade-in");

// Change icon from pencil to 'X'
icon.classList.remove("fa-pencil-alt");
icon.classList.add("fa-times");
} else {
// Hide input with animation
container.classList.add("fade-out");
setTimeout(() => {
    container.innerHTML = "";
    container.classList.remove("fade-out"); // Remove animation class after hiding
    
    // Change icon back to pencil
    icon.classList.remove("fa-times");
    icon.classList.add("fa-pencil-alt");
}, 300); // Matches CSS animation duration
}
}

function showResumeOptions() {
    document.getElementById('resume-options').style.display = 'block';
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('additional-resume-options').style.display = 'none';
    
    // Hide profile edit controls when resume options are shown
    document.getElementById('edit-profile-btn').style.display = 'none';
    document.getElementById('save-profile-btn').style.display = 'none';
}

function showAdditionalResumeOptions() {
    document.getElementById('additional-resume-options').style.display = 'block';
}
function checkAtsScore() {
    alert("Checking ATS Score...");
}
function downloadResume() {
    alert("Downloading Resume...");
}
function viewResume() {
    alert("Viewing Resume...");
}


  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const hamburgerIcon = document.querySelector(".hamburger-menu");

    // Toggle sidebar visibility
    sidebar.classList.toggle("open");

    // Toggle hamburger and 'X' icon
    if (sidebar.classList.contains("open")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    } else {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    }
  }



  document.addEventListener("DOMContentLoaded", function () {
    const editIcon = document.getElementById("edit-profile-icon");
    const saveButton = document.getElementById("save-profile-btn");
    const editProfileButton = document.getElementById("edit-profile-btn");
    

    let profileFields = document.querySelectorAll(".profile-info input");

    // Enable editing when clicking the pencil icon
    editIcon.addEventListener("click", function () {
        toggleEditMode(true);
    });

    // Save profile and disable editing
    saveButton.addEventListener("click", function () {
        toggleEditMode(false);
    });

    // Allow re-editing when clicking "Edit Profile"
    editProfileButton.addEventListener("click", function () {
        toggleEditMode(true);
    });

    function toggleEditMode(enable) {
        profileFields.forEach(field => {
            field.readOnly = !enable;
        });

        saveButton.style.display = enable ? "block" : "none";
        editProfileButton.style.display = enable ? "none" : "block";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-profile-btn");
    const saveButton = document.getElementById("save-profile-btn");
  
    // Function to toggle all fields (inputs and textareas) within #profile-section
    function toggleFields(editable) {
      // This selector covers all input and textarea fields in your profile section
      const allFields = document.querySelectorAll("#profile-section input, #profile-section textarea");
      allFields.forEach(field => {
        field.readOnly = !editable;
      });
    }
  
    // Initially, all fields are read-only and the Save button is hidden
    toggleFields(false);
    saveButton.style.display = "none";
  
    // When the Edit button is clicked, make fields editable
    editButton.addEventListener("click", function () {
      toggleFields(true);
      editButton.style.display = "none";
      saveButton.style.display = "block";
    });
  
    // When the Save button is clicked, revert all fields to read-only
    saveButton.addEventListener("click", function () {
      toggleFields(false);
      saveButton.style.display = "none";
      editButton.style.display = "block";
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const editProfileButton = document.getElementById("edit-profile-btn");
    const saveButton = document.getElementById("save-profile-btn");
    const plusIcons = document.querySelectorAll(".fas.fa-plus"); // Select all + icons
    const pencilIcons = document.querySelectorAll(".pencil-icon"); // Select all pencil icons
    let profileFields = document.querySelectorAll(".profile-info input");

    // Function to enable editing (show + and pencil icons)
    function enableEditing() {
        profileFields.forEach(field => field.readOnly = false);
        saveButton.style.display = "block";
        editProfileButton.style.display = "none";

        // Show all + and pencil icons
        plusIcons.forEach(icon => icon.style.display = "inline-block");
        pencilIcons.forEach(icon => icon.style.display = "inline-block");
    }

    // Function to disable editing (hide + and pencil icons)
    function disableEditing() {
        profileFields.forEach(field => field.readOnly = true);
        saveButton.style.display = "none";
        editProfileButton.style.display = "block";

        // Hide all + and pencil icons
        plusIcons.forEach(icon => icon.style.display = "none");
        pencilIcons.forEach(icon => icon.style.display = "none");
    }

    // Event listeners
    editProfileButton.addEventListener("click", enableEditing);
    saveButton.addEventListener("click", disableEditing);

    // Ensure icons are hidden on page load
    disableEditing();
});





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
  
// This code should be placed after the DOM is loaded, for example in a DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Select all main links in the sidebar
    const mainLinks = document.querySelectorAll('.sidebar .main-link');
  
    mainLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent the default anchor behavior if needed
        event.preventDefault();
  
        // Toggle the display of the adjacent sub-menu
        const subMenu = this.nextElementSibling;
        if (subMenu && subMenu.classList.contains('sub-menu')) {
          // Toggle display property (you can adjust this logic if you use CSS classes for transitions)
          if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
          } else {
            subMenu.style.display = 'block';
          }
        }
      });
    });
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

