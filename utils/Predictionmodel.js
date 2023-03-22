import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import {bundleResourceIO, decodeJpeg} from '@tensorflow/tfjs-react-native';
import * as FileSystem from 'expo-file-system';

const BITMAP_DIMENSION = 256;
const modelJson = require('../assets/models/model.json');
const modelWeights = require('../assets/models/group1-shard1of1.bin');
const TENSORFLOW_CHANNEL = 3;

export const getModel = async () => {
  try {
    await tf.ready();
    return await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
  } catch (error) {
    console.log('Could not load model', error);
  }
};


export const convertBase64ToTensor = async (img) => {
  try {
    const imgB64 = await FileSystem.readAsStringAsync(img, { encoding: FileSystem.EncodingType.Base64 });
    const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
    const raw = new Uint8Array(imgBuffer)
    const imageTensor = decodeJpeg(raw, 3);
    const image=tf.image.resizeBilinear(imageTensor, [256, 256])
    const expanded = tf.expandDims(image, 0);

    return expanded

  } catch (error) {
    alert('Could not convert base64 string to tensor', error)
  }
};


export const startPrediction = async (model, tensor) => {
  try {
    const output = await model.predict(tensor);
    return output.dataSync();

  } catch (error) {

    alert('Error occured during prediction')
  }
};