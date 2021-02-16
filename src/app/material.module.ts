import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
   imports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule
   
   ],
   exports:[
       MatToolbarModule,
       MatButtonModule,
       MatIconModule,
       MatFormFieldModule,
       MatInputModule,
       MatAutocompleteModule,
       MatPaginatorModule,
       MatTableModule,
       MatCardModule,
       MatDialogModule,
       MatProgressSpinnerModule
       
    ] ,
    providers:[
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true,disableClose: true,width:500  }},
    ]
})
export class MaterialModule{}