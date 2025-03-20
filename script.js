document.addEventListener('DOMContentLoaded', function() {
    // You can change this URL to any website you want
    const joinButton = document.getElementById('joinButton');
    
    // Change this URL to your desired destination
    joinButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default navigation
        window.location.href = 'https://discord.gg/GAtrXEh5S2';
    });
    
    // Additional animations or functionality can be added here
});


function openService(serviceName) {
    // Hide all service content
    const contents = document.getElementsByClassName('service-content');
    for (let content of contents) {
        content.classList.remove('active');
    }
    
    // Remove active class from all buttons
    const buttons = document.getElementsByClassName('tab-button');
    for (let button of buttons) {
        button.classList.remove('active');
    }
    
    // Show selected service content and activate button
    document.getElementById(serviceName).classList.add('active');
    event.currentTarget.classList.add('active');
}