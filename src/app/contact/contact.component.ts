import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
    selector: 'pm-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {

  }

}
