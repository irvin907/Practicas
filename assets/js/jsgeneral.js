// JavaScript code for modal functionality

function openModal() {
    document.getElementById('myModal').classList.add('show');
}

function closeModal() {
    document.getElementById('myModal').classList.remove('show');
}

function redirectToReportPage() {
    window.location.href = 'professor_reports.html';
}

// Show Details
function showDetails(bookId) {
    var detailsContainer = document.getElementById('book-details');
    var bookDetails = '';

    switch (bookId) {
        case 'book1':
            bookDetails = `
                <h2>Speak Your Mind Details</h2>
                <p>Available: Yes</p>
                <p>Quantity: 10</p>
                <p>Sale Date: 2024-05-01</p>
                <p>Recommended Level 1</p>
                <p>Value 250 MXN</p>
            `;
            break;
        case 'book2':
            bookDetails = `
                <h2>Book 2 Details</h2>
                <p>Full details of Book 2 here...</p>
            `;
            break;
        // Add more cases for additional books
    }

    detailsContainer.innerHTML = bookDetails;
}