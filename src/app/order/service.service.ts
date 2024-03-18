import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkflowDto } from './models/workflow-dto';
import { RuleDto } from './models/rule-dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  url='http://localhost:7080/api/v1/workflows'
  
// Service Workflow


   
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


  //service Rule 
  url1='http://localhost:7080/api/v1'

  


  addRule (rule:RuleDto){
    return this.http.post(this.url1,rule) 
   }

  getRuls(stepEntry: any){
    return this.http.get(this.url1+'/rules/stepEntry/'+stepEntry)
  
   }

   removeRule (ruleId: any ){
    return this.http.delete(this.url1+'/rules/'+ruleId)
  }



  editRule(rule:RuleDto , ruleId:any ){
    return this.http.put(this.url1+'/'+ruleId,rule) 
   }


   getRuleById(ruleId:any){
    return this.http.get(this.url1+'/'+ruleId)
  }

}
