import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';
import { faMessage, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberTabComponent } from 'src/app/components/member-tab/member-tab.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MemberTabComponent],
})
export class MemberDetailsComponent implements OnInit {
  messageIcon = faMessage;
  heartIcon = faHeart;

  member: Member | null = null;
  member$ = new Subject<Member>();

  constructor(
    private membersService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember() {
    const userName = this.route.snapshot.paramMap.get('username');

    if (!userName) return;

    this.membersService.getMember(userName).subscribe({
      next: (response) => {
        this.member$.next(response);
        this.member = response;
      },
      error: (error) => console.log(error),
    });
  }
}
