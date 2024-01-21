import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Note } from '../../interfeces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
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
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent
  ]
})
export class NotesComponent  implements OnInit {
  public notesInfo!: Note[] | undefined;

  constructor(private _notesService: NotesService) {
    this.loadNotesInfo();
   }

  ngOnInit() {}

  loadNotesInfo(){
    this._notesService.getNotes().subscribe((results) => {
      this.notesInfo = results;
    })
  }

}
