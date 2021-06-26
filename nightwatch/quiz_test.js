module.exports = {
    test: client => {
        client
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('.main-title', 10 * 1000)
            .assert.visible('input[type=email]')
            .setValue('input[type=email]', 'thomas@facada.com')
            .setValue('input[type=password]', 'azerty')
            .click('button[type=submit]')
            .assert.visible('.user-email-error-msg')
            .setValue('input[type=email]', 'thomas@facadia.com')
            .click('button[type=submit]')
            .assert.not.visible('.user-email-error-msg')
            .end()
    }
}