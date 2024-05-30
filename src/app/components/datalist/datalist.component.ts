import { Component } from '@angular/core';
import { Person } from '../../data/person';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.css'
})
export class DatalistComponent {

  constructor(private personService: PersonService) {
    this.reloadData();
   }

  displayedColumns: string[] = ['id', 'name', 'age'];
  text = 'Ich bin ein Text';
  date = new Date();
  data: Person[] = [];

  public personForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    age: new UntypedFormControl(0),
  });

  save(formData: any) {

    const person: Person = Object.assign(formData);
    this.personService.save(person).subscribe(() => {  
      this.reloadData();
    });
  }

  reloadData() {
    this.personService.getList().subscribe((persons) => {
      this.data = persons;
    });
  }

  sayHello() {
    this.text = 'Neuer Text';
    alert('Hello!');
  }
}
