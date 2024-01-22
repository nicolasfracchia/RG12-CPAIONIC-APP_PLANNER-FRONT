import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonButton, IonContent, IonDatetime, IonDatetimeButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';
import { Status } from 'src/app/interfeces/status';
import { GeneralService } from 'src/app/services/general.service';
import { TasksService } from 'src/app/services/tasks.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonTextarea,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    HeaderComponent,
    IonContent
  ]
})
export class TaskFormComponent{
  pageTitle:string = 'NEW TASK';
  taskForm: FormGroup;
  isEditMode: boolean = false;
  editTaskId: number = 0;
  statuses!: Status[];

  constructor(
    private formBuilder: FormBuilder, 
    private _tasksService: TasksService, 
    private _generalService: GeneralService,
    private route: ActivatedRoute,
    private _alertController: AlertController
  ){
    const defaultDateNow = new Date();
    const defaultDate7 = new Date();
    defaultDate7.setDate(defaultDate7.getDate() + 7);

    this.taskForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date_of_start: [defaultDateNow.toISOString(), [Validators.required]],
      date_of_end: [defaultDate7.toISOString(), [Validators.required]],
      status: ['', [Validators.required]]
    });

    const taskId = this.route.snapshot.paramMap.get('id-item');
    
    if(taskId){
      this.isEditMode = true;
      this.pageTitle = "EDIT TASK";
      let id = parseInt(taskId);
      this.editTaskId = id;
      this._tasksService.getTask(id).subscribe((result) => {
        this.taskForm.patchValue(result);
      })
    }

    this.setStatuses();
  }

  onSubmit(){
    const formData = this.taskForm.value;
    console.log(formData);
    if(this.isEditMode){
      this.updateTask();
    }else{
      this.createTask();
    }
  }

  createTask(){
    this._tasksService.createTask(this.taskForm.value).subscribe((result) => {
      this.presentAlert('New Task:', 'The tasks was created successfully');
      console.log(result);
      this.taskForm.reset();
    });
  }
  updateTask(){
    this._tasksService.updateTask(this.editTaskId, this.taskForm.value).subscribe((result) => {
      this.presentAlert('Edit task', 'Task updated successfully');
      console.log(result);
    });
  }

  setStatuses(){
    this._generalService.getStatuses().subscribe(results => {
      this.statuses = results;
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this._alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  get nameFormControl(){
    return this.taskForm.get('name')!;
  }
  get descriptionFormControl(){
    return this.taskForm.get('description')!;
  }
  get dateOfStartFormControl(){
    return this.taskForm.get('date_of_start')!;
  }
  get dateOfEndFormControl(){
    return this.taskForm.get('date_of_end')!;
  }
  get statusFormControl(){
    return this.taskForm.get('status')!;
  }

}
