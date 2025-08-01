import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    constructor(private _sanitizer: DomSanitizer) {

    }

    presentations = [
        {
            title: "A SageMath Package for Analytic Combinatorics in Several Variables",
            locations: [
                "Hakkaido University, SageDays Workshop, Aug, 2025.",
            ],
            links: [
            ]
        },
        {
            title: "A SageMath Package for Analytic Combinatorics in Several Variables: Beyond the Smooth Case",
            locations: [
                "Hakkaido University, Formal Power Series and Algebraic Combinatorics, July, 2025.",
            ],
            links: [
                {
                    name: "HTML",
                    url: "/assets/jupyter/fpsac_run.html"
                },
                {
                    name: "Notebook",
                    url: "/assets/jupyter/fpsac_code.ipynb"
                }
            ]
        },
        {
            title: "Automatically Computing Asymptotics of Sequences with Multivariate Rational Generating Functions",
            locations: [
                "Fields Institute, International Conference on Probabilistic, Combinatorial and Asymptotic Methods for the Analysis of Algorithms. May, 2025.",
            ],
            links: [
                {
                    name: "Slides",
                    url: "/assets/pdfs/AofA2025.pdf"
                },
                {
                    name: "Recording",
                    url: "https://youtu.be/3usWh_Neusw?si=i3TMUoPgudgYAsQd"
                }
            ]
        },
        {
            title: "A Brief Introduction to Computational Analytic Combinatorics",
            locations: [
                "University of Waterloo, Undergraduate Student Research Seminar. August, 2022.",
                "Université Laval, Canadian Undergraduate Math Conference. July, 2022."
            ],
            links: [
                {
                    name: "Slides",
                    url: "/assets/pdfs/co-slides.pdf"
                },
                {
                    name: "Code Demo",
                    url: "/assets/pdfs/co-demo.pdf"
                }
            ]
        },
        {
            title: "Derangements, The Exponential Function, and The Principle of Inclusion Exclusion",
            locations: [
                "Fleetwood Park Secondary Math Club. December, 2021."
            ],
            links: [
                {
                    name: "Slides",
                    url: "/assets/pdfs/pie-slides.pdf"
                }
            ]
        },
        {
            title: "An Introduction to Vinogradov's Mean Value Theorem",
            locations: [
                "Western University, Canadian Undergraduate Mathematics Conference. July 2021."
            ],
            links: [
                {
                    name: "Slides",
                    url: "/assets/pdfs/vinogradov-mvt.pdf"
                },
                {
                    name: "Recording",
                    url: "https://drive.google.com/file/d/1Vq5rpR1qHVkRQ4p4AGS7e3XTEEhzH7V5/view"
                }
            ]
        }
    ]

    projects = [
        {
            title: "Jumpy Turnip",
            view: 1,
            demos: [
                {
                    type: "image",
                    src: "./assets/images/jumpy-turnip-title.png"
                }, {
                    type: "image",
                    src: "./assets/images/jumpy-turnip-selection.png"
                }, {
                    type: "image",
                    src: "./assets/images/jumpy-turnip-code.png"
                },
            ],
            description: "Third person shooter game written in C++ and SFML with 4 difficulties, " +
                    "30 levels, 4 freeplay levels, 8 characters, and 12 upgrades per character. " +
                    "Credits to Kayla Estacio for the art, including the turnips and background images."
        },
        {
            title: "Minesweeper",
            view: 0,
            demos: [
                {
                    type: "image",
                    src: "./assets/images/minesweeper.png"
                }, {
                    type: "image",
                    src: "./assets/images/minesweeper2.png"
                }, {
                    type: "image",
                    src: "./assets/images/minesweeper3.png"
                },
            ],
            description: "A clone of Minesweeper written in Java using the Java Swing library."
        }, {
            title: "Chess Alts",
            view: 0,
            demos: [
                {
                    type: "image",
                    src: "./assets/images/turnip-tex-code.png"
                }, {
                    type: "image",
                    src: "./assets/images/turnip-tex-img.png"
                },
            ],
            description: "A math text compiler that can produce LaTeX-style math expressions. Work in Progress."
        }
    ]

    viewPrev(project) {
        project.view--;
        if (project.view < 0) {
            project.view += project.demos.length;
        }
    }

    viewNext(project) {
        project.view++;
        if (project.view >= project.demos.length) {
            project.view = 0;
        }
    }

}

