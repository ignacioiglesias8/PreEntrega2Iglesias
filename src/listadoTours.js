/*imagenes*/
import sanSalvador from "./assets/img/sansalvador.jpg";
import elCarmen from "./assets/img/elcarmen.jpg";
import yala from "./assets/img/yala.jpg";
import reyes from "./assets/img/reyes.jpg";
import tiraxi from "./assets/img/tiraxi.jpg";
import purmamarca from "./assets/img/purmamarca.jpg";
import maimara from "./assets/img/maimara.jpg";
import tilcara from "./assets/img/tilcara.jpg";
import uquia from "./assets/img/uquia.jpg";
import humahuaca from "./assets/img/humahuaca.jpg";
import trescruces from "./assets/img/trescruces.jpg";
import abrapampa from "./assets/img/abrapampa.jpg";
import casabindo from "./assets/img/casabindo.jpg";
import cochinoca from "./assets/img/cochinoca.jpg";
import rinconada from "./assets/img/rinconada.jpg";
import cusicusi from "./assets/img/cusicusi.jpg";
import abdon from "./assets/img/abdon.jpg";
import yavi from "./assets/img/yavi.jpg";
import lasescaleras from "./assets/img/lasescaleras.jpg";
import ocloyas from "./assets/img/ocloyas.jpg";
import sanpedro from "./assets/img/sanpedro.jpg";
import calilegua from "./assets/img/calilegua.jpg";
import sanfrancisco from "./assets/img/sanfrancisco.jpg";
import santaana from "./assets/img/santaana.jpg";
import sanpedroatacama from "./assets/img/sanpedroatacama.jpg";
import tupiza from "./assets/img/tupiza.jpg";
import bermejo from "./assets/img/bermejo.jpg";

/*los resumenes deben tener entre 25 y 48 carácteres*/


