import { Component, signal } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { MiniMapComponent } from '../../maps/components/mini-map/mini-map.component';

interface HouseProperty {
  id: string;
  name: string;
  description: string;
  price: number;
  lngLat: { lng: number; lat: number };
  tags: string[];
}

@Component({
  selector: 'app-houses-page',
  imports: [MiniMapComponent],
  templateUrl: './houses-page.component.html',
})
export class HousesPageComponent {
  houses = signal<HouseProperty[]>([
    {
      id: uuid(),
      name: 'Villa Serenity',
      description:
        'A tranquil retreat with panoramic sea views and lush gardens.',
      price: 500_000,
      lngLat: { lng: -0.861526, lat: 41.65649 },
      tags: ['Villa', 'Sea', 'Gardens'],
    },
    {
      id: uuid(),
      name: 'Sun House',
      description:
        'A bright and cozy home with spacious terraces and a private pool.',
      price: 750_000,
      lngLat: { lng: -0.862, lat: 41.657 },
      tags: ['House', 'Sun', 'Terraces'],
    },
    {
      id: uuid(),
      name: 'Emerald Residence',
      description:
        'Elegant property with luxury finishes and a modern architectural design.',
      price: 1_200_000,
      lngLat: { lng: -0.863, lat: 41.658 },
      tags: ['House', 'Emerald', 'Finishes'],
    },
    {
      id: uuid(),
      name: 'Lake Hacienda',
      description:
        'Charming hacienda with direct lake access and a stunning natural setting.',
      price: 950_000,
      lngLat: { lng: -0.864, lat: 41.659 },
      tags: ['House', 'Lake', 'Hacienda'],
    },
  ]);
}
