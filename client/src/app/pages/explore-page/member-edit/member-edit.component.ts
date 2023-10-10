import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { Member } from 'src/app/models/Member';
import { UserResponse } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { MemberService } from 'src/app/services/member.service';
import { faImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  labelClasses = 'text-sm font-bold';

  @ViewChild('form') form: NgForm | undefined;

  userIcon = faUser;
  imageIcon = faImage;

  member: Member | null = null;
  user: UserResponse | null = null;
  openTab = 1;

  constructor(
    private authService: AuthService,
    private memberService: MemberService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getMember();
  }

  getUser() {
    this.authService.user$.pipe(take(1)).subscribe({
      next: (response) => (this.user = response),
    });
  }

  getMember() {
    if (!this.user) return;
    this.memberService.getMember(this.user.userName).subscribe({
      next: (response) => (this.member = response),
      error: (error) => console.log(error),
    });
  }

  toggleTabs(tabNumber: number) {
    this.openTab = tabNumber;
  }

  getActiveTabClasses(selectedTab: number) {
    return {
      'text-primary bg-white': this.openTab !== selectedTab,
      'text-white bg-primary': this.openTab === selectedTab,
    };
  }

  getActiveTabContentClass(selectedTab: number) {
    return {
      hidden: this.openTab !== selectedTab,
      block: this.openTab === selectedTab,
    };
  }

  onSubmit(form: NgForm) {
    this.memberService.updateMember(form.value).subscribe({
      next: (response) => {
        this.toastr.success('Profile updated successfully');
        this.form?.reset(form.value);
      },
      error: (error) => console.log(error),
    });
  }
}
