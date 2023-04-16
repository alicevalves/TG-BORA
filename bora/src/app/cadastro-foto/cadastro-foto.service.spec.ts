import { TestBed } from '@angular/core/testing';

import { CadastroFotoService } from './cadastro-foto.service';

describe('CadastroFotoService', () => {
  let service: CadastroFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
