import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { RecipeInterface } from '../../models/recipe';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dataApi: DataApiService, private storage: AngularFireStorage, private changeDetectorRef: ChangeDetectorRef) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  @ViewChild('imageUser') inputImageRecipe: ElementRef;
  @ViewChild('formRecipe') formRecipe: NgForm;   
  
  ngOnInit() {

  }
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  //files: any[];

  
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/recipes/photo_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();    
  }

  onSaveRecipe(recipeForm: NgForm): void {
    if (recipeForm.value.id == null) {
      // New 
      recipeForm.value.userUid = this.userUid;    
     
      this.dataApi.addRecipe(recipeForm.value);
    } else {
      // Update
      this.dataApi.updateRecipe(recipeForm.value);
    }
    recipeForm.resetForm();
    this.btnClose.nativeElement.click();
  }

  onCloseMember(){
   this.formRecipe.reset();
   this.changeDetectorRef.detectChanges();
  }

  
}
