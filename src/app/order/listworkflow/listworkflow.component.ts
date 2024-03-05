import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from '../models/workflow-dto';
import {  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';





@Component({
  selector: 'app-listworkflow',

  templateUrl: './listworkflow.component.html',
  styleUrl: './listworkflow.component.css'
})
export class ListworkflowComponent implements OnInit{
  
  WorkflowDto: WorkflowDto[] = [];
  constructor(private srv: ServiceService , private router: Router) {}
  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getWorkflows().subscribe((res: any) => {

      console.log(res)
      this.WorkflowDto = res
    })
  }



  deleteWorkflow(workflowId: any) {
  // Afficher un message d'alerte de confirmation avant la suppression
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Cette action est irréversible et supprimera le workflow.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // L'utilisateur a cliqué sur "Oui, supprimer"
      this.srv.removeWorkflow(workflowId)
        .subscribe(
          (result) => { // succès
            console.log(result);
            Swal.fire('Workflow supprimé avec succès', '', 'success');
            window.location.reload();
          },
          (err) => {
            // traitement du cas d'erreur
            console.log(err);
            Swal.fire('Workflow supprimé avec succès', '', 'success');
            window.location.reload();
          }
        );
    } else {
      // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
      Swal.fire('Suppression annulée', '', 'info');
    }
  });
}




editWorkflow(id: number): void {
  console.log(`Modification du workflow avec l'ID ${id}`);
}

viewWorkflow(id: number): void {
  console.log(`Voir les détails du workflow avec l'ID ${id}`);
}


nav(workflowId : any) {
  this.router.navigate(['/mfe1/orderComponent/editComponent/',workflowId]);
}





// pour paginations 


    // Le nombre d'éléments à afficher par page
    itemsPerPage = 2;

    // La page actuelle
    currentPage = 1;
  
    // Calculer le nombre total de pages
    totalPages = Math.ceil(this.WorkflowDto.length / this.itemsPerPage);
  
    // Obtenir la liste des workflows à afficher sur la page actuelle
    get allWorkflows(): any[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.WorkflowDto.slice(startIndex, endIndex);
    }
  
    setPage(pageNumber: number): void {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    }
  
    getPagesArray(): number[] {
      const pagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);
      console.log('Pages Array:', pagesArray);
      return pagesArray;
    }
}
