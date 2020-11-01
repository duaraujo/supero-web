import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup;
  obj: Task = new Task();
  message = 'Registro salvo com sucesso!';
  edit = false;

  constructor(
    private service: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getOne();
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required]),
      statusEnum: new FormControl(null)
    });

  }

  get title() {
    return this.form.get('title');
  }
  get description() {
    return this.form.get('description');
  }
  get statusEnum() {
    return this.form.get('statusEnum');
  }

  save(): void {
    this.create();
    this.service.save(this.obj).subscribe(data => {
      this.service.showMessage(this.message);
      this.back();
    });
  }

  getOne(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.edit = true;
      this.service.getOne(id).subscribe(data => {
        this.obj = data;
        this.update();
      });
      this.message = 'Registro alterado com sucesso!';
    }
  }

  back(): void {
    this.router.navigate(['task']);
  }

  create(): void {
    Object.keys(this.form.controls).forEach(key => {
      this.obj[key] = this.form.get(key).value;
    });
  }

  update(): void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setValue(this.obj[key]);
    });
  }

}
