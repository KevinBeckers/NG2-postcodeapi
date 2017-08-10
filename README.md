# ng2-postcodeapi

## Installation

To install this library, run:

```bash
$ npm install ng2-postcodeapi --save
```

## Consuming ng2-postcodeapi

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-postcodeapi
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import PostcodeApiModule
import { PostcodeApiModule } from 'ng2-postcodeapi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify PostcodeApiModule as an import
    PostcodeApiModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

Once your library is imported, you can use the service in your Angular application:


```typescript
import { Component, OnInit } from '@angular/core';

// Import PostcodeApiService
import { PostcodeApiService } from 'ng2-postcodeapi';

export class YourComponent implements OnInit {

  // Add PostcodeApiService
  constructor(private PostcodeApiService: PostcodeApiService) { }

  // Use PostcodeApiService
  ngOnInit() {
    
    // Set API token to PostcodeApiService and use methodes
    this.PostcodeApiService.setApiToken("TOKEN");
    this.PostcodeApiService.getAddresses("1234AB", "1").subscribe(result => {
      console.log(result);
    });
  }
```
## Usage

1. Adding your API Token
```typescript
.setApiToken("TOKEN");
```

2. Request data:
```typescript
this.PostcodeApiService.setApiToken("TOKEN");
this.PostcodeApiService.getAddresses("8441ES", "2").subscribe(result => {
  console.log(result);
});
this.PostcodeApiService.getAddress("0074200000390939").subscribe(result => {
  console.log(result);
});
this.PostcodeApiService.getPostcode(8441).subscribe(result => {
  console.log(result);
});

this.PostcodeApiService.getPostcodes("8441ES").subscribe(result => {
  console.log(result);
});
```

Request all addresses for postcode or postcode and number.
```typescript
.getAddresses(postcode: string, number: string = null) : Observable<any>
```

Request address by Postcodeapi.net id.
```typescript
.getAddress(id: string) : Observable<any>
```

Request postcode in P6 formaat.
```typescript
.getPostcodes(postcode: string) : Observable<any>
```

Request postcode in P4 formaat.
```typescript
.getPostcode(id: number) : Observable<any>
```

For more information see [https://www.postcodeapi.nu/docs/](https://www.postcodeapi.nu/docs/)

## License

MIT © [Kevin Beckers](mailto:kevin@thecodelab.nl)
