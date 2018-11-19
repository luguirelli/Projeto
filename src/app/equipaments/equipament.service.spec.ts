import { TestBed, inject } from '@angular/core/testing';

import { EquipamentService } from './equipament.service';

describe('EquipamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipamentService]
    });
  });

  it('should be created', inject([EquipamentService], (service: EquipamentService) => {
    expect(service).toBeTruthy();
  }));
});