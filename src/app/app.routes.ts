import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () =>
      import('./components/tasks/tasks.component').then((m) => m.TasksComponent),
  },
  {
    path: 'task-form',
    loadComponent: () =>
      import('./components/task-form/task-form.component').then((m) => m.TaskFormComponent),
  },
  {
    path: 'task-form/:id-item',
    loadComponent: () =>
      import('./components/task-form/task-form.component').then((m) => m.TaskFormComponent),
  },
  {
    path: 'goals',
    loadComponent: () =>
    import('./components/goals/goals.component').then((m) => m.GoalsComponent),
  },
  {
    path: 'goal-form',
    loadComponent: () =>
      import('./components/goal-form/goal-form.component').then((m) => m.GoalFormComponent),
  },
  {
    path: 'goal-form/:id-item',
    loadComponent: () =>
      import('./components/goal-form/goal-form.component').then((m) => m.GoalFormComponent),
  },
  {
    path: 'achievements',
    loadComponent: () =>
      import('./components/achievements/achievements.component').then((m) => m.AchievementsComponent),
  },
  {
    path: 'notes',
    loadComponent: () =>
    import('./components/notes/notes.component').then((m) => m.NotesComponent),
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  /*
  {
    path: ':id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: ':id/:id-item',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  */
];
