import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCustomVideos } from 'src/app/redux/actions/addCustomVideo.action';
import { validateDate, validateTitleBlock, validateUrl } from 'src/app/shared/validators/add-new-card.validator';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit {

  public addCardForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.addCardForm = this.formBuilder.group({
      titleControl: ['',
        [
          Validators.required,
          validateTitleBlock
        ]
      ],
      discriptionControl: ['',
        [
          Validators.maxLength(255)
        ]
      ],
      imageControl: ['',
        [
          Validators.required,
          validateUrl
        ]
      ],
      linkControl: ['',
        [
          Validators.required,
          validateUrl
        ]
      ],
      dateControl: ['',
        [
          Validators.required,
          validateDate
        ]
      ],

    })
  }

  onSubmit() {
    console.log(this.addCardForm.value);
    console.log(this.addCardForm);
    
    let resultObj = {
      title: this.addCardForm.value.titleControl,
      discription: this.addCardForm.value.dateControl,
      imageLink: this.addCardForm.value.imageControl,
      link: this.addCardForm.value.linkControl,
      date: this.addCardForm.value.dateControl,
    }
    
    this.store.dispatch(createCustomVideos( { customVideo : resultObj } )); 

  }

}
