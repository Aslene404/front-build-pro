import { TestBed } from '@angular/core/testing';

import { EntrepriseResolver} from './entreprise-resolver.service';

describe('EntrepriseResolverService', () => {
  let service: EntrepriseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepriseResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
