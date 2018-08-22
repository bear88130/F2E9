import { ChoiceRoutingModule } from './choice-routing.module';

describe('ChoiceRoutingModule', () => {
  let choiceRoutingModule: ChoiceRoutingModule;

  beforeEach(() => {
    choiceRoutingModule = new ChoiceRoutingModule();
  });

  it('should create an instance', () => {
    expect(choiceRoutingModule).toBeTruthy();
  });
});
