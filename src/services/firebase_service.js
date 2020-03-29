import { db } from "../firebase/firebase_init";

class FireBaseService {
    getDonationLocations() {
        return new Promise((resolve, reject) => {
            db.ref('/donation_locations').once('value', (snapshot) => {
                const donations_list = snapshot.val();
                console.log(donations_list);
                if(donations_list) {
                    resolve(donations_list);
                } else {
                    reject('error fetching donation locations from db');
                }
            });
        });
    }

    getDoneeLocations() {
        return new Promise((resolve, reject) => {
            db.ref('/donee_locations').once('value', (snapshot) => {
                const donee_list = snapshot.val();
                if(donee_list) {
                    resolve(donee_list);
                } else {
                    reject('error fetching donee locations from db');
                }
            });
        });
    }

    getDonationLocationById(id) {
        return new Promise((resolve, reject) => {
            db.ref('/donation_locations/' + id).once('value', (snapshot) => {
                const donation_data = snapshot.val();
                if(donation_data) {
                    resolve(donation_data);
                } else {
                    reject('error fetching donation location from db. Location id: ' + id);
                }
            });
        });
    }

    getDoneeLocationById(id) {
        return new Promise((resolve, reject) => {
            db.ref('/donee_locations/' + id).once('value', (snapshot) => {
                const donee_data = snapshot.val();
                if(donee_data) {
                    resolve(donee_data);
                } else {
                    reject('error fetching donee location from db. Location id: ' + id);
                }
            });
        });
    }
}

export const firebase_service = new FireBaseService();