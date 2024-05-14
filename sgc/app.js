// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_Z9w9U6vk4MeQlV1TLfBWXTbEJkrxjOk",
  authDomain: "end-pro-scalper-v2.firebaseapp.com",
  databaseURL: "https://end-pro-scalper-v2-default-rtdb.firebaseio.com",
  projectId: "end-pro-scalper-v2",
  storageBucket: "end-pro-scalper-v2.appspot.com",
  messagingSenderId: "804010929759",
  appId: "1:804010929759:web:29c6d009c9c1bc4ebf35ea",
  measurementId: "G-G52DDB6XBT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

new Vue({
  el: '#app',
  data: {
    user: null,
    newClient: {
      name: '',
      mt4Account: ''
    },
    clients: []
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      this.user = user;
      if (user) {
        this.fetchClients();
      }
    });
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    },
    logout() {
      auth.signOut();
    },
    addClient() {
      db.collection('clients').add(this.newClient)
        .then(() => {
          this.newClient.name = '';
          this.newClient.mt4Account = '';
        })
        .catch(error => console.error('Error adding client: ', error));
    },
    fetchClients() {
      db.collection('clients').onSnapshot(snapshot => {
        this.clients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    },
    editClient(client) {
      const newName = prompt('Enter new name:', client.name);
      const newMt4Account = prompt('Enter new MT4 account:', client.mt4Account);
      if (newName !== null && newMt4Account !== null) {
        db.collection('clients').doc(client.id).update({ name: newName, mt4Account: newMt4Account })
          .catch(error => console.error('Error updating client: ', error));
      }
    },
    deleteClient(client) {
      if (confirm(`Are you sure you want to delete ${client.name}?`)) {
        db.collection('clients').doc(client.id).delete()
          .catch(error => console.error('Error deleting client: ', error));
      }
    }
  }
});
