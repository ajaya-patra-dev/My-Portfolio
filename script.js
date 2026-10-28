"use strict";


/* ==========================================
   1. TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing-text");

const titles = [
    "CSE Student",
    "Aspiring Software Developer",
    "Front-End Developer",
    "Technology Enthusiast"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const PAUSE_AFTER_TYPING = 1300;
const PAUSE_AFTER_DELETING = 350;

function typeAnimation() {

    if (!typingElement) {
        return;
    }

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        characterIndex++;

        typingElement.textContent =
            currentTitle.substring(0, characterIndex);

        if (characterIndex === currentTitle.length) {

            deleting = true;

            setTimeout(typeAnimation, PAUSE_AFTER_TYPING);

            return;
        }

        setTimeout(typeAnimation, TYPE_SPEED);

    } else {

        characterIndex--;

        typingElement.textContent =
            currentTitle.substring(0, characterIndex);

        if (characterIndex === 0) {

            deleting = false;

            titleIndex = (titleIndex + 1) % titles.length;

            setTimeout(typeAnimation, PAUSE_AFTER_DELETING);

            return;
        }

        setTimeout(typeAnimation, DELETE_SPEED);
    }
}

typeAnimation();


/* ==========================================
   2. SKILLS

   Add new skills to the appropriate category.
   Use official documentation or trustworthy
   learning websites for skill links.
========================================== */

const skills = [

    {
        category: "Programming Languages",
        items: [
            {
                name: "C",
                url: "https://en.cppreference.com/w/c"
            },
            {
                name: "Java",
                url: "https://dev.java/learn/"
            },
            {
                name: "Python",
                url: "https://docs.python.org/3/tutorial/"
            },
            {
                name: "JavaScript",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                name: "SQL",
                url: "https://www.w3schools.com/sql/"
            }
        ]
    },

    {
        category: "Web Development",
        items: [
            {
                name: "HTML",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
            },
            {
                name: "CSS",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
            },
            {
                name: "Front-End Design",
                url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
            },
            {
                name: "Web Development",
                url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
            }
        ]
    },

    {
        category: "Computer Science & Databases",
        items: [
            {
                name: "Data Structures",
                url: "https://www.geeksforgeeks.org/data-structures/"
            },
            {
                name: "DBMS",
                url: "https://www.geeksforgeeks.org/dbms/"
            },
            {
                name: "Oracle Database",
                url: "https://docs.oracle.com/en/database/"
            },
            {
                name: "Cloud Computing",
                url: "https://aws.amazon.com/what-is-cloud-computing/"
            },
            {
                name: "Data Analysis",
                url: "https://www.kaggle.com/learn"
            }
        ]
    },

    {
        category: "Office & Productivity",
        items: [
            {
                name: "Microsoft Excel",
                url: "https://support.microsoft.com/excel"
            },
            {
                name: "Microsoft Word",
                url: "https://support.microsoft.com/word"
            },
            {
                name: "PowerPoint",
                url: "https://support.microsoft.com/powerpoint"
            },
            {
                name: "Google Sheets",
                url: "https://support.google.com/docs/topic/9054603"
            },
            {
                name: "Microsoft Office",
                url: "https://support.microsoft.com/"
            }
        ]
    },

    {
        category: "Professional & Creative Skills",
        items: [
            {
                name: "Programming",
                url: "https://www.freecodecamp.org/learn/"
            },
            {
                name: "Data Entry",
                url: "https://support.microsoft.com/excel"
            },
            {
                name: "Copy Typing",
                url: "https://www.typing.com/"
            },
            {
                name: "Communication",
                url: "https://www.toastmasters.org/"
            },
            {
                name: "Customer Service",
                url: "https://academy.hubspot.com/"
            },
            {
                name: "Problem Solving",
                url: "https://www.hackerrank.com/"
            },
            {
                name: "Teamwork",
                url: "https://www.atlassian.com/team-playbook"
            },
            {
                name: "Team Leadership",
                url: "https://www.atlassian.com/team-playbook"
            },
            {
                name: "Willingness to Learn",
                url: "https://www.freecodecamp.org/learn/"
            },
            {
                name: "Photo Editing",
                url: "https://www.photopea.com/"
            },
            {
                name: "Video Editing",
                url: "https://www.blackmagicdesign.com/products/davinciresolve"
            },
            {
                name: "Adobe Photoshop",
                url: "https://helpx.adobe.com/photoshop/user-guide.html"
            },
            {
                name: "Social Media",
                url: "https://www.facebook.com/business/learn"
            }
        ]
    }

];


