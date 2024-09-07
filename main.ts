function generateResume(): void {
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const companyName = (document.getElementById('companyName') as HTMLInputElement).value;
    const workDuration = (document.getElementById('workDuration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeContent = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Work Experience</h3>
        <p>Job Title: ${jobTitle}</p>
        <p>Company: ${companyName}</p>
        <p>Duration: ${workDuration}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    (document.getElementById('preview-content') as HTMLElement).innerHTML = resumeContent;
    document.getElementById('resume-form')!.style.display = 'none';
    document.getElementById('resume-preview')!.style.display = 'block';
    document.getElementById('edit-button')!.style.display = 'inline';
}

function editForm(): void {
    document.getElementById('resume-form')!.style.display = 'block';
    document.getElementById('resume-preview')!.style.display = 'none';
    document.getElementById('edit-button')!.style.display = 'none';
    (document.getElementById('preview-content') as HTMLElement).innerHTML = '';
}

// Initializing event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('edit-button')!.style.display = 'none';
});
