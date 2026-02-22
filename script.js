function handleContact() {
    const email = 'anjan@anjanpatel.ca';
    const subject = 'Inquiry';
    
    // This opens Gmail directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    
    // Open Gmail
    const newWindow = window.open(gmailUrl, '_blank');

    // If the browser blocks the popup or they don't use Gmail, show the alert fallback
    if(!newWindow || newWindow.closed || typeof newWindow.closed=='undefined') {
        alert("Please contact us at: " + email);
    }
}
