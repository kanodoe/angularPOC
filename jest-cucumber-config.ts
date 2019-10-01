require('jest-cucumber').setJestCucumberConfiguration({
  tagFilter: '@ui and not @slow',
  scenarioNameTemplate: (vars) => {
    return ` ${vars.featureTitle} - ${vars.scenarioTitle}}`;
  }
});
