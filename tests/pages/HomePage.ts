import { Locator, Page } from "@playwright/test";

export class HomePage{
readonly page:Page;
readonly acceptButton:Locator;
readonly parfumLink : Locator;


constructor(page:Page){
this.page=page
this.acceptButton = page.getByRole("button", { name: /alle erlauben/i });
this.parfumLink =page.getByRole('link',{name:/Parfum/i}).first();
}



async acceptCookies():Promise<void> {
  //const acceptButton = page.locator('button:has-text("Alle akzeptieren")');
try{
    await this.acceptButton.waitFor({state:"visible",timeout:3000});
    await this.acceptButton.click();
  }
  catch{
  console.log("nothing is displayed like a cookie");
  }
}

async clickParfum():Promise<void>{
    await this.parfumLink.hover();
   //await this.parfumLink.click();
   // await this.page.waitForURL(/.*parfum.*/);
}

}