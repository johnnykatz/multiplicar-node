
const {crearArchivo,listarTabla} =require('./multiplicar/multiplicar');
const {argv}=require('./config/yargs');
var colors = require('colors');


let comando=argv._[0];

switch(comando){
	case 'listar':
	listarTabla(argv.base, argv.limite);
	break;
	case 'crear':
	crearArchivo(argv.base,argv.limite)
	.then(archivo=>console.log(`Archivo creado: ${colors.green(archivo)}`))
	.catch(e=>console.log(e));
	break;
	default:
	console.log('default')
	break;
}

// let base='sd';

// console.log(process.argv);


let argv2=process.argv;
// let parametro=argv[2];
// let base=parametro.split('=')[1];
// console.log(base);


// console.log(`Limite ${argv.limite} `);


// crearArchivo(base)
// .then(archivo=>console.log(`Archivo creado: ${archivo}`))
// .catch(e=>console.log(e));


// console.log(crearArchivo)crearArchivo(base)
// .then