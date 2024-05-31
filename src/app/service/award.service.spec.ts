import { TestBed } from '@angular/core/testing';

import { AwardService } from './award.service';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {createSpyFromClass, Spy} from 'jasmine-auto-spies';
import { Award } from '../data/award';

describe('AwardService', () => {
  let service: AwardService;
  let httpSpy: Spy<HttpClient>;

  const fakeAward: Award[] = [
    {
      id: 56,
      name: 'Meier',
      year: 2007
    },
    {
      id: 57,
      name: 'Bianchi',
      year:1997
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ],
    });
    service = TestBed.inject(AwardService);
    httpSpy = TestBed.inject<any>(HttpClient);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of Awards', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeAward);

    service.getList().subscribe({
        next:
          departments => {
            expect(departments).toHaveSize(fakeAward.length);
            done();
          },
        error: done.fail
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should create a new Award', (done: DoneFn) => {

    const newAward: Award = {
      id: 57,
      name: 'Bianchi',
      year:1997
    };

    httpSpy.post.and.nextWith(newAward);

    service.save(newAward).subscribe({
        next: Award => {
          expect(Award).toEqual(newAward);
          done();
        },
        error: done.fail
      }
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should update an Award', (done: DoneFn) => {

    const award = fakeAward[0];
    award.name = 'Updated Award';

    httpSpy.put.and.nextWith(award);

    service.update(award).subscribe({
      next: award => {
        expect(award.name).toEqual('Updated Award');
        done();
      },
      error: done.fail
    });
    expect(httpSpy.put.calls.count()).toBe(1);
  });

  it('should delete an existing Award', (done: DoneFn) => {

    httpSpy.delete.and.nextWith(new HttpResponse({
      status: 200
    }));

    service.delete(1).subscribe({
      next: response => {
        expect(response.status).toBe(200);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.delete.calls.count()).toBe(1);
  });
});
