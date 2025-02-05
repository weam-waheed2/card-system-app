import { Component } from '@angular/core';
import { Card } from '../card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from '../card.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-card',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-card.component.html',
  styleUrl: './edit-card.component.css'
})
export class EditCardComponent {
  id!:number;
  cards!:Card;
  form!:FormGroup;

  constructor(public cardService:CardService, private router:Router, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id = this.route.snapshot.params['cardId'];
    this.cardService.find(this.id).subscribe((card:Card)=>{
      this.cards = card;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      company_address: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required),
    })
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    this.cardService.update(this.id,this.form.value).subscribe((res:any)=>{
      this.router.navigateByUrl('dashboard/cards')
    })
  }
}
