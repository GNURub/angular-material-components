import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatDatetimePickerInputV2 } from '../../../projects/datetime-picker/src/lib/datetime-picker-input-v2.directive';
import { NgxMatDatetimePickerV2 } from '../../../projects/datetime-picker/src/lib/datetime-picker-v2.component';

@Component({
  selector: 'app-demo-datetime-v2',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerV2,
    NgxMatDatetimePickerInputV2,
    DatePipe,
  ],
  template: `
    <div class="demo-container">
      <h2>NgxMatDatetimePicker V2 Demo</h2>
      <p>This is the new implementation that uses native Angular Material with integrated timepicker.</p>

      <div class="example-section">
        <h3>Basic Example</h3>
        <mat-form-field appearance="outline">
          <mat-label>Date and Time</mat-label>
          <input
            matInput
            [formControl]="datetimeControl"
            [ngxMatDatetimePickerV2]="datetimePicker"
            placeholder="Select date and time">
          <ngx-mat-datetime-picker-v2
            #datetimePicker
            [hideTime]="false"
            [showSpinners]="true"
            [showSeconds]="false"
            [stepHour]="1"
            [stepMinute]="15">
          </ngx-mat-datetime-picker-v2>
        </mat-form-field>
      </div>

      <div class="example-section">
        <h3>Date Only (no time)</h3>
        <mat-form-field appearance="outline">
          <mat-label>Date</mat-label>
          <input
            matInput
            [formControl]="dateOnlyControl"
            [ngxMatDatetimePickerV2]="dateOnlyPicker"
            placeholder="Select date only">
          <ngx-mat-datetime-picker-v2
            #dateOnlyPicker
            [hideTime]="true">
          </ngx-mat-datetime-picker-v2>
        </mat-form-field>
      </div>

      <div class="example-section">
        <h3>With Seconds and 12-hour Format</h3>
        <mat-form-field appearance="outline">
          <mat-label>Full Date and Time</mat-label>
          <input
            matInput
            [formControl]="fullDatetimeControl"
            [ngxMatDatetimePickerV2]="fullDatetimePicker"
            placeholder="Date with seconds and AM/PM">
          <ngx-mat-datetime-picker-v2
            #fullDatetimePicker
            [hideTime]="false"
            [showSpinners]="true"
            [showSeconds]="true"
            [enableMeridian]="true"
            [stepHour]="1"
            [stepMinute]="5"
            [stepSecond]="10">
          </ngx-mat-datetime-picker-v2>
        </mat-form-field>
      </div>

      <div class="values-section">
        <h3>Current Values</h3>
        <p><strong>Basic datetime:</strong> {{ datetimeControl.value | date:'short' }}</p>
        <p><strong>Date only:</strong> {{ dateOnlyControl.value | date:'mediumDate' }}</p>
        <p><strong>Full datetime:</strong> {{ fullDatetimeControl.value | date:'full' }}</p>

        <div class="debug-info">
          <h4>Debug Info (check console for logs)</h4>
          <p><strong>Form Status:</strong> {{ datetimeControl.status }}</p>
          <p><strong>Raw Values:</strong></p>
          <pre>{{ getDebugInfo() }}</pre>
        </div>
      </div>

      <div class="actions-section">
        <button mat-raised-button color="primary" (click)="setCurrentDateTime()">
          Set Current Date/Time
        </button>
        <button mat-raised-button (click)="clearValues()">
          Clear Values
        </button>
      </div>
    </div>
  `,
  styles: [`
    .demo-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .example-section {
      margin-bottom: 30px;
    }

    .example-section h3 {
      margin-bottom: 15px;
      color: #1976d2;
    }

    mat-form-field {
      width: 100%;
      max-width: 400px;
    }

    .values-section {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .values-section p {
      margin: 8px 0;
    }

    .actions-section {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .actions-section button {
      margin: 5px;
    }

    .debug-info {
      margin-top: 20px;
      border-top: 1px solid #ddd;
      padding-top: 15px;
    }

    .debug-info h4 {
      color: #666;
      margin-bottom: 10px;
    }

    .debug-info pre {
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;
      overflow-x: auto;
    }
  `]
})
export class DemoDatetimeV2Component {
  datetimeControl = new FormControl(new Date());
  dateOnlyControl = new FormControl(null);
  fullDatetimeControl = new FormControl(null);

  constructor() {
    // Monitor form control changes
    this.datetimeControl.valueChanges.subscribe(value => {
      console.log('🔄 datetimeControl value changed to:', value);
    });

    this.dateOnlyControl.valueChanges.subscribe(value => {
      console.log('🔄 dateOnlyControl value changed to:', value);
    });

    this.fullDatetimeControl.valueChanges.subscribe(value => {
      console.log('🔄 fullDatetimeControl value changed to:', value);
    });
  }

  getDebugInfo(): string {
    return JSON.stringify({
      datetime: this.datetimeControl.value,
      dateOnly: this.dateOnlyControl.value,
      fullDatetime: this.fullDatetimeControl.value
    }, null, 2);
  }

  setCurrentDateTime(): void {
    const now = new Date();
    this.datetimeControl.setValue(now);
    this.dateOnlyControl.setValue(now);
    this.fullDatetimeControl.setValue(now);
  }

  clearValues(): void {
    this.datetimeControl.setValue(null);
    this.dateOnlyControl.setValue(null);
    this.fullDatetimeControl.setValue(null);
  }
}
