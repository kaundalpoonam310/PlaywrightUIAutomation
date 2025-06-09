import { Page } from '@playwright/test';
import { RegisteredEntitySelectors } from '../selectors/registered_entity_selectors';
import { BasePage } from './base_page';

export interface RegisteredEntityData {
    name: string;
    description: string;
    currency: string;
    addressLine1: string;
    addressLine2: string;
    country: string;
    emirate: string;
    city: string;
    imagePath: string;
}

export class RegisteredEntityPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToRegisteredEntity() {
        await this.clickProfileDropdown();
        await this.page.click(RegisteredEntitySelectors.organizationSettings);
        await this.page.click(RegisteredEntitySelectors.registeredEntity);
        await this.waitForLoader();
    }

    async createRegisteredEntity(data: RegisteredEntityData) {
        // Click New Entity button
        await this.page.click(RegisteredEntitySelectors.newEntityButton);

        // Upload image if provided
        // if (data.imagePath) {
        //     await this.page.setInputFiles(RegisteredEntitySelectors.uploadImageButton, data.imagePath);
        // }

        // Fill basic details
        await this.page.fill(RegisteredEntitySelectors.entityNameInput, data.name);
        await this.page.fill(RegisteredEntitySelectors.descriptionInput, data.description);

        // Select currency
        await this.page.click(RegisteredEntitySelectors.currencySelect);
        await this.page.fill(RegisteredEntitySelectors.currencyInput, data.currency);
        await this.page.click(RegisteredEntitySelectors.currencyOption);

        // Fill address details
        await this.page.fill(RegisteredEntitySelectors.addressLine1, data.addressLine1);
        await this.page.fill(RegisteredEntitySelectors.addressLine2, data.addressLine2);

        // Select country
        await this.page.click(RegisteredEntitySelectors.countrySelect);
        await this.page.fill(RegisteredEntitySelectors.countryInput, data.country);
        await this.page.click(`text=${data.country}`);

        // Select emirate
        await this.page.click(RegisteredEntitySelectors.emirateSelect);
        await this.page.click(RegisteredEntitySelectors.emirateOption);

        // Select city
        await this.page.click(RegisteredEntitySelectors.citySelect);
        await this.page.waitForSelector(RegisteredEntitySelectors.cityInput, { state: 'visible' });
        await this.page.fill(RegisteredEntitySelectors.cityInput, 'Abu Dhabi');
        await this.page.waitForSelector(RegisteredEntitySelectors.cityOption, { state: 'visible' });
        await this.page.click(RegisteredEntitySelectors.cityOption, { force: true });

        // Click Add button
        await this.page.click(RegisteredEntitySelectors.addButton);

        // Wait for success message
        await this.page.waitForSelector(RegisteredEntitySelectors.successMessage);

        // Close the dialog
        await this.page.click(RegisteredEntitySelectors.closeButton);
    }
}
