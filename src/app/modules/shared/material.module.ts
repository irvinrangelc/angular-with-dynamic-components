import { NgModule } from '@angular/core';

// Material Modules
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressBarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule,
    MatListModule
  ],
  exports: [
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressBarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule,
    MatListModule
  ],
  providers: [
  ]
})
export class MaterialModule {
  constructor() {
  }
}
