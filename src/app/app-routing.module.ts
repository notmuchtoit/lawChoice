import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
    pathMatch: 'full',
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
    pathMatch: 'full',
  },
  {
    path: 'faqdetail/:id',
    loadChildren: () =>
      import('./faq-detail/faq-detail.module').then((m) => m.FaqDetailModule),
  },
  {
    path: 'lawyerlist',
    loadChildren: () =>
      import('./lawyer/lawyer.module').then((m) => m.LawyerModule),
  },
  {
    path: 'lawyerdetail/:id',
    loadChildren: () =>
      import('./lawyer-detail/lawyer-detail.module').then((m) => m.LawyerDetailModule),
  },
  {
    path: 'blogpost/:id',
    loadChildren: () =>
      import('./blog-detail/blog-detail.module').then(
        (m) => m.BlogDetailModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
