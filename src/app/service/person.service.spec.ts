/* import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {createSpyFromClass, Spy} from 'jasmine-auto-spies';
import { Person } from '../data/person';

describe('PersonService', () => {
  let service: PersonService;
  let httpSpy: Spy<HttpClient>;

  const fakePerson: Person[] = [
    {
      id: 1,
      name: 'Meier',
      age:14
    },
    {
      id: 2,
      name: 'Bianchi',
      age:23

    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PersonService);
    httpSpy = TestBed.inject<any>(HttpClient);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */