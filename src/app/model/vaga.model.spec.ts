import { Vaga } from './vaga.model';

describe('Vaga', () => {
  it('should create an instance', () => {
    expect(new Vaga(undefined as any, undefined as any, undefined as any, undefined as any, undefined as any)).toBeTruthy();
  });
});
