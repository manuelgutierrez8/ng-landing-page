import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  currentSlide = '1'
  currentIndex = 1;

  testimonials = [
    {
      title: 'El mejor lugar para degustar en familia y amigos!',
      comment: 'Es el mejor lugar al que he venido con mi familia, la comida es rica,sirven rápido y te atienden de la mejor manera.',
      value: '1'
    },
    {
      title: 'Lorem Ipsum',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      value: '2'
    },
    {
      title: 'Another Comment',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      value: '3'
    }
  ];

  totalItems = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalItems = this.testimonials.length;
  }

  next() {
    this.currentIndex = this.currentIndex < this.totalItems ? this.currentIndex + 1 : this.currentIndex;
  }

  previous() {
    this.currentIndex = this.currentIndex > 1 ? this.currentIndex - 1 : this.currentIndex;
  }

}
