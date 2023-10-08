import { Component, Input } from '@angular/core';
import {
  faLocationDot,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { Member } from 'src/app/models/Member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent {
  locationIcon = faLocationDot;
  heartIcon = faHeart;
  messageIcon = faMessage;

  @Input() member: Member | undefined = undefined;
}
