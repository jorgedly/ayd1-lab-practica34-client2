import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConexionService } from './conexion.service';

describe('ConexionService', () => {
  let service: ConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConexionService]
    });
    service = TestBed.inject(ConexionService);
  });

  it('should be created', async () => {
    service = TestBed.get(ConexionService);
    expect(service).toBeTruthy();
  });
});
