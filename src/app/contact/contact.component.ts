import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'pm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.formData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    })
  }

  onSubmit(formData) {
    console.log(formData)
    this.contact.postMessage(formData).subscribe(response => {
      location.href = 'https://mailthis.to/confirm';
      console.log(response);
    },
    error => {
      console.warn(error.responseText);
      console.log(error);
    })
  }

}
