import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'inf-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.processingObs.subscribe(processing => {
      this.loading = processing;
    });
  }
}
