/**
 * @jest-environment jsdom
 */

import {
    screen,
    getByTestId,
    getByLabelText,
    getByRole
} from '@testing-library/dom'
import { router } from '../../router'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

let user

beforeEach(async () => {
    user = userEvent

    document.body.innerHTML = `
        <div id="root"></div>
    `

    await router()
})

afterEach(() => {
    user = null

    document.body.innerHTML = ''
})

describe('Sign In Form Integration Test Suites', () => {
    it('Should render an error message with a bad email address', () => {

        // Je selectionne l'input associe au label
        const input = screen.getByLabelText('Votre addresse e-mail', { selector: 'input'})

        // Je saisie le texte "thomas@thomas.com"
        user.type(input, 'thomas@facadia.com')

        // Je clique sur le bouton submit
        user.click(screen.getByRole('button'))

        // Je teste si le message d'erreur est bien present
        expect(screen.getByTestId('user-email-error-msg')).toBeVisible()
        
    })

    it('Should render an error message with a good email address', () => {

        // Je selectionne l'input associe au label
        const input = screen.getByLabelText('Votre addresse e-mail', { selector: 'input'})

        // Je saisie le texte "thomas@thomas.com"
        user.type(input, 'thomas@facadia.com')

        // Je clique sur le bouton submit
        user.click(screen.getByRole('button'))

        // Je teste si le message d'erreur est bien present
        expect(screen.getByTestId('user-password-error-msg')).toBeVisible()
        
    })

    it('Should render an error message with a good email address and a bad password', () => {

        // Je selectionne l'input associe au label
        const inputEmail = screen.getByLabelText('Votre addresse e-mail', { selector: 'input'})
        const inputPassword = screen.getByLabelText('Votre mot de passe', { selector: 'input'})

        // Je saisie le texte "thomas@thomas.com"
        user.type(inputEmail, 'thomas@facadia.com')
        // Je saisie le texte "azeaze"
        user.type(inputPassword, 'azeaze')

        // Je clique sur le bouton submit
        user.click(screen.getByRole('button'))

        // Je teste si le message d'erreur est bien present
        expect(screen.getByTestId('user-password-error-msg')).toBeVisible()
        
    })

    it('Should not render an error message with a good email address and password', () => {

        // Je selectionne l'input associe au label
        const inputEmail = screen.getByLabelText('Votre addresse e-mail', { selector: 'input'})
        const inputPassword = screen.getByLabelText('Votre mot de passe', { selector: 'input'})

        // Je saisie le texte "thomas@thomas.com"
        user.type(inputEmail, 'thomas@facadia.com')
        user.type(inputPassword, 'azerty')

        // Je clique sur le bouton submit
        user.click(screen.getByRole('button'))

        // Je teste si le message d'erreur est bien present
        expect(screen.getByTestId('user-password-error-msg')).not.toBeVisible()
        
    })
})