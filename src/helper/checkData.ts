import { Builder, By, Key, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function checkData(url: string): Promise<Boolean> {

    const driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(new chrome.Options().headless().addArguments("--disable-gpu", "window-size=1920x1080","lang=ko_KR"))
    .build();

    await driver.get(url);

    let result: Boolean = false;

    try {

        await driver.wait(until.elementLocated(By.className("HlvSq")),10000)

        result=true
        
    } catch (error) {

       result=false
        
    }finally{

        await driver.quit();
    }

    return result;

   
    
}