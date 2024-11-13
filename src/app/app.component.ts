import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent, HomeComponent, HousingLocationComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="cat.png" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularHW1';
}
