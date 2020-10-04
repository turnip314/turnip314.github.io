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
                    //src: "https://www.youtube.com/embed/V1KUx4B1k5k",
                    src: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/V1KUx4B1k5k")
                },
                {
                    type: "image",
                    src: "./assets/images/jumpy-turnip-title.png"
                },
                {
                    type: "image",
                    src: "./assets/images/jumpy-turnip-selection.png"
                },
            ]
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

