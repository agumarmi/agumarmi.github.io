document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('book-title');
    const currentPageElement = document.getElementById('current-page');
    const totalPagesElement = document.getElementById('total-pages');
    const progressBarElement = document.getElementById('progress-bar');

    // Function to update progress
    function updateProgress(title, currentPage, totalPages) {
        titleElement.textContent = title;
        currentPageElement.textContent = currentPage;
        totalPagesElement.textContent = totalPages;

        const progressPercentage = (currentPage / totalPages) * 100;
        progressBarElement.style.width = `${progressPercentage}%`;
    }

    // Listen for messages from the popup
    window.addEventListener('message', (event) => {
        if (event.data && event.data.title && event.data.currentPage && event.data.totalPages) {
            updateProgress(event.data.title, event.data.currentPage, event.data.totalPages);
        }
    });

    // Example usage
    updateProgress('Cien Años de Soledad', 30, 417);
});
