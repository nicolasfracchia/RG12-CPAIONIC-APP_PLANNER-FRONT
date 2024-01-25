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
    path: 'note-form',
    loadComponent: () =>
    import('./components/note-form/note-form.component').then((m) => m.NoteFormComponent),
  },
  {
    path: 'note-form/:id-note',
    loadComponent: () =>
    import('./components/note-form/note-form.component').then((m) => m.NoteFormComponent),
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  }
];
