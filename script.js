// Function to filter jobs based on selected job type
function filterJobs() {
    const jobType = document.getElementById('job-type').value;
    const jobCards = document.querySelectorAll('.job-card');

    // Loop through all job cards and show/hide based on the filter selection
    jobCards.forEach(card => {
        const cardType = card.querySelector('p:nth-child(4)').textContent.split(': ')[1];
        if (jobType === 'all' || jobType === cardType) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Sample Jobs Array
const jobs = [
    {
        title: "Frontend Developer Internship",
        company: "Tech Innovators",
        description: "Assist in the development of interactive websites and web applications. Knowledge of HTML, CSS, and JavaScript required.",
        type: "Internship"
    },
    {
        title: "Marketing Assistant",
        company: "Bright Future Solutions",
        description: "Help with creating marketing campaigns, managing social media, and analyzing marketing data.",
        type: "Part-Time"
    },
    {
        title: "Full-Stack Developer",
        company: "CodeCrafters",
        description: "Build and maintain scalable web applications. Expertise in JavaScript, Node.js, and MongoDB required.",
        type: "Full-Time"
    },
    {
        title: "Graphic Design Intern",
        company: "Creativa",
        description: "Work on various graphic design projects including social media posts, branding materials, and website designs.",
        type: "Internship"
    },
    {
        title: "Data Analyst",
        company: "Insight Analytics",
        description: "Analyze and interpret data trends to provide business insights. Experience with Excel, Python, and SQL preferred.",
        type: "Full-Time"
    },
    {
        title: "Product Manager",
        company: "InnovateTech",
        description: "Lead product strategy, manage product roadmaps, and coordinate between teams. Strong leadership and project management skills are required.",
        type: "Full-Time"
    }
];

// Function to dynamically add jobs to the portal
function addJobs() {
    const jobContainer = document.getElementById('jobs');
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Job Description:</strong> ${job.description}</p>
            <p><strong>Job Type:</strong> ${job.type}</p>
        `;
        
        jobContainer.appendChild(jobCard);
    });
}

// Call the function to load jobs
addJobs();



// Example JavaScript to handle form submissions (you can modify as per your needs)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Perform your login logic here (like API calls)
    alert('Logging in with: ' + email);
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Perform your sign-up logic here (like API calls)
    alert('Signing up with: ' + name + ', ' + email);
});

