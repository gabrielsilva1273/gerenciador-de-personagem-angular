import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Personagem } from 'src/app/model/personagem';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() personagem!:Personagem;
  uploadMode = false;
  image:any;
  
  constructor() { }

  ngOnInit(): void {
    this.image = localStorage.getItem(this.personagem.id!)
  }

  clickButton(){
    this.uploadMode = !this.uploadMode
  }

  onFileSelected($event: Event) {
    const file = ($event.target as HTMLInputElement)
    if (file.files != null) {
      const f = file.files[0]
      this.convertToBase64(f);
    }

  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(subscriber, file)
    })
    observable.subscribe((d) => {
      localStorage.setItem(this.personagem.id!, d),
      this.image = localStorage.getItem(this.personagem.id!)
      this.uploadMode = false;
  })
  }

  readFile(subscriber: Subscriber<any>, file: File) {
    const fr = new FileReader();
    fr.readAsDataURL(file)
    fr.onload = () => {
      subscriber.next(fr.result);
      subscriber.complete();
    }
    fr.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }

}
