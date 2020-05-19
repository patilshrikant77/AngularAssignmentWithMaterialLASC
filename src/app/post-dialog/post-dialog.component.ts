import { Component, OnInit,EventEmitter, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../services/data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {
  blogPost:Post = {
    title: '',
    body: '',
    category: '',
    position: 0,
    date_posted: new Date()
  };
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.position = this.dataService.dataLength();
    this.event.emit({data: this.blogPost});
    this.dialogRef.close();
  }

  categories = this.dataService.getCategories();

}
