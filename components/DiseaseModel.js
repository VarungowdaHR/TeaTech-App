import React, {useState} from 'react';
import {getModel, convertBase64ToTensor, startPrediction,} from '../utils/Predictionmodel'
import Result from '../utils/Result';
import { manipulateAsync,} from 'expo-image-manipulator';

const RESULT_MAPPING = ['Image Not Clear','Tea Leaf Blight','Red Leaf Spot','Tea Red Scab','Algal Leaf Spot', 'Blister Blight', 'Healty Leaf'];

const DiseaseModel = ({imagedata})=>{


    const [presentedShape, setPresentedShape] = useState('');



    async function processImagePrediction(base64Image){

        const model = await getModel();

        const manipResult = await manipulateAsync(base64Image,[{ resize: {height:1000,  width:1000 }}], { compress: 1, format: 'jpeg'});
        
        const tensor = await convertBase64ToTensor(manipResult.uri);
        const prediction = await startPrediction(model, tensor);
        const highestPrediction = prediction.indexOf(Math.max.apply(null,prediction));
        setPresentedShape(RESULT_MAPPING[highestPrediction]);

    }

        if(presentedShape==''){
            processImagePrediction(imagedata);
        }
    return (
        
            <Result res={presentedShape} />
     )

}

export default DiseaseModel