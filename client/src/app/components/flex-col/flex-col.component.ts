import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-flex-col',
  templateUrl: './flex-col.component.html',
  styleUrls: ['./flex-col.component.css'],
})
export class FlexColComponent {
  @Input() externalClasses = '';
}
