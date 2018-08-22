import { ChoiceModule } from './choice.module';

describe('ChoiceModule', () => {
  let choiceModule: ChoiceModule;

  beforeEach(() => {
    choiceModule = new ChoiceModule();
  });

  it('should create an instance', () => {
    expect(choiceModule).toBeTruthy();
  });
});
