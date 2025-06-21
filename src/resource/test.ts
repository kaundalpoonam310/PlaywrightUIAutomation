import { test } from '@playwright/test';

test.describe.serial('accessibility test', () => {
  require('../tests/accessibility.spec.ts');
});

test.describe.serial('Leave', () => {
  require('../tests/leave_category.spec.ts');
  require('../tests/leave_category1.spec');
  require('../tests/leave_policy.spec.ts');
});

test.describe.serial('Registered Entity', () => {
  require('../tests/registered_entity.spec');
  // ...add others similarly
});
