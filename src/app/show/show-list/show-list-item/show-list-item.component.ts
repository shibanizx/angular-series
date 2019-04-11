import { Component, OnInit, Input } from '@angular/core';
import { ShowModel } from '../../shared/model/show-model';

@Component({
  selector: 'app-show-list-item',
  templateUrl: './show-list-item.component.html',
  styleUrls: ['./show-list-item.component.css']
})
export class ShowListItemComponent implements OnInit {

  @Input() show : ShowModel;

  constructor() { }

  ngOnInit() {
  }
}
