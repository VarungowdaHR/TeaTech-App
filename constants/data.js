import blister from '../assets/images/blister.jpg'
import spot from '../assets/images/4.jpg'
import scab from '../assets/images/SCAB.jpg'
import algal from '../assets/images/algal.jpg'
import blight from '../assets/images/blight.jpg'



const DiseaseData=[{
    id:1,
    name:'Red Leaf Spot',
    Symptoms:['Yellowish green spots developed on young leaves. Circular irregular spots develop on the leaves with red and dray mycelium. Old leaves are affected by these diseases.'],
    Management:['  Avoid plant stress.','Grow tea bushes with adequate spacing to permit air to circulate and reduce humidity and the duration of leaf wetness.','Spray Copper Oxy Chloride or Bordeaux mixture 0.1% during winter season and Summer season'],
    Survival_and_spread:['The tiny, black spots on the lesions contain the fungal spores.Rain splash transports the spores from one plant or site of infection to another. If the spores land on a leaf, they germinate to start a new leaf spot or a latent infection.'],
    image:spot
},
{
    id:2,
    name:'Algal Leaf Spot',
    Symptoms:['Leaves develop lesions that are roughly circular, raised and purple to reddish-brown.'],
    Management:[' Avoid plant stress.','Avoid poorly drained sites.','Promote good air circulation in the plant canopy to reduce humidity and duration of leaf wetness.','Removal of infected portions by spraying of bordeaux mixture','Destruction of affected plant portions','Improving the nutrient status of the soil by application of nitrogen, phosphorus and potassium'],
    Survival_and_spread:['The pathogens reproduce and survive in spots on leaves or stems and in fallen plant host debris.'],
    image:algal
},
{
    id:3,
    name:'Tea Red Scab',
    Symptoms:['Small brown lesions with a yellow halo‐sized pinhead were initially observed on the leaf edges when irradiated with light'],
    Management:['Where possible, avoid water build up in the crop (eg. improved drainage, change harvest times to coincide with new shoot growth during dryer periods)','Avoid moving machinery through the crop when conditions are wet','Manage insects and to avoid wounding and potential entry points for the pathogen','If using fungicides, apply promptly when conditions favour infection to protect new shoots from infection.  Use more effective fungicides, and rotate chemicals.'],
    Survival_and_spread:[' Updated soon!... '],
    image:scab
},
{
    id:4,
    name:'Blister Blight',
    Symptoms:['Small, pinhole-size spots are initially seen on young leaves less than a month old.', 'As the leaves develop, the spots become transparent, larger, and light brown.','After about 7 days, the lower leaf surface develops blister-like symptoms, with dark green, water-soaked zones surrounding the blisters.','Following release of the fungal spores, the blister becomes white and velvety.','Subsequently the blister turns brown, and young infected stems become bent and distorted and may break off or die.'],
    Management:['Removal of affected leaves and shoots by pruning and destruction of the same have been recommended.','Spraying of Bordeaux mixture or Copper Oxy Chloride 0.1%.','A mixture of 210g of Copper oxy Chloride + 210g of nickel chloride per ha sprayed at 5 days interval from June to September and October to November.','Spray Tridemorph at 340 and 560 ml/ha is satisfactory under mild and moderate rainfall conditions.'],
    Survival_and_spread:['The pathogens survive on leaves or stems and in fallen plant host debris.','Disease is readily spread by the dispersal of spore by wind.'],
    image:blister
},
{
    id:5,
    name:'Tea Leaf Blight',
    Symptoms:['Small, oval, pale yellow-green spots first appear on young leaves. Often the spots are surrounded by a narrow, yellow zone. As the spots grow and turn brown or gray, concentric rings with scattered, tiny black dots become visible and eventually the dried tissue falls, leading to defoliation. Leaves of any age can be affected.'],
    Management:['Avoid plant stress. Grow tea bushes with adequate spacing to permit air to circulate and reduce humidity and the duration of leaf wetness.'],
    Survival_and_spread:['The pathogen survives in decay plant debris which is the sourse of primary infection.','When young twigs of susceptible cultivars are cut and used to root new plants, latent mycelium in the leaf tissue may start to invade nearby cells to form brown spots, and this may lead to death of leaves and twigs.'],
    image:blight,
}
]




export default DiseaseData