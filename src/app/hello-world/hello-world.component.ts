import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  styleUrl: './hello-world.component.css',
  template: `
    <div>
      <h1>hello-world works!</h1>
      <div></div>
    </div>
  `,
})
export class HelloWorldComponent {}
