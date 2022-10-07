import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <h1>NestJS</h1>
      <button id="sendPostBtn">Send POST</button>
      <script>
        document.getElementById("sendPostBtn").addEventListener('click',async ()=>{
          let item = {
            type: 21,
            t: Date.now(),
            value: 'Hello guys'
          };
          
          let response = await fetch('/events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(item)
          });
          
          let result = await response;
          console.log(result);      
        })
      </script>  
    
    
    `;
  }
}
