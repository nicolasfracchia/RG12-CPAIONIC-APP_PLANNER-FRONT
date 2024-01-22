import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonAccordion, IonAccordionGroup, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPopover, IonRow, IonText, IonTitle, IonToolbar, ToastController } from '@ionic/angular/standalone';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfeces/task';
import { ellipse, informationCircle, add, createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

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
    IonText,
    IonFab,
    IonFabButton,
    RouterLink,
    HeaderComponent
  ]
})
export class TasksComponent  implements OnInit {
  title: string = "Tasks list"
  public itemsInfo!: Task[] | undefined;

  constructor(
    private _tasksService: TasksService, 
    private datePipe: DatePipe,
    private toastController: ToastController,
    private alertController: AlertController
  ) { 
    addIcons({ ellipse, informationCircle, add, createOutline });
    this.loadTasksInfo();
  }

  ngOnInit() {}

  ionViewWillEnter(){this.loadTasksInfo();}

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

  async deleteTask(task:Task){
    const dateFormattedFrom = this.datePipe.transform(task.date_of_start, 'dd/MM/yyyy');
    const dateFormattedTo = this.datePipe.transform(task.date_of_end, 'dd/MM/yyyy');

    const alert = await this.alertController.create({
      header: `Are you sure you want to delete this task?`,
      subHeader: `${task.name} - ${task.Status.name}`,
      message: `date: ${dateFormattedFrom} - ${dateFormattedTo}`,
      buttons: [
        {text: 'Cancel',role: 'cancel'},
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            this.deleteTaskConfirmed(task.id);
          }
        }
      ]
    });
  
    await alert.present();
  }

  deleteTaskConfirmed(taskId:number){
    this._tasksService.deleteTask(taskId).subscribe(
      (result:Task) => {
        this.presentToast('success', 'Task deleted successfully');
        this.loadTasksInfo();
      },
      (error:any) => {
        console.error('ERROR DELETE:',error.message)
        this.presentToast('danger', "Error deleting the task: " + error.message);
      }
    );
  }

  async presentToast(color:string, message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'middle',
      color: color
    });

    await toast.present();
  }
}
