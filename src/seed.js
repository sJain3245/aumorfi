/* eslint-disable no-plusplus */
// NOTE: replace 'GiesvDnbUsM2R0QR5bhgLYgI5Ht1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'GiesvDnbUsM2R0QR5bhgLYgI5Ht1',
      username: 'hachi3245',
      fullName: 'Sonal Jain',
      emailAddress: 'sonaljain.mcs@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4', '5'],
      dateCreated: Date.now(),
    },
    {
      userId: '2',
      username: 'sejall_jain',
      fullName: 'Sejal Jain',
      emailAddress: 'sejal.jain293@gmail.com',
      following: [],
      followers: ['GiesvDnbUsM2R0QR5bhgLYgI5Ht1'],
      dateCreated: Date.now(),
    },
    {
      userId: '3',
      username: 'cutieBaby_sangu',
      fullName: 'Sangeeta C',
      emailAddress: 'sangeeta6754@gmail.com',
      following: [],
      followers: ['GiesvDnbUsM2R0QR5bhgLYgI5Ht1'],
      dateCreated: Date.now(),
    },
    {
      userId: '4',
      username: 'chainu',
      fullName: 'Chain Raj',
      emailAddress: 'raj_saklecha@yahoo.com',
      following: [],
      followers: ['GiesvDnbUsM2R0QR5bhgLYgI5Ht1'],
      dateCreated: Date.now(),
    },
    {
      userId: '5',
      username: 'kasturi',
      fullName: 'Kistur Bai',
      emailAddress: 'kisturbai@woohoo.com',
      following: [],
      followers: ['GiesvDnbUsM2R0QR5bhgLYgI5Ht1'],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/sonu/${i}.jpeg`,
        caption: 'Love the whole fiasco',
        likes: [],
        comments: [
          {
            displayName: 'amma',
            comment: 'Maari fave pothi',
          },
          {
            displayName: 'chainu',
            comment: 'Byaav karne ja bai',
          },
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now(),
      });
  }
}
