import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[];
  editingItemId: number = null;
  originalProductName: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDataFromJson();
  }

  getDataFromJson() {
    this.dataService.getData().subscribe(
      (response) => {
        if (response) {
          this.data = response.data;
          console.log(this.data);
        } else {
          console.error('Falha ao obter os dados do arquivo JSON');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  startEditing(itemId: number) {
    this.editingItemId = itemId;
    const item = this.data.find((item) => item.Id === itemId);
    this.originalProductName = item.productName;
  }

  saveItem(item: any) {
    // Salve a atualização no armazenamento local
    localStorage.setItem('data', JSON.stringify(this.data));
    this.editingItemId = null; // Sair do modo de edição
  }

  cancelEditing(item: any) {
    item.productName = this.originalProductName;
    this.editingItemId = null; // Sair do modo de edição
  }

  deleteItem(itemId: number) {
    // Encontre o índice do item na matriz `data`
    const index = this.data.findIndex(item => item.Id === itemId);
    if (index !== -1) {
      // Remove o item da matriz `data`
      this.data.splice(index, 1);
      // Salva a atualização no armazenamento local
      localStorage.setItem('data', JSON.stringify(this.data));
      console.log('Item excluído:', itemId);
    }
  }
}
