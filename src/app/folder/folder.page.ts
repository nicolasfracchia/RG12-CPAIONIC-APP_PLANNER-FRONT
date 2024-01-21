import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItem, IonLabel, IonAccordionGroup, IonAccordion, IonGrid, IonCol, IonRow, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';
import { TasksService } from '../services/tasks.service';
import { CommonModule } from '@angular/common';
import { Task } from '../interfeces/task';
import { GoalsService } from '../services/goals.service';
import { Goal } from '../interfeces/goal';
import { TasksComponent } from '../components/tasks/tasks.component'
import { GoalsComponent } from '../components/goals/goals.component';
import { AchievementsComponent } from '../components/achievements/achievements.component';
import { NotesComponent } from '../components/notes/notes.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
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
    TasksComponent,
    GoalsComponent,
    AchievementsComponent,
    NotesComponent
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
