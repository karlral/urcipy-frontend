import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/domain/categoria';
import { Ciudad } from 'src/app/domain/ciudad';
import { Club } from 'src/app/domain/club';
import { Corredor } from 'src/app/domain/corredor';
import { Modalidad } from 'src/app/domain/modalidad';
import { Pais } from 'src/app/domain/pais';
import { Persona } from 'src/app/domain/persona';
import { Region } from 'src/app/domain/region';
import { Regional } from 'src/app/domain/regional';
import { Remera } from 'src/app/domain/remera';
import { Tipo } from 'src/app/domain/tipo';
import { Trayecto } from 'src/app/domain/trayecto';
import { Usuario } from 'src/app/domain/usuario';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ClubService } from 'src/app/service/club.service';
import { CorredorService } from 'src/app/service/corredor.service';
import { PaisService } from 'src/app/service/pais.service';
import { ParticipanteService } from 'src/app/service/participante.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-add-corredor',
  templateUrl: './add-corredor.component.html',
  styleUrls: ['./add-corredor.component.css']
})
export class AddCorredorComponent implements OnInit {

  @Input() selectedCorredor: any = null;
  @Input() idevento: any = null;

  @Input() tipos: Tipo[] = [];
  @Input() tamanos: Remera[] = [];
  @Input() displayRemera: boolean = false;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickSave: EventEmitter<any> = new EventEmitter<any>();


  modalType = "Registrar";

  clubes: Club[] = [];

  ciudades: Ciudad[] = [];
  paises: Pais[] = [];

  
  grupos: any[] = [];
  

  user: any;
  fecha = new Date();

  fechaant = new Date(2000, 0, 1);

  trayecto: Trayecto = {
    idtrayecto: 7,
    nomtrayecto: '5k',
    km: 5
  }
  modalidad: Modalidad = {
    idmodalidad: 2,
    nommodalidad: 'RUNNING'
  }
  eCategoria: Categoria = {
    idcategoria: 83,
    nomcategoria: '5k Masculino',
    activo: false,
    nomcorto: '',
    orden: 0,
    tanda: 0,
    ascenso: false,
    activonacional: 0,
    edadinicio: 0,
    edadfin: 0,
    sexo: 0,
    tipo: 0,
    trayecto: this.trayecto,
    horario: '',
    modalidad: this.modalidad,
    codigo: ''
  };

  regional: Regional = {
    idregional: 4,
    nomregional: '',
    nomcorto: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: '',
    logo: ''
  }

  usuario: Usuario = {
    idusuario: 91,
    nombre: '',
    apellido: '',
    telefono: '',
    perfil: '',
    email: '',
    username: '',
    password: '',
    enabled: false,
    idevento: 0,
    regional: this.regional
  }
  region: Region = {
    idregion: 1,
    nomregion: '',
    nomcorto: '',
    logo: ''
  }

  club: Club = {
    idclub: 267,
    nomclub: 'RUN TECH LG',
    presidente: '',
    telepresi: '',
    vicepresidente: '',
    telvice: '',
    telefono: '',
    email: '',
    ruta: 'RUNTECHLG.png',
    rutagrande: 'runtech2.png',
    region: this.region,
    modalidad: this.modalidad
  }
  pais: Pais = {
    idpais: 1,
    nompais: '',
    nacionalidad: ''
  }
  ciudad: Ciudad = {
    idciudad: 1,
    nomciudad: 'Oviedo',
    pais: this.pais
  }


  personabus: any = null;
  persona: Persona = {
    idpersona: 0,
    nombre: '',
    apellido: '',
    ci: '',
    sexo: 1,
    fecnac: new Date,
    telefono: '',
    direccion: '',
    email: '',
    foto: '',
    cidelante: '',
    gruposanguineo: '',
    tutorp: '',
    citp: '',
    nacionalidad: '',
    ciudad: this.ciudad,
    tamano: 12
  }


  corredor: Corredor = {
    idcorredor: 0,
    persona: this.persona,
    club: this.club,
    categoria: this.eCategoria,
    usuario: this.usuario,
    regional: this.regional,
    verificar: 0,
    carnet: '',
    carnetatras: '',
    tipocat: 3,
    licencia: 0,
    modificar: false,
    gruposanguineo: '',
    puntua: 0,
    fecmodi: new Date(),
    montopuntua: 0,
    carnetfpc: 0,
    observacion: '',
    catalianza: true
  };

  idmodalidad = 2;


