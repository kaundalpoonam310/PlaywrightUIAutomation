import { test, expect } from '../common/base.test';
import { RegisteredEntityPage, RegisteredEntityData } from '../pages/registered_entity_page';
import path from 'path';

test('Create a new registered entity', async ({ page, loginAsAdmin }) => {
    const registeredEntityPage = new RegisteredEntityPage(page);

    // Navigate to Registered Entity section
    await registeredEntityPage.navigateToRegisteredEntity();

    // Prepare test data
    const entityData: RegisteredEntityData = {
        name: 'burhani1',
        description: 'burhani',
        currency: 'UAE Dirham - AED',
        addressLine1: 'ABC',
        addressLine2: 'ANBC',
        country: 'United Arab Emirates',
        emirate: 'Abu Dhabi Emirate',
        city: 'Abu Dhabi',
        imagePath: path.join(__dirname, '../../WiproREPhilippines.png')
    };

    // Create the registered entity
    await registeredEntityPage.createRegisteredEntity(entityData);

    // Additional assertions can be added here if needed
});
