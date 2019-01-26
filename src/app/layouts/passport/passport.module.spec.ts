import { PassportModule } from './passport.module';

describe('PassportModule', () => {
  let passModule: PassportModule;

  beforeEach(() => {
    passModule = new PassportModule();
  });

  it('should create an instance', () => {
    expect(passModule).toBeTruthy();
  });
});