function renderSkills() {

    const container = document.getElementById("skills-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    skills.forEach((group) => {

        const categorySection = document.createElement("div");
        categorySection.className = "skill-category";

        const heading = document.createElement("h3");
        heading.textContent = group.category;

        const skillList = document.createElement("div");
        skillList.className = "skills-list";

        group.items.forEach((skill) => {

            const link = document.createElement("a");

            link.className = "skill-link";
            link.href = skill.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            link.setAttribute(
                "aria-label",
                `${skill.name} learning resources`
            );

            const name = document.createElement("span");
            name.textContent = skill.name;

            const level = document.createElement("span");
            level.className = "skill-level";
            level.textContent = skill.level;
          

            link.append(name, level);
            skillList.appendChild(link);
        });

        categorySection.append(heading, skillList);

        container.appendChild(categorySection);
    });

}


/* ==========================================
   3. PROJECTS

   Replace demo and github with real URLs.
   Leave them empty if the project is not
   available online yet.
========================================== */

const projects = [

    {
        title: "Personal Portfolio Website",
        description:
            "A responsive personal portfolio presenting my background, skills, projects, and career goals.",

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "https://ajaya-patra-dev.github.io/My-Portfolio/",
        github: "",

        status: "Portfolio website"
    },

    {
        title: "To-Do List Application",
        description:
            "A task management application designed to help users add, organize, complete, and manage daily tasks.",

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "https://ajaya-patra-dev.github.io/to-do-list/",
        github: "https://github.com/ajaya-patra-dev/to-do-list",

        status: "Practice project"
    },

    {
        title: "E-commerce Website",
        description:
            "A front-end shopping website concept featuring product cards, a responsive layout, and shopping interface elements.",

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "",
        github: "",

        status: "Practice project"
    },

    {
        title: "Music Player",
        description:
            "A browser-based music player interface with playback controls and a simple user-friendly design.",

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "https://ajaya-patra-dev.github.io/Music-Player/",
        github: "https://github.com/ajaya-patra-dev/Music-Player",

        status: "Practice project"
    },

    {
        title: "Calculator",
        description:
            "A calculator interface for performing basic arithmetic operations with a simple and responsive layout.",

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "https://ajaya-patra-dev.github.io/calculator/",
        github: "https://github.com/ajaya-patra-dev/calculator",

        status: "Practice project"
    },
       {
        title: "WeatherNow",
        description:
            "A browser-based weather check interface, where we can check weather condition of any city/village.",

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "https://ajaya-patra-dev.github.io/WeatherNow/",
        github: "https://github.com/ajaya-patra-dev/WeatherNow",

        status: "Practice project"
       }

];


function createProjectButton(label, url, primary = false) {

    const link = document.createElement("a");

    link.className = `btn ${primary ? "btn-primary" : "btn-outline"}`;

    link.textContent = label;

    if (url && url.trim() !== "") {

        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

    } else {

        link.href = "#projects";
        link.classList.add("btn-disabled");

        link.setAttribute("aria-disabled", "true");
        link.title = "Add a real project URL in script.js first";

        link.addEventListener("click", (event) => {
            event.preventDefault();
        });
    }

    return link;
}


function renderProjects() {

    const container = document.getElementById("project-grid");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    projects.forEach((project, index) => {

        const card = document.createElement("article");
        card.className = "project-card";

        const number = document.createElement("span");
        number.className = "project-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tags = document.createElement("div");
        tags.className = "project-tags";

        project.technologies.forEach((technology) => {

            const tag = document.createElement("span");
            tag.className = "project-tag";
            tag.textContent = technology;

            tags.appendChild(tag);
        });

        const buttons = document.createElement("div");
        buttons.className = "project-buttons";

        const demoButton = createProjectButton(
            "View Project",
            project.demo,
            true
        );

        const githubButton = createProjectButton(
            "Open in GitHub",
            project.github
        );

        buttons.append(demoButton, githubButton);

        card.append(number, title, description, tags, buttons);

        container.appendChild(card);
    });

}


