import { TestBed } from '@angular/core/testing';

import { EstadoPedidoService } from './estado-pedido.service';

describe('EstadoPedidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoPedidoService = TestBed.get(EstadoPedidoService);
    expect(service).toBeTruthy();
  });
});
