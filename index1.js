document.addEventListener('DOMContentLoaded', function () {
    const dashboardLink = document.getElementById('dashboardLink');
    const myFolderLink = document.getElementById('myFolderLink');
    const dashboardContent = document.getElementById('dashboardContent');
    const myFolderContent = document.getElementById('myFolderContent');

    dashboardLink.addEventListener('click', function () {
        dashboardContent.style.display = 'block';
        myFolderContent.style.display = 'none';
    });

    myFolderLink.addEventListener('click', function () {
        dashboardContent.style.display = 'none';
        myFolderContent.style.display = 'block';
    });
});
