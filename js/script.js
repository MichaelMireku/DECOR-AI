document.getElementById('generate-layout-btn').addEventListener('click', generateLayouts);

function generateLayouts() {
    // Fetch user inputs
    const style = document.getElementById('style-input').value;
    const needs = document.getElementById('needs-input').value;
    const budget = document.getElementById('budget-input').value;

    // Here you would call your AI service with the inputs and get layout suggestions
    // For now, let's assume we have some mock data
    const layoutSuggestions = [
        { title: 'Layout 1', description: 'Description of Layout 1' },
        { title: 'Layout 2', description: 'Description of Layout 2' },
        { title: 'Layout 3', description: 'Description of Layout 3' }
    ];

    // Display layout suggestions
    const layoutResultsSection = document.getElementById('layout-results');
    layoutResultsSection.innerHTML = '';
    layoutSuggestions.forEach(layout => {
        const layoutCard = document.createElement('div');
        layoutCard.classList.add('layout-card');
        layoutCard.innerHTML = `
            <h3>${layout.title}</h3>
            <p>${layout.description}</p>
        `;
        layoutResultsSection.appendChild(layoutCard);
    });
}
