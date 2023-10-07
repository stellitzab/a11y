import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export const enum CardItems {
  NoAds = 'No ads',
  PlayAnywhere = 'Play anywhere',
  onDemand = 'Play music on demand',
  kids = 'Kid friendly app',
  studentDiscount = 'Discounts for students at universities',
  noExplicitMusic = '"No explicit music"-mode',
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public contents = [
    {
      title: 'Individual',
      isIncluded: [CardItems.NoAds, CardItems.PlayAnywhere, CardItems.onDemand],
      notIncluded: [
        CardItems.kids,
        CardItems.studentDiscount,
        CardItems.noExplicitMusic,
      ],
      numberOfAccounts: 1,
      price: '129 SEK',
    },
    {
      title: 'Duo',
      isIncluded: [CardItems.NoAds, CardItems.PlayAnywhere, CardItems.onDemand],
      notIncluded: [
        CardItems.kids,
        CardItems.studentDiscount,
        CardItems.noExplicitMusic,
      ],
      numberOfAccounts: 2,
      price: '149 SEK',
    },
    {
      title: 'Family',
      isIncluded: [
        CardItems.NoAds,
        CardItems.PlayAnywhere,
        CardItems.onDemand,
        CardItems.kids,
        CardItems.noExplicitMusic,
      ],
      notIncluded: [CardItems.studentDiscount],
      numberOfAccounts: 6,
      price: '299 SEK',
    },
    {
      title: 'Student',
      isIncluded: [
        CardItems.NoAds,
        CardItems.PlayAnywhere,
        CardItems.onDemand,
        CardItems.studentDiscount,
      ],
      notIncluded: [CardItems.kids, CardItems.noExplicitMusic],
      numberOfAccounts: 1,
      price: '99 SEK',
    },
  ];

  public selected = '';
  public submitted = false;
  public buttonText = 'Submit';

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({ plan: new FormControl('') });
  }

  ngOnInit(): void {}

  onChildSelectionChanged(value: string) {
    this.selected = value;
  }

  public onSubmit() {
    if (this.selected) {
      this.submitted = !this.submitted;
      this.buttonText = this.submitted ? 'Reset' : 'Submit';
    } else {
      alert('You did not make a selection!');
    }
  }
}
