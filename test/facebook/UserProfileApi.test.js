const {facebookbot} = require('../../lib/Botkit').facebookbot;

describe('User_profile_api', () => {

    test('Should not fail', () => {
        const options = {
            debug: true,
            access_token: 'A',
            verify_token: 'B',
            app_secret: 'C'
        };

        const controller = facebookbot(options);

        expect(controller.api).toHaveProperty('user_profile');
    });

});
