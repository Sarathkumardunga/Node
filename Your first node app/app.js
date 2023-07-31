let firstName = process.argv[2];
firstName = firstName[0].toUpperCase() + firstName.substring(1);

console.log(`Hi ${firstName}`);