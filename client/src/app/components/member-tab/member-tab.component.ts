import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faMessage, faImage } from '@fortawesome/free-solid-svg-icons';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/Member';

@Component({
  selector: 'app-member-tab',
  templateUrl: './member-tab.component.html',
  styleUrls: ['./member-tab.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, GalleryModule],
})
export class MemberTabComponent implements OnInit {
  userIcon = faUser;
  messageIcon = faMessage;
  imageIcon = faImage;

  openTab = 1;

  @Input() member$: Observable<Member> | null = null;
  member: Member | null = null;

  images: GalleryItem[] = [];

  ngOnInit(): void {
    if (!this.member$) return;

    this.member$.subscribe({
      next: (res: Member) => {
        this.member = res;
        this.extractPhotos();
      },
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

  extractPhotos() {
    if (!this.member) return;

    this.member.photos.forEach((photo) => {
      this.images.push(
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl }),
        new ImageItem({ src: photo.photoUrl, thumb: photo.photoUrl })
      );
    });
  }
}
