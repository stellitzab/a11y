import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItems } from '../main-page/main-page.component';
import { FormControl, FormGroup } from '@angular/forms';

type CardContent = {
  title: string;
  isIncluded: CardItems[];
  notIncluded: CardItems[];
  numberOfAccounts: number;
  price: string;
};

@Component({
  selector: 'app-comparison-card',
  templateUrl: './comparison-card.component.html',
  styleUrls: ['./comparison-card.component.scss'],
})
export class ComparisonCardComponent implements OnInit {
  @Input() content: CardContent | undefined;
  @Input()
  form!: FormGroup;

  @Output() selectionChanged = new EventEmitter<string>();

  public plan = new FormControl('');
  public selectedOption = '';
  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(value: string) {
    this.selectedOption = value;
    this.selectionChanged.emit(value);
  }
}
