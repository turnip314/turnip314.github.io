import { Component } from '@angular/core';

interface TeachingEntry {
    title: string;
    subtitle: string;
    description: string[];
    links: { name: string; url: string }[];
}

@Component({
    selector: 'pm-teaching',
    templateUrl: './teaching.component.html',
    styleUrls: ['./teaching.component.css'],
    standalone: false
})
export class TeachingComponent {
    courses: TeachingEntry[] = [
        {
            title: 'CS 240E: Data Structures and Management (Enriched)',
            subtitle: 'Sessional Instructor · University of Waterloo · Winter 2027',
            description: [
                'I will be teaching CS 240E in the Winter 2027 Term.'
            ],
            links: []
        },
    ];

    taPositions: TeachingEntry[] = [
        {
            title: 'CS 245: Logic and Computation',
            subtitle: 'Teaching Assistant · University of Waterloo · Fall 2026',
            description: [
                'Leading a tutorial section. Assisting with assignment and exam grading and proctoring.'
            ],
            links: []
        },
        {
            title: 'CS 240: Data Structures and Data Management',
            subtitle: 'Instructional Apprentice · University of Waterloo · Spring 2026',
            description: [
                'Lead two tutorial sections. Assisted with exam grading and proctoring. Delivered a substitute lecture.'
            ],
            links: []
        },
        {
            title: 'AMATH 242 / CS 371: Introduction to Computational Mathematics',
            subtitle: 'Teaching Assistant · University of Waterloo · Winter 2026',
            description: [
                'Held office hours and assisted with assignment and exam grading and proctoring.'
            ],
            links: []
        },
        {
            title: 'CS 370: Numerical Computation',
            subtitle: 'Teaching Assistant · University of Waterloo · Winter 2025',
            description: [
                'Held office hours and assisted with assignment and exam grading and proctoring.'
            ],
            links: []
        },
        {
            title: 'CS 245: Logic and Computation',
            subtitle: 'Instructional Apprentice · University of Waterloo · Fall 2024',
            description: [
                'Lead a tutorial section and held office hours. Assisted with exam grading and proctoring.'
            ],
            links: []
        },
        {
            title: 'CS 370: Numerical Computation',
            subtitle: 'Teaching Assistant · University of Waterloo · Spring 2024',
            description: [
                'Held office hours and assisted with assignment and exam grading and proctoring.'
            ],
            links: []
        },
        {
            title: 'CS 370: Numerical Computation',
            subtitle: 'Teaching Assistant · University of Waterloo · Winter 2024',
            description: [
                'Held office hours and assisted with assignment and exam grading and proctoring.'
            ],
            links: []
        },
    ];

    mentorship: TeachingEntry[] = [
        {
            title: 'Directed Reading Program Mentor',
            subtitle: 'University of Waterloo Women in Mathematics · Winter 2026',
            description: [
                'Mentored three undergraduate women through a reading project on polynomial system solving.'
            ],
            links: []
        },
    ];
}
