interface DataShape {
    title: string;
    description: string;
    buttonText: string;
    image: string;
}

const dataTienda: DataShape[] = [
    {
       title: "Tienda de juegos",
       description: "¡Compra, descarga y juega de inmediato!",
       buttonText: "Comprar juegos",
       image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.2000000476837158/c_scale,w_1200/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP"
    },
    {
        title: "Explora las consolas de videojuegos",
        description: "Familia Nintendo Switch",
        buttonText: "Más detalles",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.2000000476837158/c_scale,w_1200/ncom/en_US/switch/site-design-update/switch-family-es"
     }
    
];

export default dataTienda;