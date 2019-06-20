const address = [
    '1299 S Juniper Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

const [, city = 'Moscow', state, zip] = address;

console.log(`You are in ${city} ${state}`);


const item = [
    'coffee',
    '2$',
    '3$',
    '$4'
];

const [itemName, smallPrice, mediumPrice, largePrice] = item;


console.log(`A medium ${itemName} costs ${mediumPrice}`);