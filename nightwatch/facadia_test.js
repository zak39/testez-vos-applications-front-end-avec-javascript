module.exports = {
    test: client => {
        client
            .url('http://localhost:5500/')
            .waitForElementVisible('.main-title', 5 * 1000)
            .assert.visible('#user-email')
            .setValue('#user-email', 'thomas@facadia.com')
            .assert.visible('#user-password')
            .setValue('#user-password', 'azerty')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .waitForElementVisible('.section-title', 3 * 1000)
            .assert.visible('.section-title', 'Vos capteurs')
            .assert.visible('.sensors-wrapper')
            .assert.visible('.sensors-wrapper .sensor-card:nth-child(7)')
            .assert.visible('.sensors-wrapper .sensor-card:nth-child(7) .sensor-info h3', 'Capteur #7')
            .assert.visible('.sensors-wrapper .sensor-card:nth-child(7) .sensor-info .sensor-info-btn')
            .click('.sensors-wrapper .sensor-card:nth-child(7) .sensor-info .sensor-info-btn')
            .waitForElementVisible('.section-title', 10 * 1000)
            .assert.visible('.section-title', 'Détails du capteur #7')
    }
}