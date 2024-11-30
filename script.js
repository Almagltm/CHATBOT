// Open Chat
function openChat() {
    // Hides the tab container where the welcome message and start button are located
    document.getElementById('tabContainer').style.display = 'none';
    // Displays the chat container for interacting with the chatbot
    document.getElementById('chatContainer').style.display = 'flex';
}

// Reset Chat
function resetChat() {
    // Selects the chat output area
    const chatOutput = document.getElementById('chatOutput');
    // Replaces the content of the chat output with a default welcome message
    chatOutput.innerHTML = `
        <div class="message bot-message">
            <div class="profile">
            <img src="https://png.pngtree.com/png-vector/20220622/ourlarge/pngtree-chatbot-color-icon-chat-bot-png-image_5258006.png" alt="Bot Profile" class="profile-pic">
            </div>
            <span>Welcome back! How can I assist you today?</span>
        </div>`;
}

// End Chat
function endChat() {
    // Hides the chat container and returns to the tab container
    document.getElementById('chatContainer').style.display = 'none';
    document.getElementById('tabContainer').style.display = 'flex';
}

// Sidebar toggle function
function toggleSidebar() {
    // Toggles the 'active' class on the sidebar to show or hide it
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Handle menu item clicks
const menuItems = document.getElementById('menuItems');
    menuItems.addEventListener('click', (event) => {
    // Checks if the clicked target is a list item (LI)
        if (event.target.tagName === 'LI') {
        const contentId = event.target.getAttribute('data-content'); // Gets the ID of the content to show

    // Hides all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

    // Shows the selected content section based on the data-content attribute
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block'; // Displays the selected content
        } else {
        console.error('No content found for ID:', contentId); // Logs an error if the ID is not found
        }
    }
});

// Handle menu item double-clicks
menuItems.addEventListener('dblclick', (event) => {
    // Checks if the double-clicked target is a list item (LI)
    if (event.target.tagName === 'LI') {
        const contentId = event.target.getAttribute('data-content'); // Gets the ID of the content to hide

    // Hides the corresponding content section
    const contentToHide = document.getElementById(contentId);
    if (contentToHide) {
        contentToHide.style.display = 'none'; // Hides the selected content
        } else {
        console.error('No content found for ID:', contentId); // Logs an error if the ID is not found
        }
    }
});