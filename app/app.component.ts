import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'saa-app',
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <style>
            
        div {
            background: #2A9FBC;
            border-radius: 0.5em;
            margin: 1.5em 0;
            padding: 1em 1.2em;
        }
        
        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        a {
            color: #fff;
            padding: 0 1em;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
      <div>
          <saa-app-nav></saa-app-nav>
      </div>
  `
//   ,
//   styles: [`

//       body {
//           color: #666;
//           font-family: arial, sans-serif;
//           margin: 0;
//           padding: 1.5em;
//       }

//       h1 {
//           color: #2A9FBC;
//           font-size: 200%;
//           line-height: 1;
//           margin: 0.5em 0 0.25em;
//       }

//   `]
})

export class AppComponent {
}