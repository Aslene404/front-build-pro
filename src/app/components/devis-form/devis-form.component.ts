import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/shared/user/user.model';
import { DevisesService } from 'src/app/shared/devis.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';


@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})
export class DevisFormComponent implements OnInit {
  typesOfShoes: string[] = ['Je suis un client', 'Je suis un professionnel'];
  cat: string[] = ["Construction & Rénovation ►", "Architecture & Bureau d’études ►", "Jardin & Piscine ►", "Extension ►", "Toiture ", "Toit-terrasse ", "Démolition ►", "Terrassement ►", "Assainissement", "Mur - Cloison - Plafond ►", "Mur extérieur - Façade", "Sol - Plancher ►", "Revêtement ►", "Plomberie", "Electricité", "Domotique ►", "Cuisine", "Salle de bains - Spa ►", "Isolation - Etanchéité", "Chauffage - Cheminée", "Climatisation", "Porte - Fenêtre - Volet ►", "Escalier - Garde-corps", "Dressing", "Energie renouvelable"];
  subcat1: string[] = ['Rénovation de maison', 'Rénovation d’appartement', 'Rénovation d’immeuble', 'Aménagement de loft', 'Rénovation de pièce à vivre', 'Rénovation de cave, grenier, garage', 'Transformation en pièce à vivre de cave, grenier, etc', 'Rénovation péniche habitable', 'Rénovation des menuiseries (porte et fenêtre)', 'Travaux de restauration patrimoine historique'];
  subcat2: string[] = ['Architecture d’intérieur', 'Architecture (construction neuve, extension, etc)', 'Décoration d’intérieur', 'Plans pour maison individuelle', 'Plans d’aménagement intérieur', 'Déclaration préalable de travaux', 'Bureau d’études structure', 'Bureau d’études fluides (chauffage, ventilation, etc)', 'Assurance Dommages Ouvrage'];
  subcat3: string[] = ['Jardin', 'Piscine'];
  subcat4: string[] = ['Extension de maison en maçonnerie', 'Surélévation en maçonnerie', 'Aménagement de combles existants', 'Construction de mezzanine', 'Construction de garage'];
  subcat5: string[] = ['Démolition mur porteur - agrandir une pièce', 'Démolition mur non porteur - agrandir une pièce', 'Travaux de démolition (à déterminer)', 'Travaux d’ouverture (murs porteurs)', 'Travaux d’ouverture (murs non porteurs)', 'Ouverture pour escalier', 'Sciage de paroi béton (ouverture)', 'Travaux de carottage paroi béton (trou)', 'Déblaiement - enlèvement de gravats', 'Diagnostic démolition - Etude Structure'];
  subcat6: string[] = ['Terrassement pour niveler un terrain', 'Terrassement pour créer une plate-forme', 'Réalisation d’un mur de soutènement', 'Excavation (creux dans un terrain)', 'Travaux de terrassement (à déterminer)'];
  subcat7: string[] = ['Construction mur en maçonnerie', 'Rénovation et reprise de mur', 'Isolation thermique des murs par l’intérieur (ITI)', 'Réalisation de mur végétalisé', 'Travaux d’ouverture', 'Etude structure mur porteur', 'Fabrication et pose de verrière', 'Plafond', 'Ornement plâtre (corniche, moulure, rosace)', 'Caisson décoratif pour conduit de cheminée', 'Cloison'];
  subcat8: string[] = ['Réalisation de dalle en béton armé', 'Réalisation de chape béton', 'Réalisation de plancher', 'Renforcement de plancher', 'Construction chape sèche pour plancher bois', 'Lissage de sol intérieur existant (ragréage)', 'Ouverture pour escalier', 'Etude structure plancher', 'Pose de barre de seuil entre 2 pièces'];
  subcat9: string[] = ['Carrelage', 'Parquet et sol stratifié', 'Moquette, sisal, PVC, lino', 'Marbre, pierre et galet', 'Enduit, béton ciré et crépis', 'Plinthe', 'Installation de crédence', 'Peinture, papier peint', 'Bardage et parement mural', 'Pose de lambris intérieur', 'Nettoyage en profondeur (sablage, gommage)'];
  subcat10: string[] = ['Pose de système de commande domotique', 'Installation système de suivi conso énergétique', 'Installation domotique pour PMR', 'Régulation radiateur à eau', 'Régulation pour plancher chauffant à eau', 'Régulation pour plancher chauffant électrique'];
  subcat11: string[] = ['Installation de salle de bains complète', 'Installation de sanitaire (baignoire, bac à douche, WC, bidet)', 'Création d’une douche à l’italienne', 'Installation d’une cabine de douche', 'Installation de pare baignoire - pare douche', 'Remplacement d’une colonne de douche', 'Mobilier', 'Installation sèche-serviette électrique', 'Réalisation de joint silicone pour cuisine et salle de bains', 'Jacuzzi, hammam et sauna'];
  subcat12: string[] = ['Porte', 'Fenêtre et porte-fenêtre', 'Isolation porte et fenêtre', 'Store et volet', 'Baie vitrée', 'Remplacement de vitre', 'Création-restauration de vitrail', 'Serrure (installation ou remplacement)', 'Saut de loup (lumière naturelle en sous-sol)', 'Installation de puits de lumière sur toit-terrasse (skydome)', 'Pose de grille anti-effraction devant fenêtre'];

  





  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  currentUser: IUser;
  existUser: IUser;

