import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { clipboardOutline, listOutline, listCircleOutline, checkboxOutline, speedometerOutline, createOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CommonModule, 
    IonApp, 
    IonSplitPane, 
    IonMenu, 
    IonContent, 
    IonList, 
    IonListHeader, 
    IonNote, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonMenuButton
  ],
})
export class AppComponent {
  public pageTitle: string = "Tasks list";

  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'clipboard' },
    { title: 'Tasks', url: '/tasks', icon: 'list' },
    { title: 'Goals', url: '/goals', icon: 'list-circle' },
    { title: 'Achievements', url: '/achievements', icon: 'checkbox' },
    { title: 'Delayed', url: '/delayed', icon: 'speedometer' },
    { title: 'Notes', url: '/notes', icon: 'create' },
  ];
  
  constructor() {
    addIcons({ clipboardOutline, listOutline, listCircleOutline, checkboxOutline, speedometerOutline, createOutline });
  }
}
