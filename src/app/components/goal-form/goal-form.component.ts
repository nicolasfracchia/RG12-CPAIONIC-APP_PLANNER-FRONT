import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonButton, IonContent, IonDatetime, IonDatetimeButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';
import { Status } from 'src/app/interfeces/status';
import { GeneralService } from 'src/app/services/general.service';
import { GoalsService } from 'src/app/services/goals.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss'],
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
export class GoalFormComponent{
  pageTitle:string = 'NEW GOAL';
  goalForm: FormGroup;
  isEditMode: boolean = false;
  editGoalId: number = 0;
  statuses!: Status[];

  constructor(
    private formBuilder: FormBuilder, 
    private _goalsService: GoalsService, 
    private _generalService: GeneralService,
    private route: ActivatedRoute,
    private _alertController: AlertController
  ){
    const defaultDateNow = new Date();
    const defaultDate7 = new Date();
    defaultDate7.setDate(defaultDate7.getDate() + 7);

    this.goalForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date_of_start: [defaultDateNow.toISOString(), [Validators.required]],
      date_of_end: [defaultDate7.toISOString(), [Validators.required]],
      status: ['', [Validators.required]]
    });

    const goalId = this.route.snapshot.paramMap.get('id-item');
    
    if(goalId){
      this.isEditMode = true;
      this.pageTitle = "EDIT GOAL";
      let id = parseInt(goalId);
      this.editGoalId = id;
      this._goalsService.getGoal(id).subscribe((result) => {
        this.goalForm.patchValue(result);
      })
    }

    this.setStatuses();
  }

  onSubmit(){
    const formData = this.goalForm.value;
    console.log(formData);
    if(this.isEditMode){
      this.updateGoal();
    }else{
      this.createGoal();
    }
  }

  createGoal(){
    this._goalsService.createGoal(this.goalForm.value).subscribe((result) => {
      this.presentAlert('New goal:', 'The goal was created successfully');
      console.log(result);
      this.goalForm.reset();
    });
  }
  updateGoal(){
    this._goalsService.updateGoal(this.editGoalId, this.goalForm.value).subscribe((result) => {
      this.presentAlert('Edit goal', 'Goal updated successfully');
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
    return this.goalForm.get('name')!;
  }
  get descriptionFormControl(){
    return this.goalForm.get('description')!;
  }
  get dateOfStartFormControl(){
    return this.goalForm.get('date_of_start')!;
  }
  get dateOfEndFormControl(){
    return this.goalForm.get('date_of_end')!;
  }
  get statusFormControl(){
    return this.goalForm.get('status')!;
  }

}
