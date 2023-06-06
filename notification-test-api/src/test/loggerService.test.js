const logger = require('../services/logger');

const mock = {
        id: '8a058602-6c73-4af1-82b6-98bdf996af4a',
        suscription: 'Sports',
        channel: 'SMS',
        user: {
          id: '1',
          name: 'Jesus Francisco',
          email: 'mail@mail.com',
          phoneNumber: '3310203040',
          subscribed: [ 'sports', 'finance', 'movies' ],
          channels: [ 'SMS', 'EMAIL', 'PUSHNOTIFICATIONS' ]
        },
        date: '2023-06-06T00:04:03.814Z',
        message: 'asdasd'
      }
     

test('object should be write it on the file, returning true',() =>{
    expect(logger.saveFile(mock)).toBe(true);

})