  corredorForm = this.fb.group({
    idcorredor: [null],
    persona: this.fb.group({
      idpersona: [null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ci: ['', Validators.required],
      sexo: [1],
      fecnac: [this.fechaant, Validators.required],
      telefono: [''],
      direccion: [''],
      email: [''],
      foto: [''],
      cidelante: [''],
      gruposanguineo: [''],
      tutorp: [''],
      citp: [''],
      nacionalidad: ['Paraguaya', Validators.required],
      ciudad: this.ciudad,
      tamano: [12]
    }),

    verificar: [0],
    carnet: [''],
    carnetatras: [''],
    tipocat: [3, Validators.required],
    licencia: [0],
    modificar: [false],
    puntua: [0],
    fecmodi: [this.fecha],
    montopuntua: [0],
    carnetfpc: [3],
    observacion: [''],
    club: [this.club],
    categoria: [this.eCategoria],
    usuario: [this.usuario],
    regional: [this.regional],
    catalianza: [false]

  });



  constructor(private fb: FormBuilder,
    private ciudadService: CiudadService,
    private clubService: ClubService,
    private paisService: PaisService,
    private messageService: MessageService,
    private corredorService: CorredorService,
    private personaService: PersonaService,
    private participanteService: ParticipanteService
   

  ) { }



  ngOnInit(): void {
    

    this.grupos = [
      { label: 'RH (O-)', value: 'RH (O-)' },
      { label: 'RH (O+)', value: 'RH (O+)' },
      { label: 'RH (A-)', value: 'RH (A-)' },
      { label: 'RH (A+)', value: 'RH (A+)' },
      { label: 'RH (B-)', value: 'RH (B-)' },
      { label: 'RH (B+)', value: 'RH (B+)' },
      { label: 'RH (AB-)', value: 'RH (AB-)' },
      { label: 'RH (AB+)', value: 'RH (AB+)' }
    ];


    this.ciudadService.publistarCiudades().subscribe(
      {
        next: (dato: Ciudad[]) => {
          this.ciudades = dato;
          this.ciudad = this.ciudades[0];
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Ciudad",
            detail: "Error al cargar la ciudad"
          });
        },
        complete: () => console.info('completo ciudad')
      });

    this.clubService.publistarClubesRun().subscribe(
      (dato: any) => {
        this.clubes = dato;
        //  this.club = this.clubes[0];

      }, (error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Club",
          detail: "Error al cargar el Club"
        });
      }
    );


    //this.user = this.login.getUser();
    this.usuario.idusuario = 91;


    this.paisService.publistarPaises().subscribe(
      (dato: any) => {
        this.paises = dato;

      }, (error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Pais",
          detail: "Error al cargar el Pais"
        });
      }
    );

    this.corredorForm.reset({
      persona: {
        fecnac: this.fechaant,
        nacionalidad: "Paraguaya",
        sexo: 1,
        ciudad: this.ciudad,
        tamano: 12

      },
      tipocat: 3,
      puntua: 0,
      fecmodi: this.fecha,
      verificar: 0,
      club: this.club,
      usuario: this.usuario,
      regional: this.regional,
      carnetfpc: 2,
      categoria: this.eCategoria

    });
    this.modalType = "Registrar";

  

    this.cargarCategoria(this.eCategoria);
  }


  closeModal() {
    this.corredorForm.reset();
    this.clickClose.emit(true);
  }

  extractNumberString(s: string) {
    return s.replace(/[^0-9]/g, "");
  }

  addEditCorredor() {

    const ci = this.corredorForm.get('persona')?.get('ci')?.value;

    if (ci == '' || ci == null) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "Complete su Cedula de identidad sin puntos"
      });

      return;
    }
    let ci2 = this.extractNumberString(ci).trim();
    if (ci2.length < 6) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "La Cedula de identidad debe tener al menos 6 numeros sin puntos"
      });

      return;
    }

    
    this.corredorForm.get('persona')?.get('ci')?.setValue(ci2);

    this.corredorForm.get('usuario')?.setValue(this.usuario);
    this.corredorForm.get('regional')?.setValue(this.regional);

    this.corredorService.agregarCorredorRun(this.corredorForm.value).subscribe(
      {
        next: (dato) => {

          /*const clubControl = this.corredorForm.get('club');
          if (clubControl && clubControl.value) {
            this.club = clubControl.value;
          }*/

          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El corredor ha sido agregada con exito', life: 3000 });

          //this.closeModal()

        }, error: (error) => {
          console.log(error);
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la corredor', life: 3000 });

        },
        complete: () => {
          console.log('Completo el agregar');
          this.formSubmit();


        }
      });

  }

  saveModal(participante: any) {
    this.corredorForm.reset();
    this.clickSave.emit(participante);

  }

  formSubmit() {
    let ci = this.corredorForm.get('persona')?.get('ci')?.value?.trim();
    this.participanteService.inscribirPartiCi(this.idevento, ci).subscribe(
      (data: any) => {

        this.saveModal(data);


      }, (error) => {
        console.log(error);

        this.messageService.add({
          key: 'bc',
          severity: "info",
          summary: "Atencion",
          detail: "No se encontro el numero de CI del corredor, complete sus datos."
        });

      });
  }

  cargarCategoria(cat: Categoria) {

    this.corredorForm.controls['categoria'].setValue(cat);

  }

  focusOutFunction() {

    const ci = this.corredorForm.get('persona')?.get('ci')?.value;

    if (ci == '' || ci == null) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "Complete su Cedula de identidad sin puntos"
      });

      return;
    }
    let ci2 = this.extractNumberString(ci).trim();
    if (ci2.length < 6) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "La Cedula de identidad debe tener al menos 6 numeros sin puntos"
      });

      return;
    }

    
    this.corredorForm.get('persona')?.get('ci')?.setValue(ci2);

    this.personaService.pubobtenerPersonaCi(ci2).subscribe({
      next: (dato) => {

        if (dato) {
          this.corredorForm.controls['persona'].patchValue(dato);
          this.personabus = dato;
          const fecnac = new Date(this.personabus.fecnac);
          this.corredorForm.controls['persona'].get('fecnac')?.setValue(fecnac);
        }

      }, error: (error) => {
        console.log(error);
        this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al Persona del corredor', life: 3000 });

      },
      complete: () => {
        console.log('Completo el busqueda de Persona');

      }
    });


  }

}
