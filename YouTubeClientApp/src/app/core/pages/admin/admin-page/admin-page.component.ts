import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public addCardForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addCardForm = this.formBuilder.group({
      titleControl: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      discriptionControl: ['',
        [
          Validators.maxLength(255)
        ]
      ],
      imageControl: ['',
        [

        ]
      ],
      linkControl: ['',
        [

        ]
      ],
      dateControl: ['',
        [

        ]
      ],

    })
  }

  onSubmit() {

  }

}
