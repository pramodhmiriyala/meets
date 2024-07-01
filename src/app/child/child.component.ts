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
    "https://youtu.be/nM7Gfhc9uq0?si=YhX44ucSMI3aQ-Xx",
    "https://youtu.be/6A9TB1syltw?si=tLd-y3UN5MvNDATV",
    "https://youtu.be/Ab3mwGkINzE?si=XgggUISzk0HIGhU8",
    "https://youtu.be/cEoHDthoV8I?si=b3tpKyr_plS_IQMU",
    "https://youtu.be/hz53CEOewkc?si=4elJlf9By5vM8ykZ"



  ]
  Jashuva = [
    "https://www.youtube.com/live/FU9fexkApPY?si=9UT11ZATSRwu9OlI",
    "https://www.youtube.com/live/clbIvi8vLp8?si=Rpn85tHTenoFCbQE",
    "https://www.youtube.com/live/KxQN--QUt1g?si=6NYQigcoM9mpzZoa",
   "https://www.youtube.com/live/nuFVwt4Rnq4?si=ZaJ3F4TpW02UUaBm",
   "https://www.youtube.com/live/ba9hpCjaLvc?si=jfdT-l1ZPZc65Xdi"




  ];
}