interface DataShape {
    date: string;
    title: string;
    description: string;
    image: string;
}

const dataNovedades: DataShape[] = [
    {
       date: "15/03/23",
       title: "It takes a different perspective to conquer these first-person games",
       description: "If you’ve ever wanted to see in-game worlds through the eyes of a main character, we’ve got a list just for you. In each of the games listed below...",
       image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.2000000476837158/c_scale,w_800/ncom/en_US/articles/2023/it-takes-a-different-perspective-to-conquer-these-first-person-games/2250x1266_FPG_EN"
    },
    {
        date: "15/03/23",
        title: "Give the Super Mario Run game a go with daily unlocks",
        description: "Here we go! To celebrate the release of The Super Mario Bros. Movie, the Super Mario™ Run mobile game is sprinting forward with a fresh update and..",
        image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.2000000476837158/c_scale,w_800/ncom/en_US/articles/2023/mobilenews-give-the-super-mario-run-game-a-go-with-daily-unlocks/SuperMarioRun_20230310"
     }
];

export default dataNovedades;