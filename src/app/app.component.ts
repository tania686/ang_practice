import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [
  //   { type: 'server', name: 'test server', content: 'just a test' }
  // ];

  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: {
  //   blueprintName: string;
  //   blueprintContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.blueprintName,
  //     content: blueprintData.blueprintName
  //   });
  // }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'changed!';
  // }

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
    console.log(firedNumber);
  }
}
