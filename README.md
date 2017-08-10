# ng2-postcodeapi

## Installation

To install this library, run:

```bash
$ npm install ng2-postcodeapi --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-postcodeapi
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import your library
import { PostcodeApiModule } from 'ng2-postcodeapi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

Once your library is imported, you can use the service in your Angular application:


## License

MIT © [Kevin Beckers](mailto:kevin@thecodelab.nl)