const tours = [
    {
        id: '1',
        nombre: 'San Salvador',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1000,
        stock: 10,
        imagen: sanSalvador,
        descripcion: <div><p>
        En este tour visitaremos los lugares turísticos más destacados de <b>San Salvador de 
            Jujuy</b>:</p>
        <ul>Nos encontraremos a las 8am en la <b>Plaza Belgrano</b>, corazón de la ciudad, para 
            conocer importantes edificios históricos como la casa de Gobierno, el Cabildo 
            de Jujuy y el monumento al General Manuel Belgrano.</ul>
        <ul>Luego nos dirigiremos a la <b>Catedral de Jujuy</b>, uno de los íconos arquitectónicos 
            más destacados de la ciudad, la cual cuenta con una hermosa fachada barroca y un 
            interior decorado con frescos y esculturas.</ul>
        <ul>Continuaremos el tour con la visita a dos importantes museos de la ciudad: el <b>Museo
            Lavalle</b> y el <b>Museo Arquelógico Provincial</b>. Durante el tour, también iremos
            viendo cada uno de las obras de la artista salteña Lola Mora.</ul>
        <ul>Antes de almorzar, visitaremos dos barrios residenciales que permiten unas increíbles 
            vistas panorámicas. El primero será <b>Ciudad Nievas</b>, enclavado en el centro de 
            la ciudad, y el segundo es <b>Alto La Viña</b>, que nos permitirá ver la cordillera 
            de los Andes de fondo.</ul>
        <ul>Para cerrar este tour, disfrutaremos de un menú tipicamente regional en <b>Viracocha</b>,
            un emblema gastronómico de la ciudad.</ul>
            </div>,
        resumen: 'Capital con una cultura y naturaleza vibrante',
    },
    {
        id: '2',
        nombre: 'El Carmen',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1300,
        stock: 10,
        imagen: elCarmen,
        descripcion: <div><p>
        Viajeramos al sur de la provincia para conocer los paisajes que rodean <b>El Carmen</b>:</p>
        <ul>Nos encontraremos a las 9am en la Plaza Belgrano para comenzar el viaje. Nuestra 
            primer parada será el <b>Dique Las Maderas</b> donde realizaremos un trekking hasta
            llegar al pequeño puerto. Allí saldremos el bote a recorrer rincones increíbles del dique.</ul>
        <ul>Luego nos dirigiremos al <b>Dique Las Ciénagas</b>, donde contaremos con un tiempo libre
            para que practiques deportes acuáticos, recorras los alrededores o simplemente descanses 
            en la naturaleza.</ul>
        <ul>Al mediodía almorzaremos un clásico restaurant para deleitarnos con los platos típicos 
            del sur jujeño.</ul>
        <ul>Al finalizar, retomaremos el viaje hacia <b>San Antonio</b>, un pequeño pueblo que se destaca
            por su entorno verde junto al Río Perico. Además de realizar un trekking por el lecho del
            río, podremos recorrer el centro del pueblo y su mercado de artesanías.</ul>
        <ul>Por último, iremos a la ciudad de <b>El Carmen</b> para recorrer su pequeña plaza y finalizar el 
            día en el buñuelódromo. Nadie puede volverse de este tour sin probar los bueñuelos con miel
            de caña, un clásico de la provincia.</ul>
            </div>,
        resumen: 'Ríos cristalinos y cerros verdes en el corazón del valle',
    },
    {
        id: '3',
        nombre: 'Yala',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: yala,
        descripcion: <div><p>
        A poco kilomentros de la capital, el tour al <b>Parque Provincial Potrero de Yala</b> consiste 
        en lo siguiente:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. La 
            primera parada será en la <b>Plaza Central de Yala</b> donde nos acercaremos al 
            encuentro del Río Grande y el Río Yala para observar una increíble vista panorámica.</ul>
        <ul>Luego nos dirigiremos al Parque Pronvincial, donde realizaremos una parada para 
            conocer los <b>Paredones de Yala</b>, una pequeña quebrada natural formada por el cause
            del Río Yala. Además de un trekking podremos observar parte de la fauna del lugar.</ul>
        <ul>Continuaremos montaña arriba para llegar a las lagunas <b>Desaguadero</b> y <b>Rodeo</b>. 
            En esta última realizaremos un trekking por el sendero Miraflores.
            En el descenso, almorzaremos en <b>Restaurant La Turuca</b> para degustar la gastronomía
            típica de la zona.</ul>
        <ul>Seguiremos unos kilometros, pasaremos por la laguna <b>Comedero</b> y llegaremos a la
            posta para realizar la excursión a caballo hacia la cáscada <b>La Horqueta</b>.</ul>
        <ul>Para finalizar, retomaremos la vuelta hacia San Salvador pero antes, pasaremos por <b>Los 
            Nogales</b> para merienda típica jujeña: Api con buñuelos.</ul>
            </div>,
        resumen: 'Las Lagunas de Yala, recorrido obligatorio si visitas Jujuy',
    },
    {
        id: '4',
        nombre: 'Reyes',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1700,
        stock: 10,
        imagen: reyes,
        descripcion: <div><p>
        Las <b>Termas de Reyes</b> se han convertido en un destino turístico popular de Jujuy en el cual:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. La 
            primera parada será en <b>Villa Jardín de Reyes</b> donde nos caminaremos el centro
            del pueblo para conocer su historia.</ul>
        <ul>Luego nos dirigiremos al <b>Hotel Termas de Reyes</b>, para concoer el emblático
            destino turístico que le ha dado vida a esta zona. Ahí mismo nos deleitaremos con 
            bocados tradicionales de la carta del Hotel.</ul>
        <ul>Continuaremos montaña arriba para observar el <b>Mirador de Termas de Reyes</b> y 
            nos adentraremos a las montañas para llegar la <b>Cascáda Ñieri</b>, también conocida como la
            cascada escondida.</ul>
        <ul>Volveremos hacia la zona de las termas para almorzar un asado bien jujeño en el <b>Salón
            Comunitario</b>. En caso de requerir un menú vegetariano, se solicita notificar apenas comienza
            el tour.</ul>
        <ul>Unas vez que realicemos la correcta digestión, tendremos tiempo cumplir nuestro objetivo:
            Relajarnos en las aguas termales de Reyes. Para ello tendremos tiempo hasta el retorno en
            el <b>Complejo Qubrada Termal</b>, el cual cuenta con servicio de barra y cafatería (no incluido).</ul>
            </div>,
        resumen: 'Relax con aguas termales curativas y entorno natural',
    },
    {
        id: '5',
        nombre: 'Tiraxi',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: tiraxi,
        descripcion: <div><p>
        <b>Tiraxi</b> es una pequeña región del valle jujeño que concentra diversas actividades:</p>
        <ul>Nos encontraremos a las 9am en la Plaza Belgrano para comenzar el viaje. La 
            primera parada será en la entrada  de <b>León</b>, el último pueblo del valle antes
            de entrar a la Quebrada de Humahuaca, para observar el <b>Mirador al Río Grande</b>.</ul>
        <ul>Luego nos dirigiremos a <b>Jaire</b>, pasaremos por el pequeño poblado e iremos por
            caminos serpenteantes hasta nuestro primer trekking por el <b>Angosto de Jaire</b>,
            una angosta quebrada de paredes de granito negro producto del arroyo Manso.</ul>
        <ul>Luego nos adentraremos en la <b>Reserva Natural Tiraxi</b> para conocer su naturaleza.
            En la zona de camping, tomaremos un almuerzo liviano para recargar energías y continuar 
            con el tour.</ul>
        <ul>Mas adelante, realizaremos el segundo trekking, por medio de las yungas, que nos 
            llevará a la <b>Cascada de Tiraxi</b>. A la vuelta, pasaremos por la <b>Comunidad 
            Aborigen de Tiraxi</b> que nos contará su historia. 
        </ul>
        <ul>Antes de regresar, haremos una breve parada en <b>Lozano</b> para visitar unas de las
            joyas gastronómicas de la provincia de Jujuy: <b>Flor del Pago</b>. Este restaurant 
            italo-colonial, nos abrira las puertas para deleitarnos de una merienda gourmet.</ul>
            </div>,
        resumen: 'Conexión con la naturaleza en el norte del valle',
    },
    {
        id: '6',
        nombre: 'Purmamarca',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2300,
        stock: 10,
        imagen: purmamarca,
        descripcion: <div><p>
        <b>Purmamarca</b> y sus alrededores nos muestran una infinidad de actividades:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. De allí,
            iremos directamente a <b>Purmamarca</b> donde llegaremos a la Plaza Central para 
            conocer su historia y visitar puntos claves como el Cabildo (el más pequeño de 
            Argentina), la iglesia y el algarrobo histórico.</ul>
        <ul>Luego nos dirigiremos a un pequeño trekking que rodea el majestuoso <b>Cerro de los
            Siete Colores</b>. Comenzaremos por el mirador que se encuentra en el pueblo y 
            conseguiremos rodearlo lentamente para apresiar su magia.</ul>
        <ul>Luego nos adentraremos en el <b>Paseo de los Colorados</b>, un trekking de 3km
            por otra increíble formación geológico que nos presenta una increíble variedad
            de colores y contrastes.</ul>
        <ul>De vuelta al pueblo, nos tomaremos tiempo para comer un típico almuerzo local para 
            recargar energías y escuchar artistas folklóricos locales. También tendremos un
            tiempo libre para que recorras la feria de artesanías y ropa de Purmamarca</ul>
        <ul>Para finalizar el tour, iremos en trasporte hacia las <b>Salinas Grandes</b>, el salar 
            más extenso que tiene Argentina. Al regreso, haremos una breve parada en el mirador de
            la <b>Cuesta del Lipán</b> para obtener unas de las mejores fotos de tu viaje.</ul>
            </div>,
        resumen: 'Tour ideal para conocer una pintura hecha pueblo',
    },
    {
        id: '7',
        nombre: 'Maimará',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2300,
        stock: 10,
        imagen: maimara,
        descripcion: <div><p>
        Descubre la gastronomía de la Quebrada de Humahuaca en <b>Maimará</b>:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. De allí,
            comenzaremos el viaje con destino a <b>Maimará</b> donde llegaremos a la Plaza 
            Central para conocer su historia y subiremos al mirador para observar la <b>Paleta 
            del Pintor</b>, la principal postal que debes tener del pueblo. </ul>
        <ul>Luego, iremos al norte para comenzar un pequeño trekking a los <b>Castillos de
            Huichaira</b> donde nos adentraremos el empinadas formaciones geológicos que se 
            asemejan a los castillos góticos medievales.</ul>
        <ul>Antes de ir a comer, tendremos tiempo para observar el <b>Puente Natural</b>,
            un sendero natural formado en las alturas de los cerros y que preserva un paisajes
            asombroso.</ul>
        <ul>Pasado el mediodía, nos adentraremos en la zona de los viñedos. Maimará es muy
            reconocida por su tierra fértil y su producción vitivinícola. Asi que será una buena 
            excusa para realizar un pequeño recorrido por la <b>Bodega Dupont</b> para almorzar
            y degustar sus vinos.</ul>
        <ul>Para finalizar el tour, visitaremos Posta de Hornillos para descubir el <b>Sitio 
            Arqueológico Posta de Hornillos</b>, un yacimiento arqueológico donde se pueden 
            encontrar objetos y herramientas de la cultura precolombina.</ul>
            </div>,
        resumen: 'Un pack hecho para los cazadores del buen vino',
    },
    {
        id: '8',
        nombre: 'Tilcara',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2500,
        stock: 10,
        imagen: tilcara,
        descripcion: <div><p>
        Sin duda <b>Tilcara</b> es uno de tus principales destinos para conocer la Quebrada:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. De allí,
            comenzaremos el viaje con destino a <b>Tilcara</b>. Antes de conocer la ciudad,
            iremos al <b>Pucará</b>, un sitio arqueológico donde se encontraba una antigua 
            fortaleza. Además podremos visitar el <b>Jardín Botánico de Altura</b>.</ul>
        <ul>Luego, iremos en transporte hacia la entrada de <b>Garganta del Diablo</b>. Allí
            caminaremos unos metros hasta adentrarnos el cerro para conocer las cuevas y llegar a 
            un salto escondido. También tendremos la oportunidad de apreciar una vista única.</ul>
        <ul>De regreso al pueblo, nos detendremos al pie del <b>Cerro La Cruz</b> para realizar un
            pequeño trekking hacia la cima. Desde allí podremos observar a Tilcara rodeada de un 
            bellisimo paisaje.</ul>
        <ul>A continuación, bajaremos directamente al pueblo para tener nuestro almuerzo en uno 
            de los principales restaurant de la Quebrada de Humahuaca: <b>El Nuevo Progreso</b>.
            Ahí mismo, el chef nos deleitara con algunas opciones de menués regionales para afinar
            nuestro paladar.</ul>
        <ul>Para finalizar el tour, tendrás un tiempo libre para recorrer <b>Tilcara</b> a tu gusto.
            Sugerimos que des un paseo por las plazas centrales para conocer la iglesia, el mercado
            central, la feria de artesanías o adentrarte a alguno de los museos.</ul>
            </div>,
        resumen: 'También conocida como la joya de la Quebrada',
    },
    {
        id: '9',
        nombre: 'Uquía',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2500,
        stock: 10,
        imagen: uquia,
        descripcion: <div><p>
        Para conocer <b>Uquía</b>, el pequeño pueblo con increíble riquezas naturales y culturales:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. De allí,
            partiremos con destino a <b>Yacoraite</b>, una comunidad aborigen que nos abrirán 
            sus puertas para conocer su historia y su cultura.</ul>
        <ul>Luego, nos adentraremos hasta el <b>Cerro de la Pollera Coya</b>. Una particular 
            elevación geológica que nos pertirá realizar un pequeño ascenso para observar uno de
            los paisajes más virgenes de la Quebrada de Humahuaca.</ul>
        <ul>De vuelta a la ruta, llegaremos a <b>Uquía</b> donde tendremos la oportunidad de 
            recorrer la pequeña plaza y la iglesia. Además de conocer la historia de este pequeño 
            pueblo, nos detendremos a almorzar típicos platos jujeños para recargar energías.</ul>
        <ul>A continuación, iremos a la <b>Quebrada de las Señoritas</b>, donde haremos un 
            trekking de a través de un colorido recorrido. Caminaremos durante dos horas en un 
            paisaje que varía entre el millón y los tres millones de años de antiguedad, 
            conformadas además por cavernas y grietas tectónicas.</ul>
        <ul>Para finalizar el tour, iremos ruta arriba para conocer el <b>Centro de Arte 
            Guanuco</b> donde conoceremos esta ancestral forma de alfarería. Además de visitar la
            tienda de artesanías, tendremos una rica merienda antes de emprender la vuelta.</ul>
            </div>,
        resumen: 'Un pequeño lugar con inmesas riquezas naturales',
    },
    {
        id: '10',
        nombre: 'Humahuaca',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2800,
        stock: 10,
        imagen: humahuaca,
        descripcion: <div><p>
        Para conocer el centro neurálgico de la Quebrada, te proponemos ir a Humahuaca:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. De allí,
            partiremos directamente a la plaza central de <b>Humahuaca</b>. En este city tour
            conoceremos el pequeño cabildo, la iglesia y el Monumento a los Héroes de la 
            Independencia.</ul>
        <ul>Luego, iremos a tener un almuerzo completo en la peña de <b>Ricardo Vilca</b>, una de 
            las más emblemáticas de la ciudad para conocer su gastronomía y poder escuchar 
            artistas folklóricos locales.</ul>
        <ul>Retomando el recorrido, nos iremos cuesta arriba hacia los cerros para conocer <b>El 
            Hornocal</b>, una majestuoza montaña con minerales de más de 14 colores. Esta
            belleza podremos observala desde dos puntos diferentes.</ul>
        <ul>A la vuelta, tendremos la oportunidad de pararnos en medio de la naturaleza para realizar
            un pequeño trekking por el <b>Valle Escondido</b>. En este mini recorrido podremos 
            conocer la fauna y la flora autóctona de la región, como también conocer la historia
            de los pobladores originarios.</ul>
        <ul>Para finalizar el tour, volveremos al pueblo donde tendremos una merienda norteña a
            orillas del Río Grande. También te daremos tiempo para que recorras el pueblo por tu 
            cuenta y puedas recorrer las tiendas de artesanías.</ul>
            </div>,
        resumen: 'El corazón de la Quebrada abierto a la diversidad',
    },
    {
        id: '11',
        nombre: 'Tres Cruces',
        categoria: 'Jujuy',
        subcategoria: 'Quebrada',
        precio: 2500,
        stock: 10,
        imagen: trescruces,
        descripcion: <div><p>
        El pueblo de <b>Tres Cruces</b> y sus alrededores se convirtieron en un nuevo atractivo:</p>
        <ul>Nos encontraremos a las 8am en la Plaza Belgrano para comenzar el viaje. De allí,
            iremos viajaremos a unos kilometros cerca de nuestro destino para conocer el norte
            de la Quebrada. En este punto, caminaremos a través del cause del <b>Río Grande</b>, 
            hasta su nacimiento, para contemplar su belleza.</ul>
        <ul>Llegaremos al antiguo puente del ferrocarril donde nos esperarán nuestros guías para
            realizar una excursión a cabello a través de la <b>Quebrada Chulín</b>. En este 
            recorrido podremos observar la flora y la fauna silvestre, así como respirar el abierto
            puro de las montañas.</ul>
        <ul>Al final del camino, haremos un breve camino hasta <b>Inca Cueva</b>, una cueva donde
            los antiguos pobladores, los Humahuaca, dejaron su arte grabado en las paredes. Además
            de conocer este hallazgo antropológico, tendrás tiempo para recorrer los cerros, el oasis
            y el Cerro de la Ventana para obtener fotos increíbles.</ul>
        <ul>A continuación, retomaremos camino hacia <b>Tres Cruces</b> donde nos estarán esperando
            con un tradicional asado de campo al pie de los <b>Gigantes Dormidos</b>, una formación
            geológico que puede observarse a simple vista desde la ruta. Solo que lo podremos hacer 
            bien de cerca.</ul>
        <ul>Antes de volver, haremos un trekking más. En transporte iremos al pie de los Gigantes
            y caminaremos a través de estos majestuosos cerros para llegar al <b>Puente del 
            Diablo</b>. Un sendero natural que se encuentra en plena conservación.</ul>
            </div>,
        resumen: 'Lugares desconocidos y naturaleza inexplorada',
    },
    {
        id: '12',
        nombre: 'Abra Pampa',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 2500,
        stock: 10,
        imagen: abrapampa,
        descripcion: <div><p>
        El pueblo de <b>Tres Cruces</b> y sus alrededores se convirtieron en un nuevo atractivo:</p>
        <ul>Nos encontraremos a las 8am en la Plaza Belgrano para comenzar el viaje. De allí,
            iremos viajaremos a unos kilometros cerca de nuestro destino para conocer el norte
            de la Quebrada. En este punto, caminaremos a través del cause del <b>Río Grande</b>, 
            hasta su nacimiento, para contemplar su belleza.</ul>
        <ul>Llegaremos al antiguo puente del ferrocarril donde nos esperarán nuestros guías para
            realizar una excursión a cabello a través de la <b>Quebrada Chulín</b>. En este 
            recorrido podremos observar la flora y la fauna silvestre, así como respirar el abierto
            puro de las montañas.</ul>
        <ul>Al final del camino, haremos un breve camino hasta <b>Inca Cueva</b>, una cueva donde
            los antiguos pobladores, los Humahuaca, dejaron su arte grabado en las paredes. Además
            de conocer este hallazgo antropológico, tendrás tiempo para recorrer los cerros, el oasis
            y el Cerro de la Ventana para obtener fotos increíbles.</ul>
        <ul>A continuación, retomaremos camino hacia <b>Tres Cruces</b> donde nos estarán esperando
            con un tradicional asado de campo al pie de los <b>Gigantes Dormidos</b>, una formación
            geológico que puede observarse a simple vista desde la ruta. Solo que lo podremos hacer 
            bien de cerca.</ul>
        <ul>Antes de volver, haremos un trekking más. En transporte iremos al pie de los Gigantes
            y caminaremos a través de estos majestuosos cerros para llegar al <b>Puente del 
            Diablo</b>. Un sendero natural que se encuentra en plena conservación.</ul>
            </div>,
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '13',
        nombre: 'Casabindo',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 2800,
        stock: 10,
        imagen: casabindo,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '14',
        nombre: 'Cochinoca',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 2800,
        stock: 10,
        imagen: cochinoca,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '15',
        nombre: 'Rinconada',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3000,
        stock: 10,
        imagen: rinconada,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '16',
        nombre: 'Abdon Castro Tolay',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3000,
        stock: 10,
        imagen: abdon,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '17',
        nombre: 'Cusi Cusi',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3500,
        stock: 10,
        imagen: cusicusi,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '18',
        nombre: 'Yavi',
        categoria: 'Jujuy',
        subcategoria: 'Puna',
        precio: 3500,
        stock: 10,
        imagen: yavi,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '19',
        nombre: 'Las Escaleras',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1300,
        stock: 10,
        imagen: lasescaleras,
        descripcion: <div><p>
        A pocos kilometros de la capital, el valle sigue creando destinos turísticos:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. En primer
            lugar, partiremos hasta la ciudad de <b>Palpalá</b> para conocer el pintoresco centro
            de un ciudad con mucha historia industrial y cultural.</ul>
        <ul>Desde este punto, comenzaremos la travesía por las Serranías de Zapla. Cruzaremos el
            Río Grande para llegar <b>Los Blancos</b> donde haremos un pequeño tour a caballo para
            contemplar la flora y la fauna del lugar.</ul>
        <ul>Luego nos adentraremos hasta <b>Las Capillas</b> donde haremos un trekking por caminos
            que combinan la belleza del valle y las yungas. Al finalizar, la comunidad del lugar
            nos esperará para almorzar y compartir sus historias.</ul>
        <ul>A continuación, llegaremos al paraje de <b>Las Escaleras</b> donde encontraremos la 
            paz a través del silencio de las montañas y el agua de las cascádas. Tendremos tiempo
            libre para disfrutar de este maravilloso entorno natural.</ul>
        <ul>De vuelta a la capital, tomaremos otro camino que nos llevará al barrio salvadoreño de
            Alto La Viña. Allí visitaremos el <b>Hotel Alto La Viña</b>, donde tomaremos la merienda
            con una increíble vista al valle donde se encuentra San Salvador.</ul>
            </div>,
        resumen: 'Un enclave totalmente natural entre el valle y las yungas',
    },
    {
        id: '20',
        nombre: 'Ocloyas',
        categoria: 'Jujuy',
        subcategoria: 'Valle',
        precio: 1500,
        stock: 10,
        imagen: ocloyas,
        descripcion: <div><p>
        El paraje de <b>Ocloyas</b> se ubica en un corredor lleno de emprendimientos familiares:</p>
        <ul>Nos encontraremos a las 8:30am en la Plaza Belgrano para comenzar el viaje. De allí,
            al barrio salvadoreño de Los Perales para adentrarnos en el <b>Parque Botánico 
            Municipal</b>. En esta pequeña caminata podremos conocer, a través de nuestro
            guía, las diferencias entre el valle y la yunga jujeña.</ul>
        <ul>Luego continuaremos hasta el paraje <b>Tilquiza</b> donde podremos visitar algunos
            emprendimientos turísticos familiares como la reserva de Tucanes y Parque de Estudio 
            y Reflexión.</ul>
        <ul>Más adelante, pasaremos por algunas cáscadas que empiezan a dar una imagen más 
            selvática de Jujuy. Llegaremos a <b>Corral de Piedras</b> donde descansaremos y 
            almorzaremos en una finca familiar.</ul>
        <ul>Siguiendo la travesía, llegaremos a <b>Ocloyas</b>, en una zona montañosa de clima 
            templado, perteneciente a las Serranías de Zapla. Además de conocer el último pueblo
            del corredor, continuaremos un tramo a caballo y otro tanto a pie para llegar 
            al <b>Angosto de Catre</b>.</ul>
        <ul>De vuelta a la ciudad, nos detendremos antes de llegar para tener una deliciosa 
            merienda en <b>Finca La Colorada</b>, un emprendimiento gastrónomico reconocido por su
            casa de té.</ul>
        </div>,
        resumen: 'Turismo familair a lo largo de las Serranías de Zapla',
    },
    {
        id: '21',
        nombre: 'San Pedro',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 1500,
        stock: 10,
        imagen: sanpedro,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '22',
        nombre: 'Calilegua',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 2000,
        stock: 10,
        imagen: calilegua,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '23',
        nombre: 'San Francisco',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 3000,
        stock: 10,
        imagen: sanfrancisco,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '24',
        nombre: 'Santa Ana',
        categoria: 'Jujuy',
        subcategoria: 'Yungas',
        precio: 3500,
        stock: 10,
        imagen: santaana,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '25',
        nombre: 'San Pedro de Atacama',
        categoria: 'Exterior',
        subcategoria: 'Chile',
        precio: 5000,
        stock: 10,
        imagen: sanpedroatacama,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '26',
        nombre: 'Tupiza',
        categoria: 'Exterior',
        subcategoria: 'Bolivia',
        precio: 5000,
        stock: 10,
        imagen: tupiza,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: '27',
        nombre: 'Bermejo',
        categoria: 'Exterior',
        subcategoria: 'Bolivia',
        precio: 5000,
        stock: 10,
        imagen: bermejo,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
]

export const getTours = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours)
        }, 2000)
    })
}

export const getTourById = (tourId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours.find(tour => tour.id === tourId))
        }, 1000)
    })
}

export const getTourBySubCategory = (subCategoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tours.filter(tour => tour.subcategoria === subCategoryId))
        }, 1000)
    })
}