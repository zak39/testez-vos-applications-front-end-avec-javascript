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
import SignInPage from '../../pages/signIn'
import { handleSignInForm } from './index'

let user

beforeEach(() => {
    user = userEvent

    document.body.innerHTML = SignInPage.render()
    // C'est cette fonction que j'ai oublié
    handleSignInForm()
})

afterEach(() => {
    user = null

    document.body.innerHTML = ''
})

describe('SignInForm Integration Test Suites', () => {
    it('should display the error message when the e-mail is not correct', () => {
        // Je selectionne l'input associe au label
        const input = getByLabelText(document.body, 'Votre addresse e-mail')


        // Je saisie le texte "thomas@thomas.com"
        user.type(input, 'thomas@thomas.com' )

        // Je clique sur le bouton submit
        user.click(getByRole(document.body, 'button'))

        // Je teste si le message d'erreur est bien present
        expect(getByTestId(document.body, 'user-email-error-msg')).not.toHaveAttribute('hidden')
    })

    it('Should not display an error message when the email address is correct but it should display the password error message', () => {

        // Je selectionne l'input associe au label
        const input = getByLabelText(document.body, 'Votre addresse e-mail')

        // Je saisie le texte "thomas@facadia.com"
        user.type(input, 'thomas@facadia.com')

        // Je clique sur le bouton submit
        user.click(getByRole(document.body, 'button'))

        // Je teste si le message d'erreur n'est pas present
        expect(screen.getByTestId('user-email-error-msg')).toHaveClass('hidden')

        // Je teste si le message d'erreur est bien present
        expect(screen.getByTestId('user-password-error-msg')).not.toHaveClass('hidden')
        
    })

    it('Should display an error message when the password is not correct', () => {

        // Je selectionne l'input associe au label
        const inputEmail = getByLabelText(document.body, 'Votre addresse e-mail')
        const inputPassword = getByLabelText(document.body, 'Votre mot de passe')

        // Je saisie le texte "thomas@thomas.com"
        user.type(inputEmail, 'thomas@facadia.com')
        // Je saisie le texte "azeaze"
        user.type(inputPassword, 'azeaze')

        // Je clique sur le bouton submit
        user.click(getByRole(document.body, 'button'))

        // Je teste si le message d'erreur est bien present
        expect(getByTestId(document.body, 'user-password-error-msg')).not.toHaveClass('hidden')
        
    })

    it('Should not display any error messages since both email and password are correct', () => {

        // Je selectionne l'input associe au label
        const inputEmail = getByLabelText(document.body, 'Votre addresse e-mail')
        const inputPassword = getByLabelText(document.body, 'Votre mot de passe')

        // Je saisie le texte "thomas@thomas.com"
        user.type(inputEmail, 'thomas@facadia.com')
        user.type(inputPassword, 'azerty')

        // Je clique sur le bouton submit
        user.click(getByRole(document.body, 'button'))

        // Je teste si le message d'erreur n'est pas present
        expect(getByTestId(document.body, 'user-email-error-msg')).toHaveClass('hidden')
        // Je teste si le message d'erreur n'est pas present
        expect(getByTestId(document.body, 'user-password-error-msg')).toHaveClass('hidden')
        
    })
})