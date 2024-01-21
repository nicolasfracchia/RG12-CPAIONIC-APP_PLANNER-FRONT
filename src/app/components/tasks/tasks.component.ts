import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPopover, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfeces/task';
import { ellipse, informationCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
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
    IonIcon,
    IonPopover,
    IonText
  ]
})
export class TasksComponent  implements OnInit {
  public itemsInfo!: Task[] | undefined;

  constructor(private _tasksService: TasksService, private datePipe: DatePipe) { 
    addIcons({ ellipse, informationCircle });
    this.loadTasksInfo();
  }

  ngOnInit() {}

  loadTasksInfo(){
    this._tasksService.getPendingTasks().subscribe((results) => {
      this.itemsInfo = results;
    })
  }
  
  changeStatus(idItem:number, idStatus:number){
    this._tasksService.updateTaskStatus(idItem, idStatus).subscribe(() => { this.loadTasksInfo(); })
  }

  formatDate(date: string): string {
    return<string> this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
