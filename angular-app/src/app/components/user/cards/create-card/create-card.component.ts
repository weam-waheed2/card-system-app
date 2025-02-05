import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CardService } from '../card.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent {
  formCreate!: FormGroup;
  selectedFile!: File;

  constructor(
    public cardService: CardService, 
    private router: Router, 
    public fb: FormBuilder, 
    private http: HttpClient
  ) {
    this.formCreate = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      company: ['', [Validators.required]],
      position: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
      company_address: ['', [Validators.required]],
      image: null
    });
  }

  uploadFile(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.formCreate.patchValue({
      image: file
    });
  }

  get f() {
    return this.formCreate.controls;
  }

  submit() {
    const formData: any = new FormData();
    formData.append('name', this.formCreate.controls['name'].value);
    formData.append('email', this.formCreate.controls['email'].value);
    formData.append('company', this.formCreate.controls['company'].value);
    formData.append('position', this.formCreate.controls['position'].value);
    formData.append('phone', this.formCreate.controls['phone'].value);
    formData.append('mobile', this.formCreate.controls['mobile'].value);
    formData.append('address', this.formCreate.controls['address'].value);
    formData.append('company_address', this.formCreate.controls['company_address'].value);
    formData.append('image', this.formCreate.controls['image'].value);

    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`  
      })
    };

    this.http.post('http://127.0.0.1:8000/api/upload', formData, httpOptions).subscribe({
      next: (v) => console.log('Success:', v),
      error: (e) => console.error('Error while uploading:', e),
      complete: () => console.info('Upload complete')
    });
    this.router.navigateByUrl('dashboard/cards')
  }
}
