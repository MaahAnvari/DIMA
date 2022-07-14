// import functions from 'firebase-functions-test';
// import * as admin from 'firebase-admin';
// import * as path from 'path';

// // you can check all these information in firebase console/settings
// const projectConfig = {
//   projectId: 'bookstore-24caa',
//   databaseURL:
//     'https://bookstore-24caa-default-rtdb.europe-west1.firebasedatabase.app/',
// };

// // you should pass projectConfig and path to serviceAccountKey like this
// // path.resolve defaults to directory where you're executing test command
// // for my case, it's functions directory
// const testEnv = functions(projectConfig, path.resolve('service-key.json'));

// describe('Login functions', () => {
//   let adminStub, api;

//   beforeAll(() => {
//     // you can use `sinon.stub` instead
//     adminStub = jest.spyOn(admin, 'initializeApp');

//     // after initializeApp call, we load our functions
//     api = require('../index');
//   });

//   afterAll(() => {
//     // clean things up
//     adminStub.mockRestore();
//     testEnv.cleanup();

//     // reset our database
//     admin.database().ref('Users').remove();
//   });

//   it('should store user in db on GoogleOAuth', async () => {
//     const wrapped = testEnv.wrap(api.onUserCreate); //which is our function?

//     const testUser = {
//       uid: '000',
//       email: 'test@email.com',
//       name: 'TEST',
//     };

//     // wrap your `onUserCreate` method and pass parameter: user
//     // for the sake of brevity, I omitted other `UserRecord` properties.
//     // you can check https://firebase.google.com/docs/reference/js/firebase.User for more information
//     await wrapped(testUser);

//     // we read our user from database
//     const createdUser = await admin
//       .database()
//       .ref(`/Users/${testUser.uid}`)
//       .once('value');

//     // we expect our newly created user to have zero points
//     expect(createdUser.val()).toHaveProperty('points', 0);
//   });
// });
