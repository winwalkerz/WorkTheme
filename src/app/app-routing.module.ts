import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./Pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'tab1',
    loadChildren: () =>
      import('./Pages/main/tab1/tab1.module').then(m => m.Tab1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
