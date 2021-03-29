import { IApp } from './../../../common/models/app.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  selectedCategory = 'all';
  allProject: IApp[] = [
    {
      name:
        'Ecommerce Platform, for the Cuban company Guajitect, with the possibility of B2C and B2B business modalities',
      description: `E-commerce platform, for the sale of all types of products, allows users to create seller accounts to establish B2B business relationships.\nFundamental characteristics:\n
      <ul>
        <li>Integration with multiple gateways.</li>
        <li>Many languages.</li>
        <li>Mail and notification systems.</li>
        <li>Inventory control with a warehouse movement system.</li>
        <li>Sale and search in administration which allows sales in offices for unregistered users</li>
      </ul>`,
      useStacks: ['Angular', 'NodeJS', 'Javascript', 'CSS', 'HTML', 'MySQL'],
      url: 'www.sinkoola.com',
      Files: [
        { file: 'ecommerce/1.jpeg', type: 'image', id: '1' },
        { file: 'ecommerce/2.jpeg', type: 'image', id: '2' },
        { file: 'ecommerce/3.jpeg', type: 'image', id: '3' },
        { file: 'ecommerce/4.jpeg', type: 'image', id: '4' },
        { file: 'ecommerce/5.jpeg', type: 'image', id: '5' },
      ],
      category: 'web sites',
    },
  ];
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cdRef.markForCheck();
  }

  getProject(category) {
    if (category == 'all') {
      return [...this.allProject];
    }
    return this.allProject.filter((x) => x.category == category);
  }
}
