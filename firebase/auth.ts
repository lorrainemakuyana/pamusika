import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./config";
import { IUser } from "@/interfaces/user";

const auth = getAuth(app);
const firestore = getFirestore(app);

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    if (user) {
      await createUserFirebaseRecord(user.user.uid, {
        uid: user.user.uid,
        email,
        name,
        createdAt: Date.now(),
      });
      return user.user.uid;
    }

    return null;
  } catch (error: any) {
    const errorCode = error.code;
    return errorCode;
  }
}

export async function signIn(email: string, password: string) {
  const user = await signInWithEmailAndPassword(auth, email, password);

  if (user) return user.user.uid;

  return null;
}

async function createUserFirebaseRecord(uid: string, data: Partial<IUser>) {
  try {
    const userDoc = doc(firestore, `Users/${uid}`);

    await setDoc(userDoc, data);
    return true;
  } catch (error) {
    console.error("Error creating user record:", error);
    return null;
  }
}
