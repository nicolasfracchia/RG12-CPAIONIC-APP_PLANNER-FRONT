import { CommonModule, DatePipe  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Task } from '../../interfeces/task';
import { Goal } from '../../interfeces/goal';
import { AchievementsService } from 'src/app/services/achievements.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonTitle, 
    IonContent,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonGrid,
    IonCol,
    IonRow,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    HeaderComponent
  ]
})
export class AchievementsComponent  implements OnInit {
  public goalsInfo!: Goal[];
  public tasksInfo!: Task[];

  constructor(private _achievementsService: AchievementsService, private datePipe: DatePipe) { 
    this.loadInfo();
  }

  ngOnInit() {}

  loadInfo(){
    this._achievementsService.getAchievements().subscribe((results) => {
      this.goalsInfo = results.goals;
      this.tasksInfo = results.tasks;
      console.log(this.tasksInfo)
    })
  }

  formatDate(date: string): string {
    return<string> this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
