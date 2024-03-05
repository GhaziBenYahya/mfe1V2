import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from '../models/workflow-dto';


@Component({
  selector: 'app-addworkflow',

  templateUrl: './addworkflow.component.html',
  styleUrl: './addworkflow.component.css'
})
export class AddworkflowComponent implements OnInit{

  constructor(private srv: ServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log("succe")

  }




  //methode AddWorkflow

  workflow : WorkflowDto=new WorkflowDto()




  
  //2eme
  ajoutWorkflow2() {
    console.log(this.workflow);
    this.srv.addWorkflow(this.workflow)
      .subscribe(
        (result) => { // success
          console.log(result);

          this.router.navigate(['/mfe1/orderComponent/managesComponent']);
          Swal.fire('Valider', '', 'success');
          
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err);
          Swal.fire('Invalid ', '', 'error');
        }
      );
  }
  

}
