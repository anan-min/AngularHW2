import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active" class="na v-link">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="home.webp"
            alt="Home Logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <a routerLink="/hello" routerLinkActive="active" class="nav-link">
        Hello
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    /* Navbar Container */
    .navbar {
      background-color: #f8f9fa; /* Light background color */
      padding: 10px 20px; /* Vertical and horizontal padding */
      display: flex; /* Use Flexbox for horizontal layout */
      align-items: center; /* Vertically center items */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    }

    /* Navigation Links */
    .nav-link {
      color: #343a40; /* Dark text color */
      margin-right: 20px; /* Space between links */
      text-decoration: none; /* Remove underline from links */
      font-size: 16px; /* Font size */
      display: flex; /* Align image and text */
      align-items: center; /* Vertically center items */
      transition: color 0.3s ease; /* Smooth color transition on hover */
    }

    /* Logo Image */
    .brand-logo {
      width: 40px; /* Set desired width */
      height: 40px; /* Set desired height */
      object-fit: contain; /* Maintain aspect ratio */
      margin-right: 8px; /* Space between image and text (if any) */
    }

    /* Hover Effect for Links */
    .nav-link:hover {
      color: #007bff; /* Change text color on hover */
    }

    /* Active Link Styling */
    .active {
      border-bottom: 2px solid #007bff; /* Highlight active link with bottom border */
    }

    /* Responsive Design */
    @media (max-width: 600px) {
      .navbar {
        flex-direction: column; /* Stack items vertically on small screens */
        align-items: flex-start; /* Align items to the start */
      }

      .nav-link {
        margin-right: 0; /* Remove right margin */
        margin-bottom: 10px; /* Add bottom margin for spacing */
      }

      .brand-logo {
        width: 30px; /* Smaller logo on smaller screens */
        height: 30px;
      }
    }
  `],
})
export class AppComponent {
  title = 'AngularHW1';
}
