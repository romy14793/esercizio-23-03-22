import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/Activity';
import { SharedService } from 'src/app/shared/shared/shared.service';

@Component({
  selector: 'bored-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.scss'],
})
export class GenerateActivityComponent implements OnInit {
  activity!: Activity;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}
  generateActivity() {
    this.sharedService.getActivity().subscribe((data) => {
      this.activity = data;
      console.log(this.activity);
    });
  }
  saveFavorite() {
    this.sharedService.subject.next(this.activity);
  }
}
