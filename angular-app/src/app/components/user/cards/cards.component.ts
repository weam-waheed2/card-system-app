import { Component } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';
import { ActivatedRoute ,RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels, NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards: Card[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;
  cardUrl!: string;
  

  constructor(
    public cardService: CardService,
    private route: ActivatedRoute, public auth:AuthService
  ) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((card:Card[])=>{
      this.cards = card;
    });
    this.loadCards();
    const cardId = this.route.snapshot.paramMap.get('id');
    this.cardUrl = `http://localhost:8000//cards/${cardId}`;
  }

  deleteCard(id:number){
    if(confirm('Are you sure you want to delete?')){
      this.cardService.delete(id).subscribe(res =>{
        this.cards = this.cards.filter(item=>item.id !==id);
      })
    }
  }

  toggleCardStatus(card: any) {
  const updatedCard = {
    ...card,
    is_active: !card.is_active, 
  };

  this.cardService.updateStatus(updatedCard).subscribe({
    next: (response) => {
      console.log('Card status updated successfully');
      card.is_active = updatedCard.is_active;
    },
    error: (err) => {
      console.error('Error updating card status:', err);
    },
  });
}


  getCards() {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }

  loadCards(page: number = 1) {
    this.cardService.getCards(page, this.perPage).subscribe(response => {
      this.cards = response.data;
      this.currentPage = response.current_page;
      this.totalPages = response.last_page;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadCards(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadCards(this.currentPage - 1);
    }
  }
}
