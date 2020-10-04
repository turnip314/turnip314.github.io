import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    constructor(private _sanitizer: DomSanitizer) {

    }
    projects = [
        {
            title: "Jumpy Turnip",
            view: 1,
            demos: [
                {
                    type: "video",
                    src: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/V1KUx4B1k5k")
                }, {
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
            title: "TurnipTex",
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

