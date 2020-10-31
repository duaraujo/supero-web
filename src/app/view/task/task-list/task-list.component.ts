import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'action'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private service: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTasks();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getTasks(): void {
    this.service.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  create(): void {
    this.router.navigate(['task/form']);
  }

  delete(id): void {
    this.service.delete(id).subscribe(data => {
      this.getTasks();
    });
  }

  edit(id): void {
    this.router.navigate(['task/form/' + id]);
  }

}
