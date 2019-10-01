import {defineFeature, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./features/Base.feature');

defineFeature(feature, test => {

  let myNumber;
  let sumNumber;

  test('Testing simple app', ({ given, when, then }) => {
    given(/^I want to sum an unknown number with: (.*)$/, value => {
      myNumber = Number(value);
    });

    when('I send the numbers', () => {
      sumNumber = 5 + myNumber;
    });

    then('The sum is greater than the original number', () => {
      expect(sumNumber).toBeGreaterThan(myNumber);
    });
  });
});
