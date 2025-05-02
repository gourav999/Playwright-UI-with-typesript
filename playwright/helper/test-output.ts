import {Page,test} from '@playwright/test';


export const takescreenshotAndAttachtoTest=async (page:Page, imagename: string): Promise<void> => {
    
    test.info().attach(imagename,{body:await page.screenshot({fullPage:true}),contentType:'image/png'});
    };


    export const logError=(message: string): void => {
        test.info().annotations.push({
            type:'error',
            description:message,

    });console.error(message);
};

export const logInfo=(options:{type:string;description:string|any}): void => {
    test.info().annotations.push({type:options.type,description:JSON.stringify (options.description)});
}

export const logErrorAndAttachScreenshotToTest=async(page:Page,options:{imageName:string,errorMessage:string},):Promise<void> =>{
    
    logError(options.errorMessage);
    await takescreenshotAndAttachtoTest(page, options.imageName);
};