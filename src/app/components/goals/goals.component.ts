import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButtons, IonCol, IonContent, IonFab, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPopover, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GoalsService } from 'src/app/services/goals.service';
import { Goal } from '../../interfeces/goal';
import { ellipse, informationCircle, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
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
    IonText,
    IonIcon,
    IonPopover,
    HeaderComponent,
    RouterLink,
    IonFab
  ]
})
export class GoalsComponent  implements OnInit {
  public itemsInfo!: Goal[] | undefined;

  constructor(private _goalsService: GoalsService, private datePipe: DatePipe) { 
    addIcons({ ellipse, informationCircle, add });
    this.loadGoalsInfo();
  }

  ngOnInit() {}

  ionViewWillEnter(){this.loadGoalsInfo();}

  loadGoalsInfo(){
    this._goalsService.getPendingGoals().subscribe((results) => {
      this.itemsInfo = results;
    })
  }
  
  changeStatus(idItem:number, idStatus:number){
    this._goalsService.updateGoalStatus(idItem, idStatus).subscribe(() => { this.loadGoalsInfo(); })
  }

  formatDate(date: string): string {
    return<string> this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
