// script.js

// Example function to add new file (can be expanded as needed)
function addFile(fileName, fileSize) {
    const filesSection = document.querySelector('.files');
    const fileDiv = document.createElement('div');
    fileDiv.classList.add('file');
    
    const fileImage = document.createElement('img');
    fileImage.src = 'placeholder.png';  // Placeholder image, replace with actual file icon if needed
    fileImage.alt = fileName;
    
    const fileDetails = document.createElement('div');
    fileDetails.classList.add('file-details');
    
    const fileNameP = document.createElement('p');
    fileNameP.textContent = fileName;
    
    const fileSizeP = document.createElement('p');
    fileSizeP.textContent = fileSize;
    
    fileDetails.appendChild(fileNameP);
    fileDetails.appendChild(fileSizeP);
    fileDiv.appendChild(fileImage);
    fileDiv.appendChild(fileDetails);
    filesSection.appendChild(fileDiv);
}

// Usage
// addFile('New File', '123 MB');
