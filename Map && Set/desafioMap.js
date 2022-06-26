function getAdmins(map){
let admins = [];
 for ([key, value] of map) {
     if (value === 'Admin') {
         admins.push(key);
     }
 }  
 return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Luiza', 'Admin');
usuarios.set('Catia', 'User');
usuarios.set('Carlos', 'Admin');

console.log(getAdmins(usuarios));