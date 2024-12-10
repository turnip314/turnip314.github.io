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
      access_key: new FormControl('d78109c9-9464-42c4-81e2-ac493e1a0230', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(formData) {
    console.log(formData)
    this.contact.postMessage(formData).subscribe(response => {
      console.log(response);
    },
    error => {
      console.warn(error.responseText);
      console.log(error);
    })
  }

}
