interface DataShape {
    date: string;
    title: string;
    description: string;
    image: string;
}

const dataNovedades: DataShape[] = [
    {
       date: "15/03/23",
       title: "¡Hablemos de Metroid Prime Remastered!",
       description: "El juego Metroid Prime™ Remastered ya está disponible y podrás descubrir lo que opinan los críticos si miras el video de arriba. Nos parece perfecto si...",
       image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.2000000476837158/c_scale,w_800/ncom/en_US/articles/2023/get-the-scoop-on-metroid-prime-remastered-with-our-rapid-rundown/2250x1266_MetRapidRundown_SP"
    },
    {
        date: "15/03/23",
        title: "¡Nueva información! Descubre cuáles juegos de Game Boy, Super NES y NES fueron agregados para los suscriptores de Nintendo...",
        description: "¿Quieres disfrutar algunos juegos clásicos? Los suscriptores de Nintendo Switch Online obtienen acceso instantáneo a un gran catálogo de juegos...",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.2000000476837158/c_scale,w_800/ncom/en_US/articles/2023/nintendo-switch-online-more-game-boy-super-nes-and-nes-games-are-available-now/2250x1266_NSO_3_2023"
     }
];

export default dataNovedades;