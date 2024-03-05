import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from '../models/workflow-dto';

import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit',

  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{


  
  workflow: WorkflowDto = new WorkflowDto();

  

  constructor(private route: ActivatedRoute ,private router:Router, private srv: ServiceService ) { }
  workflowId=this.route.snapshot.params['workflowId'];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.workflowId = params.get('workflowId');
      console.log('Retrieved workflowId:', this.workflowId);

      //getById
      console.log("hhhh")
      this.srv.getWorkflowById(this.workflowId).subscribe((res: any) => {
  
        console.log(res)
        this.workflow = res
      })


    });
  }




  editWorkflow2(){
    this.srv.editworkflow(this.workflow , this.workflowId)
    .subscribe(
      (result) => { 
      console.log(result)
      this.ngOnInit()
      Swal.fire('Valider', '', 'success')
      this.router.navigate(['/mfe1/orderComponent/listworkflowComponent']);
    },
    (err) => {
      // traitement du cas d'erreur
      console.log(err)
      Swal.fire('Invalid ', '', 'error')
    }
    )
  }
  
}
