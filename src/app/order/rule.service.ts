import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RuleDto } from '../order/models/rule-dto';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(private http : HttpClient) { }
  url='http://localhost:7070/api/v1/rules'




  addRule (rule:RuleDto){
    return this.http.post(this.url,rule) 
   }

  getRuls(){
    return this.http.get(this.url)
  
   }

   removeRule (ruleId: any ){
    return this.http.delete(this.url+'/'+ruleId)
  }



  editRule(rule:RuleDto , ruleId:any ){
    return this.http.put(this.url+'/'+ruleId,rule) 
   }


   getRuleById(ruleId:any){
    return this.http.get(this.url+'/'+ruleId)
  }

}
