import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QrCodeErrorCorrectionLevel, QrCodeModule, RGBAColor } from 'ng-qrcode';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [RouterLink, QrCodeModule],
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent {
  id!: number;
  cards!: Card;
  qrData: string = ''; 
  generatedQrCode: string = '';

  constructor(public cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.cardService.find(this.id).subscribe((card: Card | null) => {
      if (card) {
        this.cards = card;
  
        if (this.cards.is_active) { 
          this.qrData = `Card Name: ${this.cards.name}, Email: ${this.cards.email}, Position: ${this.cards.position}, Phone: ${this.cards.phone}, Address: ${this.cards.address}`;
        } else {
          console.warn('Card is inactive or deleted. Redirecting to sorry page.');
          this.qrData = 'http://localhost:4200/sorry the Owner Disable or Deleted this Card'; 
        }
  
        this.generateQRCode(); 
      } else {
        console.error('Card not found. Setting QR to sorry page.');
        this.qrData = 'http://localhost:4200/sorry the Owner Disable or Deleted this Card';
        this.generateQRCode();
      }
  
      console.log('Generated QR Data:', this.qrData);
    });
  }
  

  generateQRCode() {
    if (this.qrData.trim() !== '') {
      this.generatedQrCode = this.qrData;
    }
  }

  value: string = 'qrData';
  size: number = 300;
  errorCorrectionLevel: QrCodeErrorCorrectionLevel = 'M';
  errorCorrectionLevels: QrCodeErrorCorrectionLevel[] = ['L', 'M', 'Q', 'H'];
  showImage: boolean = false;
  centerImageSize: string = '';
  margin: number = 4;
  darkColor?: RGBAColor;
  lightColor?: RGBAColor;

  get centerImageSrc() {
    return this.showImage ? './assets/angular-logo.png' : undefined;
  }
}
