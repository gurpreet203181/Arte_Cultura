import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('introSlides', { static: true }) introSlides: any;

  endReached: boolean = false;
  imgLoaded: boolean = false;
  currentPlant: string;

  sliderConfig = {
    centeredSlides: true,
    initialSlide: 0,
    speed: 400,
    pager: true
  };

  gallery: any = [
    { "name": "Il pensatore", "image": "/assets/img/img5.jpg", "description": "Il pensatore è una celebre scultura bronzea dell'artista francese Auguste Rodin conservata nel museo che porta il nome del suo creatore, a Parigi. Rappresenta un uomo intento a una profonda meditazione. È talvolta utilizzata per raffigurare la filosofia"},
    { "name": "Cloud Gate", "image": "/assets/img/img8.jpg", "description": "Il Cloud Gate è una scultura pubblica dell'artista britannico di origini indiane Anish Kapoor e si trova al centro della AT&T Plaza nel Millennium Park a Chicago, Illinois, USA. La scultura e la AT&T Plaza si trovano tra il Park Grill ed il Jay Pritzker Pavilion." },
    { "name": "Campbell’s Soup Cans", "image": "/assets/img/img3.jpg", "description":"Campbell's Soup Cans, anche conosciuta come 32 Campbell's Soup Cans, è un'opera d'arte realizzata nel 1962 da Andy Warhol. Consiste in trentadue tele in polimero sintetico su tela, ciascuna grande 51 cm × 41 cm, raffiguranti tutte le varietà dei barattoli di zuppa Campbell allora in commercio" },
    { "name": "Notte stellata", "image": "/assets/img/img2.jpg", "description": "Notte stellata è un dipinto del pittore olandese Vincent van Gogh, realizzato nel 1889 e conservato al Museum of Modern Art di New York. Vera e propria icona della pittura occidentale, il dipinto raffigura un paesaggio notturno di Saint-Rémy-de-Provence, poco prima del sorgere del sole" },
    { "name": "Pietà vaticana", "image": "/assets/img/img6.jpg", "description": "La Pietà di San Pietro è una scultura in marmo realizzata da Michelangelo Buonarroti e conservata nella basilica di San Pietro in Vaticano" },

  ];

  slides: any = [
    { "name": "Statua della Libertà", "image": "/assets/img/img7.jpg", "description": "La Statua della Libertà, inaugurata nel 1886, è un simbolo di New York e degli interi Stati Uniti d'America, uno dei monumenti più importanti e conosciuti al mondo." },
    { "name": "Adorazione dei magi", "image": "/assets/img/img1.jpg", "description": "Un documento del luglio 1481 attesta che Leonardo da Vinci aveva ricevuto dai Canonici regolari di Sant’ Agostino l’incarico di dipingere la tavola dell’altare maggiore della chiesa di San Donato a Scopeto, situata fuori dalla cerchia muraria di Firenze. Il dipinto, che Leonardo si impegnava a completare entro 30 mesi, aveva come tema l’Adorazione dei Magi, cioè la celebrazione della festa dell’Epifania in cui, secondo Sant’ Agostino, tutti i popoli rispondono alla chiamata di Cristo. "},
    { "name": "Guernica", "image": "/assets/img/img4.jpg", "description": "Guernica è un quadro di Pablo Picasso. L'ispirazione per l'opera, improvvisa e all'ultimo minuto come era tipico del genio spagnolo, arrivò solo dopo il bombardamento di Guernica. Picasso compose il grande quadro in soli due mesi e lo espose nel padiglione spagnolo dell'esposizione universale di Parigi. " },
  
  ];
  constructor() {

  }

  ngOnInit() {
    this.imgLoaded = false;
    this.currentPlant = this.gallery[0].name;
  }

  slideDidChange() {
    this.introSlides.isEnd().then(res => {
      this.endReached = res;
    });

    //Update current slide index
    this.introSlides.currentSlide().then(res => {
      this.currentPlant = this.slides[res].title;
      console.log(res);
    })

  }
  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

}