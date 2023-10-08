import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  member: Member | undefined;

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
      next: (response) => (this.member = response),
      error: (error) => console.log(error),
    });
  }
}
