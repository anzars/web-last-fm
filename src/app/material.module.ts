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
import {MatDialogModule} from '@angular/material/dialog';



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
    MatDialogModule
   
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
       MatDialogModule
       
    ] 
})
export class MaterialModule{}