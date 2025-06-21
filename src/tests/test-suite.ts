import { test } from '@playwright/test';

test.describe.serial('accessibility test', () => {
  require('./accessibility.spec.ts');
});

test.describe.serial('Leave', () => {
  require('./leave_category.spec.ts');
  require('./leave_category1.spec');
  require('./leave_policy.spec.ts');
});

test.describe.serial('Registered Entity', () => {
  require('./registered_entity.spec');
  // ...add others similarly
});
