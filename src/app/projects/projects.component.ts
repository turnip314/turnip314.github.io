import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    standalone: false
})
export class ProjectsComponent {
    constructor(private _sanitizer: DomSanitizer) {

    }

    presentations = [
        {
            title: "Applications of Computer Algebra in Analytic Combinatorics",
            locations: [
                "University of Waterloo, Symbolic Computation Group Seminar, Feb. 2026.",
            ],
            links: [
                {
                    name: "HTML",
                    url: "/resources/seminar/slides.html"
                },
            ]
        },
        {
            title: "A SageMath Package for Analytic Combinatorics in Several Variables",
            locations: [
                "Hakkaido University, SageDays Workshop, Aug, 2025.",
            ],
            links: [
                {
                    name: "HTML",
                    url: "/resources/SageDays/SageDays.html"
                },
                {
                    name: "Notebook",
                    url: "/resources/SageDays/SageDays.ipynb"
                }
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
}

