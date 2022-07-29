import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '$lib/services/firebase';

const functions = getFunctions(app);

// NOTE: properties/methods exposed from services (export) are prepended with
// a _ so that they can easily be distinguished from component properties/methods

export const _createPost = async (post) => {
    return httpsCallable(functions, 'addpost')(post);
}