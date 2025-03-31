import { Component } from '@angular/core';
import { RecordCardComponent } from '../../record-card/record-card.component';
import { RecordService } from '../../../services/record.service';
import { NgFor } from '@angular/common';
import { Record } from '../../../models/record';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-all-records-page',
  standalone: true,
  imports: [RecordCardComponent, NgFor, RouterLink, NgStyle],
  templateUrl: './all-records-page.component.html',
  styleUrl: './all-records-page.component.css'
})
export class AllRecordsPageComponent {
  constructor(private recordService: RecordService) {}

  getRecords(): Record[] {
    return this.recordService.getRecords();
  }
}
