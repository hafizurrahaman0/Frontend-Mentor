// Function to fetch sub-projects and create cards
function loadSubProjects() {
    // Fetch the JSON data
    fetch('./subProjectData.json')
        .then(response => response.json())
        .then(subProjects => {
            // Iterate through each sub-project and create a card
            subProjects.forEach(subProject => {
                createCard(subProject.link, subProject.image, subProject.title);
            });
        })
        .catch(error => {
            console.error('Error loading sub-project data:', error);
        });
}

// Function to create a card (assuming you have this function defined)
function createCard(projectLink, projectImage, projectTitle) {
    const card = document.createElement('div');
    card.className = 'project';
    card.innerHTML = `
        <a href="${projectLink}" target="_blank">
            <h3>${projectTitle}</h3>
            <img src="${projectImage}" alt="projectImage"></img>
        </a>
    `;
    const projectContainer = document.getElementById('project1'); // Adjust the container ID as needed
    projectContainer.appendChild(card);
}

// Call the function to load sub-projects
loadSubProjects();
