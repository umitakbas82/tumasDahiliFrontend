import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';



@Component({
  selector: 'app-main',
  imports: [ButtonModule,TableModule,MatIconModule,MatButtonModule,MatToolbarModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  readonly dialog = inject(MatDialog);

  openDialog(){
    
  }


}
