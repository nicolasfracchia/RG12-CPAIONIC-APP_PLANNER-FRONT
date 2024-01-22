import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPopover, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Note } from '../../interfeces/note';
import { NotesService } from 'src/app/services/notes.service';
import { ellipse, informationCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HeaderComponent } from '../header/header.component';

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
    IonCardContent,
    IonIcon,
    IonPopover,
    IonText,
    HeaderComponent
  ]
})
export class NotesComponent  implements OnInit {
  public notesInfo!: Note[] | undefined;

  constructor(private _notesService: NotesService) {
    addIcons({ ellipse, informationCircle });
    this.loadNotesInfo();
   }

  ngOnInit() {}

  loadNotesInfo(){
    this._notesService.getNotes().subscribe((results) => {
      this.notesInfo = results;
    })
  }

}
