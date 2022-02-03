import { useState,useEffect, useContext} from 'react';
import {FirebaseContext } from '../context/firebase';

export default function useContent (target) {
    const {content, setContent } = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
         firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshort) => {
                const allContent = snapshort.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));
                setContent(allContent)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    return { [target]: content }  
}   