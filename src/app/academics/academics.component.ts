import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth <= 720) {
      this.courseColumnsToDisplay = ['courseCode', 'courseName']
      this.scholarshipColumnsToDisplay = ['name', 'value', 'year']
      this.gradCourseColumnsToDisplay = ['courseCode', 'courseName']
    }
    else {
      this.courseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor']
      this.scholarshipColumnsToDisplay = ['name', 'sponsor', 'value', 'year']
      this.gradCourseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor', 'term'];
    }
  }

  constructor() { }

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

  courses = {
    'Term 1A': [
      { code: 'MATH 145', name: 'Algebra (Advanced Level)', instructor: 'David Jao'},
      { code: 'MATH 147', name: 'Calculus 1 (Advanced Level)', instructor: 'Ken Davidson'},
      { code: 'CS 145', name: 'Designing Functional Programs (Advanced Level)', instructor: 'Gordon Cormack'},
      { code: 'PHYS 121', name: 'Mechanics', instructor: 'Richard Epp'},
      { code: 'ENGL 119', name: 'Introduction to Academic Writing', instructor: 'Mike Lesiuk'},
    ],
    'Term 1B': [
      { code: 'MATH 146', name: 'Linear Algebra 1 (Advanced Level)', instructor: 'Ross Willard'},
      { code: 'MATH 148', name: 'Calculus 2 (Advanced Level)', instructor: 'Laurent Marcoux'},
      { code: 'CS 146', name: 'Elementary Algorithm Design and Data Abstraction (Advanced Level)', instructor: 'Brad Lushman'},
      { code: 'PHYS 122', name: 'Waves, Electricity, and Magnetism', instructor: 'Crystal Senko'},
      { code: 'FR 151', name: 'Basic French 1', instructor: 'Cynthia Tremblay'},
      { code: 'PD 1', name: 'Career Fundamentals', instructor: 'N/A'},
    ],
    'COOP 1': [
      { code: 'COOP 1', name: 'Wish', instructor: 'N/A'},
      { code: 'PD 11', name: 'Process for Technical Report Writing', instructor: 'N/A'},
    ],
    'Term 2A': [
      { code: 'MATH 245', name: 'Linear Algebra 2 (Advanced Level)', instructor: 'Rahim Moosa'},
      { code: 'MATH 249', name: 'Introduction to Combinatorics (Advanced Level)', instructor: 'Kevin Purbhoo'},
      { code: 'STAT 240', name: 'Probability (Advanced Level)', instructor: 'Aukosh Jagannath'},
      { code: 'CS 241E', name: 'Foundations of Sequential Programs (Enriched)', instructor: 'Ondrek Lhotak'},
      { code: 'CS 245E', name: 'Logic and Computation (Enriched)', instructor: 'Jonathan Buss'},
      { code: 'CS 246', name: 'Object-Oriented Software Development', instructor: 'Michael Godfrey'},
    ],
    'COOP 2': [
      { code: 'COOP 2', name: 'Wayfair', instructor: 'N/A'},
      { code: 'PD 10', name: 'Professional Responsibility in Computing', instructor: 'N/A'},
      { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A'},
    ],
    'Term 2B': [
      { code: 'MATH 247', name: 'Calculus 3 (Advanced Level)', instructor: 'Blake Madill'},
      { code: 'PMATH 347', name: 'Groups and Rings', instructor: 'William Slofstra'},
      { code: 'CS 240', name: 'Data Structures and Data Management', instructor: 'Karen Anderson'},
      { code: 'CS 251', name: 'Computer Organization and Design', instructor: 'Rosina Kharal'},
      { code: 'CS 370', name: 'Numerical Computation', instructor: 'Kimon Fountoulakis'},
    ],
    'COOP 3': [
      { code: 'COOP 3', name: 'BDO', instructor: 'N/A'},
      { code: 'CO 255', name: 'Introduction to Optimization (Advanced Level)', instructor: 'Jim Geelen'},
      { code: 'ENGL 119', name: 'Communications in Mathematics & Computer Science', instructor: 'Diana Lobb'},
      { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A'},
    ],
    'Term 3A': [
      { code: 'PMATH 348', name: 'Fields and Galois Theory', instructor: 'Yu-Ru Liu'},
      { code: 'PMATH 352', name: 'Complex Analysis', instructor: 'Ruxandra Moraru'},
      { code: 'PMATH 365', name: 'Differential Geometry', instructor: 'Stephen New'},
      { code: 'CS 341', name: 'Algorithms', instructor: 'Online'},
      { code: 'CS 350', name: 'Operating Systems', instructor: 'Lesley Istead'},
      { code: 'CO 487', name: 'Applied Cryptography', instructor: 'Alfred Menezes'},
    ],
    'COOP 4': [
      { code: 'COOP 4', name: 'University of Waterloo - Mathematics Research Assistant', instructor: 'Yu-Ru Liu'},
      { code: 'PMTATH 351', name: 'Real Analysis', instructor: 'Stephen New'},
      { code: 'PD 8', name: 'Intercultural Communications', instructor: 'N/A'},
      { code: 'WKRPT', name: 'Work Term Report', instructor: 'N/A'},
    ],
    'Term 3B': [
      { code: 'PMATH 440', name: 'Analytic Number Theory', instructor: 'Wentang Kuo'},
      { code: 'PMATH 450', name: 'Lebesgue Integration and Fourier Analysis', instructor: 'Blake Madill'},
      { code: 'CS 360', name: 'Intro to the Theory of Computing', instructor: 'Jeffrey Shallit'},
      { code: 'CO 330', name: 'Combinatorial Enumeration', instructor: 'Stephen Melczer'},
      { code: 'CO 485', name: 'Mathematics of Public-Key Cryptography', instructor: 'Koray Karabina'},
      { code: 'PHYS 225', name: 'Modelling Life Physics', instructor: 'Bae-Yuen Ha'},
    ],
    'COOP 5': [
      { code: 'COOP 5', name: 'Noom', instructor: 'N/A'},
      { code: 'PD 6', name: 'Problem Solving', instructor: 'N/A'},
    ],
    'COOP 6': [
      { code: 'COOP 6', name: 'University of Waterloo - Mathematics Research Assistant', instructor: 'Stephen Melczer'},
      { code: 'STAT 231', name: 'Statistics', instructor: 'Michael John Davis'},
    ],
    'Term 4A': [
      { code: 'PMATH 433', name: 'Model Theory and Set Theory', instructor: 'Rahim Moosa'},
      { code: 'PMATH 445', name: 'Representation of Finite Groups', instructor: 'Wentang Kuo'},
      { code: 'CS 466', name: 'Algorithm Design and Analysis', instructor: 'Theresa Biedl'},
      { code: 'CS 485', name: 'Foundations of Machine Learning', instructor: 'Shai Ben-David'},
      { code: 'CO 485', name: 'Continuous Optimization', instructor: 'Levent Tuncel'},
    ],
    'Term 4B': [
      { code: 'PMATH 441', name: 'Algebraic Number Theory', instructor: 'Blake Madill'},
      { code: 'CO 430', name: 'Algebraic Enumeration', instructor: 'Oliver Pechenik'},
      { code: 'CS 480', name: 'Introduction to Machine Learning', instructor: 'Pascal Poupart'},
      { code: 'PHYS 124', name: 'Modern Physics', instructor: 'Robert Mann'},
    ],
    'Grad': [
      { code: 'PMATH 764', name: 'Algebraic Geometry', instructor: 'Changho Han', year: 2024},
      { code: 'CS 764', name: 'Computational Complexity', instructor: 'Eric Blais', year: 2024},
      { code: 'CS 860', name: 'Algebraic Complexity', instructor: 'Rafael Oliveira', year: 2024},
      { code: 'CS 686', name: 'Artificial Intelligence', instructor: 'Jesse Hoey', year: 2024},
      { code: 'CS 646', name: 'Software Architecture', instructor: 'Moni Haque', year: 2025},
      { code: 'CS 656', name: 'Computer Networks', instructor: 'Uzma Maroof', year: 2025},
      { code: 'CS 860', name: 'Commutative Algebra and Complexity', instructor: 'Rafael Oliveira', year: 2025},
      { code: 'MATH 900', name: 'University Mathematics Teaching Techniques', instructor: 'Zack Cramer', year: 2026},
    ],
  };

  terms = ['Term 1A', 'Term 1B', 'COOP 1', 'Term 2A', 'COOP 2', 'Term 2B', 'COOP 3', 'Term 3A', 'COOP 4', 'Term 3B', 'COOP 5', 'COOP 6', 'Term 4A', 'Term 4B'];
  gradTerms = ['Grad']

  timeByTerm = {
    'Term 1A': 'Fall 2018',
    'Term 1B': 'Winter 2019',
    'COOP 1': 'Spring 2019',
    'Term 2A': 'Fall 2019',
    'COOP 2': 'Winter 2020',
    'Term 2B': 'Spring 2020',
    'COOP 3': 'Fall 2020',
    'Term 3A': 'Winter 2021',
    'COOP 4': 'Spring 2021',
    'Term 3B': 'Fall 2021',
    'COOP 5': 'Winter 2022',
    'COOP 6': 'Spring 2022',
    'Term 4A': 'Fall 2022',
    'Term 4B': 'Winter 2023',
    'Grad': '2024',
  }

  courseColumnsToDisplay: string[] = [];
  scholarshipColumnsToDisplay: string[] = [];
  gradCourseColumnsToDisplay: string[] = [];

  ngOnInit(): void {
    if (window.innerWidth <= 720) {
      this.courseColumnsToDisplay = ['courseCode', 'courseName'];
      this.scholarshipColumnsToDisplay = ['name', 'value', 'year']
      this.gradCourseColumnsToDisplay = ['courseCode', 'courseName']
    }
    else {
      this.courseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor'];
      this.scholarshipColumnsToDisplay = ['name', 'sponsor', 'value', 'year']
      this.gradCourseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor', 'term'];
    }
  }
}
