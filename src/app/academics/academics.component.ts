import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {

  constructor() { }

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
  };

  terms = ['Term 1A', 'Term 1B', 'COOP 1', 'Term 2A', 'COOP 2', 'Term 2B', 'COOP 3'];

  timeByTerm = {
    'Term 1A': 'Fall 2018',
    'Term 1B': 'Winter 2019',
    'COOP 1': 'Spring 2019',
    'Term 2A': 'Fall 2019',
    'COOP 2': 'Winter 2020',
    'Term 2B': 'Spring 2020',
    'COOP 3': 'Fall 2020'
  }

  courseColumnsToDisplay = ['courseCode', 'courseName', 'courseInstructor']

  ngOnInit(): void {
  }

}
