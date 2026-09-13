const stars =
    document.querySelector(".stars");

const toggle =
    document.querySelector(".theme-toggle");

const STAR_COUNT = 100;


for (let i = 0; i < STAR_COUNT; i++) {

    const star =
        document.createElement("span");

    star.classList.add("star");

    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;


    const size =
        Math.random() * 3 + 1;

    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;


    star.style.setProperty(
        "--duration",
        `${Math.random() * 4 + 2}s`
    );

    star.style.setProperty(
        "--delay",
        `${Math.random() * 5}s`
    );


    stars.appendChild(star);
}



toggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "day"
        );

        const isDay =
            document.body.classList.contains(
                "day"
            );

        toggle.setAttribute(
            "aria-label",
            isDay
                ? "Switch to night"
                : "Switch to day"
        );

    }
);



const hero =
    document.querySelector(".hero");


function updateHeader() {

    if (window.scrollY > 50) {

        hero.classList.add("scrolled");

    } else {

        hero.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();



const projects = [

    {
        name: "ISSUE TRACKER",

        short:
            "Full-stack issue tracking platform",

        subtitle:
            "React · Express · PostgreSQL",

        description: `
            <p>
                A full-stack issue tracking platform
                designed for managing software development
                issues.
            </p>

            <p>
                I built the REST API, authentication,
                validation, database layer and frontend
                integration.
            </p>

            <p>
                The project uses a clean separation
                between frontend and backend with
                API-driven communication.
            </p>
        `,

        technologies: [
            "React",
            "TypeScript",
            "Express",
            "PostgreSQL",
            "JWT",
            "Zod",
            "Swagger",
            "React Query"
        ],

        github:
            "https://github.com/aista12/Intern_issue_tracker",

        demo:
            "https://intern-issue-tracker.vercel.app/"
    },


    {
        name: "DMS",

        short:
            "Clinic management backend system",

        subtitle:
            "NestJS · Prisma · PostgreSQL",

        description: `
            <p>
                A backend-focused management system
                for working with clinic and medical
                service data.
            </p>

            <p>
                I worked with NestJS, Prisma and
                PostgreSQL to implement structured
                CRUD operations and API endpoints.
            </p>

            <p>
                The project gave me practical experience
                with backend architecture, database
                interaction and building structured
                server-side applications.
            </p>
        `,

        technologies: [
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "REST API"
        ],

        github:
            "https://github.com/vention-js-lab/DMS",

        demo:
            "#"
    },


    {
        name: "CUPNOTE",

        short:
            "Web application built with Express",

        subtitle:
            "Express · EJS · SQLite",

        description: `
            <p>
                A lightweight web application built
                with Express and server-side rendering.
            </p>

            <p>
                The project uses SQLite for persistent
                data storage and EJS for rendering
                the interface.
            </p>

            <p>
                It provided practical experience with
                server-side applications, routing,
                templates and database persistence.
            </p>
        `,

        technologies: [
            "Node.js",
            "Express",
            "EJS",
            "SQLite"
        ],

        github:
            "https://github.com/00017520/cupNote",

        demo:
            "#"
    }

];



const projectsGrid =
    document.querySelector(
        "#projectsGrid"
    );

const projectDetail =
    document.querySelector(
        "#projectDetail"
    );

const projectDetailTitle =
    document.querySelector(
        "#projectDetailTitle"
    );

const projectDetailSubtitle =
    document.querySelector(
        "#projectDetailSubtitle"
    );

const projectDetailDescription =
    document.querySelector(
        "#projectDetailDescription"
    );

const projectTech =
    document.querySelector(
        "#projectTech"
    );

const githubLink =
    document.querySelector(
        "#githubLink"
    );

const demoLink =
    document.querySelector(
        "#demoLink"
    );

const backButton =
    document.querySelector(
        "#backButton"
    );




function renderProjects() {

    projectsGrid.innerHTML = "";


    projects.forEach(
        (project, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "project-button";


            button.innerHTML = `

                <h3>
                    ${project.name}
                </h3>

                <p>
                    ${project.short}
                </p>

                <p>
                    ${project.subtitle}
                </p>

            `;


            button.addEventListener(
                "click",
                () => openProject(index)
            );


            projectsGrid.appendChild(
                button
            );

        }
    );
}


function openProject(index) {

    const project =
        projects[index];


    projectsGrid.style.opacity =
        "0";

    projectsGrid.style.transform =
        "translateY(20px)";


    setTimeout(
        () => {

            projectsGrid.style.display =
                "none";


            projectDetail.classList.add(
                "active"
            );


            projectDetailTitle.textContent =
                "";


            typeText(
                projectDetailTitle,
                project.name,
                70
            );


            projectDetailSubtitle.textContent =
                project.subtitle;


            projectDetailDescription.innerHTML =
                project.description;


            projectTech.innerHTML =
                "";


            project.technologies.forEach(
                technology => {

                    const tag =
                        document.createElement(
                            "span"
                        );


                    tag.textContent =
                        technology;


                    projectTech.appendChild(
                        tag
                    );

                }
            );


            githubLink.href =
                project.github;


            demoLink.href =
                project.demo;


            if (project.demo === "#") {

                demoLink.style.display =
                    "none";

            } else {

                demoLink.style.display =
                    "";

            }


            const frame =
                document.querySelector(
                    ".projects-frame"
                );


            const frameTop =
                frame.getBoundingClientRect().top +
                window.scrollY;


            window.scrollTo({

                top:
                    frameTop - 80,

                behavior:
                    "smooth"

            });

        },

        350
    );
}



backButton.addEventListener(
    "click",
    () => {

        projectDetail.classList.remove(
            "active"
        );


        setTimeout(
            () => {

                projectsGrid.style.display =
                    "flex";


                requestAnimationFrame(
                    () => {

                        projectsGrid.style.opacity =
                            "1";

                        projectsGrid.style.transform =
                            "translateY(0)";

                    }
                );

            },

            200
        );

    }
);




function typeText(
    element,
    text,
    speed = 60
) {

    element.textContent =
        "";

    let index = 0;


    function writeLetter() {

        if (
            index >= text.length
        ) {

            return;

        }


        element.textContent +=
            text[index];


        index++;


        setTimeout(
            writeLetter,
            speed
        );

    }


    writeLetter();
}



const animatedTitles =
    document.querySelectorAll(
        ".animated-title"
    );


const titleObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting &&
                        !entry.target.dataset.typed
                    ) {

                        entry.target.dataset.typed =
                            "true";


                        typeText(
                            entry.target,
                            entry.target.dataset.text,
                            70
                        );

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


animatedTitles.forEach(
    title =>
        titleObserver.observe(title)
);



const arrows =
    document.querySelectorAll(
        ".journey-arrow"
    );




arrows.forEach(
    arrow => {

        const path =
            arrow.querySelector(
                ".arrow-line"
            );

        if (!path) {
            return;
        }

        const length =
            path.getTotalLength();

        arrow.style.setProperty(
            "--arrow-length",
            length
        );

        path.style.strokeDasharray =
            length;

        path.style.strokeDashoffset =
            length;

    }
);




function updateArrows() {

    arrows.forEach(
        arrow => {

            const path =
                arrow.querySelector(
                    ".arrow-line"
                );

            if (!path) {
                return;
            }


            const rect =
                arrow.getBoundingClientRect();


            const viewportHeight =
                window.innerHeight;


            /*
             * Start drawing when the arrow
             * enters the bottom of the screen.
             */

            const start =
                viewportHeight  * 0.5;


            /*
             * Finish drawing when the arrow
             * reaches 15% from the top.
             */

            const end =
                viewportHeight * 0.15;


            const distance =
                start - end;


            const travelled =
                start - rect.top;


            let progress =
                travelled / distance;


            progress =
                Math.max(
                    0,
                    Math.min(
                        1,
                        progress
                    )
                );


            const length =
                path.getTotalLength();


            path.style.strokeDashoffset =
                length -
                (
                    length * progress
                );

        }
    );

}


window.addEventListener(
    "scroll",
    updateArrows,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateArrows
);




updateArrows();



renderProjects();