import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/Activity';
import { SharedService } from 'src/app/shared/shared/shared.service';

@Component({
  selector: 'bored-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.scss'],
})
export class FavoriteActivityComponent implements OnInit {
  savedActivities: Activity[] = [];
  noFavorites = true;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.subject.subscribe((data) => {
      this.savedActivities.push(data);
      this.noFavorites = false;
      let jsonData = JSON.stringify(this.savedActivities);
      localStorage.setItem('activity', jsonData);
    });
  }
  deleteActivity(index: number) {
    this.savedActivities.splice(index, 1);
    if (this.savedActivities.length == 0) {
      this.noFavorites = true;
    }
  }
}
