import { EmotionsModule } from './emotions.module';

describe('EmotionsModule', () => {
  let emotionsModule: EmotionsModule;

  beforeEach(() => {
    emotionsModule = new EmotionsModule();
  });

  it('should create an instance', () => {
    expect(emotionsModule).toBeTruthy();
  });
});
