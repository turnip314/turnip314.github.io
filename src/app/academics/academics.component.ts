import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'pm-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css'],
  standalone: false,
})
export class AcademicsComponent implements OnInit {

  private readonly gradCourses = [
    { code: 'PMATH 764', name: 'Algebraic Geometry', instructor: 'Changho Han', year: 2024 },
    { code: 'CS 764', name: 'Computational Complexity', instructor: 'Eric Blais', year: 2024 },
    { code: 'CS 860', name: 'Algebraic Complexity', instructor: 'Rafael Oliveira', year: 2024 },
    { code: 'CS 686', name: 'Artificial Intelligence', instructor: 'Jesse Hoey', year: 2024 },
    { code: 'CS 646', name: 'Software Architecture', instructor: 'Moni Haque', year: 2025 },
    { code: 'CS 656', name: 'Computer Networks', instructor: 'Uzma Maroof', year: 2025 },
    { code: 'CS 860', name: 'Commutative Algebra and Complexity', instructor: 'Rafael Oliveira', year: 2025 },
    { code: 'MATH 900', name: 'University Mathematics Teaching Techniques', instructor: 'Zack Cramer', year: 2026 },
  ]

  private readonly courses = {
    'Fall 2018': [
      { code: 'MATH 145', name: 'Algebra (Advanced Level)', instructor: 'David Jao' },
      { code: 'MATH 147', name: 'Calculus 1 (Advanced Level)', instructor: 'Ken Davidson' },
      { code: 'CS 145', name: 'Designing Functional Programs (Advanced Level)', instructor: 'Gordon Cormack' },
      { code: 'PHYS 121', name: 'Mechanics', instructor: 'Richard Epp' },
      { code: 'ENGL 119', name: 'Introduction to Academic Writing', instructor: 'Mike Lesiuk' },
    ],
    'Winter 2019': [
      { code: 'MATH 146', name: 'Linear Algebra 1 (Advanced Level)', instructor: 'Ross Willard' },
      { code: 'MATH 148', name: 'Calculus 2 (Advanced Level)', instructor: 'Laurent Marcoux' },
      { code: 'CS 146', name: 'Elementary Algorithm Design and Data Abstraction (Advanced Level)', instructor: 'Brad Lushman' },
      { code: 'PHYS 122', name: 'Waves, Electricity, and Magnetism', instructor: 'Crystal Senko' },
      { code: 'FR 151', name: 'Basic French 1', instructor: 'Cynthia Tremblay' },
      { code: 'PD 1', name: 'Career Fundamentals', instructor: 'N/A' },
    ],
    'Spring 2019': [
      { code: 'PD 11', name: 'Process for Technical Report Writing', instructor: 'N/A' },
    ],
    'Fall 2019': [
      { code: 'MATH 245', name: 'Linear Algebra 2 (Advanced Level)', instructor: 'Rahim Moosa' },
      { code: 'MATH 249', name: 'Introduction to Combinatorics (Advanced Level)', instructor: 'Kevin Purbhoo' },
      { code: 'STAT 240', name: 'Probability (Advanced Level)', instructor: 'Aukosh Jagannath' },
      { code: 'CS 241E', name: 'Foundations of Sequential Programs (Enriched)', instructor: 'Ondrek Lhotak' },
      { code: 'CS 245E', name: 'Logic and Computation (Enriched)', instructor: 'Jonathan Buss' },
      { code: 'CS 246', name: 'Object-Oriented Software Development', instructor: 'Michael Godfrey' },
    ],
    'Winter 2020': [
      { code: 'PD 10', name: 'Professional Responsibility in Computing', instructor: 'N/A' },
      { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A' },
    ],
    'Spring 2020': [
      { code: 'MATH 247', name: 'Calculus 3 (Advanced Level)', instructor: 'Blake Madill' },
      { code: 'PMATH 347', name: 'Groups and Rings', instructor: 'William Slofstra' },
      { code: 'CS 240', name: 'Data Structures and Data Management', instructor: 'Karen Anderson' },
      { code: 'CS 251', name: 'Computer Organization and Design', instructor: 'Rosina Kharal' },
      { code: 'CS 370', name: 'Numerical Computation', instructor: 'Kimon Fountoulakis' },
    ],
    'Fall 2020': [
      { code: 'CO 255', name: 'Introduction to Optimization (Advanced Level)', instructor: 'Jim Geelen' },
      { code: 'ENGL 119', name: 'Communications in Mathematics & Computer Science', instructor: 'Diana Lobb' },
      { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A' },
    ],
    'Winter 2021': [
      { code: 'PMATH 348', name: 'Fields and Galois Theory', instructor: 'Yu-Ru Liu' },
      { code: 'PMATH 352', name: 'Complex Analysis', instructor: 'Ruxandra Moraru' },
      { code: 'PMATH 365', name: 'Differential Geometry', instructor: 'Stephen New' },
      { code: 'CS 341', name: 'Algorithms', instructor: 'Online' },
      { code: 'CS 350', name: 'Operating Systems', instructor: 'Lesley Istead' },
      { code: 'CO 487', name: 'Applied Cryptography', instructor: 'Alfred Menezes' },
    ],
    'Spring 2021': [
      { code: 'PMTATH 351', name: 'Real Analysis', instructor: 'Stephen New' },
      { code: 'PD 8', name: 'Intercultural Communications', instructor: 'N/A' },
      { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A' },
    ],
    'Fall 2021': [
      { code: 'PMATH 440', name: 'Analytic Number Theory', instructor: 'Wentang Kuo' },
      { code: 'PMATH 450', name: 'Lebesgue Integration and Fourier Analysis', instructor: 'Blake Madill' },
      { code: 'CS 360', name: 'Intro to the Theory of Computing', instructor: 'Jeffrey Shallit' },
      { code: 'CO 330', name: 'Combinatorial Enumeration', instructor: 'Stephen Melczer' },
      { code: 'CO 485', name: 'Mathematics of Public-Key Cryptography', instructor: 'Koray Karabina' },
      { code: 'PHYS 225', name: 'Modelling Life Physics', instructor: 'Bae-Yuen Ha' },
    ],
    'Winter 2022': [
      { code: 'PD 6', name: 'Problem Solving', instructor: 'N/A' },
    ],
    'Spring 2022': [
      { code: 'STAT 231', name: 'Statistics', instructor: 'Michael John Davis' },
    ],
    'Fall 2022': [
      { code: 'PMATH 433', name: 'Model Theory and Set Theory', instructor: 'Rahim Moosa' },
      { code: 'PMATH 445', name: 'Representation of Finite Groups', instructor: 'Wentang Kuo' },
      { code: 'CS 466', name: 'Algorithm Design and Analysis', instructor: 'Theresa Biedl' },
      { code: 'CS 485', name: 'Foundations of Machine Learning', instructor: 'Shai Ben-David' },
      { code: 'CO 485', name: 'Continuous Optimization', instructor: 'Levent Tuncel' },
    ],
    'Winter 2023': [
      { code: 'PMATH 441', name: 'Algebraic Number Theory', instructor: 'Blake Madill' },
      { code: 'CO 430', name: 'Algebraic Enumeration', instructor: 'Oliver Pechenik' },
      { code: 'CS 480', name: 'Introduction to Machine Learning', instructor: 'Pascal Poupart' },
      { code: 'PHYS 124', name: 'Modern Physics', instructor: 'Robert Mann' },
    ]
  };

  readonly terms = Object.keys(this.courses);

  private readonly coursesFlattened = Object.entries(this.courses).flatMap(([term, courses]) => {
    return courses.map(
      course => {
        return {
          term: term,
          code: course.code,
          name: course.name,
          instructor: course.instructor
        }
      }
    );
  });

  private resizeSub?: Subscription;

  undergradDataSource = new MatTableDataSource(
    this.coursesFlattened
  );

  gradDataSource = new MatTableDataSource(
    this.gradCourses
  );


  private readonly platformId = inject(PLATFORM_ID);
  constructor() { }

  @ViewChild('gradSort') gradSort!: MatSort;
  @ViewChild('undergradSort') undergradSort!: MatSort;


  ngAfterViewInit() {
    this.gradDataSource.sort = this.gradSort;
    this.undergradDataSource.sort = this.undergradSort;

    this.undergradDataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'term':
          const [season, year] = item.term.split(' ');
          const seasonOrder = new Map([["Winter", 0], ["Spring", 1], ["Fall", 2]]);
          return Number(year) * 10 + (seasonOrder.get(season) ?? 0);

        default:
          return item[property as keyof typeof item];
      }
    };
  }

  scholarships = [
    {
      name: "Canada Graduate Scholarship - Master's",
      sponsor: "NSERC",
      value: "$27000",
      year: 2025
    },
    {
      name: "Queen Elizabeth II Scholarship in Science & Technology",
      sponsor: "University of Waterloo",
      value: "$15000",
      year: 2024
    },
    {
      name: "Graduate Excellence Award in Computer Science",
      sponsor: "University of Waterloo",
      value: "$4000",
      year: 2024
    },
    {
      name: "Mike Vangoch Memorial Scholarship",
      sponsor: "University of Waterloo",
      value: "$1200",
      year: 2023
    },
    {
      name: "Undergraduate Student Research Award",
      sponsor: "NSERC",
      value: "$6000",
      year: 2022
    },
    {
      name: "Undergraduate Student Research Award",
      sponsor: "NSERC",
      value: "$6000",
      year: 2021
    },
    {
      name: "Faculty of Mathematics Scholarship",
      sponsor: "University of Waterloo",
      value: "$5000",
      year: 2018
    },
  ]

  courseColumnsToDisplay: string[] = [];
  scholarshipColumnsToDisplay: string[] = [];
  gradCourseColumnsToDisplay: string[] = [];

  updateDisplayColumns(width: number) {
    if (width <= 720) {
      this.courseColumnsToDisplay = ['code', 'name'];
      this.scholarshipColumnsToDisplay = ['name', 'value', 'year']
      this.gradCourseColumnsToDisplay = ['code', 'name']
    }
    else {
      this.courseColumnsToDisplay = ['code', 'name', 'instructor', 'term']
      this.scholarshipColumnsToDisplay = ['name', 'sponsor', 'value', 'year']
      this.gradCourseColumnsToDisplay = ['code', 'name', 'instructor', 'year'];
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateDisplayColumns(window.innerWidth);

      this.resizeSub = fromEvent(window, 'resize').subscribe(() => {
        this.updateDisplayColumns(window.innerWidth);
      });
    }
  }

  ngOnDestroy() {
    this.resizeSub?.unsubscribe();
  }
}
