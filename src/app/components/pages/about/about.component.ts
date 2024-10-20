import { Component } from '@angular/core';
import { ScrollToTopComponent } from "../../shared/scroll-to-top/scroll-to-top.component";
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollToTopComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
