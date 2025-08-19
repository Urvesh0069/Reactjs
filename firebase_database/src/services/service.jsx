import { db } from "../firebase/firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Contectcollection = collection(db, "users");

// Function to add a contact
export const addContect = async (user) => {
  try {
    const docRef = await addDoc(Contectcollection, user);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Function to delete a contact
export const deleteContect = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

// Function to update a contact
export const updateContect = async (id, user) => {
  try {
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, user);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

// Function to get all contacts
export const getContects = async () => {
  try {
    const data = await getDocs(Contectcollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};