/* ==========================================
   4. JOBS & INTERNSHIPS

   Add verified details only.
   Do not describe an application or assignment
   as completed employment.
========================================== */

const experiences = [

    {
        type: "Internship",
        title: "Web Devloper Intern",

        organization: "SAM Al Technologies",

        description:
            "Website development task focused on HTML, CSS, JavaScript, responsive design, and presenting technical skills.",

        status: "complited",

        link: ""
    }

    /*
    EXAMPLE: Add another entry by copying this format.

    ,{
        type: "Internship",
        title: "Your Actual Internship Title",
        organization: "Company Name",
        description: "Describe your actual responsibilities.",
        status: "Completed / Ongoing",
        link: "https://your-real-certificate-or-offer-link"
    }
    */

];


function renderExperiences() {

    const container = document.getElementById("experience-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    experiences.forEach((experience) => {

        const card = document.createElement("article");
        card.className = "experience-card";

        const type = document.createElement("span");
        type.className = "experience-type";
        type.textContent = experience.type;

        const title = document.createElement("h3");
        title.textContent = experience.title;

        const organization = document.createElement("p");
        organization.textContent = experience.organization;

        const description = document.createElement("p");
        description.textContent = experience.description;

        const status = document.createElement("span");
        status.className = "status-text";
        status.textContent = experience.status;

        card.append(type, title, organization, description, status);

        if (experience.link) {

            const link = createProjectButton(
                "View Details",
                experience.link,
                false
            );

            card.appendChild(link);
        }

        container.appendChild(card);
    });

}


/* ==========================================
   5. CERTIFICATES

   Add certificates only after you earn them.
   Replace the example structure below.
========================================== */

const certificates = [

    
    // Example:

    {
        title: "Certificate Course on Artificial Intelligence",
        issuer: "IBM SkillBuild in Advanced IT Skills",
        description: "Certificate earned after completing the course.",
        date: "2025",
        link: "https://your-real-certificate-link"
    }

    

];


function renderCertificates() {

    const container = document.getElementById("certificates-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (certificates.length === 0) {

        const emptyCard = document.createElement("article");
        emptyCard.className = "certificate-card";

        const icon = document.createElement("div");
        icon.className = "certificate-icon";
        icon.textContent = "🎓";

        const title = document.createElement("h3");
        title.textContent = "Certificates Coming Soon";

        const description = document.createElement("p");

        description.textContent =
            "Certificates and achievements will be added here as they are earned.";

        emptyCard.append(icon, title, description);

        container.appendChild(emptyCard);

        return;
    }

    certificates.forEach((certificate) => {

        const card = document.createElement("article");
        card.className = "certificate-card";

        const icon = document.createElement("div");
        icon.className = "certificate-icon";
        icon.textContent = "🎓";

        const title = document.createElement("h3");
        title.textContent = certificate.title;

        const issuer = document.createElement("p");
        issuer.textContent = `Issued by: ${certificate.issuer}`;

        const description = document.createElement("p");
        description.textContent = certificate.description || "";

        card.append(icon, title, issuer, description);

        if (certificate.date) {

            const date = document.createElement("p");
            date.textContent = `Year: ${certificate.date}`;

            card.appendChild(date);
        }

        if (certificate.link) {

            const button = createProjectButton(
                "View Certificate",
                certificate.link,
                true
            );

            card.appendChild(button);
        }

        container.appendChild(card);
    });

}


/* ==========================================
   6. MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });


    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            menuToggle.textContent = "☰";
        });
    });

}


/* ==========================================
   7. AUTOMATIC COPYRIGHT YEAR
========================================== */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ==========================================
   8. RENDER ALL DYNAMIC SECTIONS
========================================== */

renderSkills();
renderProjects();
renderExperiences();
renderCertificates();
