import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the 'userId' parameter from the route
    this.userId = this.route.snapshot.paramMap.get('UserId')!;
    console.log('User ID:', this.userId);
  }
  Christudas=[
    "https://youtu.be/nM7Gfhc9uq0?si=9qwFhtWUIgD-ryh7",
    "https://youtu.be/nM7Gfhc9uq0?si=9qwFhtWUIgD-ryh7"
  ]
  Jashuva = [
    "https://www.youtube.com/live/clbIvi8vLp8?si=b1Pzt64DEebFmrZb",
    "https://www.youtube.com/live/KxQN--QUt1g?si=q2nkML4mInMNiSh_"
  ];
}