  isEditable = false;




  constructor(private _formBuilder: FormBuilder,
    private devisesService: DevisesService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.existUser = getcurrentUser();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    if (!this.existUser) {
      this.secondFormGroup = this._formBuilder.group({
        fullname: ['', Validators.required],
        email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        phone: ['', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
        ])],
        entreprise: [''],
        numRegistre: [''],
        about2:[''],
        cat: [''],
        subcat: ['']
      });
    } else {
      this.secondFormGroup = this._formBuilder.group({
        fullname: [this.existUser.fullusername, Validators.required],
        email: [this.existUser.email, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        phone: [this.existUser.phone, Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
        ])],
        entreprise: [''],
        numRegistre: [''],
        about2:[''],
        cat: [''],
        subcat: ['']

      });
    }
    if (!this.existUser) {
      this.thirdFormGroup = this._formBuilder.group({
        fullname1: ['', Validators.required],
        email1: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        phone1: ['', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
        ])],
        about1:[''],
        cat1: [''],
        subcat1: ['']
      });
    } else {
      this.thirdFormGroup = this._formBuilder.group({
        fullname1: [this.existUser.fullusername, Validators.required],
        email1: [this.existUser.email, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        phone1: [this.existUser.phone, Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
        ])],
        about1:[''],
        cat1: [''],
        subcat1: ['']

      });
    }


  }
  send() {
    var devis;
   
    if (this.firstFormGroup.get('firstCtrl').value[0] === "Je suis un client") {
       devis = {
        fullname: this.thirdFormGroup.value.fullname1,
        email: this.thirdFormGroup.value.email1,
        phone: this.thirdFormGroup.value.phone1,
        about: this.thirdFormGroup.value.about1,
        cat: this.thirdFormGroup.value.cat1[0],
        subcat: this.thirdFormGroup.value.subcat1[0]
      }
    } else if (this.firstFormGroup.get('firstCtrl').value[0] === "Je suis un professionnel") {
       devis = {
        fullname: this.secondFormGroup.value.fullname,
        email: this.secondFormGroup.value.email,
        phone: this.secondFormGroup.value.phone,
        entreprise: this.secondFormGroup.value.entreprise,
        numRegistre: this.secondFormGroup.value.numRegistre,
        about: this.thirdFormGroup.value.about2,
        cat: this.secondFormGroup.value.cat[0],
        subcat: this.secondFormGroup.value.subcat[0]
      }

    }
   

    this.devisesService.addDevis(devis).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close',{duration:5000});
      },
      error: (error) => this.snackBar.open('Unable to reach API','Close'),
      complete: () => this.thirdFormGroup.reset()
    });



  }
  /*send() {

    this.devisesService.addDevis(this.secondFormGroup.value).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close');
      },
      error: (error) => this.snackBar.open(error.message, 'Close'),
      complete: () => this.secondFormGroup.reset()
    });



  }*/
}
function getcurrentUser(): IUser {
  return JSON.parse(localStorage.getItem('currentUser'));
}
