import { Component, OnInit } from '@angular/core';

import { GraphService } from '../graph.service';
import { AlertsService } from '../alerts.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  private photos: Photo[];

  constructor(
    private graphService: GraphService,
    private alertsService: AlertsService) { }

  async ngOnInit() {
    this.photos = await this.graphService.getPhotos();
  }
}
