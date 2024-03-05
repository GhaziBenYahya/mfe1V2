import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkflowDto } from './models/workflow-dto';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  url='http://localhost:7080/api/v1/workflows'




  addWorkflow (workflow:WorkflowDto){
    return this.http.post(this.url,workflow) 
   }


  getWorkflows(){
    return this.http.get(this.url)
  
   }

   removeWorkflow (workflowId: any ){
    return this.http.delete(this.url+'/'+workflowId)
  }



  editworkflow(workflow:WorkflowDto , workflowId:any ){
    return this.http.put(this.url+'/'+workflowId,workflow) 
   }


   getWorkflowById(workflowId:any){
    return this.http.get(this.url+'/'+workflowId)
  }

}
