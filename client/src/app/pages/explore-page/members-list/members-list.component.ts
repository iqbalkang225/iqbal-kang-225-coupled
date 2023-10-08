import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
})
export class MembersListComponent implements OnInit {
  members: Member[] | null = null;

  constructor(private membersService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.membersService.getMembers().subscribe({
      next: (response) => (this.members = response),
      error: (error) => console.log(error),
    });
  }
}
