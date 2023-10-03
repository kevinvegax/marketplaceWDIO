import { expect, browser } from '@wdio/globals'
import { Login } from '../page-object/Login.ts'
import { Details } from '../page-object/Details.ts'
import { Marketplace } from '../page-object/Marketplace.ts'

describe('My Login application', () => {
    let login: Login;
    let details: Details;
    let marketplace: Marketplace;
    let filePath = 'C:\\descarga.jpg'

    beforeAll(async () => {
        login = new Login();
        details = new Details();
        marketplace = new Marketplace();
    })

    it('Should Login', async () => {
        await browser.url(`https://facebook.com`)
        await login.email.waitForDisplayed();
        await login.email.waitForClickable();
        await login.email.setValue('ing.kevinvega23@gmail.com')
        await login.password.setValue('0448112165708');
        await login.login.click()
    })

    it('Should open Markeplace', async () => {
        // Abrir Marketplace
        await details.marketplace.waitForDisplayed()
        await details.marketplace.waitForClickable();
        await details.marketplace.click();
        
        // Crear Publicacion
        await marketplace.crearPublicacion.waitForDisplayed()
        await marketplace.crearPublicacion.waitForClickable();
        await marketplace.crearPublicacion.click();

        // Elige el tipo de publicacion
        await marketplace.articuloEnVenta.waitForDisplayed();
        await marketplace.articuloEnVenta.waitForClickable();
        await marketplace.articuloEnVenta.click();
    })

    it('Should Create Article', async () => {
        // Agrega una foto - PENDING
        // await marketplace.agregarFotos.waitForDisplayed();
        await browser.pause(3000);

        await browser.execute(()=> {
            const element = document.querySelectorAll('.x1s85apg')
            console.log(element.length)
        })
        // await browser.pause(80000);

    //     const remoteFilePath = await browser.uploadFile(filePath);
    //     await marketplace.agregarFotos2.setValue(remoteFilePath);
    //     await marketplace.agregarFotos2.click();

    //     // await browser.pause(30000);

    //     // Agrega titulo
    //     await marketplace.titulo.setValue('EO');
   
    //     // Agrega precio
    //     await marketplace.precio.setValue('12');
    //     await browser.pause(10000);

    //     // Agerga Categoria

    //     // Agega Estado
    }, 180000)

})


