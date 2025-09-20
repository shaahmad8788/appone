// ...existing code...
import { Component } from '@angular/core';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  name = '';
  company = '';

  constructor(private gblser: Global, public router: Router) {}

  submit(): void {
    const payload = {
      name: this.name,
      company: this.company
    };
    this.gblser.addRecord('student_placed', payload).subscribe({
      next: () => {
        window.alert('Record added');
        this.router.navigate(['/crud']);
      },
      error: (err) => {
        console.error('Add failed', err);
        window.alert('Add failed');
      }
    });
  }
// Add this method to your Add component class
goToCrud() {
  // Implement navigation logic here, for example:
 this.router.navigate(['/crud']);
}

}
// ...existing code...