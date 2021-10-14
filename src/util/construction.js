
import { db } from "../firebase";

const createStaticPost = async () => {
  return await db.collection("posts").doc().set({
        "Conteudo": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    vulputate odio at purus vulputate, vel cursus magna vehicula. Ut               
                    posuere a erat eget lobortis. Mauris id dui porta, facilisis sem               
                    nec, sagittis eros. Ut eros elit, commodo et justo at, suscipit               
                    auctor massa. Integer consectetur quis mauris et rutrum. Sed               
                    imperdiet tempus nulla, ac euismod dolor molestie gravida. Nunc               
                    mollis ex id dolor congue efficitur.`,
        "Data": null,
        "Imagens": [],
        "Usuario": db.doc("usuários/LxhoblGK0pUSU18HoMnQsdL2Lt93")
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/too-many-requests":
          return {
            error: true,
            type: "default",
            message:
              "Muitas tentativas foram realizadas, tente novamente mais tarde",
          };
        default:
          return { error: false, type: "", message: "" };
      }
    });
};

export { createStaticPost };