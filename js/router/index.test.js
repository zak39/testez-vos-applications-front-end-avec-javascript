/**
 * @jest-environment jsdom
 */

 import "@testing-library/jest-dom"
 import { getByTestId } from "@testing-library/dom"
 import { router } from './index'
 
 describe('Router Integration Test Suites', () => {
     it('Should render the Sign In Page', async () => {
         document.body.innerHTML = `
             <div id="root"></div>
         `
 
         await router()
 
         expect(
             getByTestId(document.body, 'sign-in-form-title')
         ).toHaveTextContent('Veuillez vous connecter')
     })
 
     it('Should render the Sensors Home Page', async () => {
         document.body.innerHTML = `
             <div id="root">
             </div>
         `
 
         // On précise la localisation de la page
         document.location = '/#/home'
 
         await router()
 
         expect(
             getByTestId(document.body, 'home-sensors-title')
         ).toHaveTextContent('Vos capteurs')
     })
 
     it('Should render the Sensor Page', async () => {
         document.body.innerHTML = `
             <div id="root">
             </div>
         `
 
         // On précise la localisation de la page
         document.location = '/#/facade-details'
 
         await router()
 
         expect(
             getByTestId(document.body, 'sensor-detail-title')
         ).toHaveTextContent('Détails du capteur #7')
     })
 
     it('Should render the Add Sensor Page', async () => {
         document.body.innerHTML = `
             <div id="root">
             </div>
         `
 
         // On précise la localisation de la page
         document.location = '/#/add-sensor'
 
         await router()
 
         expect(
             getByTestId(document.body, 'add-sensor-title')
         ).toHaveTextContent('Ajout d\'un nouveau capteur')
     })
 })