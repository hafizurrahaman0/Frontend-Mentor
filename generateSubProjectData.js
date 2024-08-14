const fs = require('fs');
const path = require('path');

// Function to get sub-project data
function getSubProjectData(dir) {
    const subProjects = [];

    // Read the directory
    fs.readdirSync(dir).forEach(subDir => {
        const subDirPath = path.join(dir, subDir);
        if (fs.lstatSync(subDirPath).isDirectory()) {
            const indexPath = path.join(subDirPath, 'index.html');
            const designDir = path.join(subDirPath, 'design');
            let imagePath = '';

            // Check if index.html exists
            if (fs.existsSync(indexPath)) {
                // Find the first image in the design directory matching the pattern desktop-*.jpg
                if (fs.existsSync(designDir)) {
                    const images = fs.readdirSync(designDir).filter(file => /^desktop-.*\.jpg$/i.test(file));
                    if (images.length > 0) {
                        imagePath = path.join(designDir, images[0]);
                    }
                }

                // Push the sub-project data
                subProjects.push({
                    link: `./${path.relative(dir, indexPath).replace(/\\/g, '/')}`,
                    image: `./${path.relative(dir, imagePath).replace(/\\/g, '/')}`,
                    title: subDir
                });
            }
        }
    });

    return subProjects;
}

// Directory to scan
const projectDir = './'; // Change this to your project directory
const subProjectData = getSubProjectData(projectDir);

// Output the result to a JSON file
const outputFilePath = path.join(projectDir, 'subProjectData.json');
fs.writeFileSync(outputFilePath, JSON.stringify(subProjectData, null, 4), 'utf8');

console.log(`Sub-project data has been saved to ${outputFilePath}`);
